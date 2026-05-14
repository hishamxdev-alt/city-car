import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  useListFeaturedCars,
  useGetMarketplaceStats,
  useListCarMakes,
} from "@workspace/api-client-react";
import { CarCard } from "../components/CarCard";
import { motion } from "framer-motion";
import {
  Search,
  Car,
  CreditCard,
  Key,
  Tag,
  ShieldCheck,
  GitCompare,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Clock,
  BadgeCheck,
  ChevronRight,
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

export function Home() {
  const [, setLocation] = useLocation();
  const { data: featuredCars = [] } = useListFeaturedCars();
  const { data: stats } = useGetMarketplaceStats();
  const { data: makes = [] } = useListCarMakes();

  const [searchParams, setSearchParams] = useState({
    make: "",
    type: "",
    maxPrice: "",
  });
  const [activeCollection, setActiveCollection] = useState<Collection>("All");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchParams.make) params.append("make", searchParams.make);
    if (searchParams.type) params.append("type", searchParams.type);
    if (searchParams.maxPrice) params.append("maxPrice", searchParams.maxPrice);
    setLocation(`/inventory?${params.toString()}`);
  };

  const filteredCars = featuredCars.filter((car) => {
    if (activeCollection === "All") return true;
    if (activeCollection === "For Rent") return car.type === "rent";
    if (activeCollection === "Luxury")
      return ["BMW", "Mercedes", "Audi", "Lexus", "Land Rover"].includes(car.make);
    if (activeCollection === "SUV")
      return car.bodyType === "SUV" || car.model.toLowerCase().includes("x") || car.model.toLowerCase().includes("suv");
    if (activeCollection === "Sedan") return true;
    return true;
  });

  const displayCars = filteredCars.length > 0 ? filteredCars : featuredCars;

  const quickActions = [
    {
      icon: Car,
      label: "Find Your Car",
      desc: "Browse our full inventory",
      href: "/inventory",
      color: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      icon: CreditCard,
      label: "Apply for Financing",
      desc: "Get pre-approved fast",
      href: "/financing",
      color: "#C9A24D",
      bg: "#FFFBEB",
    },
    {
      icon: Key,
      label: "Rent a Car",
      desc: "Daily & weekly rates",
      href: "/inventory?type=rent",
      color: "#059669",
      bg: "#ECFDF5",
    },
    {
      icon: Tag,
      label: "Sell Your Car",
      desc: "Get the best market value",
      href: "/contact",
      color: "#7C3AED",
      bg: "#F5F3FF",
    },
    {
      icon: ShieldCheck,
      label: "Car Inspection",
      desc: "150-point certified check",
      href: "/contact",
      color: "#DC2626",
      bg: "#FEF2F2",
    },
    {
      icon: GitCompare,
      label: "Compare Cars",
      desc: "Side-by-side comparison",
      href: "/inventory",
      color: "#0891B2",
      bg: "#ECFEFF",
    },
  ];

  return (
    <div className="w-full">
      {/* ───── HERO ───── */}
      <section className="relative bg-white overflow-hidden pt-4 pb-0">
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, #EFF6FF 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[560px]">
          {/* Left — text + search */}
          <div className="flex-1 py-12 lg:py-20 space-y-7 z-10 max-w-xl">
            {/* Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-xs font-semibold text-[#374151] shadow-sm"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#C9A24D" }}
              />
              Gulf's #1 Premium Automotive Marketplace
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#111827]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Premium Cars for{" "}
              <span style={{ color: "#C9A24D" }}>Extraordinary</span>{" "}
              Journeys
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[17px] text-[#4B5563] leading-relaxed"
            >
              Discover the Gulf's finest selection of luxury and premium
              vehicles — transparent pricing, effortless financing, and
              delivery to your door.
            </motion.p>

            {/* Search bar */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <form
                onSubmit={handleSearch}
                className="flex flex-col sm:flex-row gap-0 bg-white rounded-xl border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.07)] overflow-hidden"
              >
                <select
                  className="flex-1 min-w-0 px-4 py-3.5 text-sm bg-transparent border-0 focus:ring-0 text-[#374151] border-r border-[#E5E7EB] outline-none appearance-none cursor-pointer"
                  value={searchParams.make}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, make: e.target.value })
                  }
                >
                  <option value="">All Makes</option>
                  {makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
                <select
                  className="flex-1 min-w-0 px-4 py-3.5 text-sm bg-transparent border-0 focus:ring-0 text-[#374151] border-r border-[#E5E7EB] outline-none appearance-none cursor-pointer"
                  value={searchParams.type}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, type: e.target.value })
                  }
                >
                  <option value="">Buy or Rent</option>
                  <option value="sell">Buy</option>
                  <option value="rent">Rent</option>
                </select>
                <select
                  className="flex-1 min-w-0 px-4 py-3.5 text-sm bg-transparent border-0 focus:ring-0 text-[#374151] outline-none appearance-none cursor-pointer"
                  value={searchParams.maxPrice}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      maxPrice: e.target.value,
                    })
                  }
                >
                  <option value="">Max Budget</option>
                  <option value="50000">Under $50,000</option>
                  <option value="100000">Under $100,000</option>
                  <option value="200000">Under $200,000</option>
                </select>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-sm text-white transition-colors"
                  style={{ backgroundColor: "#2563EB" }}
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </form>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: BadgeCheck, label: "Verified Listings" },
                { icon: Clock, label: "Same-Day Response" },
                { icon: Zap, label: "Instant Financing" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#6B7280]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#C9A24D]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — hero car + floating chips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative flex items-end justify-center lg:self-end"
            style={{ minHeight: 380 }}
          >
            {/* Floating spec chip — Price */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute top-10 left-4 bg-white rounded-xl px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-[#F3F4F6] z-20"
            >
              <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Starting from</div>
              <div className="text-lg font-extrabold text-[#111827]" style={{ fontFamily: "Manrope, sans-serif" }}>$45,000</div>
            </motion.div>

            {/* Floating spec chip — Rating */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              className="absolute top-8 right-0 bg-white rounded-xl px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-[#F3F4F6] z-20 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFFBEB" }}>
                <Star className="w-4 h-4" style={{ color: "#C9A24D", fill: "#C9A24D" }} />
              </div>
              <div>
                <div className="text-sm font-bold text-[#111827]">4.9 / 5.0</div>
                <div className="text-[10px] text-[#9CA3AF] font-medium">1,240+ reviews</div>
              </div>
            </motion.div>

            {/* Floating spec chip — Verified */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="absolute bottom-24 right-2 bg-white rounded-xl px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-[#F3F4F6] z-20 flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-semibold text-[#374151]">150-Point Inspected</span>
            </motion.div>

            <img
              src="/hero-car.png"
              alt="Premium Car"
              className="relative z-10 w-full max-w-[600px] h-auto object-contain drop-shadow-2xl"
              style={{ marginBottom: "-2px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ───── STATS STRIP ───── */}
      <section className="bg-[#111827] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: stats?.totalCars ?? 0, suffix: "+", label: "Total Vehicles", color: "#fff" },
              { value: stats?.carsForSale ?? 0, suffix: "", label: "For Sale", color: "#fff" },
              { value: stats?.carsForRent ?? 0, suffix: "", label: "For Rent", color: "#fff" },
              { value: stats?.happyCustomers ?? 0, suffix: "+", label: "Happy Clients", color: "#C9A24D" },
            ].map(({ value, suffix, label, color }, i) => (
              <div key={label} className={`py-8 px-6 text-center ${i >= 2 ? "hidden md:block" : ""}`}>
                <div
                  className="text-4xl font-extrabold mb-1 tabular-nums"
                  style={{ fontFamily: "Manrope, sans-serif", color }}
                >
                  {value.toLocaleString()}{suffix}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── QUICK ACTIONS ───── */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2
              className="text-2xl font-extrabold text-[#111827]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              What Would You Like to Do?
            </h2>
            <p className="text-[#6B7280] text-sm mt-2">
              Everything you need, just one tap away
            </p>
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
                    className="text-sm font-bold text-[#111827] mb-0.5"
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

      {/* ───── FEATURED COLLECTION ───── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#C9A24D" }}
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
              View All Vehicles <ArrowRight className="w-4 h-4" />
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

          {/* Car grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="mt-10 text-center">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-[#E5E7EB] text-[#374151] hover:border-[#111827] hover:text-[#111827] transition-all"
            >
              Browse All Vehicles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── WHY CHOOSE US ───── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#C9A24D" }}
            >
              Why AutoPremier
            </p>
            <h2
              className="text-3xl font-extrabold text-[#111827]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              The Smarter Way to Buy & Rent
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Find Your Match",
                body: "Browse our extensive collection of verified premium vehicles with advanced filters to find exactly what you're looking for.",
                color: "#2563EB",
                bg: "#EFF6FF",
              },
              {
                icon: BadgeCheck,
                title: "Quality Assured",
                body: "Every vehicle undergoes a rigorous 150-point inspection. Only the best make it to our marketplace.",
                color: "#059669",
                bg: "#ECFDF5",
              },
              {
                icon: CreditCard,
                title: "Easy Financing",
                body: "Get pre-approved in minutes. Flexible payment plans from leading Gulf banks tailored to your budget.",
                color: "#C9A24D",
                bg: "#FFFBEB",
              },
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
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold" style={{ color }}>
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FINANCING CTA ───── */}
      <section className="py-0 bg-white">
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
            {/* Background decoration */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,162,77,0.20) 0%, transparent 70%)",
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
                Get pre-approved for financing in minutes. Competitive rates from leading Gulf banks, flexible terms tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/financing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#1D4ED8] bg-white hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Apply for Financing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/inventory"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Browse Inventory
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-5">
                {[
                  "No hidden fees",
                  "Fast approval",
                  "Competitive rates",
                  "All nationalities welcome",
                ].map((item) => (
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
