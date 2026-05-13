import React from "react";
import { Search, ChevronDown, CheckCircle2, ShieldCheck, CreditCard, Facebook, Twitter, Instagram } from "lucide-react";

const CARS = [
  {
    id: 1,
    make: "BMW",
    model: "330i M Sport",
    year: 2023,
    price: 45000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    mileage: "12,500 km",
    fuel: "Petrol",
    transmission: "Auto",
    type: "sell"
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "C200",
    year: 2022,
    price: 42000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    mileage: "24,000 km",
    fuel: "Hybrid",
    transmission: "Auto",
    type: "sell"
  },
  {
    id: 3,
    make: "Audi",
    model: "A4 S-Line",
    year: 2023,
    price: 39500,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    mileage: "8,200 km",
    fuel: "Petrol",
    transmission: "Auto",
    type: "rent"
  },
  {
    id: 4,
    make: "Toyota",
    model: "Camry SE",
    year: 2024,
    price: 28000,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
    mileage: "1,500 km",
    fuel: "Hybrid",
    transmission: "Auto",
    type: "sell"
  },
  {
    id: 5,
    make: "Lexus",
    model: "ES 350",
    year: 2023,
    price: 48000,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    mileage: "15,000 km",
    fuel: "Petrol",
    transmission: "Auto",
    type: "sell"
  },
  {
    id: 6,
    make: "BMW",
    model: "X3 xDrive30i",
    year: 2022,
    price: 52000,
    image: "https://images.unsplash.com/photo-1633610682769-af63ec7a26c3?w=600&q=80",
    mileage: "31,000 km",
    fuel: "Petrol",
    transmission: "Auto",
    type: "rent"
  }
];

