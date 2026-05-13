import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/inventory", label: "Inventory" },
    { href: "/financing", label: "Financing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Auto<span className="text-[#C9A24D]">Premier</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-secondary-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsArabic(!isArabic)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {isArabic ? "EN" : "AR"}
          </button>
        </div>
      </div>
    </header>
  );
}
