import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ApiService } from "../api.service";
import type { Car } from "../models";

@Component({
  selector: "app-car-card",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./car-card.component.html",
})
export class CarCardComponent implements OnInit {
  @Input({ required: true }) car!: Car;

  private readonly api = inject(ApiService);
  readonly favorites = signal<number[]>([]);

  ngOnInit(): void {
    this.api.getFavorites().subscribe((favorites) => this.favorites.set(favorites));
  }

  get isFavorite(): boolean {
    return this.favorites().includes(this.car.id);
  }

  toggleFavorite(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.api.toggleFavorite(this.car.id).subscribe((favorites) => this.favorites.set(favorites));
  }

  openWhatsApp(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const text = encodeURIComponent(`I'm interested in the ${this.car.make} ${this.car.model} (${this.car.year})`);
    window.open(`https://wa.me/971501234567?text=${text}`, "_blank", "noopener,noreferrer");
  }
}
