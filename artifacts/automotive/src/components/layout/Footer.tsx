import React from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Twitter } from "lucide-react";

const navy = "#1B2D4F";
const gold  = "#C9A24D";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C1917", color: "#fff" }}>
      {/* Top band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4 lg:px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
              Auto<span style={{ color: gold }}>Premier</span>
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Gulf's Premier Automotive Marketplace</p>
          </div>
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-4 lg:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            Discover the Gulf's finest selection of luxury vehicles. Transparent pricing, flexible financing, and an experience you'll remember.
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Browse</h4>
          <ul className="space-y-3">
            {[
              { href: "/inventory",         label: "All Vehicles"    },
              { href: "/inventory?type=sell",label: "Cars for Sale"  },
              { href: "/inventory?type=rent",label: "Cars for Rent"  },
              { href: "/financing",          label: "Financing"       },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Services</h4>
          <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            {["Buy a Car","Rent a Car","Sell Your Car","Car Inspection","Easy Financing"].map((s) => (
              <li key={s} className="cursor-pointer hover:text-white transition-colors">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Contact</h4>
          <ul className="space-y-3.5">
            {[
              { href: "tel:+971501234567",       Icon: Phone, label: "+971 50 123 4567"       },
              { href: "mailto:hello@autopremier.com", Icon: Mail, label: "hello@autopremier.com" },
            ].map(({ href, Icon, label }) => (
              <li key={label}>
                <a href={href} className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: gold }} />
                  {label}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: gold }} />
              Sheikh Zayed Road, Dubai, UAE
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} AutoPremier. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy","Terms of Use"].map((t) => (
              <a key={t} href="#" className="text-xs transition-colors hover:text-white/60"
                style={{ color: "rgba(255,255,255,0.25)" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
