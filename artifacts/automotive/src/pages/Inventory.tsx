import React, { useState } from "react";
import { useListCars, useListCarMakes, getListCarsQueryKey } from "@workspace/api-client-react";
import { CarCard } from "../components/CarCard";
import { Link, useSearch } from "wouter";
import { Filter, Search, X, SlidersHorizontal } from "lucide-react";

export function Inventory() {
  const searchString = useSearch();
  const initialParams = Object.fromEntries(new URLSearchParams(searchString));
  const [params, setParams] = useState<Record<string, string>>(initialParams);
  const { data: cars = [], isLoading } = useListCars(params, {
    query: { queryKey: getListCarsQueryKey(params) },
  });
  const { data: makes = [] } = useListCarMakes();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = (key: string, value: string | undefined) => {
    setParams((prev) => {
      const next = { ...prev };
      if (value) {
        next[key] = value;
      } else {
        delete next[key];
      }
      return next;
    });
  };

  const activeFilterCount = Object.keys(params).filter((k) => params[k]).length;

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <h1
            className="text-2xl font-extrabold text-[#111827]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Browse Vehicles
          </h1>
          <p className="text-sm text-[#6B7280] mt-1">
            {isLoading ? "Loading…" : `${cars.length} vehicle${cars.length !== 1 ? "s" : ""} available`}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-8 flex flex-col md:flex-row gap-6 items-start">
        {/* Mobile filter trigger */}
        <button
          className="md:hidden flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-white border border-[#E5E7EB] rounded-xl shadow-sm text-[#374151]"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold text-white bg-[#2563EB]">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Sidebar Filters */}
        <aside
          className={`w-full md:w-60 shrink-0 ${
            isMobileFiltersOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 space-y-6 sticky top-20">
            <div className="flex items-center justify-between">
              <h3
                className="text-sm font-bold text-[#111827]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => setParams({})}
                  className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Clear all
                </button>
              )}
            </div>

            {/* Type */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">
                Type
              </p>
              <div className="flex flex-col gap-1">
                {[
                  { value: undefined, label: "All" },
                  { value: "sell", label: "For Sale" },
                  { value: "rent", label: "For Rent" },
                ].map(({ value, label }) => (
                  <button
                    key={label}
                    onClick={() => handleFilterChange("type", value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      (value === undefined && !params.type) || params.type === value
                        ? "bg-[#EFF6FF] text-[#2563EB] font-semibold"
                        : "text-[#374151] hover:bg-[#F7F8FA]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Make */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">
                Make
              </p>
              <select
                className="w-full bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm text-[#374151] focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none"
                value={params.make || ""}
                onChange={(e) =>
                  handleFilterChange("make", e.target.value || undefined)
                }
              >
                <option value="">All Makes</option>
                {makes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Price */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">
                Max Price
              </p>
              <div className="flex flex-col gap-1">
                {[
                  { value: undefined, label: "Any Price" },
                  { value: "50000", label: "Under $50,000" },
                  { value: "100000", label: "Under $100,000" },
                  { value: "200000", label: "Under $200,000" },
                ].map(({ value, label }) => (
                  <button
                    key={label}
                    onClick={() => handleFilterChange("maxPrice", value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      (value === undefined && !params.maxPrice) || params.maxPrice === value
                        ? "bg-[#EFF6FF] text-[#2563EB] font-semibold"
                        : "text-[#374151] hover:bg-[#F7F8FA]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-80 bg-white animate-pulse rounded-2xl border border-[#E5E7EB]"
                />
              ))}
            </div>
          ) : cars.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl border border-[#E5E7EB]">
              <div className="w-16 h-16 bg-[#F7F8FA] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-[#D1D5DB]" />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                No vehicles found
              </h3>
              <p className="text-sm text-[#6B7280] mb-5">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => setParams({})}
                className="px-5 py-2.5 text-sm font-semibold text-[#2563EB] border border-[#2563EB] rounded-xl hover:bg-blue-50 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
