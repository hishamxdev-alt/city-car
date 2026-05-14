import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

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

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: isArabic ? "الرئيسية" : "Home" },
    { href: "/inventory", label: isArabic ? "المركبات" : "Inventory" },
    { href: "/financing", label: isArabic ? "التمويل" : "Financing" },
    { href: "/contact", label: isArabic ? "اتصل بنا" : "Contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#E5E7EB,0_4px_12px_0_rgba(0,0,0,0.05)]"
            : "bg-white border-b border-[#E5E7EB]"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 shrink-0">
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Auto
              <span className="text-[#C9A24D]">Premier</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "text-[#2563EB] bg-blue-50"
                    : "text-[#374151] hover:text-[#111827] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Phone */}
            <a
              href="tel:+971501234567"
              className="hidden lg:flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">+971 50 123 4567</span>
            </a>

            {/* Language toggle */}
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#6B7280] border border-[#E5E7EB] rounded-md hover:border-[#D1D5DB] hover:text-[#374151] transition-colors"
            >
              {isArabic ? "EN" : "عربي"}
            </button>

            {/* CTA */}
            <Link
              href="/financing"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-colors shadow-sm"
            >
              {isArabic ? "احصل على تمويل" : "Get Financing"}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-[#374151] hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-[#E5E7EB] bg-white">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    location === link.href
                      ? "text-[#2563EB] bg-blue-50"
                      : "text-[#374151] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-[#E5E7EB] flex items-center gap-2">
                <Link
                  href="/financing"
                  className="flex-1 text-center py-2.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg"
                >
                  Get Financing
                </Link>
                <button
                  onClick={() => setIsArabic(!isArabic)}
                  className="px-3 py-2.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#6B7280]"
                >
                  {isArabic ? "EN" : "عربي"}
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
