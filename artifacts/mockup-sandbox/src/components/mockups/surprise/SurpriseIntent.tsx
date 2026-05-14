import React from 'react';
import { 
  Phone, 
  Globe, 
  Menu, 
  Car, 
  Key, 
  CreditCard, 
  MessageCircle, 
  BadgeCheck, 
  Zap, 
  Heart, 
  Settings, 
  Gauge, 
  Fuel, 
  MapPin, 
  Mail, 
  Instagram, 
  Facebook, 
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

export function SurpriseIntent() {
  const saleCars = CARS.filter(c => [1,2,3,5,6,7].includes(c.id));

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FDFCFA" }}>
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b h-16 px-6 flex items-center justify-between shadow-sm" style={{ borderColor: "#EBE5DC" }}>
        <div className="flex items-center gap-8">
          <div className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>
            Auto<span style={{ color: "#C9A24D" }}>Premier</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: "#1C1917" }}>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Inventory</a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Rentals</a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Financing</a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">About Us</a>
            <a href="#" className="hover:text-[#C9A24D] transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-semibold" style={{ color: "#1C1917" }}>
            <Phone className="w-4 h-4" style={{ color: "#C9A24D" }} />
            +971 50 123 4567
          </div>
          <div className="hidden md:flex items-center gap-1 text-sm font-medium cursor-pointer" style={{ color: "#726B62" }}>
            <Globe className="w-4 h-4" />
            العربية
          </div>
          <button className="hidden md:block px-5 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#1B2D4F" }}>
            Get Financing
          </button>
          <button className="md:hidden p-2 text-[#1C1917]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* CONCIERGE OPENING */}
      <section className="w-full flex items-center justify-center px-6 py-20 min-h-[480px]" style={{ background: "radial-gradient(circle at center, #FDFCFA 0%, #F5EFE6 100%)" }}>
        <div className="max-w-4xl w-full text-center">
          <div style={{ width: "48px", height: "2px", background: "#C9A24D", margin: "0 auto 20px" }} />
          
          <p className="text-2xl font-medium mb-2" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>
            Good morning.
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>
            How can we help you today?
          </h1>
          <p className="text-base mb-12" style={{ color: "#726B62" }}>
            Our specialists are ready. Choose your path below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 text-left">
            {/* CARD 1 */}
            <div className="bg-white border-2 rounded-3xl p-8 flex flex-col min-h-[220px] transition-all hover:-translate-y-1 hover:shadow-lg group" style={{ borderColor: "#EBE5DC" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "#EEF1F7" }}>
                <Car className="w-6 h-6" style={{ color: "#1B2D4F" }} />
              </div>
              <h3 className="text-xl font-extrabold mt-4 mb-2" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Buy a Car</h3>
              <p className="text-sm flex-grow mb-6" style={{ color: "#726B62" }}>
                Browse our 13 vehicles for sale. Transparent pricing, instant financing.
              </p>
              <button className="w-full rounded-xl py-3 text-sm font-bold text-white transition-colors group-hover:bg-opacity-90" style={{ backgroundColor: "#1B2D4F" }}>
                Browse Inventory →
              </button>
            </div>

            {/* CARD 2 (FEATURED) */}
            <div className="border-2 rounded-3xl p-8 flex flex-col min-h-[220px] relative transition-all hover:-translate-y-1 hover:opacity-95 shadow-xl md:-mt-4 md:mb-4" style={{ backgroundColor: "#1B2D4F", borderColor: "#1B2D4F" }}>
              <div className="absolute top-6 right-6 text-[9px] font-bold uppercase px-3 py-1 rounded-full text-white tracking-wider" style={{ backgroundColor: "#C9A24D" }}>
                Popular
              </div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-white/10">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-extrabold mt-4 mb-2 text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>Rent a Car</h3>
              <p className="text-sm flex-grow mb-6 text-white/70">
                2 premium vehicles available for daily, weekly, or monthly rental.
              </p>
              <button className="w-full rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A24D", color: "#1C1917" }}>
                View Rentals →
              </button>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border-2 rounded-3xl p-8 flex flex-col min-h-[220px] transition-all hover:-translate-y-1 hover:bg-[#EEF1F7]" style={{ borderColor: "#EBE5DC" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "#FBF5E8" }}>
                <CreditCard className="w-6 h-6" style={{ color: "#C9A24D" }} />
              </div>
              <h3 className="text-xl font-extrabold mt-4 mb-2" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Get Financing</h3>
              <p className="text-sm flex-grow mb-6" style={{ color: "#726B62" }}>
                Pre-approved in minutes. Competitive rates from Gulf banks. All nationalities.
              </p>
              <button className="w-full rounded-xl py-3 text-sm font-bold border-2 transition-colors bg-white" style={{ borderColor: "#1B2D4F", color: "#1B2D4F" }}>
                Apply Now →
              </button>
            </div>
          </div>

          <div className="max-w-sm mx-auto mt-12 mb-4 h-[1px]" style={{ backgroundColor: "#EBE5DC" }} />
          <p className="text-xs" style={{ color: "#9E9589" }}>
            Not sure? Call us: <a href="#" className="font-semibold hover:underline" style={{ color: "#C9A24D" }}>+971 50 123 4567</a> or <a href="#" className="font-semibold hover:underline" style={{ color: "#C9A24D" }}>WhatsApp</a>
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-8" style={{ backgroundColor: "#1B2D4F" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x divide-white/10 text-center">
            <div className="px-4">
              <div className="text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>15+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Premium Vehicles</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>13</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">For Sale</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>2</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">For Rent</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold mb-1" style={{ fontFamily: "'Manrope', sans-serif", color: "#C9A24D" }}>1,240+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZED SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 className="text-2xl font-extrabold" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Cars for Sale</h2>
            <div className="flex flex-wrap items-center gap-2">
              <button className="px-4 py-1.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "#1B2D4F" }}>All</button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#F5EFE6] text-[#726B62] hover:bg-[#EBE5DC] transition-colors">Under $75k</button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#F5EFE6] text-[#726B62] hover:bg-[#EBE5DC] transition-colors">Luxury</button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#F5EFE6] text-[#726B62] hover:bg-[#EBE5DC] transition-colors">SUV</button>
            </div>
            <a href="#" className="text-sm font-semibold hover:underline" style={{ color: "#1B2D4F" }}>View all 13 →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleCars.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group" style={{ borderColor: "#EBE5DC" }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wider" style={{ backgroundColor: "#1B2D4F" }}>
                    FOR SALE
                  </div>
                  <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1C1917] hover:text-[#C9A24D] transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <img src={car.img} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-xs font-bold mb-1" style={{ color: "#C9A24D" }}>{car.year}</div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>
                    {car.make} {car.model}
                  </h3>
                  <div className="flex items-end gap-2 mb-5">
                    <div className="text-xl font-extrabold" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>
                      ${car.price.toLocaleString()}
                    </div>
                    <div className="text-sm pb-0.5" style={{ color: "#726B62" }}>
                      or ${car.monthly}/mo
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6 text-xs" style={{ color: "#726B62" }}>
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#FDFCFA] border" style={{ borderColor: "#EBE5DC" }}>
                      <Gauge className="w-4 h-4 mb-1 text-[#1B2D4F]" />
                      <span>{Math.round(car.mileage / 1000)}k mi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#FDFCFA] border" style={{ borderColor: "#EBE5DC" }}>
                      <Fuel className="w-4 h-4 mb-1 text-[#1B2D4F]" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#FDFCFA] border" style={{ borderColor: "#EBE5DC" }}>
                      <Settings className="w-4 h-4 mb-1 text-[#1B2D4F]" />
                      <span>{car.trans}</span>
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
                    <button className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="h-11 rounded-xl flex items-center justify-center text-sm font-bold border-2 transition-colors hover:bg-[#F5EFE6]" style={{ borderColor: "#EBE5DC", color: "#1C1917" }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTAL CALLOUT */}
      <section className="w-full py-8 px-6 border-y" style={{ backgroundColor: "#FAF5EE", borderColor: "#EBE5DC" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Looking to rent instead?</h3>
            <p className="text-sm mt-1" style={{ color: "#726B62" }}>2 premium vehicles available from $199/day</p>
          </div>
          <button className="px-6 py-2.5 rounded-xl text-sm font-bold border whitespace-nowrap hover:bg-white transition-colors" style={{ borderColor: "#1B2D4F", color: "#1B2D4F" }}>
            View Rentals →
          </button>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Why clients choose us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border text-center md:text-left flex flex-col items-center md:items-start" style={{ backgroundColor: "#FAF5EE", borderColor: "#EBE5DC" }}>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <BadgeCheck className="w-6 h-6" style={{ color: "#C9A24D" }} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Verified Listings</h4>
              <p className="text-sm" style={{ color: "#726B62" }}>Every vehicle thoroughly inspected and verified before being listed on our platform.</p>
            </div>
            <div className="rounded-2xl p-6 border text-center md:text-left flex flex-col items-center md:items-start" style={{ backgroundColor: "#FAF5EE", borderColor: "#EBE5DC" }}>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <Zap className="w-6 h-6" style={{ color: "#C9A24D" }} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Fast Financing</h4>
              <p className="text-sm" style={{ color: "#726B62" }}>Get pre-approved in as little as 3 minutes from anywhere in the UAE.</p>
            </div>
            <div className="rounded-2xl p-6 border text-center md:text-left flex flex-col items-center md:items-start" style={{ backgroundColor: "#FAF5EE", borderColor: "#EBE5DC" }}>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <MessageCircle className="w-6 h-6" style={{ color: "#25D366" }} />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Manrope', sans-serif", color: "#1C1917" }}>Always Reachable</h4>
              <p className="text-sm" style={{ color: "#726B62" }}>Our concierge team is available via phone and WhatsApp 7 days a week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCING CTA */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left overflow-hidden relative" style={{ background: "linear-gradient(135deg, #1B2D4F 0%, #111D35 100%)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A24D] opacity-10 rounded-full translate-y-1/3 -translate-x-1/4" />
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Drive Your Dream Car Today
              </h2>
              <p className="text-white/80 text-lg mb-0">
                Get instantly pre-approved for competitive financing rates with our trusted partner banks across the UAE.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <button className="px-8 py-4 rounded-xl text-base font-bold shadow-xl hover:scale-105 transition-transform" style={{ backgroundColor: "#C9A24D", color: "#1C1917" }}>
                Apply for Financing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 px-6 text-white" style={{ backgroundColor: "#1C1917" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-extrabold tracking-tight mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Auto<span style={{ color: "#C9A24D" }}>Premier</span>
              </div>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                The UAE's premier destination for luxury and premium vehicles. Buy, sell, or rent with absolute confidence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A24D] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A24D] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A24D] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: "#C9A24D" }}>Vehicles</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Browse Inventory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cars for Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Luxury Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SUVs & Family</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell Your Car</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: "#C9A24D" }}>Services</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Auto Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Car Valuation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Export Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: "#C9A24D" }}>Contact</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0" style={{ color: "#C9A24D" }} />
                  <span>Sheikh Zayed Road, Al Quoz 1, Dubai, United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" style={{ color: "#C9A24D" }} />
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" style={{ color: "#C9A24D" }} />
                  <span>concierge@autopremier.ae</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} AutoPremier. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 shadow-xl w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: "#25D366" }}>
        <MessageCircle className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
