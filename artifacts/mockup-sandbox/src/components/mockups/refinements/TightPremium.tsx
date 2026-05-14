import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Award,
  Users,
  Star,
  TrendingUp,
  Shield,
  Zap,
  BadgeCheck,
  Heart,
  MessageCircle,
  Fuel,
  Gauge,
  Settings2,
  Lock
} from "lucide-react";

/* ─── dummy data ────────────────────────────────────────── */
const DUMMY_CARS = [
  {
    id: "1",
    make: "BMW",
    model: "M3",
    year: "2023",
    price: 89000,
    monthlyInstallment: 1850,
    mileage: 12000,
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "sell",
    isFeatured: true,
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
  },
  {
    id: "2",
    make: "Mercedes",
    model: "C200",
    year: "2022",
    price: 75000,
    monthlyInstallment: 1560,
    mileage: 8000,
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "sell",
    isFeatured: false,
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80"
  },
  {
    id: "3",
    make: "Audi",
    model: "A4",
    year: "2021",
    price: 69500,
    monthlyInstallment: 1440,
    mileage: 22000,
    fuelType: "Diesel",
    transmission: "Automatic",
    type: "sell",
    isFeatured: false,
    imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80"
  },
  {
    id: "4",
    make: "Toyota",
    model: "Camry",
    year: "2023",
    price: 45000,
    monthlyInstallment: 935,
    mileage: 31000,
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "sell",
    isFeatured: false,
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80"
  },
  {
    id: "5",
    make: "Lexus",
    model: "ES",
    year: "2022",
    price: 68000,
    monthlyInstallment: 1410,
    mileage: 15000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    type: "rent",
    isFeatured: true,
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80"
  },
  {
    id: "6",
    make: "BMW",
    model: "X3",
    year: "2024",
    price: 95000,
    monthlyInstallment: 1970,
    mileage: 9000,
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "sell",
    isFeatured: false,
    imageUrl: "https://images.unsplash.com/photo-1633610682769-af63ec7a26c3?w=600&q=80"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.52, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const COLLECTIONS = ["All", "Luxury", "SUV", "Sedan", "For Rent"] as const;

/* ─── palette tokens ───────────────────────────────────── */
const navy = "#1B2D4F";
const gold = "#C9A24D";
const sand = "#FAF5EE";
const warmWhite = "#FDFCFA";
const border = "#EBE5DC";
const muted = "#726B62";
const text = "#1C1917";
const darkFooter = "#1A1611";

export function TightPremium() {
  const [activeCollection, setActiveCollection] = useState<string>("All");

  const filtered = DUMMY_CARS.filter((car) => {
    if (activeCollection === "All") return true;
    if (activeCollection === "For Rent") return car.type === "rent";
    if (activeCollection === "Luxury")
      return ["BMW", "Mercedes", "Audi", "Lexus"].includes(car.make);
    return true;
  });
  const displayCars = filtered.length ? filtered : DUMMY_CARS;

  return (
    <div className="w-full min-h-screen flex flex-col font-sans" style={{ backgroundColor: warmWhite, color: text }}>
      
      {/* ─── HEADER ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#EBE5DC]">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: navy }}>A</div>
            <span className="font-extrabold text-xl tracking-tight" style={{ fontFamily: "Manrope, sans-serif", color: navy }}>AutoPremier</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a href="#" className="relative py-2 text-[#1C1917]">
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px]" style={{ backgroundColor: gold }} />
            </a>
            <a href="#" className="text-[#726B62] hover:text-[#1C1917] transition-colors py-2">Inventory</a>
            <a href="#" className="text-[#726B62] hover:text-[#1C1917] transition-colors py-2">Financing</a>
            <a href="#" className="text-[#726B62] hover:text-[#1C1917] transition-colors py-2">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white shadow-sm hover:opacity-90 transition-all group" style={{ backgroundColor: navy }}>
              Get Financing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* ─── 1. HERO SLIDER ──────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col justify-center select-none" style={{ minHeight: "580px" }}>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FDFCFA] via-[#FAF5EE] to-[#F5EFE6]" />
        
        {/* Subtle dot-grid pattern */}
        <div className="absolute inset-0 z-0" 
             style={{ 
               backgroundImage: "radial-gradient(rgba(201,162,77,0.06) 1.5px, transparent 1.5px)", 
               backgroundSize: "8px 8px" 
             }} 
        />
        
        {/* Accent glow */}
        <div className="absolute inset-0 pointer-events-none z-0"
             style={{ background: "radial-gradient(ellipse 55% 60% at 72% 45%, rgba(201,162,77,0.10) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-10 pb-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* Left */}
            <div className="flex-1 space-y-5 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EBE5DC] bg-white/70 backdrop-blur-sm text-xs font-semibold text-[#4A4036] shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: gold }} />
                Premium Collection · 2025
                <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: gold }}>
                  15+ vehicles
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22,1,0.36,1] }}
                className="text-6xl lg:text-7xl font-extrabold leading-[1.06] tracking-tight text-[#1C1917]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Drive the <br />
                <span style={{ color: gold }}>Extraordinary</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.22,1,0.36,1] }}
                className="text-[17px] text-[#726B62] leading-relaxed max-w-md"
              >
                Handpicked luxury vehicles from the world's finest brands — delivered to your door across the Gulf.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.22,1,0.36,1] }}
                className="flex flex-wrap gap-3 pt-1"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: gold }}
                >
                  Browse Collection <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-[#4A4036] bg-transparent border border-[#EBE5DC] hover:border-[#C9A24D] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5"
                >
                  Get Financing
                </a>
              </motion.div>
            </div>

            {/* Right */}
            <div className="flex-1 relative flex items-end justify-center lg:self-end" style={{ minHeight: 360 }}>
              <motion.div
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-12 left-2 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(28,25,23,0.10)] border border-[#EBE5DC] z-20"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9E9589] mb-0.5" style={{ color: gold }}>Starting from</p>
                <p className="text-xl font-extrabold text-[#1C1917]" style={{ fontFamily:"Manrope,sans-serif" }}>$45,000</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="absolute top-10 right-2 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(28,25,23,0.10)] border border-[#EBE5DC] z-20"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9E9589] mb-0.5">Installment</p>
                <p className="text-xl font-extrabold text-[#1C1917]" style={{ fontFamily:"Manrope,sans-serif" }}>$890/mo</p>
              </motion.div>

              <motion.img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80"
                alt="Featured car"
                initial={{ opacity: 0, scale: 0.96, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
                className="relative z-10 w-full max-w-[600px] h-auto object-contain drop-shadow-2xl mix-blend-multiply"
                style={{ marginBottom: -2 }}
              />
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 z-20">
            <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold text-[#1C1917] shadow-sm border border-[#EBE5DC]">
              01/03
            </div>
          </div>
        </div>
      </section>
      
      {/* Thin gold rule below hero */}
      <div className="w-full h-[1px]" style={{ backgroundColor: gold, opacity: 0.3 }} />

      {/* ─── 2. STATS STRIP ──────────────────────────────────── */}
      <section style={{ backgroundColor: navy, borderTop: `2px solid ${gold}` }}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { target: "15+", label: "Premium Vehicles", color: "#fff"  },
              { target: "13", label: "For Sale", color: "#fff"  },
              { target: "2", label: "For Rent", color: "#fff"  },
              { target: "1,240+", label: "Happy Clients", color: gold },
            ].map(({ target, label, color }, i) => (
              <div key={label} className={`relative py-9 px-6 text-center flex flex-col justify-center items-center ${i >= 2 ? "hidden md:flex" : ""}`}>
                <div
                  className="text-5xl font-extrabold mb-1 tabular-nums tracking-tight"
                  style={{ fontFamily: "Manrope, sans-serif", color }}
                >
                  {target}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mt-1">{label}</div>
                {i < 3 && (
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 hidden md:block" style={{ backgroundColor: gold, opacity: 0.2 }} />
                )}
                {i === 0 && (
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 md:hidden" style={{ backgroundColor: gold, opacity: 0.2 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT US ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: sand }}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left — text */}
            <div>
              <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5"
                style={{ color: gold }}
              >
                Est. 2019 <span className="w-1 h-1 rounded-full bg-current" /> Dubai, UAE
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
                style={{ fontFamily: "Manrope, sans-serif", color: text }}
              >
                Built for the Gulf's Most{" "}
                <span style={{ color: gold }}>Discerning</span>{" "}
                Buyers
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-lg leading-relaxed mb-10"
                style={{ color: muted }}
              >
                AutoPremier was founded in Dubai with a single belief: buying a premium car should feel as exceptional as driving one. Every vehicle is personally reviewed, every listing is verified, and every transaction is backed by our dedicated team.
              </motion.p>

              {/* Key facts row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {[
                  { icon: MapPin,   label: "Dubai",        sub: "Headquartered" },
                  { icon: Award,    label: "5+ Years",     sub: "Of trust" },
                  { icon: Users,    label: "1.2k+",        sub: "Clients served" },
                  { icon: Star,     label: "4.9/5",        sub: "Rating" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex-1 min-w-[120px] bg-white rounded-xl p-4 shadow-sm">
                    <Icon className="w-5 h-5 mb-2" style={{ color: gold }} />
                    <p className="text-sm font-bold" style={{ color: text, fontFamily: "Manrope, sans-serif" }}>{label}</p>
                    <p className="text-xs mt-0.5" style={{ color: muted }}>{sub}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.28 }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white shadow-md hover:opacity-90 transition-all hover:-translate-y-px"
                  style={{ backgroundColor: navy }}
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right — image mosaic */}
            <div className="relative hidden lg:block">
              {/* Large image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative" style={{ boxShadow: `inset 0 0 0 2px rgba(201,162,77,0.2)` }}>
                <img
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
                  alt="AutoPremier showroom"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating card — Experience */}
              <div
                className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(28,25,23,0.12)] border border-[#EBE5DC]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#F5EFE6]">
                    <TrendingUp className="w-6 h-6" style={{ color: gold }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: muted }}>Growth</p>
                    <p className="text-2xl font-extrabold" style={{ color: text, fontFamily: "Manrope, sans-serif" }}>+240%</p>
                  </div>
                </div>
                <p className="text-sm font-medium" style={{ color: muted }}>Client growth since 2021</p>
              </div>

              {/* Floating card — Rating */}
              <div
                className="absolute -top-5 -right-6 bg-white rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(28,25,23,0.12)] border border-[#EBE5DC]"
              >
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ color: gold, fill: gold }} />
                  ))}
                </div>
                <p className="text-[15px] font-bold" style={{ color: text, fontFamily: "Manrope, sans-serif" }}>4.9 out of 5</p>
                <p className="text-xs mt-0.5" style={{ color: muted }}>800+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURED COLLECTION ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: gold }}>
                Curated Selection
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold" style={{ fontFamily: "Manrope, sans-serif", color: text }}
              >
                Featured Vehicles
              </motion.h2>
            </div>
            <a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold hover:gap-2.5 transition-all" style={{ color: navy }}>
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {COLLECTIONS.map((col) => (
              <button
                key={col}
                onClick={() => setActiveCollection(col)}
                className="px-5 py-2 rounded-full text-sm font-bold border transition-all"
                style={
                  activeCollection === col
                    ? { backgroundColor: navy, color: "#fff", borderColor: navy }
                    : { backgroundColor: "#fff", color: muted, borderColor: border }
                }
              >
                {col}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCars.slice(0, 6).map((car, i) => (
              <motion.div key={car.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group block h-full">
                <div
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(28,25,23,0.12)] hover:-translate-y-1 h-full flex flex-col"
                  style={{ border: `1px solid ${border}` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/2", backgroundColor: "#FAF5EE" }}>
                    <img
                      src={car.imageUrl}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Price Pill Overlaid */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1.5 rounded-full text-white font-extrabold text-sm shadow-md" style={{ backgroundColor: navy, fontFamily: "Manrope, sans-serif" }}>
                        ${car.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                      {car.isFeatured && (
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-white shadow-sm" style={{ backgroundColor: gold }}>
                          Featured
                        </span>
                      )}
                      <span
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm"
                        style={
                          car.type === "sell"
                            ? { backgroundColor: "white", color: navy }
                            : { backgroundColor: "#fff", color: navy, border: `1px solid ${navy}` }
                        }
                      >
                        {car.type === "sell" ? "For Sale" : "For Rent"}
                      </span>
                    </div>

                    {/* Favorite */}
                    <button
                      className="absolute bottom-4 right-4 p-2.5 bg-white/90 hover:bg-white rounded-full backdrop-blur-sm transition-all shadow-sm hover:shadow-md z-10"
                    >
                      <Heart className="w-4 h-4 text-[#726B62]" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: gold }}>{car.year}</p>
                      <h3 className="font-extrabold text-[#1C1917] text-xl leading-tight group-hover:text-[#1B2D4F] transition-colors mb-4"
                        style={{ fontFamily: "Manrope, sans-serif" }}>
                        {car.make} {car.model}
                      </h3>
                    </div>

                    {/* Specs */}
                    <div className="flex items-center pt-4 mb-5" style={{ borderTop: `1px solid #F5EFE6` }}>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <Gauge className="w-4 h-4" style={{ color: "#C5BDB4" }} />
                        <span className="text-[11px] font-bold" style={{ color: "#726B62" }}>{(car.mileage/1000).toFixed(0)}k km</span>
                      </div>
                      <div style={{ width: 1, height: 28, backgroundColor: "#F0EBE3" }} />
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <Fuel className="w-4 h-4" style={{ color: "#C5BDB4" }} />
                        <span className="text-[11px] font-bold capitalize" style={{ color: "#726B62" }}>{car.fuelType}</span>
                      </div>
                      <div style={{ width: 1, height: 28, backgroundColor: "#F0EBE3" }} />
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <Settings2 className="w-4 h-4" style={{ color: "#C5BDB4" }} />
                        <span className="text-[11px] font-bold" style={{ color: "#726B62" }}>{car.transmission === "Automatic" ? "Auto" : "Manual"}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-2 grid grid-cols-[auto_1fr] gap-2">
                      <button className="flex items-center justify-center p-3 rounded-xl text-white transition-colors hover:opacity-90" style={{ backgroundColor: "#25D366" }}>
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold rounded-xl text-white transition-all shadow-sm hover:shadow-md" style={{ backgroundColor: navy }}>
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center hidden lg:block">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold border transition-all hover:-translate-y-px"
              style={{ borderColor: border, color: text }}>
              Browse All Vehicles <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 5. TRUST MARQUEE ────────────────────────────────── */}
      <div className="border-y py-6 overflow-hidden" style={{ borderColor: border, backgroundColor: sand, borderTop: `1px solid rgba(201,162,77,0.15)`, borderBottom: `1px solid rgba(201,162,77,0.15)` }}>
        <div className="flex gap-10 items-center whitespace-nowrap w-max" style={{ animation: "marquee 30s linear infinite" }}>
          {[...Array(3)].map((_, j) => (
             <React.Fragment key={j}>
               {["Gulf's #1 Premium Marketplace", "150-Point Inspection", "Same-Day Financing", "15+ Premium Vehicles", "24/7 WhatsApp Support", "All Nationalities Welcome"].map((item, i) => (
                 <React.Fragment key={i}>
                   <span className="text-base font-bold tracking-wide" style={{ color: text }}>{item}</span>
                   <span style={{ color: gold }}>◆</span>
                 </React.Fragment>
               ))}
             </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>

      {/* ─── 6. WHY US ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: gold }}>
                Why AutoPremier
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ fontFamily: "Manrope, sans-serif", color: text }}
              >
                A Different Kind of{" "}
                <span style={{ color: gold }}>Automotive</span>{" "}
                Experience
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg leading-relaxed max-w-lg" style={{ color: muted }}
            >
              We didn't set out to build another car listing site. We built a platform that respects your time, your intelligence, and your standards.
            </motion.p>
          </div>

          {/* Numbered differentiators */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                icon: Shield,
                title: "Verified, Not Just Listed",
                body: "Every car goes through a rigorous 150-point inspection before it appears on our platform. What you see is exactly what you get — no surprises.",
                color: navy,
                bg: "#EEF1F7",
              },
              {
                n: "02",
                icon: Zap,
                title: "Financing Without the Friction",
                body: "Our digital financing application takes 3 minutes. No paperwork piles, no waiting rooms. Get pre-approved and drive faster.",
                color: gold,
                bg: "#FBF5E8",
              },
              {
                n: "03",
                icon: BadgeCheck,
                title: "Transparent Pricing, Always",
                body: "Every listing shows the full price, monthly installment, and financing terms upfront. We don't believe in surprises at the negotiating table.",
                color: "#5C7C5A",
                bg: "#EDF4EC",
              },
              {
                n: "04",
                icon: Users,
                title: "A Real Team Behind Every Deal",
                body: "Our specialists are available 7 days a week via WhatsApp, phone, or in-person. You're never alone in your buying journey.",
                color: "#7C5A9E",
                bg: "#F3EFF8",
              },
            ].map(({ n, icon: Icon, title, body, color, bg }, i) => (
              <motion.div
                key={n}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative flex gap-6 p-8 rounded-2xl border transition-all duration-300 hover:shadow-[0_12px_40px_rgba(28,25,23,0.08)] hover:-translate-y-1 overflow-hidden"
                style={{ borderColor: border, backgroundColor: "#fff" }}
              >
                {/* Left hover border accent */}
                <div className="absolute top-0 left-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" style={{ backgroundColor: color }} />

                {/* Number watermark */}
                <span
                  className="absolute bottom-4 right-6 text-8xl font-extrabold select-none pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  style={{ fontFamily: "Manrope, sans-serif", color: color, opacity: 0.06, lineHeight: 0.8 }}
                >
                  {n}
                </span>

                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 relative z-10" style={{ backgroundColor: bg }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Manrope, sans-serif", color: text }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: muted }}>{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row — quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-3xl p-10 grid sm:grid-cols-3 gap-10 text-center"
            style={{ backgroundColor: sand, border: `1px solid ${border}` }}
          >
            {[
              { value: "3 min", label: "Average financing application" },
              { value: "150+", label: "Inspection checkpoints per car" },
              { value: "7 days", label: "A week our team is available" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <p className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Manrope, sans-serif", color: navy }}>{value}</p>
                <div className="w-10 h-[2px] mb-4" style={{ backgroundColor: gold }} />
                <p className="text-sm font-semibold" style={{ color: muted }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 7. FINANCING CTA ────────────────────────────────── */}
      <section style={{ backgroundColor: sand }}>
        <div className="container mx-auto px-4 lg:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl text-white px-8 py-16 md:px-16 md:py-20"
            style={{ background: `linear-gradient(135deg, #0F1E35 0%, ${navy} 50%, #243D6B 100%)` }}
          >
            {/* Gold glow slightly more visible */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen"
              style={{ background: "radial-gradient(ellipse 70% 90% at 80% 50%, rgba(201,162,77,0.25) 0%, transparent 70%)" }} />
            
            {/* Gold line accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: gold }} />

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: gold }}>
                Flexible Financing Plans
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Drive Your Dream Car Today
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
                Get pre-approved in minutes. Competitive rates from leading Gulf banks with flexible terms tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg hover:-translate-y-0.5 text-[#1C1917]"
                  style={{ background: "linear-gradient(to right, #D4AB54, #C9A24D)" }}>
                  Apply for Financing <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors">
                  Browse Inventory
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold text-white/60">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C9A24D]" /> Bank-grade security
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C9A24D]" /> SSL encrypted
                </div>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80" 
              className="absolute right-0 bottom-0 w-[450px] opacity-20 mix-blend-luminosity transform translate-x-1/4 translate-y-1/4 pointer-events-none hidden md:block" 
              alt="Decorative car" 
            />
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ backgroundColor: darkFooter }} className="text-white pt-20 pb-10 border-t border-[#C9A24D]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: gold }}>A</div>
                <span className="font-extrabold text-xl tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>AutoPremier</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                The Gulf's trusted marketplace for premium vehicles. Verified listings, transparent pricing, and seamless financing.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Inventory</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">All Vehicles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Luxury Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SUVs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Rent</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Services</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Apply for Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell Your Car</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade-In Value</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>Contact</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#C9A24D]" />
                  <span>Sheikh Zayed Road<br/>Dubai, UAE</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#C9A24D]" />
                  <span>+971 50 123 4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© 2025 AutoPremier. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

    </div>
  );
}
