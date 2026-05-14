import React from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl font-extrabold text-white mb-1"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Auto<span style={{ color: "#C9A24D" }}>Premier</span>
            </h2>
            <p className="text-white/50 text-sm">Gulf's Premier Automotive Marketplace</p>
          </div>
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-4 lg:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Discover the Gulf's finest selection of luxury and premium vehicles. Transparent pricing, flexible financing, and an experience you'll remember.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div>
          <h4
            className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5"
          >
            Browse
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/inventory", label: "All Vehicles" },
              { href: "/inventory?type=sell", label: "Cars for Sale" },
              { href: "/inventory?type=rent", label: "Cars for Rent" },
              { href: "/financing", label: "Financing" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="hover:text-white cursor-pointer transition-colors">Buy a Car</li>
            <li className="hover:text-white cursor-pointer transition-colors">Rent a Car</li>
            <li className="hover:text-white cursor-pointer transition-colors">Sell Your Car</li>
            <li className="hover:text-white cursor-pointer transition-colors">Car Inspection</li>
            <li className="hover:text-white cursor-pointer transition-colors">Easy Financing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
            Contact
          </h4>
          <ul className="space-y-3.5">
            <li>
              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0 text-[#C9A24D]" />
                +971 50 123 4567
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@autopremier.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-[#C9A24D]" />
                hello@autopremier.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-[#C9A24D] mt-0.5" />
              Sheikh Zayed Road, Dubai, UAE
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} AutoPremier. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <a key={t} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
