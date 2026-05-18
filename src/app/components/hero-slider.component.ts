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
      badge: "Digital car financing",
      headline: ["Choose. Apply.", "Receive your car."],
      sub: "Search verified cars, submit one finance request, and let CityCar coordinate approval, signing, and delivery.",
      cta1: { label: "Start loan request", href: "/financing" },
      cta2: { label: "Search cars", href: "/inventory" },
      accentColor: "#FF9500",
      tag: "48h handover",
      image: "/hero-car.png",
      chip1: { label: "Applications", value: "1,240+" },
      chip2: { label: "Finance routes", value: "50+" },
      bg: "from-[#FFFFFF] via-[#F7F7F7] to-[#EAEAEA]",
    },
    {
      id: 2,
      badge: "Finance request / Fast review",
      headline: ["Approval starts", "before the visit."],
      sub: "Prepare the file from home, compare eligible routes, and avoid repeated paperwork across funding entities.",
      cta1: { label: "Apply online", href: "/financing" },
      cta2: { label: "Talk to advisor", href: "/contact" },
      accentColor: "#27374D",
      tag: "24h response",
      image: "/hero-car.png",
      chip1: { label: "Documents", value: "Guided" },
      chip2: { label: "Approval", value: "24h" },
      bg: "from-[#FFFFFF] via-[#F4F6F7] to-[#EAEAEA]",
    },
    {
      id: 3,
      badge: "Verified stock / GCC ready",
      headline: ["Cars you can", "finance today."],
      sub: "Browse available vehicles by brand, budget, and installment range, then move directly into approval.",
      cta1: { label: "View stock", href: "/inventory" },
      cta2: { label: "Request a car", href: "/contact" },
      accentColor: "#526D82",
      tag: "Verified listings",
      image: "/hero-car.png",
      chip1: { label: "Inspection", value: "150pt" },
      chip2: { label: "Delivery", value: "48h" },
      bg: "from-[#FFFFFF] via-[#F7F4EA] to-[#EAEAEA]",
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
