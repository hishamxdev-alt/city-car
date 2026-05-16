import { CommonModule } from "@angular/common";
import { Component, HostListener, signal } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  readonly isArabic = signal(false);
  readonly isMobileOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly year = new Date().getFullYear();

  constructor(router: Router) {
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isMobileOpen.set(false);
    });
  }

  @HostListener("window:scroll")
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleLanguage(): void {
    this.isArabic.update((value) => !value);
    document.documentElement.dir = this.isArabic() ? "rtl" : "ltr";
  }
}
