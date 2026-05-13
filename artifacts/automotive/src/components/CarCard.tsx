import React from "react";
import { Link } from "wouter";
import { Heart, Scale, MessageCircle } from "lucide-react";
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
    toggleFavorite.mutate(
      { data: { carId: car.id } },
      {
        onSuccess: (newFavorites) => {
          queryClient.setQueryData(getListFavoritesQueryKey(), newFavorites);
        }
      }
    );
  };

  return (
    <Link href={`/car/${car.id}`} className="group block h-full">
      <div className="bg-card rounded-xl border border-card-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden bg-secondary">
          <img 
            src={car.imageUrl} 
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {car.isFeatured && (
              <span className="bg-[#C9A24D] text-white px-2.5 py-1 text-xs font-semibold rounded-md shadow-sm">
                Featured
              </span>
            )}
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-md shadow-sm ${car.type === 'sell' ? 'bg-blue-600 text-white' : 'bg-white/90 text-blue-800'}`}>
              {car.type === 'sell' ? 'For Sale' : 'For Rent'}
            </span>
          </div>
          <button 
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full backdrop-blur-sm transition-colors shadow-sm"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {car.make} {car.model}
              </h3>
              <p className="text-sm text-muted-foreground">{car.year}</p>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg text-foreground">${car.price.toLocaleString()}</div>
              {car.monthlyInstallment && (
                <div className="text-xs text-muted-foreground">From ${car.monthlyInstallment}/mo</div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col items-center text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mileage</span>
              <span className="text-sm font-medium">{car.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex flex-col items-center text-center px-2 border-x border-border/50">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Fuel</span>
              <span className="text-sm font-medium">{car.fuelType}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Trans</span>
              <span className="text-sm font-medium">{car.transmission}</span>
            </div>
          </div>

          <div className="mt-auto pt-4 flex gap-2">
             <button className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-medium border border-border rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground" onClick={(e) => e.preventDefault()}>
               <Scale className="w-3.5 h-3.5" /> Compare
             </button>
             <a 
               href={`https://wa.me/971501234567?text=I'm interested in the ${car.make} ${car.model}`}
               onClick={(e) => e.stopPropagation()}
               target="_blank" 
               rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-medium bg-[#25D366] text-white rounded hover:bg-[#20BD5A] transition-colors"
             >
               <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
             </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
