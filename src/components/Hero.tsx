import React, { useState } from "react";
import { Calendar, Users, ArrowRight } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onSearchStay: (searchParams: { checkIn: string; checkOut: string; guests: number }) => void;
}

export default function Hero({ onNavigate, onSearchStay }: HeroProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchStay({
      checkIn,
      checkOut,
      guests
    });
    onNavigate("booking");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Hero Image with Parallax & Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1920"
          alt="Alma del Bosque Cabin View in Bariloche"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A] z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center">
        {/* Animated Accent badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-950/70 border border-forest-500/30 text-forest-300 backdrop-blur-md text-xs tracking-[0.25em] font-mono uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-wood-400 animate-ping" />
          Exclusive Sanctuary
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 text-shadow"
        >
          Alma del Bosque
        </h1>

        {/* Subheadlines */}
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl font-serif text-wood-400 italic max-w-3xl mb-4"
        >
          Cabins immersed in the Patagonian forest of Bariloche
        </p>
        
        <p className="text-zinc-300 text-sm md:text-base max-w-2xl font-sans leading-relaxed mb-10 text-shadow-sm">
          Disconnect from routine and reconnect with nature in a unique retreat surrounded by ancient forests and majestic mountains.
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            id="hero-btn-book"
            onClick={() => onNavigate("booking")}
            className="px-8 py-4 bg-wood-500 hover:bg-wood-400 text-black font-semibold tracking-wider uppercase text-xs rounded-md transition-all duration-300 shadow-lg shadow-wood-500/20 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Book Your Stay
          </button>
          <button
            id="hero-btn-cabins"
            onClick={() => onNavigate("cabins")}
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold tracking-wider uppercase text-xs rounded-md border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            View Cabins
          </button>
        </div>

        {/* Reservation Search Widget */}
        <div
          id="search-widget"
          className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-left">
            {/* Check in */}
            <div className="flex flex-col">
              <label htmlFor="widget-checkin" className="text-[10px] tracking-widest font-mono text-wood-500 uppercase mb-2 flex items-center gap-1.5 font-semibold">
                <Calendar size={12} className="text-wood-400" /> Check-In Date
              </label>
              <input
                id="widget-checkin"
                type="date"
                required
                className="w-full bg-transparent border-b border-white/20 text-white py-2 text-sm focus:outline-none focus:border-wood-500 transition-colors cursor-pointer"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            {/* Check out */}
            <div className="flex flex-col">
              <label htmlFor="widget-checkout" className="text-[10px] tracking-widest font-mono text-wood-500 uppercase mb-2 flex items-center gap-1.5 font-semibold">
                <Calendar size={12} className="text-wood-400" /> Check-Out Date
              </label>
              <input
                id="widget-checkout"
                type="date"
                required
                className="w-full bg-transparent border-b border-white/20 text-white py-2 text-sm focus:outline-none focus:border-wood-500 transition-colors cursor-pointer"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label htmlFor="widget-guests" className="text-[10px] tracking-widest font-mono text-wood-500 uppercase mb-2 flex items-center gap-1.5 font-semibold">
                <Users size={12} className="text-wood-400" /> Guests Count
              </label>
              <select
                id="widget-guests"
                className="w-full bg-transparent border-b border-white/20 text-white py-2 text-sm focus:outline-none focus:border-wood-500 transition-colors cursor-pointer"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num} className="bg-zinc-900 text-white">
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Availability button */}
            <div>
              <button
                id="widget-submit"
                type="submit"
                className="w-full bg-wood-700 hover:bg-wood-800 text-white font-semibold text-xs uppercase tracking-widest py-3.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                Check Availability
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Elegant Fade effect to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
