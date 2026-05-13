import React, { useState } from "react";
import { useParams } from "wouter";
import { useGetCar, getGetCarQueryKey, useSubmitFinancingApplication, useListCars } from "@workspace/api-client-react";
import { Heart, MessageCircle, ChevronRight, Check } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { CarCard } from "../components/CarCard";

export function CarDetail() {
  const { id } = useParams();
  const carId = Number(id);
  const { data: car, isLoading, error } = useGetCar(carId, { query: { enabled: !!carId, queryKey: getGetCarQueryKey(carId) } });
  const { data: similarCars = [] } = useListCars({ make: car?.make, limit: 3 });
  
  const submitFinancing = useSubmitFinancingApplication();
  const { toast } = useToast();

  const [form, setForm] = useState({ fullName: "", phone: "", email: "", downPayment: "", months: "36" });

  if (isLoading) return <div className="container mx-auto px-4 py-20 text-center">Loading...</div>;
  if (error || !car) return <div className="container mx-auto px-4 py-20 text-center">Car not found.</div>;

  const filteredSimilarCars = similarCars.filter(c => c.id !== carId).slice(0, 3);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    submitFinancing.mutate(
      { data: { ...form, carId: car.id, downPayment: Number(form.downPayment), months: Number(form.months) } },
      {
        onSuccess: () => {
          toast({ title: "Application Submitted", description: "Our team will contact you shortly." });
          setForm({ fullName: "", phone: "", email: "", downPayment: "", months: "36" });
        },
        onError: () => {
          toast({ title: "Error", description: "Failed to submit application.", variant: "destructive" });
        }
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-foreground">Home</Link> <ChevronRight className="w-3 h-3" />
        <Link href="/inventory" className="hover:text-foreground">Inventory</Link> <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">{car.make} {car.model}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-8">
          <div className="aspect-[16/9] bg-secondary rounded-2xl overflow-hidden border border-border">
            <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{car.make} {car.model} {car.year}</h1>
            <p className="text-xl text-primary font-bold">${car.price.toLocaleString()}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div><span className="text-muted-foreground text-sm">Mileage</span><p className="font-medium">{car.mileage.toLocaleString()} km</p></div>
              <div><span className="text-muted-foreground text-sm">Fuel Type</span><p className="font-medium">{car.fuelType}</p></div>
              <div><span className="text-muted-foreground text-sm">Transmission</span><p className="font-medium">{car.transmission}</p></div>
              <div><span className="text-muted-foreground text-sm">Body Type</span><p className="font-medium">{car.bodyType || 'N/A'}</p></div>
            </div>
            {car.description && (
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-bold mb-2">Description</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{car.description}</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Interested?</h2>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/971501234567?text=I'm interested in the ${car.make} ${car.model}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 px-4 rounded-md font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <button className="w-full flex items-center justify-center gap-2 border border-input bg-transparent hover:bg-secondary py-3 px-4 rounded-md font-medium transition-colors text-foreground">
                <Heart className="w-5 h-5" /> Save to Favorites
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Apply for Financing</h2>
            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                <input required type="text" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} className="w-full border border-input rounded-md p-2 text-sm bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border border-input rounded-md p-2 text-sm bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Down Payment ($)</label>
                <input required type="number" value={form.downPayment} onChange={e => setForm({...form, downPayment: e.target.value})} className="w-full border border-input rounded-md p-2 text-sm bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Term</label>
                <select value={form.months} onChange={e => setForm({...form, months: e.target.value})} className="w-full border border-input rounded-md p-2 text-sm bg-background">
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                  <option value="48">48 Months</option>
                  <option value="60">60 Months</option>
                </select>
              </div>
              <button disabled={submitFinancing.isPending} type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md font-medium transition-colors">
                {submitFinancing.isPending ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {filteredSimilarCars.length > 0 && (
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredSimilarCars.map(similarCar => (
              <CarCard key={similarCar.id} car={similarCar} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
