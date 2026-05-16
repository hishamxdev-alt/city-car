import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from "@angular/core";

@Component({
  selector: "app-stat-counter",
  standalone: true,
  imports: [CommonModule],
  template: `<span #counter>{{ count.toLocaleString() }}{{ suffix }}</span>`,
})
export class StatCounterComponent implements AfterViewInit, OnDestroy {
  @Input() target = 0;
  @Input() suffix = "";
  @Input() duration = 1600;
  @ViewChild("counter", { static: true }) counter?: ElementRef<HTMLElement>;

  count = 0;
  private observer?: IntersectionObserver;
  private started = false;

  ngAfterViewInit(): void {
    this.observe();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private observe(): void {
    const element = this.counter?.nativeElement;
    if (!element || this.started) return;
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || this.started) return;
        this.started = true;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / this.duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          this.count = Math.round(eased * this.target);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    this.observer.observe(element);
  }
}
