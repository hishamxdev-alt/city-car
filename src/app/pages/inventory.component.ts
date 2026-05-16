import { CommonModule } from "@angular/common";
import { Component, OnInit, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";
import { CarCardComponent } from "../components/car-card.component";
import type { Car } from "../models";

@Component({
  selector: "app-inventory",
  standalone: true,
  imports: [CommonModule, CarCardComponent],
  templateUrl: "./inventory.component.html",
})
export class InventoryComponent implements OnInit {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);

  readonly cars = signal<Car[]>([]);
  readonly makes = signal<string[]>([]);
  readonly isLoading = signal(true);
  readonly isMobileFiltersOpen = signal(false);
  readonly params = signal<Record<string, string>>({});

  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => {
      this.params.set(Object.fromEntries(Object.entries(query).map(([key, value]) => [key, String(value)])));
      this.loadCars();
    });
    this.api.getMakes().subscribe((makes) => this.makes.set(makes));
  }

  get activeFilterCount(): number {
    return Object.values(this.params()).filter(Boolean).length;
  }

  updateFilter(key: string, value: string): void {
    const next = { ...this.params() };
    if (value) {
      next[key] = value;
    } else {
      delete next[key];
    }
    this.params.set(next);
    this.loadCars();
  }

  clearFilters(): void {
    this.params.set({});
    this.loadCars();
  }

  private loadCars(): void {
    this.isLoading.set(true);
    this.api.getCars(this.params()).subscribe((cars) => {
      this.cars.set(cars);
      this.isLoading.set(false);
    });
  }
}
