import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, MessageCircle, Heart, Shield, Zap, 
  BadgeCheck, Users, ChevronRight, Star, Menu, X, 
  Fuel, Gauge, Settings2
} from "lucide-react";

const navy = "#1B2D4F";
const gold = "#C9A24D";
const sand = "#FAF5EE";
const warmWhite = "#FDFCFA";
const border = "#EBE5DC";
const muted = "#726B62";
const text = "#1C1917";

const cars = [
  {
    id: 1,
    make: "BMW",
    model: "M3",
    year: "2024",
    price: 89000,
    monthlyInstallment: 1850,
    mileage: 12000,
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "sell",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
  },
  {
    id: 2,
    make: "Mercedes",
    model: "C200",
    year: "2023",
    price: 75000,
    monthlyInstallment: 1560,
    mileage: 8000,
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "sell",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80"
  },
  {
    id: 3,
    make: "Audi",
    model: "A4",
    year: "2023",
    price: 69500,
    monthlyInstallment: 1440,
    mileage: 22000,
    fuelType: "Diesel",
    transmission: "Automatic",
    type: "sell",
    imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80"
  },
  {
    id: 4,
    make: "Toyota",
    model: "Camry",
    year: "2022",
    price: 45000,
    monthlyInstallment: 935,
    mileage: 31000,
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "rent",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80"
  }
];

