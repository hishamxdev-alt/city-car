import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "../FloatingWhatsApp";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background font-sans text-foreground">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
