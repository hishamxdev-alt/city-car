import React, { useState } from 'react';
import { 
  Search, 
  Car, 
  Key, 
  CreditCard, 
  TrendingUp, 
  Heart, 
  Check, 
  Shield, 
  Zap, 
  Users, 
  ChevronDown,
  Globe,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { motion } from 'framer-motion';

const CARS = [
  { id:1, make:"BMW",       model:"M3",    year:2023, price:89000, monthly:1850, mileage:12000, fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=80" },
  { id:2, make:"Mercedes",  model:"C200",  year:2022, price:75000, monthly:1560, mileage:8000,  fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&q=80" },
  { id:3, make:"Audi",      model:"A4",    year:2023, price:69500, monthly:1440, mileage:22000, fuel:"Diesel",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=700&q=80" },
  { id:4, make:"Toyota",    model:"Camry", year:2022, price:45000, monthly:935,  mileage:31000, fuel:"Petrol",  trans:"Auto", type:"rent", img:"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=700&q=80" },
  { id:5, make:"Lexus",     model:"ES350", year:2023, price:68000, monthly:1410, mileage:15000, fuel:"Hybrid",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1563720223185-11003d516935?w=700&q=80" },
  { id:6, make:"BMW",       model:"X3",    year:2024, price:95000, monthly:1970, mileage:9000,  fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1633610682769-af63ec7a26c3?w=700&q=80" },
  { id:7, make:"Land Rover",model:"Defender",year:2023,price:112000,monthly:2320,mileage:6000, fuel:"Diesel",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=80" },
  { id:8, make:"Mercedes",  model:"S-Class",year:2024,price:145000,monthly:3010,mileage:3000,  fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=700&q=80" },
];

export function SurpriseDiscovery() {
  const [activeFilter, setActiveFilter] = useState("All Vehicles");
  
  const filters = ["All Vehicles", "For Sale", "Under AED 200k", "Luxury", "SUV", "Hybrid/EV"];

  return (
    <div className="min-h-screen bg-[#FDFCFA] text-[#1C1917]" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#EBE5DC] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Auto<span className="text-[#C9A24D]">Premier</span>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#1C1917]">
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Home</a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Inventory</a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Financing</a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#1C1917]">
            <Phone size={16} className="text-[#C9A24D]" />
            <span>800-PREMIER</span>
          </div>
          <button className="flex items-center gap-1 text-sm font-bold text-[#726B62] hover:text-[#1C1917] transition-colors">
            <Globe size={16} />
            <span>AR</span>
          </button>
          <button className="bg-[#1B2D4F] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0f1a2e] transition-colors">
            Get Financing
          </button>
        </div>
      </header>

      {/* HERO — SEARCH COMMAND CENTER */}
      <section 
        className="w-full relative px-6"
        style={{ background: 'linear-gradient(180deg, #FDFCFA 0%, #FAF5EE 100%)', minHeight: '400px' }}
      >
        <div className="max-w-[780px] mx-auto pt-[80px] pb-[60px] flex flex-col items-center">
          <div className="text-[#9E9589] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            Gulf's Premium Automotive Marketplace
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-center mb-3 text-[#1C1917]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Find Your Perfect Car
          </h1>
          <p className="text-base text-[#726B62] text-center mb-8">
            15 curated vehicles. Transparent pricing. Same-day financing.
          </p>

          {/* SEARCH BAR */}
          <div className="w-full h-16 rounded-full bg-white border-2 border-[#EBE5DC] shadow-[0_8px_40px_rgba(28,25,23,0.10)] flex items-center relative z-10 transition-shadow hover:shadow-[0_12px_50px_rgba(28,25,23,0.15)] focus-within:border-[#C9A24D] focus-within:shadow-[0_12px_50px_rgba(201,162,77,0.2)]">
            <Search className="text-[#C9A24D] ml-6 flex-shrink-0" size={24} />
            <input 
              type="text" 
              placeholder="Search by make, model, or keyword..." 
              className="flex-1 h-full bg-transparent border-none outline-none px-4 text-base text-[#1C1917] placeholder:text-[#9E9589]"
            />
            <button className="bg-[#1B2D4F] text-white rounded-full px-6 py-2.5 mr-2 font-bold hover:bg-[#0f1a2e] transition-colors h-12 flex items-center justify-center">
              Search
            </button>
          </div>

          {/* QUICK FILTERS */}
          <div className="mt-6 flex gap-2 flex-wrap justify-center relative z-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm font-medium rounded-full px-4 py-1.5 transition-all ${
                  activeFilter === filter 
                    ? "bg-[#1B2D4F] text-white border border-[#1B2D4F]" 
                    : "bg-white border border-[#EBE5DC] text-[#726B62] hover:border-[#C9A24D] hover:text-[#1C1917]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* BROWSE CATEGORIES */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full relative z-10">
            {[
              { label: "Buy a Car", sub: "Browse inventory", icon: Car },
              { label: "Rent a Car", sub: "Flexible terms", icon: Key },
              { label: "Get Financing", sub: "Pre-approval", icon: CreditCard },
              { label: "Sell Your Car", sub: "Instant offer", icon: TrendingUp },
            ].map((cat, idx) => (
              <button key={idx} className="bg-white rounded-2xl px-5 py-4 border border-[#EBE5DC] flex items-center gap-3 hover:border-[#C9A24D] transition-colors group text-left">
                <div className="w-8 h-8 rounded-lg bg-[#FBF5E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A24D] transition-colors">
                  <cat.icon size={16} className="text-[#C9A24D] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1C1917]">{cat.label}</div>
                  <div className="text-xs text-[#726B62]">{cat.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE RESULTS SECTION */}
      <div className="w-full h-px bg-[#C9A24D]/30" />
      <section className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm font-medium text-[#726B62]">15 vehicles found</div>
          <div className="flex items-center gap-2 text-sm font-medium text-[#1C1917] cursor-pointer hover:text-[#C9A24D] transition-colors">
            Sort: Featured <ChevronDown size={16} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARS.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl border border-[#EBE5DC] overflow-hidden group hover:shadow-[0_8px_30px_rgba(28,25,23,0.08)] transition-all hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F5EFE6]">
                <img src={car.img} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  {car.type === 'sell' ? (
                    <span className="bg-[#1B2D4F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      For Sale
                    </span>
                  ) : (
                    <span className="bg-white/90 backdrop-blur border border-[#1B2D4F] text-[#1B2D4F] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      For Rent
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#726B62] hover:text-red-500 transition-colors shadow-sm">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <div className="text-[11px] font-bold text-[#C9A24D] uppercase tracking-wider mb-1">
                  {car.year}
                </div>
                <div className="text-base font-bold text-[#1C1917] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {car.make} {car.model}
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <div className="text-xl font-extrabold text-[#1C1917]">
                    AED {car.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-[#9E9589] font-medium mb-1">
                    / AED {car.monthly.toLocaleString()}/mo
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-y border-[#EBE5DC]/60 mb-4">
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <span className="text-[10px] font-bold text-[#9E9589] uppercase tracking-wider">Mileage</span>
                    <span className="text-xs font-semibold text-[#1C1917]">{car.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="w-px h-6 bg-[#EBE5DC]/60" />
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <span className="text-[10px] font-bold text-[#9E9589] uppercase tracking-wider">Fuel</span>
                    <span className="text-xs font-semibold text-[#1C1917]">{car.fuel}</span>
                  </div>
                  <div className="w-px h-6 bg-[#EBE5DC]/60" />
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <span className="text-[10px] font-bold text-[#9E9589] uppercase tracking-wider">Trans</span>
                    <span className="text-xs font-semibold text-[#1C1917]">{car.trans}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 border border-[#EBE5DC] text-[#1C1917] font-semibold text-sm py-2.5 rounded-xl hover:border-[#1C1917] transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 bg-[#25D366] text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-[#1ebd5a] transition-colors flex items-center justify-center gap-2">
                    <Phone size={14} /> WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="w-full md:w-auto md:px-12 py-3 border border-[#EBE5DC] rounded-xl text-sm font-semibold text-[#726B62] hover:border-[#C9A24D] hover:text-[#1C1917] transition-colors bg-white">
            Load More Vehicles
          </button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-[#1B2D4F] py-4 w-full overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-white/70">
          <span className="flex items-center gap-1.5"><Check size={14} className="text-[#C9A24D]" /> 150-Point Inspection</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-1.5"><Check size={14} className="text-[#C9A24D]" /> Same-Day Financing</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-1.5"><Check size={14} className="text-[#C9A24D]" /> All Nationalities Welcome</span>
          <span className="hidden lg:inline text-white/20">|</span>
          <span className="flex items-center gap-1.5"><Check size={14} className="text-[#C9A24D]" /> 7-Day Support</span>
          <span className="hidden lg:inline text-white/20">|</span>
          <span className="flex items-center gap-1.5"><Check size={14} className="text-[#C9A24D]" /> Verified Listings Only</span>
        </div>
      </div>

      {/* WHY US SECTION */}
      <section className="bg-[#FAF5EE] py-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-[#1C1917]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Why Buyers Trust AutoPremier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-[#EBE5DC]">
              <div className="w-10 h-10 rounded-xl bg-[#FBF5E8] flex items-center justify-center mb-4">
                <Shield size={20} className="text-[#C9A24D]" />
              </div>
              <h3 className="text-base font-bold text-[#1C1917] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Verified, Not Just Listed</h3>
              <p className="text-sm text-[#726B62] leading-relaxed">
                Every single car on our platform passes a rigorous 150-point inspection before it reaches you.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#EBE5DC]">
              <div className="w-10 h-10 rounded-xl bg-[#FBF5E8] flex items-center justify-center mb-4">
                <Zap size={20} className="text-[#C9A24D]" />
              </div>
              <h3 className="text-base font-bold text-[#1C1917] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Financing in Minutes</h3>
              <p className="text-sm text-[#726B62] leading-relaxed">
                Apply completely online and get pre-approved before you even visit the showroom.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#EBE5DC]">
              <div className="w-10 h-10 rounded-xl bg-[#FBF5E8] flex items-center justify-center mb-4">
                <Users size={20} className="text-[#C9A24D]" />
              </div>
              <h3 className="text-base font-bold text-[#1C1917] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Real People, Real Support</h3>
              <p className="text-sm text-[#726B62] leading-relaxed">
                Our automotive specialists are available 7 days a week via WhatsApp to guide you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCING CTA BANNER */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div 
          className="rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #0F1E35, #1B2D4F)' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#C9A24D]" />
          
          <div className="relative z-10 md:max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Drive Your Dream Car Today
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Experience transparent pricing, competitive rates, and a seamless approval process tailored to your needs. All nationalities welcome.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button className="w-full sm:w-auto bg-[#C9A24D] text-[#1C1917] font-bold px-8 py-4 rounded-xl hover:bg-[#d4b060] transition-colors whitespace-nowrap shadow-lg">
              Apply for Financing
            </button>
            <button className="w-full sm:w-auto border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap">
              Browse Inventory
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1917] pt-16 pb-8 px-6 border-t border-white/10 text-white/70">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="text-2xl font-black tracking-tight text-white mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Auto<span className="text-[#C9A24D]">Premier</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Gulf's premium automotive marketplace. Discover curated luxury vehicles with transparent pricing and instant financing.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A24D] hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A24D] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A24D] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Inventory</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">All Vehicles</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Luxury Collection</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">SUVs & Crossovers</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Electric & Hybrid</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Sell Your Car</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Car Financing</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Car Valuation</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Extended Warranty</a></li>
              <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Insurance Quotes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A24D] mt-0.5" />
                <span>Sheikh Zayed Road,<br/>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9A24D]" />
                <span className="font-semibold text-white">800-PREMIER</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C9A24D]" />
                <span>hello@autopremier.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>© {new Date().getFullYear()} AutoPremier Marketplace. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
