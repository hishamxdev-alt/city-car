import React, { useState } from "react";
import { Search, ChevronDown, Heart, Scale, MessageCircle, MapPin, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

const cars = [
  {
    id: 1,
    make: "BMW",
    model: "330i M Sport",
    year: 2023,
    price: 45000,
    type: "sell",
    mileage: 12000,
    fuelType: "Petrol",
    transmission: "Auto",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    isFeatured: true
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "C200",
    year: 2024,
    price: 52000,
    type: "sell",
    mileage: 5000,
    fuelType: "Petrol",
    transmission: "Auto",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    isFeatured: false
  },
  {
    id: 3,
    make: "Audi",
    model: "A4 S-Line",
    year: 2022,
    price: 38000,
    type: "rent",
    monthlyInstallment: 1200,
    mileage: 25000,
    fuelType: "Petrol",
    transmission: "Auto",
    imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    isFeatured: true
  },
  {
    id: 4,
    make: "Toyota",
    model: "Camry",
    year: 2024,
    price: 28000,
    type: "sell",
    mileage: 1500,
    fuelType: "Hybrid",
    transmission: "Auto",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
    isFeatured: false
  },
  {
    id: 5,
    make: "Lexus",
    model: "ES 350",
    year: 2023,
    price: 48000,
    type: "sell",
    mileage: 18000,
    fuelType: "Petrol",
    transmission: "Auto",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    isFeatured: true
  },
  {
    id: 6,
    make: "BMW",
    model: "X3",
    year: 2024,
    price: 55000,
    type: "rent",
    monthlyInstallment: 1800,
    mileage: 8000,
    fuelType: "Petrol",
    transmission: "Auto",
    imageUrl: "https://images.unsplash.com/photo-1633610682769-af63ec7a26c3?w=600&q=80",
    isFeatured: false
  }
];

export function SearchFirst() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans text-[#111827] flex flex-col">
      {/* 1. Sticky Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Auto<span className="text-[#2563EB]">Premier</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="text-[#2563EB]">Home</a>
            <a href="#" className="hover:text-[#111827]">Inventory</a>
            <a href="#" className="hover:text-[#111827]">Financing</a>
            <a href="#" className="hover:text-[#111827]">About Us</a>
            <a href="#" className="hover:text-[#111827]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:block text-sm font-medium hover:text-[#2563EB]">Log In</button>
            <button className="bg-[#2563EB] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
              Sell Your Car
            </button>
          </div>
        </div>
      </header>

      {/* 2. Prominent Search Zone */}
      <section className="bg-[#EFF6FF] border-b border-[#E5E7EB] py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-xl shadow-md p-2 border border-[#E5E7EB] flex flex-col md:flex-row gap-2">
            
            {/* Make Dropdown */}
            <div className="flex-1 relative">
              <select className="w-full h-12 appearance-none bg-transparent pl-4 pr-10 border border-transparent rounded-lg focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none text-sm font-medium text-gray-700 cursor-pointer">
                <option value="">All Makes</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes-Benz</option>
                <option value="Audi">Audi</option>
                <option value="Toyota">Toyota</option>
                <option value="Lexus">Lexus</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="hidden md:block w-px bg-[#E5E7EB] my-2"></div>

            {/* Buy / Rent Toggle */}
            <div className="flex-1 flex items-center bg-gray-50 rounded-lg p-1 border border-transparent focus-within:border-[#2563EB] focus-within:ring-1 focus-within:ring-[#2563EB]">
              <button className="flex-1 py-2 text-sm font-semibold bg-white shadow-sm rounded-md text-[#2563EB]">
                Buy
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 rounded-md transition-colors">
                Rent
              </button>
            </div>

            <div className="hidden md:block w-px bg-[#E5E7EB] my-2"></div>

            {/* Max Price */}
            <div className="flex-1 relative">
              <select className="w-full h-12 appearance-none bg-transparent pl-4 pr-10 border border-transparent rounded-lg focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none text-sm font-medium text-gray-700 cursor-pointer">
                <option value="">Max Price</option>
                <option value="50000">Under $50,000</option>
                <option value="100000">Under $100,000</option>
                <option value="200000">Under $200,000</option>
                <option value="any">Any Price</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Search Button */}
            <button className="md:w-auto w-full bg-[#2563EB] text-white px-8 h-12 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1d4ed8] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] outline-none">
              <Search className="w-5 h-5" />
              <span>Search Cars</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Compact Hero */}
      <section className="bg-white py-12 border-b border-[#E5E7EB] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#C9A24D] bg-[#FDF8EE] px-3 py-1 rounded-full mb-4 border border-[#F6EBD5]">
              Gulf's Premier Auto Marketplace
            </span>
            <h1 className="text-3xl font-bold leading-tight mb-3">
              Premium Cars for <br className="hidden md:block" />
              Extraordinary Journeys
            </h1>
            <p className="text-gray-500 text-base max-w-md mx-auto md:mx-0 mb-6">
              Discover the Gulf's finest selection of luxury and premium vehicles.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <button className="px-5 py-2.5 rounded-lg font-medium text-sm border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] transition-colors">
                Browse Inventory
              </button>
              <button className="px-5 py-2.5 rounded-lg font-medium text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                Get Financing
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full flex justify-center md:justify-end z-10">
            <div className="absolute inset-0 bg-[#EFF6FF] rounded-full blur-3xl opacity-50 transform scale-150"></div>
            <img 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" 
              alt="Premium Sedan" 
              className="max-w-[400px] w-full rounded-2xl shadow-xl border border-white relative z-10 object-cover aspect-[4/3] rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 4. Stats Ribbon */}
      <section className="bg-[#F9FAFB] border-b border-[#E5E7EB] py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#111827]">15</span> Total Cars
            </div>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#111827]">13</span> For Sale
            </div>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#111827]">2</span> For Rent
            </div>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#C9A24D]">1240+</span> Happy Clients
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* 5. Category Quick-Access Tiles */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {["All", "BMW", "Mercedes", "SUV", "For Rent"].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-[#2563EB] border-[#2563EB] text-white shadow-md" 
                    : "bg-white border-[#E5E7EB] text-gray-600 hover:bg-[#EFF6FF] hover:border-[#BFDBFE] hover:text-[#2563EB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 6. Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden hover:shadow-lg transition-all group flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <img 
                    src={car.imageUrl} 
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {car.isFeatured && (
                      <span className="bg-[#C9A24D] text-white px-2 py-1 text-xs font-bold rounded shadow-sm">
                        Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs font-bold rounded shadow-sm ${car.type === 'sell' ? 'bg-[#2563EB] text-white' : 'bg-white text-[#2563EB]'}`}>
                      {car.type === 'sell' ? 'For Sale' : 'For Rent'}
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full text-gray-500 hover:text-red-500 transition-colors shadow-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#2563EB] transition-colors leading-tight">
                        {car.make} {car.model}
                      </h3>
                      <p className="text-sm text-gray-500">{car.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900">${car.price.toLocaleString()}</div>
                      {car.monthlyInstallment && (
                        <div className="text-xs text-gray-500">From ${car.monthlyInstallment}/mo</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-100 mt-auto">
                    <div className="text-center">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Mileage</div>
                      <div className="text-xs font-semibold text-gray-700">{car.mileage.toLocaleString()} km</div>
                    </div>
                    <div className="text-center border-x border-gray-100">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Fuel</div>
                      <div className="text-xs font-semibold text-gray-700">{car.fuelType}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Trans</div>
                      <div className="text-xs font-semibold text-gray-700">{car.transmission}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8]">
              View All Inventory <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>

      {/* 7. Services row */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#EFF6FF] text-[#2563EB] rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Find Your Match</h3>
              <p className="text-sm text-gray-500">Browse our extensive collection of verified premium vehicles.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#EFF6FF] text-[#2563EB] rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-500">Every car undergoes a rigorous 150-point inspection process.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#EFF6FF] text-[#2563EB] rounded-full flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Easy Financing</h3>
              <p className="text-sm text-gray-500">Flexible payment plans tailored to your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Drive Your Dream Car Today</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
            Get pre-approved for financing in minutes. Competitive rates and flexible terms tailored to your needs.
          </p>
          <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply for Financing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E7EB] pt-12 pb-8 text-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold tracking-tight mb-4">
                Auto<span className="text-[#2563EB]">Premier</span>
              </div>
              <p className="text-gray-500 mb-4">
                The Gulf's premier destination for luxury and premium vehicles.
              </p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-[#2563EB]"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-[#2563EB]"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-[#2563EB]"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#111827]">Quick Links</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-[#2563EB]">Browse Inventory</a></li>
                <li><a href="#" className="hover:text-[#2563EB]">Sell Your Car</a></li>
                <li><a href="#" className="hover:text-[#2563EB]">Financing Options</a></li>
                <li><a href="#" className="hover:text-[#2563EB]">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#111827]">Vehicles</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-[#2563EB]">Luxury Sedans</a></li>
                <li><a href="#" className="hover:text-[#2563EB]">Premium SUVs</a></li>
                <li><a href="#" className="hover:text-[#2563EB]">Sports Cars</a></li>
                <li><a href="#" className="hover:text-[#2563EB]">Electric Vehicles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#111827]">Contact</h4>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span>123 Auto Avenue, Dubai, UAE</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>+971 4 123 4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>contact@autopremier.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E5E7EB] pt-8 text-center text-gray-500">
            &copy; {new Date().getFullYear()} AutoPremier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
