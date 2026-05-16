export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  monthlyInstallment?: number | null;
  type: "sell" | "rent" | string;
  mileage: number;
  fuelType: string;
  transmission: string;
  color?: string | null;
  imageUrl: string;
  gallery?: string[];
  bodyType?: string | null;
  isFeatured: boolean;
  description?: string | null;
  specs?: Record<string, string> | null;
}

export interface MarketplaceStats {
  totalCars: number;
  carsForSale: number;
  carsForRent: number;
  totalMakes: number;
  avgPrice: number;
  happyCustomers: number;
}

export interface FinancingResult {
  monthlyInstallment: number;
  totalAmount: number;
  totalInterest: number;
  downPayment: number;
  months: number;
}

export interface FinancingApplication {
  carId?: number;
  fullName: string;
  phone: string;
  email?: string;
  downPayment: number;
  months: number;
}
