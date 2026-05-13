import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              Auto<span className="text-[#C9A24D]">Premier</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              The Gulf's leading premium automotive marketplace. Quality, trust, and luxury combined.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/inventory" className="hover:text-primary">Inventory</a></li>
              <li><a href="/financing" className="hover:text-primary">Financing</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Buy a Car</li>
              <li>Rent a Car</li>
              <li>Sell Your Car</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+971 50 123 4567</li>
              <li>hello@autopremier.com</li>
              <li>Sheikh Zayed Road, Dubai</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AutoPremier. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
