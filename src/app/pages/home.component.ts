import { CommonModule } from "@angular/common";
import { Component, OnInit, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ApiService } from "../api.service";
import { CarCardComponent } from "../components/car-card.component";
import { HeroSliderComponent } from "../components/hero-slider.component";
import { StatCounterComponent } from "../components/stat-counter.component";
import type { Car, MarketplaceStats } from "../models";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink, CarCardComponent, HeroSliderComponent, StatCounterComponent],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  private readonly api = inject(ApiService);
  readonly collections = ["All", "Luxury", "SUV", "Sedan", "For Rent"];
  readonly activeCollection = signal("All");
  readonly featuredCars = signal<Car[]>([]);
  readonly stats = signal<MarketplaceStats | undefined>(undefined);

  ngOnInit(): void {
    this.api.getFeaturedCars().subscribe((cars) => this.featuredCars.set(cars));
    this.api.getStats().subscribe((stats) => this.stats.set(stats));
  }

  get displayCars(): Car[] {
    const collection = this.activeCollection();
    const cars = this.featuredCars();
    const filtered = cars.filter((car) => {
      if (collection === "All") return true;
      if (collection === "For Rent") return car.type === "rent";
      if (collection === "Luxury") return ["BMW", "Mercedes", "Audi", "Lexus", "Land Rover"].includes(car.make);
      if (collection === "SUV") return car.bodyType === "SUV";
      if (collection === "Sedan") return car.bodyType === "Sedan";
      return true;
    });
    return filtered.length ? filtered : cars;
  }
}
