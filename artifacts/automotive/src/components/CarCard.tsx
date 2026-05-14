import React from "react";
import { Link } from "wouter";
import { Heart, MessageCircle, Fuel, Gauge, Settings2, ArrowRight } from "lucide-react";
import { useToggleFavorite, useListFavorites, getListFavoritesQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import type { Car } from "@workspace/api-client-react/src/generated/api.schemas";

export function CarCard({ car }: { car: Car }) {
  const queryClient = useQueryClient();
  const { data: favorites = [] } = useListFavorites();
  const toggleFavorite = useToggleFavorite();

  const isFavorite = favorites.includes(car.id);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite.mutate(
      { data: { carId: car.id } },
      {
        onSuccess: (newFavorites) => {
          queryClient.setQueryData(getListFavoritesQueryKey(), newFavorites);
        },
      }
    );
  };

  return (
    <Link href={`/car/${car.id}`} className="group block h-full">
      <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#F7F8FA]" style={{ aspectRatio: "16/10" }}>
          <img
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
            loading="lazy"
          />
          {/* Gradient overlay at bottom for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges top-left */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {car.isFeatured && (
              <span
                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full text-white"
                style={{ backgroundColor: "#C9A24D" }}
              >
                Featured
              </span>
            )}
            <span
              className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                car.type === "sell"
                  ? "bg-[#2563EB] text-white"
                  : "bg-white text-[#2563EB] border border-[#2563EB]"
              }`}
            >
              {car.type === "sell" ? "For Sale" : "For Rent"}
            </span>
          </div>

          {/* Favorite button */}
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full backdrop-blur-sm transition-all shadow-sm hover:shadow-md"
            aria-label="Toggle favorite"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-[#6B7280]"
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col gap-0">
          {/* Make / Model / Year */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-[#C9A24D] uppercase tracking-wider mb-0.5">
                {car.year}
              </p>
              <h3
                className="font-bold text-[#111827] text-base leading-tight group-hover:text-[#2563EB] transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {car.make} {car.model}
              </h3>
            </div>
            <div className="text-right shrink-0">
              <div
                className="font-extrabold text-[#111827] text-lg leading-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                ${car.price.toLocaleString()}
              </div>
              {car.monthlyInstallment && (
                <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">
                  ~${car.monthlyInstallment.toLocaleString()}/mo
                </div>
              )}
            </div>
          </div>

          {/* Specs row */}
          <div className="flex items-center gap-0 mt-4 pt-4 border-t border-[#F3F4F6]">
            <div className="flex-1 flex flex-col items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-[#9CA3AF]" />
              <span className="text-[11px] text-[#9CA3AF] font-medium">
                {(car.mileage / 1000).toFixed(0)}k km
              </span>
            </div>
            <div className="w-px h-8 bg-[#F3F4F6]" />
            <div className="flex-1 flex flex-col items-center gap-1">
              <Fuel className="w-3.5 h-3.5 text-[#9CA3AF]" />
              <span className="text-[11px] text-[#9CA3AF] font-medium capitalize">
                {car.fuelType}
              </span>
            </div>
            <div className="w-px h-8 bg-[#F3F4F6]" />
            <div className="flex-1 flex flex-col items-center gap-1">
              <Settings2 className="w-3.5 h-3.5 text-[#9CA3AF]" />
              <span className="text-[11px] text-[#9CA3AF] font-medium">
                {car.transmission === "Automatic" ? "Auto" : "Manual"}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(
                  `https://wa.me/971501234567?text=I'm interested in the ${car.make} ${car.model} (${car.year})`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg text-white transition-colors"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </button>
            <span className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold text-[#2563EB] bg-blue-50 rounded-lg group-hover:bg-[#2563EB] group-hover:text-white transition-all">
              View Details
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
