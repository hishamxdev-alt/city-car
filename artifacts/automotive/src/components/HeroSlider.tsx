import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Premium Collection · 2025",
    headline: ["Drive the", "Extraordinary"],
    sub: "Handpicked luxury vehicles from the world's finest brands — delivered to your door across the Gulf.",
    cta1: { label: "Browse Collection", href: "/inventory" },
    cta2: { label: "Get Financing",     href: "/financing" },
    accentColor: "#C9A24D",
    accentBg:    "rgba(201,162,77,0.10)",
    tag: "15+ vehicles",
    image: "/hero-car.png",
    chip1: { label: "Starting from", value: "$45,000" },
    chip2: { label: "Installment",   value: "$890/mo"  },
    bg: "from-[#FDFCFA] via-[#FAF5EE] to-[#F5EFE6]",
  },
  {
    id: 2,
    badge: "Flexible Financing · Fast Approval",
    headline: ["Own Your", "Dream Car"],
    sub: "Pre-approved in minutes. Competitive rates from leading Gulf banks. All nationalities welcome.",
    cta1: { label: "Apply for Financing",  href: "/financing" },
    cta2: { label: "Calculate Payment",    href: "/financing" },
    accentColor: "#1B2D4F",
    accentBg:    "rgba(27,45,79,0.07)",
    tag: "From 2.99% APR",
    image: "/hero-car.png",
    chip1: { label: "Down payment", value: "From 10%" },
    chip2: { label: "Approval",     value: "24 hours" },
    bg: "from-[#FDFCFA] via-[#F0EEF5] to-[#E8E4F0]",
  },
  {
    id: 3,
    badge: "Premium Rental Fleet",
    headline: ["The Ride", "You Deserve"],
    sub: "Premium vehicles available daily, weekly, or monthly. Flexible pickup and delivery across the UAE.",
    cta1: { label: "View Rentals", href: "/inventory?type=rent" },
    cta2: { label: "Contact Us",   href: "/contact"            },
    accentColor: "#5C7C5A",
    accentBg:    "rgba(92,124,90,0.09)",
    tag: "Daily from $199",
    image: "/hero-car.png",
    chip1: { label: "Availability", value: "Instant"   },
    chip2: { label: "Delivery",     value: "Same day"  },
    bg: "from-[#FDFCFA] via-[#F0F5EE] to-[#E8F0E6]",
  },
];

const SLIDE_DURATION = 5000;
const TICK = 50;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(
      () => setProgress((p) => Math.min(p + (TICK / SLIDE_DURATION) * 100, 100)),
      TICK
    );
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    resetProgress();
  }, [resetProgress]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    resetProgress();
  }, [resetProgress]);

  const goTo = useCallback((i: number) => { setCurrent(i); resetProgress(); }, [resetProgress]);

  useEffect(() => {
    resetProgress();
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [resetProgress]);

  useEffect(() => {
    if (paused) { if (intervalRef.current) clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(next, SLIDE_DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, next, current]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden select-none"
      style={{ minHeight: 580 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(ellipse 55% 60% at 72% 45%, ${slide.accentBg} 0%, transparent 70%)` }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16" style={{ minHeight: 580 }}>

          {/* Left */}
          <div className="flex-1 py-16 lg:py-24 space-y-6 max-w-xl">
            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${slide.id}`}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EBE5DC] bg-white/70 backdrop-blur-sm text-xs font-semibold text-[#4A4036] shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: slide.accentColor }} />
                {slide.badge}
                <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: slide.accentColor }}>
                  {slide.tag}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`h-${slide.id}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22,1,0.36,1] }}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.06] tracking-tight text-[#1C1917]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {slide.headline[0]}{" "}<br />
                <span style={{ color: slide.accentColor }}>{slide.headline[1]}</span>
              </motion.h1>
            </AnimatePresence>

            {/* Sub */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${slide.id}`}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.22,1,0.36,1] }}
                className="text-[17px] text-[#726B62] leading-relaxed max-w-md"
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${slide.id}`}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.22,1,0.36,1] }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  href={slide.cta1.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: slide.accentColor }}
                >
                  {slide.cta1.label} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={slide.cta2.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#4A4036] bg-white border border-[#EBE5DC] hover:border-[#C9A24D] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  {slide.cta2.label}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — car + chips */}
          <div className="flex-1 relative flex items-end justify-center lg:self-end" style={{ minHeight: 360 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`c1-${slide.id}`}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-12 left-2 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(28,25,23,0.10)] border border-[#EBE5DC] z-20"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9E9589] mb-0.5">{slide.chip1.label}</p>
                <p className="text-xl font-extrabold" style={{ fontFamily:"Manrope,sans-serif", color: slide.accentColor }}>{slide.chip1.value}</p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`c2-${slide.id}`}
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="absolute top-10 right-2 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(28,25,23,0.10)] border border-[#EBE5DC] z-20"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9E9589] mb-0.5">{slide.chip2.label}</p>
                <p className="text-xl font-extrabold text-[#1C1917]" style={{ fontFamily:"Manrope,sans-serif" }}>{slide.chip2.value}</p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${slide.id}`}
                src={slide.image}
                alt="Featured car"
                initial={{ opacity: 0, scale: 0.96, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: 6 }}
                transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
                className="relative z-10 w-full max-w-[600px] h-auto object-contain drop-shadow-2xl"
                style={{ marginBottom: -2 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="container mx-auto px-4 lg:px-6 flex items-center gap-4">
          <button onClick={prev} className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#EBE5DC] shadow-sm hover:shadow-md transition-all hover:-translate-x-0.5 text-[#4A4036]" aria-label="Previous">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i+1}`}
                className="relative overflow-hidden rounded-full transition-all"
                style={{ width: i===current?32:8, height:8, backgroundColor: i===current ? slide.accentColor : "#D6CFC6", transition:"width 0.3s ease,background-color 0.3s ease" }}
              >
                {i === current && (
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full opacity-30"
                    style={{ backgroundColor:"#fff" }}
                    initial={{ width:"0%" }} animate={{ width:`${progress}%` }} transition={{ duration:0, ease:"linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <button onClick={next} className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#EBE5DC] shadow-sm hover:shadow-md transition-all hover:translate-x-0.5 text-[#4A4036]" aria-label="Next">
            <ChevronRight className="w-4 h-4" />
          </button>

          <span className="ml-auto text-xs font-bold text-[#B0A89E] tabular-nums">
            {String(current+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}
          </span>
        </div>
      </div>
    </section>
  );
}
