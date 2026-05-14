import React from 'react';
import { ArrowRight, Star, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CARS = [
  { id:1, make:"BMW",       model:"M3",    year:2023, price:89000, monthly:1850, mileage:12000, fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=80" },
  { id:2, make:"Mercedes",  model:"C200",  year:2022, price:75000, monthly:1560, mileage:8000,  fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&q=80" },
  { id:3, make:"Audi",      model:"A4",    year:2023, price:69500, monthly:1440, mileage:22000, fuel:"Diesel",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=700&q=80" },
  { id:4, make:"Toyota",    model:"Camry", year:2022, price:45000, monthly:935,  mileage:31000, fuel:"Petrol",  trans:"Auto", type:"rent", img:"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=700&q=80" },
  { id:5, make:"Lexus",     model:"ES350", year:2023, price:68000, monthly:1410, mileage:15000, fuel:"Hybrid",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1563720223185-11003d516935?w=700&q=80" },
  { id:6, make:"BMW",       model:"X3",    year:2024, price:95000, monthly:1970, mileage:9000,  fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1633610682769-af63ec7a26c3?w=700&q=80" },
  { id:7, make:"Land Rover",model:"Defender",year:2023,price:112000,monthly:2320,mileage:6000, fuel:"Diesel",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=80" },
  { id:8, make:"Mercedes",  model:"S-Class",year:2024,price:145000,monthly:3010,mileage:3000,  fuel:"Petrol",  trans:"Auto", type:"sell", img:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=700&q=80" },
];

export function SurpriseCollection() {
  const collectionCars = CARS.slice(1, 7);

  return (
    <div className="min-h-screen bg-[#FDFCFA] text-[#1C1917]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#EBE5DC] h-[56px] flex items-center px-6 justify-between">
        <div className="flex items-center">
          <span className="text-lg font-extrabold text-[#1C1917]" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Auto <span className="text-[#C9A24D] mx-1">◆</span> Premier
          </span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#726B62]">
            <a href="#" className="hover:text-[#1B2D4F] transition-colors">Inventory</a>
            <a href="#" className="hover:text-[#1B2D4F] transition-colors">Financing</a>
            <a href="#" className="hover:text-[#1B2D4F] transition-colors">Contact</a>
          </nav>
          <div className="h-4 w-px bg-[#EBE5DC] hidden md:block"></div>
          <button className="text-sm font-medium text-[#726B62] hover:text-[#1C1917]">عربي</button>
          <button className="bg-[#1B2D4F] text-white px-4 py-1.5 text-xs font-bold rounded-lg hover:bg-[#1B2D4F]/90 transition-colors">
            Browse Fleet
          </button>
        </div>
      </header>

      {/* EDITORIAL DATE STRIP */}
      <div className="w-full bg-[#FAF5EE] border-b border-[#EBE5DC] py-2 px-6 flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#9E9589]">Today's Collection — May 2025</span>
        <span className="text-xs text-[#9E9589]">15 vehicles available</span>
      </div>

      {/* LEAD FEATURE CAR */}
      <section className="w-full bg-white flex flex-col md:flex-row h-auto md:h-[560px]">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-[55%] relative h-[400px] md:h-full">
          <img 
            src={CARS[0].img} 
            alt="Featured Car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full h-[120px] bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="bg-[#C9A24D] text-[9px] font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-sm mb-2 inline-block">
              FEATURED
            </span>
            <h2 className="text-white text-xl md:text-3xl font-extrabold leading-tight mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>
              2023 BMW M3
            </h2>
            <p className="text-white/80 text-sm font-medium">$89,000</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-[45%] bg-[#FDFCFA] p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A24D] mb-3">
              Lead Story
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1917] leading-tight mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Munich Precision.<br/>Gulf Roads.
            </h1>
            <p className="text-[15px] leading-relaxed text-[#726B62] mb-6">
              The M3 is not a car you justify. It is a car you feel. 0–100 in 3.9 seconds, tuned for Gulf highways, and available today with same-day financing.
            </p>
            <div className="h-px w-full bg-[#EBE5DC] mb-6"></div>
            
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#9E9589] mb-1">Mileage</div>
                <div className="text-base font-bold text-[#1C1917]" style={{ fontFamily: "'Manrope', sans-serif" }}>12,000 km</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#9E9589] mb-1">Fuel</div>
                <div className="text-base font-bold text-[#1C1917]" style={{ fontFamily: "'Manrope', sans-serif" }}>Petrol</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#9E9589] mb-1">Gearbox</div>
                <div className="text-base font-bold text-[#1C1917]" style={{ fontFamily: "'Manrope', sans-serif" }}>Automatic</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#9E9589] mb-1">Monthly</div>
                <div className="text-base font-bold text-[#1C1917]" style={{ fontFamily: "'Manrope', sans-serif" }}>AED 1,850</div>
              </div>
            </div>
            
            <div className="h-px w-full bg-[#EBE5DC] mt-6 mb-6"></div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-[#1B2D4F] text-white px-6 py-3 rounded-xl font-bold text-sm flex-1 flex items-center justify-center hover:bg-[#1B2D4F]/90 transition-colors">
                View Full Details <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm flex-1 flex items-center justify-center hover:bg-[#25D366]/90 transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Inquiry
              </button>
            </div>
            <p className="text-xs text-[#9E9589] mt-3">Or call +971 50 123 4567</p>
          </div>
        </div>
      </section>

      {/* COLLECTION GRID SECTION */}
      <section className="bg-white pt-14 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-extrabold text-[#1C1917]" style={{ fontFamily: "'Manrope', sans-serif" }}>The Fleet</h2>
            <a href="#" className="text-sm font-semibold text-[#1B2D4F] hover:underline flex items-center">
              View all 15 <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {collectionCars.map(car => (
              <motion.div 
                key={car.id}
                whileHover={{ y: -4 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F5EFE6]">
                  <img src={car.img} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-[#1B2D4F] text-white text-[7px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    {car.type === 'sell' ? 'For Sale' : 'For Rent'}
                  </div>
                </div>
                <div className="px-1 pt-3 pb-4">
                  <h3 className="text-base font-extrabold text-[#1C1917] mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {car.make} {car.model}
                  </h3>
                  <div className="flex items-center mb-1">
                    <span className="text-sm font-bold text-[#1C1917]">${car.price.toLocaleString()}</span>
                    <span className="mx-1.5 text-[#9E9589]">·</span>
                    <span className="text-sm text-[#9E9589]">${car.monthly}/mo</span>
                  </div>
                  <div className="text-[11px] text-[#9E9589] flex items-center">
                    {(car.mileage/1000).toFixed(0)}k km <span className="mx-1">·</span> {car.fuel} <span className="mx-1">·</span> {car.trans}
                  </div>
                  <div className="mt-3">
                    <span className="text-xs font-bold text-[#C9A24D] border-b border-[#C9A24D]/30 group-hover:border-[#C9A24D] transition-colors pb-0.5 inline-flex items-center">
                      Enquire <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* View All Card */}
            <div className="relative aspect-[4/3] w-full rounded-xl bg-[#FAF5EE] border border-dashed border-[#EBE5DC] flex items-center justify-center cursor-pointer hover:bg-[#F5EFE6] transition-colors flex-col">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
                <ArrowRight className="w-5 h-5 text-[#1B2D4F]" />
              </div>
              <span className="text-sm font-semibold text-[#726B62]">See all 15 vehicles</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST + ABOUT BAR */}
      <section className="w-full bg-[#1B2D4F] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 md:gap-0">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-extrabold text-[#C9A24D] mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>1,240+</div>
            <div className="text-white/50 text-sm">Happy clients across the Gulf</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Est. 2019 · Dubai</div>
            <div className="text-white/50 text-sm mb-2">5+ years of verified listings</div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#C9A24D] text-[#C9A24D]" />)}
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>150+ Inspection Points</div>
            <div className="text-white/50 text-sm mb-3">Every car, every time</div>
            <div className="w-[120px] h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-[#C9A24D] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#FAF5EE] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1C1917] mb-10" style={{ fontFamily: "'Manrope', sans-serif" }}>
            What makes us different
          </h2>

          <div className="flex flex-col">
            {[
              { num: "01", title: "Verified, Not Just Listed", desc: "Every car is inspected before listing. No surprises, no mileage tricks." },
              { num: "02", title: "Financing Without Friction", desc: "Apply in 3 minutes. Pre-approval before you walk in." },
              { num: "03", title: "Gulf-Specific Expertise", desc: "We know what the market wants: the brands, specs, and color preferences that matter here." },
              { num: "04", title: "Human Support, Always", desc: "Specialists on WhatsApp and phone, 7 days a week." }
            ].map((item, i, arr) => (
              <div key={item.num} className={`flex items-start gap-6 py-6 ${i !== arr.length - 1 ? 'border-b border-[#EBE5DC]' : ''}`}>
                <div className="w-16 shrink-0 text-5xl font-extrabold opacity-20 text-[#1B2D4F]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  {item.num}
                </div>
                <div className="flex-1 mt-1 max-w-lg">
                  <h3 className="text-base font-bold text-[#1C1917]" style={{ fontFamily: "'Manrope', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm text-[#726B62] mt-1">{item.desc}</p>
                </div>
                <div className="text-xl font-bold text-[#C9A24D] pt-2">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCING CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1B2D4F] to-[#0f192d] rounded-3xl py-16 px-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Drive Your Dream Car Today.
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Get pre-approved in minutes with our fast, transparent financing options.
          </p>
          <button className="bg-[#C9A24D] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b58f40] transition-colors">
            Apply for Financing
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1917] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-extrabold text-white mb-4 block" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Auto <span className="text-[#C9A24D] mx-1">◆</span> Premier
            </span>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              Premium automotive marketplace for the Gulf region. Curated selection of luxury and performance vehicles.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>Inventory</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">All Cars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luxury SUVs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports Cars</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>Services</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Your Car</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Car Valuation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C9A24D]" /> +971 50 123 4567</li>
              <li className="flex items-center gap-2 mt-2"><MessageCircle className="w-4 h-4 text-[#C9A24D]" /> WhatsApp Us</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/30">
          © {new Date().getFullYear()} Auto Premier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
