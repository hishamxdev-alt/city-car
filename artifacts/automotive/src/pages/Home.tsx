import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useListFeaturedCars, useGetMarketplaceStats, useListCarMakes } from "@workspace/api-client-react";
import { CarCard } from "../components/CarCard";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function Home() {
  const [, setLocation] = useLocation();
  const { data: featuredCars = [] } = useListFeaturedCars();
  const { data: stats } = useGetMarketplaceStats();
  const { data: makes = [] } = useListCarMakes();
  
  const [searchParams, setSearchParams] = useState({ make: "", type: "", maxPrice: "" });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchParams.make) params.append("make", searchParams.make);
    if (searchParams.type) params.append("type", searchParams.type);
    if (searchParams.maxPrice) params.append("maxPrice", searchParams.maxPrice);
    setLocation(`/inventory?${params.toString()}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-secondary/20 pt-20 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Premium Cars for <br />
              <span className="text-[#C9A24D]">Extraordinary</span> Journeys
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Discover the Gulf's finest selection of luxury and premium vehicles. Unmatched quality, transparent pricing, and effortless financing.
            </motion.p>
            
            {/* Inline Search Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-3 rounded-lg shadow-sm border border-border inline-block w-full max-w-2xl"
            >
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <select 
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-sm py-2 px-3 border-r sm:border-r-border"
                  value={searchParams.make}
                  onChange={e => setSearchParams({...searchParams, make: e.target.value})}
                >
                  <option value="">All Makes</option>
                  {makes.map(make => <option key={make} value={make}>{make}</option>)}
                </select>
                <select 
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-sm py-2 px-3 border-r sm:border-r-border"
                  value={searchParams.type}
                  onChange={e => setSearchParams({...searchParams, type: e.target.value})}
                >
                  <option value="">Condition</option>
                  <option value="sell">Buy</option>
                  <option value="rent">Rent</option>
                </select>
                <select 
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-sm py-2 px-3"
                  value={searchParams.maxPrice}
                  onChange={e => setSearchParams({...searchParams, maxPrice: e.target.value})}
                >
                  <option value="">Max Price</option>
                  <option value="50000">Under $50,000</option>
                  <option value="100000">Under $100,000</option>
                  <option value="200000">Under $200,000</option>
                </select>
                <button type="submit" className="bg-primary text-white rounded-md px-6 py-2 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  <Search className="w-4 h-4" /> <span className="sm:hidden">Search</span>
                </button>
              </form>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent rounded-full blur-3xl" />
            <img 
              src="/hero-car.png" 
              alt="Premium White Sedan" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{stats?.totalCars || 0}+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Cars</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{stats?.carsForSale || 0}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">For Sale</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{stats?.carsForRent || 0}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">For Rent</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#C9A24D]">{stats?.happyCustomers || 0}+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Featured Selection</h2>
              <p className="text-muted-foreground">Handpicked premium vehicles ready for delivery.</p>
            </div>
            <Link href="/inventory" className="text-primary font-medium hover:underline hidden md:block">
              View All Vehicles &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, i) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/inventory" className="inline-block w-full py-3 bg-white border border-input rounded-md font-medium text-sm">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Services Row */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Find Your Match</h3>
              <p className="text-muted-foreground">Browse our extensive collection of verified premium vehicles.</p>
            </div>
            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">Every car undergoes a rigorous 150-point inspection process.</p>
            </div>
            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Financing</h3>
              <p className="text-muted-foreground">Flexible payment plans tailored to your budget.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Financing CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Drive Your Dream Car Today</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Get pre-approved for financing in minutes. Competitive rates and flexible terms tailored to your needs.
          </p>
          <Link href="/financing" className="inline-flex h-14 items-center justify-center rounded-md bg-white px-8 text-base font-semibold text-primary shadow transition-colors hover:bg-white/90">
            Apply for Financing
          </Link>
        </div>
      </section>
    </div>
  );
}
