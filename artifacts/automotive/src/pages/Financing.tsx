import React, { useState } from "react";
import { useCalculateFinancing } from "@workspace/api-client-react";

export function Financing() {
  const [form, setForm] = useState({ price: "50000", downPayment: "10000", months: "36" });
  const calculate = useCalculateFinancing();
  const [result, setResult] = useState<any>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    calculate.mutate({
      data: {
        price: Number(form.price),
        downPayment: Number(form.downPayment),
        months: Number(form.months),
        interestRate: 4.5
      }
    }, {
      onSuccess: (data) => setResult(data)
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-center">Auto Financing</h1>
      <p className="text-muted-foreground text-center mb-12 text-lg">Calculate your estimated monthly payments and explore your financing options.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Payment Calculator</h2>
          <form onSubmit={handleCalculate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Price ($)</label>
              <input type="number" required value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="w-full border border-input rounded-md p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Down Payment ($)</label>
              <input type="number" required value={form.downPayment} onChange={e => setForm({...form, downPayment: e.target.value})} className="w-full border border-input rounded-md p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Term (Months)</label>
              <select value={form.months} onChange={e => setForm({...form, months: e.target.value})} className="w-full border border-input rounded-md p-2.5">
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
                <option value="48">48 Months</option>
                <option value="60">60 Months</option>
              </select>
            </div>
            <button type="submit" disabled={calculate.isPending} className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:bg-primary/90 transition-colors">
              Calculate Payment
            </button>
          </form>
        </div>

        <div className="bg-secondary/30 border border-border rounded-xl p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-6">Estimated Result</h2>
          {result ? (
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Monthly Payment</div>
                <div className="text-4xl font-bold text-primary">${result.monthlyInstallment.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Total Amount Financed</span>
                  <span className="font-medium">${(Number(form.price) - Number(form.downPayment)).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Total Interest</span>
                  <span className="font-medium">${result.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Term</span>
                  <span className="font-medium">{result.months} Months</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              Enter your details to see estimated monthly payments.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
