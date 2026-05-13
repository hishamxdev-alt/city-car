import React, { useState } from "react";
import { useListCars, useListCarMakes, getListCarsQueryKey } from "@workspace/api-client-react";
import { CarCard } from "../components/CarCard";
import { Link, useLocation } from "wouter";
import { Filter, Search } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

export function Inventory() {
  const [params, setParams] = useState<any>({});
  const { data: cars = [], isLoading } = useListCars(params, { query: { queryKey: getListCarsQueryKey(params) } });
  const { data: makes = [] } = useListCarMakes();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = (key: string, value: string | undefined) => {
    setParams((prev: any) => {
      const newParams = { ...prev };
      if (value) {
        newParams[key] = value;
      } else {
        delete newParams[key];
      }
      return newParams;
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-start">
      {/* Mobile filter toggle */}
      <button 
        className="md:hidden flex items-center gap-2 font-medium bg-white border border-input rounded-md px-4 py-2"
        onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
      >
        <Filter className="w-4 h-4" /> Filters
      </button>

      {/* Sidebar Filters */}
      <aside className={`w-full md:w-64 shrink-0 bg-card border border-border rounded-lg p-6 space-y-8 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Type</h3>
          <div className="space-y-2">
            {['sell', 'rent', 'all'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="type" 
                  value={type} 
                  checked={params.type === type || (!params.type && type === 'all')}
                  onChange={(e) => handleFilterChange('type', e.target.value === 'all' ? undefined : e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Make</h3>
          <select 
            className="w-full bg-transparent border border-input rounded-md p-2 text-sm focus:ring-1 focus:ring-ring"
            value={params.make || ""}
            onChange={(e) => handleFilterChange('make', e.target.value || undefined)}
          >
            <option value="">All Makes</option>
            {makes.map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Max Price</h3>
          <input 
            type="number" 
            placeholder="e.g. 50000"
            className="w-full bg-transparent border border-input rounded-md p-2 text-sm focus:ring-1 focus:ring-ring"
            value={params.maxPrice || ""}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value || undefined)}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Vehicles ({cars.length})</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-80 bg-secondary/50 animate-pulse rounded-xl border border-border"></div>
            ))}
          </div>
        ) : cars.length === 0 ? (
          <div className="text-center py-20 bg-card border border-border rounded-xl">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium text-foreground">No vehicles found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => setParams({})}
              className="mt-6 text-primary hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
