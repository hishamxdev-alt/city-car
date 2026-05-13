import React, { useState } from "react";
import { Search, Heart, Scale, MessageCircle, ShieldCheck, Banknote, CarFront } from "lucide-react";

export function Editorial() {
  const [searchParams, setSearchParams] = useState({ make: "", type: "", maxPrice: "" });

  const cars = [
    {
      id: 1,
      make: "BMW",
      model: "330i",
      year: 2023,
      price: 52000,
      monthlyInstallment: 850,
      mileage: 15000,
      fuelType: "Petrol",
      transmission: "Auto",
      type: "sell",
      imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    },
    {
      id: 2,
      make: "Mercedes-Benz",
      model: "C200",
      year: 2022,
      price: 48000,
      monthlyInstallment: 790,
      mileage: 22000,
      fuelType: "Petrol",
      transmission: "Auto",
      type: "sell",
      imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    },
    {
      id: 3,
      make: "Audi",
      model: "A4",
      year: 2023,
      price: 45000,
      monthlyInstallment: 750,
      mileage: 18000,
      fuelType: "Petrol",
      transmission: "Auto",
      type: "rent",
      imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    },
    {
      id: 4,
      make: "Toyota",
      model: "Camry",
      year: 2024,
      price: 32000,
      monthlyInstallment: 550,
      mileage: 5000,
      fuelType: "Hybrid",
      transmission: "Auto",
      type: "sell",
      imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
    },
    {
      id: 5,
      make: "Lexus",
      model: "ES 350",
      year: 2023,
      price: 55000,
      monthlyInstallment: 890,
      mileage: 12000,
      fuelType: "Petrol",
      transmission: "Auto",
      type: "sell",
      imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    },
    {
      id: 6,
      make: "BMW",
      model: "X3",
      year: 2022,
      price: 58000,
      monthlyInstallment: 920,
      mileage: 28000,
      fuelType: "Petrol",
      transmission: "Auto",
      type: "rent",
      imageUrl: "https://images.unsplash.com/photo-1633610682769-af63ec7a26c3?w=600&q=80",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans text-[#111827]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="text-2xl font-bold tracking-tight">AutoPremier</div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="hover:text-[#C9A24D] transition-colors">Inventory</a>
          <a href="#" className="hover:text-[#C9A24D] transition-colors">Sell</a>
          <a href="#" className="hover:text-[#C9A24D] transition-colors">About</a>
          <a href="#" className="px-6 py-2.5 rounded-full bg-[#C9A24D] text-white hover:bg-[#b08b3e] transition-colors shadow-sm">
            Get Financing
          </a>
        </div>
      </nav>

      {/* Editorial Hero */}
      <header className="relative w-full h-[80vh] min-h-[600px] flex items-center pt-20 overflow-hidden bg-white">
        <div 
          className="absolute top-0 right-0 w-[60%] h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1400&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full"></div>
        </div>

        {/* Stats Chips */}
        <div className="absolute right-[10%] top-[25%] bg-white rounded-full px-5 py-2.5 shadow-sm flex items-center gap-3 z-20 animate-fade-in">
          <span className="font-bold text-lg">15</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Total Cars</span>
        </div>
        <div className="absolute right-[35%] top-[45%] bg-white rounded-full px-5 py-2.5 shadow-sm flex items-center gap-3 z-20 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <span className="font-bold text-lg">13</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">For Sale</span>
        </div>
        <div className="absolute right-[5%] top-[60%] bg-white rounded-full px-5 py-2.5 shadow-sm flex items-center gap-3 z-20 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="font-bold text-lg">2</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">For Rent</span>
        </div>
        <div className="absolute right-[45%] top-[75%] bg-white rounded-full px-5 py-2.5 shadow-sm flex items-center gap-3 z-20 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <span className="font-bold text-lg text-[#C9A24D]">1240+</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Happy Clients</span>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-[#C9A24D] text-sm tracking-[0.2em] font-bold uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-[#C9A24D]"></span>
              Est. 2024 · Dubai
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Premium Cars for <br/>
              <span className="italic font-serif font-light text-gray-600">Extraordinary</span> Journeys
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Discover the Gulf's finest selection of luxury and premium vehicles. Unmatched quality, transparent pricing, and effortless financing.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="px-8 py-4 bg-[#111827] text-white font-medium hover:bg-gray-800 transition-colors">
                View Inventory
              </a>
              <a href="#" className="px-8 py-4 bg-transparent border border-gray-300 text-gray-800 font-medium hover:border-[#C9A24D] hover:text-[#C9A24D] transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar Outside Hero */}
      <div className="bg-white border-b border-[#E5E7EB] py-6 shadow-sm relative z-20">
        <div className="container mx-auto px-8">
          <form className="flex flex-col md:flex-row items-center gap-4 w-full">
            <select 
              className="flex-1 w-full bg-[#F7F8FA] border-0 focus:ring-2 focus:ring-[#C9A24D] rounded-none py-3 px-4 outline-none"
              value={searchParams.make}
              onChange={e => setSearchParams({...searchParams, make: e.target.value})}
            >
              <option value="">All Makes</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes-Benz</option>
              <option value="Audi">Audi</option>
            </select>
            <select 
              className="flex-1 w-full bg-[#F7F8FA] border-0 focus:ring-2 focus:ring-[#C9A24D] rounded-none py-3 px-4 outline-none"
              value={searchParams.type}
              onChange={e => setSearchParams({...searchParams, type: e.target.value})}
            >
              <option value="">Condition (Any)</option>
              <option value="sell">Buy</option>
              <option value="rent">Rent</option>
            </select>
            <select 
              className="flex-1 w-full bg-[#F7F8FA] border-0 focus:ring-2 focus:ring-[#C9A24D] rounded-none py-3 px-4 outline-none"
              value={searchParams.maxPrice}
              onChange={e => setSearchParams({...searchParams, maxPrice: e.target.value})}
            >
              <option value="">Max Price (Any)</option>
              <option value="50000">Under $50,000</option>
              <option value="100000">Under $100,000</option>
              <option value="200000">Under $200,000</option>
            </select>
            <button type="submit" className="w-full md:w-auto bg-[#2563EB] text-white px-8 py-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5" /> <span>Search</span>
            </button>
          </form>
        </div>
      </div>

      {/* Featured Selection - Asymmetric Grid */}
      <section className="py-24 container mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="relative inline-block pb-4">
            <h2 className="text-4xl font-bold tracking-tight">Featured Selection</h2>
            <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#C9A24D]"></div>
          </div>
          <a href="#" className="text-[#C9A24D] font-medium hover:text-[#b08b3e] flex items-center gap-2 pb-4">
            View All <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Row 1: 1 large card (col-span-2), 1 regular card */}
          <div className="md:col-span-2 group block bg-white border border-[#E5E7EB] hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={cars[0].imageUrl} alt={cars[0].make} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#C9A24D] text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">Featured</span>
                <span className="bg-[#2563EB] text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">For Sale</span>
              </div>
              <button className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white text-gray-400 hover:text-red-500 rounded-full transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{cars[0].make} {cars[0].model}</h3>
                  <p className="text-gray-500">{cars[0].year}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${cars[0].price.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">From ${cars[0].monthlyInstallment}/mo</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-[#E5E7EB]">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Mileage</div>
                  <div className="font-medium">{cars[0].mileage.toLocaleString()} km</div>
                </div>
                <div className="text-center border-x border-[#E5E7EB]">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Fuel</div>
                  <div className="font-medium">{cars[0].fuelType}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Trans</div>
                  <div className="font-medium">{cars[0].transmission}</div>
                </div>
              </div>
              <div className="pt-6 flex gap-4">
                <button className="flex-1 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Scale className="w-4 h-4" /> Compare
                </button>
                <button className="flex-1 py-3 bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div className="group block bg-white border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-64 overflow-hidden">
              <img src={cars[1].imageUrl} alt={cars[1].make} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#2563EB] text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">For Sale</span>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-gray-400 hover:text-red-500 rounded-full transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{cars[1].make} {cars[1].model}</h3>
                  <p className="text-sm text-gray-500">{cars[1].year}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">${cars[1].price.toLocaleString()}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-[#E5E7EB] mb-4">
                <div className="text-center"><div className="font-medium text-sm">{cars[1].mileage/1000}k km</div></div>
                <div className="text-center border-x border-[#E5E7EB]"><div className="font-medium text-sm">{cars[1].fuelType}</div></div>
                <div className="text-center"><div className="font-medium text-sm">Auto</div></div>
              </div>
              <div className="mt-auto flex gap-3">
                <button className="flex-1 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50">Details</button>
              </div>
            </div>
          </div>

          {/* Row 2: 3 regular cards */}
          {cars.slice(2, 5).map(car => (
            <div key={car.id} className="group block bg-white border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-56 overflow-hidden">
                <img src={car.imageUrl} alt={car.make} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className={car.type === 'sell' ? "bg-[#2563EB] text-white px-3 py-1 text-xs font-bold uppercase tracking-wide" : "bg-white text-[#2563EB] px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-sm"}>
                    {car.type === 'sell' ? 'For Sale' : 'For Rent'}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-gray-400 hover:text-red-500 rounded-full transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{car.make} {car.model}</h3>
                    <p className="text-sm text-gray-500">{car.year}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">${car.price.toLocaleString()}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-[#E5E7EB] mb-4">
                  <div className="text-center"><div className="font-medium text-sm">{car.mileage/1000}k km</div></div>
                  <div className="text-center border-x border-[#E5E7EB]"><div className="font-medium text-sm">{car.fuelType}</div></div>
                  <div className="text-center"><div className="font-medium text-sm">Auto</div></div>
                </div>
                <div className="mt-auto flex gap-3">
                  <button className="flex-1 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subtle Gold Rule Transition */}
      <div className="container mx-auto px-8">
        <hr className="border-[#C9A24D]/30" />
      </div>

      {/* Services */}
      <section className="py-24 container mx-auto px-8 bg-white my-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#F7F8FA] flex items-center justify-center text-[#C9A24D] mb-8 border border-[#E5E7EB]">
              <CarFront className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif tracking-tight">Find Your Match</h3>
            <p className="text-gray-600 leading-relaxed">Browse our extensive collection of verified premium vehicles, curated for exceptional taste.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#F7F8FA] flex items-center justify-center text-[#C9A24D] mb-8 border border-[#E5E7EB]">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif tracking-tight">Quality Assured</h3>
            <p className="text-gray-600 leading-relaxed">Every car undergoes a rigorous 150-point inspection process to ensure flawless performance.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#F7F8FA] flex items-center justify-center text-[#C9A24D] mb-8 border border-[#E5E7EB]">
              <Banknote className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif tracking-tight">Easy Financing</h3>
            <p className="text-gray-600 leading-relaxed">Flexible payment plans and competitive rates tailored precisely to your financial goals.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#2563EB] text-white">
        <div className="container mx-auto px-8 text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-8 tracking-tight font-serif">Drive Your Dream Car Today</h2>
          <p className="text-blue-100 text-xl mb-12 font-light">
            Get pre-approved for financing in minutes. Competitive rates and flexible terms tailored to your needs.
          </p>
          <a href="#" className="inline-block px-10 py-5 bg-white text-[#2563EB] font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
            Apply for Financing
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold tracking-tight mb-6">AutoPremier</div>
            <p className="text-gray-400 text-sm leading-relaxed">The Gulf's premier destination for luxury automotive experiences. Quality, transparency, and excellence.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C9A24D]">Vehicles</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">View All Inventory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cars for Sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cars for Rent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Your Car</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C9A24D]">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C9A24D]">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Sheikh Zayed Road, Dubai, UAE</li>
              <li>+971 4 123 4567</li>
              <li>info@autopremier.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-8 mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 AutoPremier. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
