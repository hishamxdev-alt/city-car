import React, { useState } from "react";
import { Link } from "wouter";
import {
  useListFeaturedCars,
  useGetMarketplaceStats,
} from "@workspace/api-client-react";
import { CarCard } from "../components/CarCard";
import { HeroSlider } from "../components/HeroSlider";
import { StatCounter } from "../components/StatCounter";
import { motion } from "framer-motion";
import {
  Car,
  CreditCard,
  Key,
  Tag,
  ShieldCheck,
  GitCompare,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  Clock,
  Zap,
  ChevronRight,
  Search,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const COLLECTIONS = ["All", "Luxury", "SUV", "Sedan", "For Rent"] as const;
type Collection = (typeof COLLECTIONS)[number];

const quickActions = [
  { icon: Car,        label: "Find Your Car",       desc: "Browse full inventory",     href: "/inventory",          color: "#2563EB", bg: "#EFF6FF" },
  { icon: CreditCard, label: "Apply for Financing", desc: "Get pre-approved fast",     href: "/financing",          color: "#C9A24D", bg: "#FFFBEB" },
  { icon: Key,        label: "Rent a Car",           desc: "Daily & weekly rates",      href: "/inventory?type=rent", color: "#059669", bg: "#ECFDF5" },
  { icon: Tag,        label: "Sell Your Car",        desc: "Get the best market value", href: "/contact",            color: "#7C3AED", bg: "#F5F3FF" },
  { icon: ShieldCheck,label: "Car Inspection",       desc: "150-point certified check", href: "/contact",            color: "#DC2626", bg: "#FEF2F2" },
  { icon: GitCompare, label: "Compare Cars",         desc: "Side-by-side comparison",   href: "/inventory",          color: "#0891B2", bg: "#ECFEFF" },
];

export function Home() {
  const { data: featuredCars = [] } = useListFeaturedCars();
  const { data: stats } = useGetMarketplaceStats();
  const [activeCollection, setActiveCollection] = useState<Collection>("All");

  const filteredCars = featuredCars.filter((car) => {
    if (activeCollection === "All") return true;
    if (activeCollection === "For Rent") return car.type === "rent";
    if (activeCollection === "Luxury")
      return ["BMW", "Mercedes", "Audi", "Lexus", "Land Rover"].includes(car.make);
    return true;
  });
  const displayCars = filteredCars.length > 0 ? filteredCars : featuredCars;

  return (
    <div className="w-full">
      {/* ─── HERO SLIDER ─── */}
      <HeroSlider />

      {/* ─── STATS STRIP ─── */}
      <section className="bg-[#111827] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { target: stats?.totalCars ?? 15,       suffix: "+", label: "Total Vehicles",  color: "#fff"     },
              { target: stats?.carsForSale ?? 13,      suffix: "",  label: "For Sale",        color: "#fff"     },
              { target: stats?.carsForRent ?? 2,       suffix: "",  label: "For Rent",        color: "#fff"     },
              { target: stats?.happyCustomers ?? 1240, suffix: "+", label: "Happy Clients",   color: "#C9A24D"  },
            ].map(({ target, suffix, label, color }, i) => (
              <div
                key={label}
                className={`py-9 px-6 text-center ${i >= 2 ? "hidden md:block" : ""}`}
              >
                <div
                  className="text-4xl font-extrabold mb-1 tabular-nums"
                  style={{ fontFamily: "Manrope, sans-serif", color }}
                >
                  <StatCounter target={target} suffix={suffix} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUICK ACTIONS ─── */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A24D] mb-2">
              Everything You Need
            </p>
            <h2
              className="text-2xl font-extrabold text-[#111827]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              What Would You Like to Do?
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map(({ icon: Icon, label, desc, href, color, bg }, i) => (
              <motion.div
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={href}
                  className="group flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-[#E5E7EB] hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <span
                    className="text-sm font-bold text-[#111827] mb-0.5 leading-tight"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {label}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF] leading-snug">{desc}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED COLLECTION ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-2 text-[#C9A24D]"
              >
                Curated Selection
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-extrabold text-[#111827]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Featured Vehicles
              </motion.h2>
            </div>
            <Link
              href="/inventory"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:gap-2.5 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Collection tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {COLLECTIONS.map((col) => (
              <button
                key={col}
                onClick={() => setActiveCollection(col)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  activeCollection === col
                    ? "bg-[#111827] text-white border-[#111827]"
                    : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#D1D5DB] hover:text-[#374151]"
                }`}
              >
                {col}
              </button>
            ))}
          </div>

          {/* Horizontal scroll strip on mobile, grid on desktop */}
          <div className="relative">
            {/* Mobile: horizontal scroll */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none lg:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {displayCars.slice(0, 8).map((car) => (
                <div
                  key={car.id}
                  className="snap-start shrink-0"
                  style={{ width: "75vw", maxWidth: 320 }}
                >
                  <CarCard car={car} />
                </div>
              ))}
              {/* View all card */}
              <div className="snap-start shrink-0 flex items-center justify-center" style={{ width: "60vw", maxWidth: 260 }}>
                <Link
                  href="/inventory"
                  className="w-full h-full min-h-[280px] flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#E5E7EB] text-[#6B7280] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F7F8FA] group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold">View All</span>
                </Link>
              </div>
            </div>

            {/* Desktop: 3-col grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {displayCars.slice(0, 6).map((car, i) => (
                <motion.div
                  key={car.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center hidden lg:block">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-[#E5E7EB] text-[#374151] hover:border-[#111827] hover:text-[#111827] transition-all"
            >
              Browse All Vehicles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-y border-[#E5E7EB] bg-white py-6 overflow-hidden">
        <div className="flex gap-12 items-center animate-[marquee_20s_linear_infinite] whitespace-nowrap w-max">
          {[
            "🏆 Gulf's #1 Premium Marketplace",
            "✅ 150-Point Inspection",
            "⚡ Same-Day Financing Approval",
            "🚗 15+ Premium Vehicles",
            "💬 24/7 WhatsApp Support",
            "🌍 All Nationalities Welcome",
            "🏆 Gulf's #1 Premium Marketplace",
            "✅ 150-Point Inspection",
            "⚡ Same-Day Financing Approval",
            "🚗 15+ Premium Vehicles",
            "💬 24/7 WhatsApp Support",
            "🌍 All Nationalities Welcome",
          ].map((item, i) => (
            <span key={i} className="text-sm font-semibold text-[#6B7280] shrink-0">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#C9A24D]">
              Why AutoPremier
            </p>
            <h2
              className="text-3xl font-extrabold text-[#111827]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              The Smarter Way to Buy &amp; Rent
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Search,    title: "Find Your Match",  body: "Advanced filters and verified listings to find exactly what you're looking for.",        color: "#2563EB", bg: "#EFF6FF" },
              { icon: BadgeCheck,title: "Quality Assured",  body: "Every vehicle undergoes a rigorous 150-point inspection. Only the best make it here.",    color: "#059669", bg: "#ECFDF5" },
              { icon: CreditCard,title: "Easy Financing",   body: "Pre-approved in minutes. Flexible payment plans from leading Gulf banks.",                color: "#C9A24D", bg: "#FFFBEB" },
            ].map(({ icon: Icon, title, body, color, bg }, i) => (
              <motion.div
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-7 rounded-2xl border border-[#E5E7EB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3
                  className="text-lg font-bold text-[#111827] mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{body}</p>
                <div
                  className="mt-5 flex items-center gap-1 text-xs font-semibold"
                  style={{ color }}
                >
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINANCING CTA ─── */}
      <section className="bg-white">
        <div className="container mx-auto px-4 lg:px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl text-white px-8 py-16 md:px-16 md:py-20"
            style={{
              background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,162,77,0.20) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-4">
                Flexible Financing Plans
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Drive Your Dream Car Today
              </h2>
              <p className="text-blue-100 text-base mb-8 leading-relaxed max-w-lg">
                Get pre-approved in minutes. Competitive rates from leading Gulf banks with flexible terms tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/financing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#1D4ED8] bg-white hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Apply for Financing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/inventory"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Browse Inventory
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-5">
                {["No hidden fees", "Fast approval", "Competitive rates", "All nationalities welcome"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-blue-100 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