export function EditorialDepth() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#FDFCFA] text-[#1C1917] font-sans overflow-x-hidden">
      <style>{`
        .font-display { font-family: 'Manrope', 'IBM Plex Sans Arabic', sans-serif; }
        .font-body { font-family: 'Inter', 'IBM Plex Sans Arabic', sans-serif; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FDFCFA]/90 backdrop-blur-md border-b border-[#EBE5DC]">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold font-display tracking-tight text-[#1B2D4F]">
              Auto <span style={{ color: gold, fontSize: "0.8em", verticalAlign: "middle" }}>◆</span> Premier
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {["Home", "Inventory", "About", "Contact"].map((item, i) => (
              <a key={item} href="#" className="text-sm font-semibold text-[#1C1917] hover:text-[#C9A24D] transition-colors relative group">
                {item}
                {i === 0 && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A24D]" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-sm font-semibold flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> <span className="text-[#1C1917]">WhatsApp</span>
            </a>
            <a href="#" className="text-sm font-bold border-2 border-[#1B2D4F] text-[#1B2D4F] px-5 py-2 rounded-none hover:bg-[#1B2D4F] hover:text-white transition-colors">
              Get Financing
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-20 flex items-center bg-gradient-to-b from-[#FAF5EE] to-[#FDFCFA]" style={{ minHeight: "520px" }}>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left: Nav dots */}
            <div className="hidden lg:flex flex-col gap-3 mr-4">
              <div className="w-1 h-8 bg-[#C9A24D] rounded-full"></div>
              <div className="w-1 h-2 bg-[#D6CFC6] rounded-full"></div>
              <div className="w-1 h-2 bg-[#D6CFC6] rounded-full"></div>
            </div>

            {/* Left: Content */}
            <div className="flex-1 max-w-xl">
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: gold }}>
                Premium Collection
              </p>
              <h1 className="text-6xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight mb-6 font-display text-[#1B2D4F]">
                Drive the<br />Extraordinary
              </h1>
              <p className="text-lg text-[#726B62] mb-10 max-w-md leading-relaxed">
                Handpicked luxury vehicles from the world's finest brands. Delivered to your door.
              </p>
              
              <div className="flex flex-col gap-4 max-w-xs">
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B2D4F] text-white text-sm font-bold hover:bg-[#1B2D4F]/90 transition-colors">
                  Browse Collection <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1B2D4F] text-[#1B2D4F] text-sm font-bold hover:bg-[#1B2D4F]/5 transition-colors">
                  Get Financing
                </a>
              </div>
            </div>

            {/* Right: Image & Chips */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80" 
                  alt="Hero Car" 
                  className="w-full h-auto object-cover rounded-sm shadow-2xl drop-shadow-2xl z-10 relative aspect-[4/3]"
                />
                
                {/* Pull Card 1 */}
                <div className="absolute -left-4 lg:-left-12 top-10 bg-white rounded-lg px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-l-[3px] border-[#C9A24D] z-20 min-w-[160px]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#9E9589] mb-1">Starting from</p>
                  <p className="text-xl font-extrabold font-display text-[#1C1917]">$89,000</p>
                </div>

                {/* Pull Card 2 */}
                <div className="absolute -right-4 lg:-right-8 bottom-10 bg-white rounded-lg px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-l-[3px] border-[#1B2D4F] z-20 min-w-[160px]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#9E9589] mb-1">Installment</p>
                  <p className="text-xl font-extrabold font-display text-[#1C1917]">$1,850/mo</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#1B2D4F] text-white py-0 border-t-4 border-[#C9A24D]">
        <div className="container mx-auto px-0 lg:px-8">
          <div className="flex flex-row overflow-x-auto scrollbar-none snap-x lg:flex-nowrap divide-x divide-white/10 items-stretch">
            
            {/* Total Vehicles (Large) */}
            <div className="py-10 px-8 snap-start shrink-0 w-[80vw] lg:w-[35%] flex flex-col justify-center relative">
              <div className="text-5xl font-extrabold font-display mb-2">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Total Vehicles</div>
              <div className="text-sm text-white/80">Curated for the Gulf</div>
              <div className="absolute right-0 inset-y-0 w-px bg-[#C9A24D]/40"></div>
            </div>

            <div className="py-10 px-8 snap-start shrink-0 w-[50vw] lg:w-[15%] flex flex-col justify-center">
              <div className="text-4xl font-extrabold font-display mb-2">13</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">For Sale</div>
            </div>

            <div className="py-10 px-8 snap-start shrink-0 w-[50vw] lg:w-[15%] flex flex-col justify-center">
              <div className="text-4xl font-extrabold font-display mb-2">2</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">For Rent</div>
            </div>

            {/* Happy Clients */}
            <div className="py-10 px-8 snap-start shrink-0 w-[70vw] lg:flex-1 flex flex-col justify-center bg-black/10">
              <div className="text-4xl font-extrabold font-display mb-2 text-[#C9A24D]">1,240+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Happy Clients</div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#C9A24D] text-[#C9A24D]" />)}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-24 lg:py-32 bg-[#FAF5EE]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left: Image */}
            <div className="w-full lg:w-5/12">
              <div className="aspect-[3/4] relative overflow-hidden shadow-2xl">
                <img 
                  src="/hero-car.png" 
                  alt="Dealership" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-125"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" }}
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-10 font-display text-[#1C1917]">
                Built for the Gulf's<br/>
                <em className="not-italic text-[#C9A24D]">Discerning</em><br/>
                Buyers
              </h2>
              
              <div className="text-lg leading-relaxed text-[#726B62] mb-10 max-w-2xl space-y-6">
                <p>
                  AutoPremier was founded in Dubai with a single belief: buying a premium car should feel as exceptional as driving one. We built a platform that combines the trust of a traditional dealership with the transparency and speed of a modern digital experience.
                </p>
                <p>
                  Every vehicle in our marketplace is personally reviewed, every listing is verified, and every transaction is backed by our team.
                </p>
              </div>

              {/* Inline Stats */}
              <div className="flex flex-wrap items-center gap-4 text-lg font-display font-bold text-[#1B2D4F] mb-12">
                <span>Est. 2019</span>
                <span className="w-px h-5 bg-[#C9A24D]"></span>
                <span>Dubai, UAE</span>
                <span className="w-px h-5 bg-[#C9A24D]"></span>
                <span>1,240+ Clients</span>
                <span className="w-px h-5 bg-[#C9A24D]"></span>
                <span>4.9★ Rating</span>
              </div>

              {/* Blockquote Testimonial */}
              <div className="bg-[#F5EFE6] rounded-2xl px-8 py-6 border-l-[3px] border-[#C9A24D] relative">
                <p className="italic text-[#1C1917] font-medium text-lg leading-relaxed mb-4">
                  "The most seamless car buying experience I've ever had. Found my dream M3, applied for financing online, and had the car delivered the next day."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B2D4F] flex items-center justify-center text-white font-bold text-sm">FA</div>
                  <div>
                    <div className="text-sm font-bold text-[#1C1917]">Fahad Al-M.</div>
                    <div className="text-xs text-[#726B62]">Verified Buyer</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="py-24 lg:py-32 bg-[#FDFCFA]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold font-display inline-block relative text-[#1C1917]">
              Our Fleet
              <div className="absolute -bottom-4 left-0 w-12 h-[2px] bg-[#C9A24D]"></div>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {cars.map(car => (
              <div key={car.id} className="group flex flex-col md:flex-row bg-white border border-[#EBE5DC] overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                
                {/* Image Left */}
                <div className="w-full md:w-[40%] relative aspect-square md:aspect-auto">
                  <img src={car.imageUrl} alt={car.make} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm">
                    <Heart className="w-4 h-4 text-[#726B62]" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#1B2D4F] text-white px-4 py-2 text-sm font-bold shadow-lg">
                    ${car.price.toLocaleString()}
                  </div>
                </div>

                {/* Content Right */}
                <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xs font-bold text-[#C9A24D] mb-2">{car.year}</div>
                      <h3 className="text-3xl font-extrabold font-display text-[#1C1917]">{car.make} {car.model}</h3>
                    </div>
                    {car.type === "rent" ? (
                      <span className="border border-[#1B2D4F] text-[#1B2D4F] text-xs font-bold px-3 py-1 uppercase tracking-widest">For Rent</span>
                    ) : (
                      <span className="bg-[#1B2D4F] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">For Sale</span>
                    )}
                  </div>

                  <div className="text-sm font-semibold text-[#726B62] mb-4">
                    ~${car.monthlyInstallment}/mo
                  </div>

                  <div className="flex items-center gap-4 text-sm text-[#726B62] font-medium mb-10 pb-6 border-b border-[#EBE5DC]">
                    <span className="flex items-center gap-1.5"><Gauge className="w-4 h-4 text-[#C9A24D]" /> {(car.mileage/1000).toFixed(0)}k km</span>
                    <span className="w-1 h-1 rounded-full bg-[#D6CFC6]"></span>
                    <span className="flex items-center gap-1.5"><Fuel className="w-4 h-4 text-[#C9A24D]" /> {car.fuelType}</span>
                    <span className="w-1 h-1 rounded-full bg-[#D6CFC6]"></span>
                    <span className="flex items-center gap-1.5"><Settings2 className="w-4 h-4 text-[#C9A24D]" /> {car.transmission === "Automatic" ? "Auto" : "Manual"}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <a href="#" className="flex-1 text-center bg-[#1B2D4F] text-white text-sm font-bold py-3.5 hover:bg-[#1B2D4F]/90 transition-colors">
                      View Details
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] text-sm font-bold py-3 hover:bg-[#25D366]/10 transition-colors">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-block border-b-2 border-[#1B2D4F] text-[#1B2D4F] font-bold text-sm uppercase tracking-widest pb-1 hover:text-[#C9A24D] hover:border-[#C9A24D] transition-colors">
              Explore Full Inventory
            </a>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-[#1C1917] max-w-2xl leading-tight">
              A Different Kind of <span className="text-[#C9A24D] italic font-medium">Automotive</span> Experience
            </h2>
          </div>

          <div className="flex flex-col">
            {[
              { num: "01", icon: Shield, title: "Verified, Not Just Listed", desc: "Every car goes through a rigorous 150-point inspection before it appears on our platform. What you see is exactly what you get — no surprises." },
              { num: "02", icon: Zap, title: "Financing Without the Friction", desc: "Our digital financing application takes 3 minutes. No paperwork piles, no waiting rooms. Get pre-approved and drive faster." },
              { num: "03", icon: BadgeCheck, title: "Transparent Pricing, Always", desc: "Every listing shows the full price, monthly installment, and financing terms upfront. We don't believe in surprises at the negotiating table." },
              { num: "04", icon: Users, title: "A Real Team Behind Every Deal", desc: "Our specialists are available 7 days a week via WhatsApp, phone, or in-person. You're never alone in your buying journey." },
            ].map((item, i) => (
              <div key={item.num} className="group relative py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 border-t border-[#EBE5DC] last:border-b transition-colors">
                
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A24D] transition-all duration-500 group-hover:w-full"></div>

                <div className="text-6xl lg:text-7xl font-display font-extrabold text-[#1B2D4F]/10 md:w-32 shrink-0 tracking-tighter">
                  {item.num}
                </div>
                
                <div className="hidden md:block w-px h-16 bg-[#C9A24D] shrink-0"></div>

                <div className="w-14 h-14 bg-[#C9A24D] flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-extrabold font-display text-[#1C1917] mb-2">{item.title}</h3>
                  <p className="text-[#726B62] leading-relaxed max-w-2xl">{item.desc}</p>
                </div>

                <div className="shrink-0 md:pl-8">
                  <div className="w-10 h-10 rounded-full border border-[#EBE5DC] flex items-center justify-center group-hover:bg-[#1B2D4F] group-hover:border-[#1B2D4F] transition-all">
                    <ArrowRight className="w-4 h-4 text-[#1C1917] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCING CTA */}
      <section className="w-full flex flex-col md:flex-row bg-[#1B2D4F]">
        <div className="w-full md:w-[55%] p-12 md:p-24 flex flex-col justify-center text-white">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-display mb-6 leading-tight">
            Drive Your Dream Car Today
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-lg leading-relaxed">
            Get pre-approved in minutes. Competitive rates from leading Gulf banks with flexible terms tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#C9A24D] text-[#C9A24D] font-bold text-sm hover:bg-[#C9A24D]/10 transition-colors">
              Apply for Financing <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-white font-bold text-sm border border-transparent hover:border-white/20 transition-colors">
              Browse Inventory
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Trusted Banking Partners</p>
            <div className="flex flex-wrap gap-3">
              {["Emirates NBD", "FAB", "ADCB", "Dubai Islamic", "Abu Dhabi Commercial"].map(bank => (
                <span key={bank} className="px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold text-white/70 tracking-wide">
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] relative min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D4F] via-transparent to-transparent z-10 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1917] text-white/80 py-16 border-t-2 border-[#C9A24D]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-extrabold font-display text-white mb-6">
                Auto <span style={{ color: gold, fontSize: "0.8em", verticalAlign: "middle" }}>◆</span> Premier
              </div>
              <p className="max-w-xs text-sm leading-relaxed mb-8">
                The Gulf's most exclusive digital marketplace for premium vehicles. Curated, verified, and delivered.
              </p>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-[#25D366] text-[#25D366] font-bold text-sm hover:bg-[#25D366]/10 transition-colors">
                <MessageCircle className="w-4 h-4" /> 24/7 WhatsApp Support
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-display">Showroom</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">All Vehicles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-display">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-white/50">
            <p>&copy; {new Date().getFullYear()} AutoPremier. All rights reserved.</p>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href="#" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6" />
      </a>

    </div>
  );
}
