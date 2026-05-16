import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

interface Slide {
  id: number;
  badge: string;
  headline: [string, string];
  sub: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
  accentColor: string;
  tag: string;
  image: string;
  chip1: { label: string; value: string };
  chip2: { label: string; value: string };
  bg: string;
}

@Component({
  selector: "app-hero-slider",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./hero-slider.component.html",
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  readonly slides: Slide[] = [
    {
      id: 1,
      badge: "Premium Collection · 2025",
      headline: ["Drive the", "Extraordinary"],
      sub: "Handpicked luxury vehicles from the world's finest brands, delivered to your door across the Gulf.",
      cta1: { label: "Browse Collection", href: "/inventory" },
      cta2: { label: "Get Financing", href: "/financing" },
      accentColor: "#C9A24D",
      tag: "15+ vehicles",
      image: "/hero-car.png",
      chip1: { label: "Starting from", value: "$45,000" },
      chip2: { label: "Installment", value: "$890/mo" },
      bg: "from-[#FDFCFA] via-[#FAF5EE] to-[#F5EFE6]",
    },
    {
      id: 2,
      badge: "Flexible Financing · Fast Approval",
      headline: ["Own Your", "Dream Car"],
      sub: "Pre-approved in minutes. Competitive rates from leading Gulf banks. All nationalities welcome.",
      cta1: { label: "Apply for Financing", href: "/financing" },
      cta2: { label: "Calculate Payment", href: "/financing" },
      accentColor: "#1B2D4F",
      tag: "From 2.99% APR",
      image: "/hero-car.png",
      chip1: { label: "Down payment", value: "From 10%" },
      chip2: { label: "Approval", value: "24 hours" },
      bg: "from-[#FDFCFA] via-[#F0EEF5] to-[#E8E4F0]",
    },
    {
      id: 3,
      badge: "Premium Rental Fleet",
      headline: ["The Ride", "You Deserve"],
      sub: "Premium vehicles available daily, weekly, or monthly. Flexible pickup and delivery across the UAE.",
      cta1: { label: "View Rentals", href: "/inventory" },
      cta2: { label: "Contact Us", href: "/contact" },
      accentColor: "#5C7C5A",
      tag: "Daily from $199",
      image: "/hero-car.png",
      chip1: { label: "Availability", value: "Instant" },
      chip2: { label: "Delivery", value: "Same day" },
      bg: "from-[#FDFCFA] via-[#F0F5EE] to-[#E8F0E6]",
    },
  ];
  readonly current = signal(0);
  readonly paused = signal(false);
  readonly progress = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  private progressTimer?: ReturnType<typeof setInterval>;

  get slide(): Slide {
    return this.slides[this.current()] ?? this.slides[0];
  }

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  next(): void {
    this.current.update((index) => (index + 1) % this.slides.length);
    this.resetProgress();
  }

  prev(): void {
    this.current.update((index) => (index - 1 + this.slides.length) % this.slides.length);
    this.resetProgress();
  }

  goTo(index: number): void {
    this.current.set(index);
    this.resetProgress();
  }

  setPaused(value: boolean): void {
    this.paused.set(value);
    value ? this.stopTimer() : this.startTimer();
  }

  private start(): void {
    this.startTimer();
    this.resetProgress();
  }

  private stop(): void {
    this.stopTimer();
    if (this.progressTimer) clearInterval(this.progressTimer);
  }

  private startTimer(): void {
    this.stopTimer();
    this.timer = setInterval(() => this.next(), 5000);
  }

  private stopTimer(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private resetProgress(): void {
    this.progress.set(0);
    if (this.progressTimer) clearInterval(this.progressTimer);
    this.progressTimer = setInterval(() => {
      this.progress.update((value) => Math.min(value + 1, 100));
    }, 50);
  }
}
