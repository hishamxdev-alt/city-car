import React, { useState } from "react";
import { Link } from "wouter";
import { useListFeaturedCars, useGetMarketplaceStats } from "@workspace/api-client-react";
import { CarCard } from "../components/CarCard";
import { HeroSlider } from "../components/HeroSlider";
import { StatCounter } from "../components/StatCounter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  CreditCard,
  Search,
  ChevronRight,
  MapPin,
  Award,
  Shield,
  Zap,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";

/* ─── animation preset ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.52, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── collection tabs ──────────────────────────────────── */
const COLLECTIONS = ["All", "Luxury", "SUV", "Sedan", "For Rent"] as const;
type Collection = (typeof COLLECTIONS)[number];

/* ─── palette tokens (Desert Pearl) ───────────────────── */
const navy  = "#1B2D4F";
const gold  = "#C9A24D";
const sand  = "#FAF5EE";
const warm  = "#F5EFE6";
const border = "#EBE5DC";
const muted  = "#726B62";
const text   = "#1C1917";

export function Home() {
  const { data: featuredCars = [] } = useListFeaturedCars();
  const { data: stats }             = useGetMarketplaceStats();
  const [activeCollection, setActiveCollection] = useState<Collection>("All");

  const filtered = featuredCars.filter((car) => {
    if (activeCollection === "All")    return true;
    if (activeCollection === "For Rent") return car.type === "rent";
    if (activeCollection === "Luxury")
      return ["BMW", "Mercedes", "Audi", "Lexus", "Land Rover"].includes(car.make);
    return true;
  });
  const displayCars = filtered.length ? filtered : featuredCars;

  return (
    <div className="w-full">

      {/* ═══ 1. HERO SLIDER ═══════════════════════════════════ */}
      <HeroSlider />

      {/* ═══ 2. STATS STRIP ═══════════════════════════════════ */}
      <section style={{ backgroundColor: navy }}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { target: stats?.totalCars     ?? 15,   suffix: "+", label: "Premium Vehicles", color: "#fff"  },
              { target: stats?.carsForSale   ?? 13,   suffix: "",  label: "For Sale",          color: "#fff"  },
              { target: stats?.carsForRent   ?? 2,    suffix: "",  label: "For Rent",          color: "#fff"  },
              { target: stats?.happyCustomers?? 1240, suffix: "+", label: "Happy Clients",     color: gold    },
            ].map(({ target, suffix, label, color }, i) => (
              <div key={label} className={`py-9 px-6 text-center ${i >= 2 ? "hidden md:block" : ""}`}>
                <div
                  className="text-4xl font-extrabold mb-1 tabular-nums"
                  style={{ fontFamily: "Manrope, sans-serif", color }}
                >
                  <StatCounter target={target} suffix={suffix} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ABOUT US ══════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: sand }}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — text */}
            <div>
              <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: gold }}
              >
                Our Story
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold leading-tight mb-6"
                style={{ fontFamily: "Manrope, sans-serif", color: text }}
              >
                Built for the Gulf's Most{" "}
                <span style={{ color: gold }}>Discerning</span>{" "}
                Buyers
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-base leading-relaxed mb-5"
                style={{ color: muted }}
              >
                AutoPremier was founded in Dubai with a single belief: buying a premium car should feel as exceptional as driving one. We built a platform that combines the trust of a traditional dealership with the transparency and speed of a modern digital experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-base leading-relaxed mb-8"
                style={{ color: muted }}
              >
                Every vehicle in our marketplace is personally reviewed, every listing is verified, and every transaction is backed by our team — available seven days a week.
              </motion.p>

              {/* Key facts */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  { icon: MapPin,   label: "Dubai, UAE",        sub: "Headquartered" },
                  { icon: Award,    label: "Est. 2019",         sub: "5+ years of trust" },
                  { icon: Users,    label: "1,240+ Clients",    sub: "Served across the Gulf" },
                  { icon: Star,     label: "4.9 / 5.0 Rating",  sub: "Based on 800+ reviews" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-3 p-4 bg-white rounded-2xl border" style={{ borderColor: border }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: warm }}>
                      <Icon className="w-4 h-4" style={{ color: gold }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: text, fontFamily: "Manrope, sans-serif" }}>{label}</p>
                      <p className="text-xs" style={{ color: muted }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.28 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-md hover:opacity-90 transition-all hover:-translate-y-px"
                  style={{ backgroundColor: navy }}
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right — image mosaic */}
            <div className="relative hidden lg:block">
              {/* Large image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_24px_60px_rgba(28,25,23,0.14)]">
                <img
                  src="/hero-car.png"
                  alt="AutoPremier showroom"
                  className="w-full h-full object-cover object-center"
                  style={{ transform: "scale(1.05)" }}
                />
              </div>

              {/* Floating card — Experience */}
              <div
                className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-5 shadow-[0_12px_40px_rgba(28,25,23,0.12)] border"
                style={{ borderColor: border }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: warm }}>
                    <TrendingUp className="w-5 h-5" style={{ color: gold }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: muted }}>Growth</p>
                    <p className="text-xl font-extrabold" style={{ color: text, fontFamily: "Manrope, sans-serif" }}>+240%</p>
                  </div>
                </div>
                <p className="text-xs" style={{ color: muted }}>Client growth since 2021</p>
              </div>

              {/* Floating card — Rating */}
              <div
                className="absolute -top-5 -right-6 bg-white rounded-2xl px-4 py-3 shadow-[0_12px_40px_rgba(28,25,23,0.12)] border"
                style={{ borderColor: border }}
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" style={{ color: gold, fill: gold }} />
                  ))}
                </div>
                <p className="text-sm font-bold" style={{ color: text, fontFamily: "Manrope, sans-serif" }}>4.9 out of 5</p>
                <p className="text-[11px]" style={{ color: muted }}>800+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. FEATURED COLLECTION ═══════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: gold }}>
                Curated Selection
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-extrabold" style={{ fontFamily: "Manrope, sans-serif", color: text }}
              >
                Featured Vehicles
              </motion.h2>
            </div>
            <Link href="/inventory" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: navy }}>
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {COLLECTIONS.map((col) => (
              <button
                key={col}
                onClick={() => setActiveCollection(col)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all"
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

          {/* Mobile: horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none lg:hidden">
            {displayCars.slice(0, 8).map((car) => (
              <div key={car.id} className="snap-start shrink-0" style={{ width: "75vw", maxWidth: 320 }}>
                <CarCard car={car} />
              </div>
            ))}
            <div className="snap-start shrink-0 flex items-center justify-center" style={{ width: "60vw", maxWidth: 260 }}>
              <Link href="/inventory" className="w-full min-h-[280px] flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed text-sm font-bold transition-colors group"
                style={{ borderColor: border, color: muted }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: warm }}>
                  <ArrowRight className="w-5 h-5" />
                </div>
                View All
              </Link>
            </div>
          </div>

          {/* Desktop: 3-col grid */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {displayCars.slice(0, 6).map((car, i) => (
              <motion.div key={car.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center hidden lg:block">
            <Link href="/inventory" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-px"
              style={{ borderColor: border, color: text }}>
              Browse All Vehicles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 5. TRUST MARQUEE ════════════════════════════════ */}
      <div className="border-y py-5 overflow-hidden" style={{ borderColor: border, backgroundColor: sand }}>
        <div className="flex gap-12 items-center whitespace-nowrap w-max" style={{ animation: "marquee 24s linear infinite" }}>
          {[
            "🏆 Gulf's #1 Premium Marketplace",
            "✅ 150-Point Inspection",
            "⚡ Same-Day Financing",
            "🚗 15+ Premium Vehicles",
            "💬 24/7 WhatsApp Support",
            "🌍 All Nationalities Welcome",
            "🏆 Gulf's #1 Premium Marketplace",
            "✅ 150-Point Inspection",
            "⚡ Same-Day Financing",
            "🚗 15+ Premium Vehicles",
            "💬 24/7 WhatsApp Support",
            "🌍 All Nationalities Welcome",
          ].map((item, i) => (
            <span key={i} className="text-sm font-semibold shrink-0" style={{ color: muted }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ═══ 6. WHY US ════════════════════════════════════════ */}
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
                className="text-4xl font-extrabold leading-tight" style={{ fontFamily: "Manrope, sans-serif", color: text }}
              >
                A Different Kind of{" "}
                <span style={{ color: gold }}>Automotive</span>{" "}
                Experience
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base leading-relaxed" style={{ color: muted }}
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
                className="group relative flex gap-6 p-7 rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_32px_rgba(28,25,23,0.08)] hover:-translate-y-1"
                style={{ borderColor: border, backgroundColor: "#fff" }}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-5 right-6 text-6xl font-extrabold select-none pointer-events-none transition-opacity duration-300 opacity-[0.04] group-hover:opacity-[0.07]"
                  style={{ fontFamily: "Manrope, sans-serif", color: text, lineHeight: 1 }}
                >
                  {n}
                </span>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: bg }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Manrope, sans-serif", color: text }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: muted }}>{body}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color }}>
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row — quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 rounded-2xl p-8 grid sm:grid-cols-3 gap-8 text-center"
            style={{ backgroundColor: sand, border: `1px solid ${border}` }}
          >
            {[
              { value: "3 min", label: "Average financing application" },
              { value: "150+", label: "Inspection checkpoints per car" },
              { value: "7 days", label: "A week our team is available" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold mb-1" style={{ fontFamily: "Manrope, sans-serif", color: navy }}>{value}</p>
                <p className="text-sm" style={{ color: muted }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. FINANCING CTA ════════════════════════════════ */}
      <section style={{ backgroundColor: sand }}>
        <div className="container mx-auto px-4 lg:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl text-white px-8 py-16 md:px-16 md:py-20"
            style={{ background: `linear-gradient(135deg, #0F1E35 0%, ${navy} 50%, #243D6B 100%)` }}
          >
            {/* Gold glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,162,77,0.18) 0%, transparent 70%)" }} />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />

            {/* Gold line accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl" style={{ backgroundColor: gold }} />

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: gold }}>
                Flexible Financing Plans
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Drive Your Dream Car Today
              </h2>
              <p className="text-white/70 text-base mb-8 leading-relaxed max-w-lg">
                Get pre-approved in minutes. Competitive rates from leading Gulf banks with flexible terms tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/financing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg hover:-translate-y-px"
                  style={{ backgroundColor: gold, color: "#1C1917" }}>
                  Apply for Financing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/inventory"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors">
                  Browse Inventory
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-5">
                {["No hidden fees", "Fast approval", "Competitive rates", "All nationalities welcome"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-white/60 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: gold }} />
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
