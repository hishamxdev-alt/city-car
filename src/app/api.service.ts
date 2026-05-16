import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { fallbackCars, fallbackStats } from "./mock-data";
import type { Car, FinancingApplication, FinancingResult, MarketplaceStats } from "./models";

@Injectable({ providedIn: "root" })
export class ApiService {
  private readonly http = inject(HttpClient);

  getCars(filters: Record<string, string | number | undefined> = {}): Observable<Car[]> {
    let params = new HttpParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params = params.set(key, String(value));
      }
    });

    return this.http.get<Car[]>("/api/cars", { params }).pipe(
      catchError(() => of(this.filterCars(fallbackCars, filters))),
    );
  }

  getFeaturedCars(): Observable<Car[]> {
    return this.http.get<Car[]>("/api/cars/featured").pipe(
      catchError(() => of(fallbackCars.filter((car) => car.isFeatured))),
    );
  }

  getCar(id: number): Observable<Car | undefined> {
    return this.http.get<Car>(`/api/cars/${id}`).pipe(
      map((car) => car ?? fallbackCars.find((item) => item.id === id)),
      catchError(() => of(fallbackCars.find((item) => item.id === id))),
    );
  }

  getMakes(): Observable<string[]> {
    return this.http.get<string[]>("/api/cars/makes").pipe(
      catchError(() => of([...new Set(fallbackCars.map((car) => car.make))].sort())),
    );
  }

  getStats(): Observable<MarketplaceStats> {
    return this.http.get<MarketplaceStats>("/api/stats").pipe(catchError(() => of(fallbackStats)));
  }

  getFavorites(): Observable<number[]> {
    return this.http.get<number[]>("/api/favorites").pipe(catchError(() => of(this.localFavorites())));
  }

  toggleFavorite(carId: number): Observable<number[]> {
    return this.http.post<number[]>("/api/favorites", { carId }).pipe(
      catchError(() => {
        const favorites = new Set(this.localFavorites());
        if (favorites.has(carId)) {
          favorites.delete(carId);
        } else {
          favorites.add(carId);
        }
        const next = Array.from(favorites);
        localStorage.setItem("autopremier:favorites", JSON.stringify(next));
        return of(next);
      }),
    );
  }

  calculateFinancing(data: {
    price: number;
    downPayment: number;
    months: number;
    interestRate?: number;
  }): Observable<FinancingResult> {
    return this.http.post<FinancingResult>("/api/financing/calculate", data).pipe(
      catchError(() => of(this.calculateLocally(data))),
    );
  }

  submitFinancingApplication(data: FinancingApplication): Observable<unknown> {
    return this.http.post("/api/financing", data).pipe(catchError(() => of({ ok: true })));
  }

  private filterCars(cars: Car[], filters: Record<string, string | number | undefined>): Car[] {
    return cars.filter((car) => {
      if (filters["type"] && filters["type"] !== "all" && car.type !== filters["type"]) return false;
      if (filters["make"] && !car.make.toLowerCase().includes(String(filters["make"]).toLowerCase())) {
        return false;
      }
      if (filters["maxPrice"] && car.price > Number(filters["maxPrice"])) return false;
      if (filters["minPrice"] && car.price < Number(filters["minPrice"])) return false;
      return true;
    });
  }

  private localFavorites(): number[] {
    const value = localStorage.getItem("autopremier:favorites");
    if (!value) return [];
    try {
      return JSON.parse(value) as number[];
    } catch {
      return [];
    }
  }

  private calculateLocally(data: {
    price: number;
    downPayment: number;
    months: number;
    interestRate?: number;
  }): FinancingResult {
    const principal = data.price - data.downPayment;
    const monthlyRate = (data.interestRate ?? 4.5) / 100 / 12;
    const monthlyInstallment =
      monthlyRate === 0
        ? Math.round(principal / data.months)
        : Math.round(
            (principal * (monthlyRate * Math.pow(1 + monthlyRate, data.months))) /
              (Math.pow(1 + monthlyRate, data.months) - 1),
          );
    const totalAmount = monthlyInstallment * data.months + data.downPayment;
    return {
      monthlyInstallment,
      totalAmount,
      totalInterest: totalAmount - data.price,
      downPayment: data.downPayment,
      months: data.months,
    };
  }
}