export function SplitPanel() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans text-[#111827]">
      <style>{`
        /* Custom overrides if needed, mostly using Tailwind */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Split Hero */}
      <div className="flex flex-col lg:flex-row min-h-[100dvh] lg:h-screen">
        
        {/* Left Panel: Image */}
        <div className="w-full lg:w-1/2 bg-[#FAF9F6] h-[50vh] lg:h-full relative overflow-hidden order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80" 
            alt="Premium White BMW" 
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* Right Panel: Content */}
        <div className="w-full lg:w-1/2 bg-[#FFFFFF] h-auto lg:h-full flex flex-col order-1 lg:order-2">
          
          {/* Header */}
          <header className="flex items-center justify-between px-8 lg:px-12 py-6 w-full">
            <div className="text-xl font-bold tracking-tight">Auto<span className="text-[#C9A24D]">Premier</span></div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4B5563]">
              <a href="#" className="text-[#111827]">Home</a>
              <a href="#" className="hover:text-[#111827] transition-colors">Inventory</a>
              <a href="#" className="hover:text-[#111827] transition-colors">Services</a>
              <a href="#" className="hover:text-[#111827] transition-colors">Contact</a>
            </nav>
            <button className="md:hidden p-2 text-[#111827]">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </header>

          {/* Hero Content - Vertically Centered */}
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-12 py-12 lg:py-0 max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Premium Cars for <br/>
              <span className="text-[#C9A24D]">Extraordinary</span> <br/>
              Journeys
            </h1>
            <p className="text-[#4B5563] text-lg mb-10 leading-relaxed">
              Discover the Gulf's finest selection of luxury and premium vehicles. Unmatched quality, transparent pricing, and effortless financing.
            </p>

            {/* Inline Search */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <select className="w-full appearance-none bg-transparent py-3 pl-4 pr-10 text-sm font-medium focus:outline-none border-b sm:border-b-0 sm:border-r border-[#E5E7EB] text-[#111827]">
                  <option value="">All Makes</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="audi">Audi</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563] pointer-events-none" />
              </div>
              <div className="flex-1 relative">
                <select className="w-full appearance-none bg-transparent py-3 pl-4 pr-10 text-sm font-medium focus:outline-none border-b sm:border-b-0 sm:border-r border-[#E5E7EB] text-[#111827]">
                  <option value="">Buy / Rent</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563] pointer-events-none" />
              </div>
              <div className="flex-1 relative">
                <select className="w-full appearance-none bg-transparent py-3 pl-4 pr-10 text-sm font-medium focus:outline-none text-[#111827]">
                  <option value="">Max Price</option>
                  <option value="50000">$50,000</option>
                  <option value="100000">$100,000</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563] pointer-events-none" />
              </div>
              <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                <span className="sm:hidden">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <section className="bg-white border-y border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto w-full px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#E5E7EB] py-8 lg:py-12">
            <div className="text-center px-4 py-4 lg:py-0">
              <div className="text-4xl lg:text-5xl font-bold text-[#111827] mb-1">15</div>
              <div className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Total Cars</div>
            </div>
            <div className="text-center px-4 py-4 lg:py-0">
              <div className="text-4xl lg:text-5xl font-bold text-[#111827] mb-1">13</div>
              <div className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">For Sale</div>
            </div>
            <div className="text-center px-4 py-4 lg:py-0">
              <div className="text-4xl lg:text-5xl font-bold text-[#111827] mb-1">2</div>
              <div className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">For Rent</div>
            </div>
            <div className="text-center px-4 py-4 lg:py-0">
              <div className="text-4xl lg:text-5xl font-bold text-[#C9A24D] mb-1">1240+</div>
              <div className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Grid - Dense 4 Col */}
      <section className="py-20 lg:py-24 max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Recent Arrivals</h2>
            <p className="text-[#4B5563]">Fresh inventory, rigorously inspected and ready for the road.</p>
          </div>
          <a href="#" className="text-[#2563EB] font-medium hover:underline text-sm inline-flex items-center gap-1">
            View full inventory <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARS.map(car => (
            <div key={car.id} className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F8FA]">
                <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${car.type === 'sell' ? 'bg-[#2563EB] text-white' : 'bg-white text-[#111827] shadow-sm'}`}>
                    {car.type === 'sell' ? 'For Sale' : 'For Rent'}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-[#111827] text-base leading-tight group-hover:text-[#2563EB] transition-colors">{car.make} {car.model}</h3>
                    <p className="text-[#4B5563] text-xs">{car.year}</p>
                  </div>
                  <div className="font-bold text-[#111827] whitespace-nowrap">${car.price.toLocaleString()}</div>
                </div>
                
                <div className="mt-auto pt-3 flex gap-3 text-[11px] text-[#4B5563] border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-1"><svg className="w-3.5 h-3.5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {car.mileage}</div>
                  <div className="flex items-center gap-1"><svg className="w-3.5 h-3.5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg> {car.fuel}</div>
                  <div className="flex items-center gap-1"><svg className="w-3.5 h-3.5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> {car.transmission}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#F7F8FA] rounded-2xl flex items-center justify-center mb-5 border border-[#E5E7EB]">
                <Search className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Find Your Match</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed max-w-sm">Use our advanced filters to find the exact make, model, and year that fits your lifestyle perfectly.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#F7F8FA] rounded-2xl flex items-center justify-center mb-5 border border-[#E5E7EB]">
                <CheckCircle2 className="w-8 h-8 text-[#C9A24D]" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Quality Assured</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed max-w-sm">Every vehicle undergoes a rigorous 150-point inspection process by our certified master technicians.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#F7F8FA] rounded-2xl flex items-center justify-center mb-5 border border-[#E5E7EB]">
                <CreditCard className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Easy Financing</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed max-w-sm">Get pre-approved in minutes with our transparent, competitive financing options tailored to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2563EB] text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Drive Your Dream Car Today</h2>
            <p className="text-[#bfdbfe] text-lg">Apply online and get instant approval with terms that work for your budget.</p>
          </div>
          <button className="bg-white text-[#2563EB] font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            Apply for Financing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold tracking-tight mb-6">Auto<span className="text-[#C9A24D]">Premier</span></div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The Gulf's premier destination for luxury and premium vehicles. We redefine the car buying experience.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Inventory</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Cars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Featured Vehicles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cars for Rent</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade-In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty Options</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>123 Luxury Avenue, Dubai, UAE</li>
                <li>+971 4 123 4567</li>
                <li>info@autopremier.com</li>
                <li>Mon - Sat: 9:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AutoPremier. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
