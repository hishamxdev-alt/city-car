import { CommonModule } from "@angular/common";
import { Component, OnInit, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ApiService } from "../api.service";
import { CarCardComponent } from "../components/car-card.component";
import type { Car } from "../models";

@Component({
  selector: "app-car-detail",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CarCardComponent],
  templateUrl: "./car-detail.component.html",
})
export class CarDetailComponent implements OnInit {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);

  readonly car = signal<Car | undefined>(undefined);
  readonly similarCars = signal<Car[]>([]);
  readonly isLoading = signal(true);
  readonly message = signal("");
  readonly isSubmitting = signal(false);
  readonly form = {
    fullName: "",
    phone: "",
    email: "",
    downPayment: "",
    months: "36",
  };

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.api.getCar(id).subscribe((car) => {
      this.car.set(car);
      this.isLoading.set(false);
      if (car) {
        this.api.getCars({ make: car.make, limit: 3 }).subscribe((cars) => {
          this.similarCars.set(cars.filter((item) => item.id !== car.id).slice(0, 3));
        });
      }
    });
  }

  submit(): void {
    const car = this.car();
    if (!car) return;
    this.isSubmitting.set(true);
    this.api
      .submitFinancingApplication({
        carId: car.id,
        fullName: this.form.fullName,
        phone: this.form.phone,
        email: this.form.email,
        downPayment: Number(this.form.downPayment),
        months: Number(this.form.months),
      })
      .subscribe(() => {
        this.message.set("Application submitted. Our team will contact you shortly.");
        this.isSubmitting.set(false);
        this.form.fullName = "";
        this.form.phone = "";
        this.form.email = "";
        this.form.downPayment = "";
        this.form.months = "36";
      });
  }

  whatsappUrl(car: Car): string {
    return `https://wa.me/971501234567?text=${encodeURIComponent(`I'm interested in the ${car.make} ${car.model}`)}`;
  }
}
