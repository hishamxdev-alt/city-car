import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiService } from "../api.service";
import type { FinancingResult } from "../models";

@Component({
  selector: "app-financing",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./financing.component.html",
})
export class FinancingComponent {
  private readonly api = inject(ApiService);
  readonly result = signal<FinancingResult | undefined>(undefined);
  readonly isPending = signal(false);
  readonly form = {
    price: "50000",
    downPayment: "10000",
    months: "36",
  };

  get amountFinanced(): number {
    return Number(this.form.price) - Number(this.form.downPayment);
  }

  calculate(): void {
    this.isPending.set(true);
    this.api
      .calculateFinancing({
        price: Number(this.form.price),
        downPayment: Number(this.form.downPayment),
        months: Number(this.form.months),
        interestRate: 4.5,
      })
      .subscribe((result) => {
        this.result.set(result);
        this.isPending.set(false);
      });
  }
}
