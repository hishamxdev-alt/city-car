import React from "react";
import { Link } from "wouter";
import { Heart, MessageCircle, Fuel, Gauge, Settings2, ArrowRight } from "lucide-react";
import { useToggleFavorite, useListFavorites, getListFavoritesQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import type { Car } from "@workspace/api-client-react/src/generated/api.schemas";

const navy  = "#1B2D4F";
const gold  = "#C9A24D";
const border = "#EBE5DC";

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
      { onSuccess: (f) => queryClient.setQueryData(getListFavoritesQueryKey(), f) }
    );
  };

  return (
    <Link href={`/car/${car.id}`} className="group block h-full">
      <div
        className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(28,25,23,0.12)] hover:-translate-y-1 h-full flex flex-col"
        style={{ border: `1px solid ${border}` }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/10", backgroundColor: "#FAF5EE" }}>
          <img
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {car.isFeatured && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full text-white" style={{ backgroundColor: gold }}>
                Featured
              </span>
            )}
            <span
              className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full"
              style={
                car.type === "sell"
                  ? { backgroundColor: navy, color: "#fff" }
                  : { backgroundColor: "#fff", color: navy, border: `1px solid ${navy}` }
              }
            >
              {car.type === "sell" ? "For Sale" : "For Rent"}
            </span>
          </div>

          {/* Favorite */}
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full backdrop-blur-sm transition-all shadow-sm hover:shadow-md"
          >
            <Heart className={`w-3.5 h-3.5 transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-[#726B62]"}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Year / Name / Price */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: gold }}>{car.year}</p>
              <h3 className="font-bold text-[#1C1917] text-base leading-tight group-hover:text-[#1B2D4F] transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}>
                {car.make} {car.model}
              </h3>
            </div>
            <div className="text-right shrink-0">
              <div className="font-extrabold text-[#1C1917] text-lg leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                ${car.price.toLocaleString()}
              </div>
              {car.monthlyInstallment && (
                <div className="text-[11px] font-medium mt-0.5" style={{ color: "#9E9589" }}>
                  ~${car.monthlyInstallment.toLocaleString()}/mo
                </div>
              )}
            </div>
          </div>

          {/* Specs */}
          <div className="flex items-center mt-4 pt-4" style={{ borderTop: `1px solid #F5EFE6` }}>
            <div className="flex-1 flex flex-col items-center gap-1">
              <Gauge className="w-3.5 h-3.5" style={{ color: "#C5BDB4" }} />
              <span className="text-[11px] font-medium" style={{ color: "#9E9589" }}>{(car.mileage/1000).toFixed(0)}k km</span>
            </div>
            <div style={{ width: 1, height: 28, backgroundColor: "#F0EBE3" }} />
            <div className="flex-1 flex flex-col items-center gap-1">
              <Fuel className="w-3.5 h-3.5" style={{ color: "#C5BDB4" }} />
              <span className="text-[11px] font-medium capitalize" style={{ color: "#9E9589" }}>{car.fuelType}</span>
            </div>
            <div style={{ width: 1, height: 28, backgroundColor: "#F0EBE3" }} />
            <div className="flex-1 flex flex-col items-center gap-1">
              <Settings2 className="w-3.5 h-3.5" style={{ color: "#C5BDB4" }} />
              <span className="text-[11px] font-medium" style={{ color: "#9E9589" }}>{car.transmission === "Automatic" ? "Auto" : "Manual"}</span>
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
                  "_blank", "noopener,noreferrer"
                );
              }}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </button>
            <span className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-lg transition-all"
              style={{ color: navy, backgroundColor: "#EEF1F7" }}
              // on hover: group-hover handles via parent
            >
              View Details <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
