import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isArabic, setIsArabic] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileOpen(false), [location]);

  const navLinks = [
    { href: "/",          label: isArabic ? "الرئيسية" : "Home" },
    { href: "/inventory", label: isArabic ? "المركبات" : "Inventory" },
    { href: "/financing", label: isArabic ? "التمويل"  : "Financing" },
    { href: "/contact",   label: isArabic ? "اتصل بنا" : "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_0_#EBE5DC,0_4px_16px_0_rgba(28,25,23,0.06)]"
          : "bg-white border-b border-[#EBE5DC]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-extrabold tracking-tight text-[#1C1917]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Auto<span style={{ color: "#C9A24D" }}>Premier</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location === link.href
                  ? "text-[#1B2D4F] bg-[#EBE5DC]/60 font-semibold"
                  : "text-[#4A4036] hover:text-[#1C1917] hover:bg-[#F5EFE6]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:+971501234567"
            className="hidden lg:flex items-center gap-1.5 text-sm text-[#726B62] hover:text-[#1C1917] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-medium">+971 50 123 4567</span>
          </a>

          <button
            onClick={() => setIsArabic(!isArabic)}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#726B62] border border-[#EBE5DC] rounded-lg hover:border-[#C9A24D] hover:text-[#1C1917] transition-colors"
          >
            {isArabic ? "EN" : "عربي"}
          </button>

          <Link
            href="/financing"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-bold text-white rounded-lg hover:opacity-90 transition-all shadow-sm hover:-translate-y-px"
            style={{ backgroundColor: "#1B2D4F" }}
          >
            {isArabic ? "احصل على تمويل" : "Get Financing"}
          </Link>

          <button
            className="md:hidden p-2 rounded-lg text-[#4A4036] hover:bg-[#F5EFE6] transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-[#EBE5DC] bg-white">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  location === link.href
                    ? "text-[#1B2D4F] bg-[#EBE5DC]/60 font-semibold"
                    : "text-[#4A4036] hover:bg-[#F5EFE6]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-[#EBE5DC] flex items-center gap-2">
              <Link
                href="/financing"
                className="flex-1 text-center py-2.5 text-sm font-bold text-white rounded-xl"
                style={{ backgroundColor: "#1B2D4F" }}
              >
                Get Financing
              </Link>
              <button
                onClick={() => setIsArabic(!isArabic)}
                className="px-3 py-2.5 text-xs font-semibold border border-[#EBE5DC] rounded-xl text-[#726B62]"
              >
                {isArabic ? "EN" : "عربي"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
