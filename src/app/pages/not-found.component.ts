import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-not-found",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto px-4 py-24 text-center">
      <h1 class="text-4xl font-bold mb-3 font-display">Page not found</h1>
      <p class="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
      <a routerLink="/" class="primary-button">Back to Home</a>
    </div>
  `,
})
export class NotFoundComponent {}
