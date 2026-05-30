import React, { useState } from "react";
import { Mail, Instagram, Facebook, Compass, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Cabins", id: "cabins" },
    { label: "Amenities", id: "amenities" },
    { label: "Gallery", id: "gallery" },
    { label: "Experiences", id: "experiences" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-zinc-900 pt-16 pb-8 text-zinc-400 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core footer columns */}
        <div id="footer-columns-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate("home")}
              className="text-left flex flex-col cursor-pointer group"
            >
              <span className="font-serif text-2xl font-semibold tracking-wide text-white group-hover:text-wood-400 transition-colors">
                Alma del Bosque
              </span>
              <span className="text-[10px] tracking-[0.2em] font-mono text-wood-500 uppercase mt-0.5">
                Bariloche · Patagonia
              </span>
            </button>
            <p className="text-xs leading-relaxed max-w-sm font-sans pt-2">
              An exclusive boutique refuge tucked deep inside Circuito Chico woodlands. Experience the sheer beauty of Argentine Patagonia surrounded by forests, lakes, and Andean peaks.
            </p>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#888] block">Explore</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`footer-link-${link.id}`}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-xs text-zinc-400 hover:text-wood-400 transition-colors py-1 cursor-pointer block"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#888] block">Social</span>
            <div className="flex flex-col space-y-2.5 text-xs">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram size={13} className="text-wood-450" /> Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Facebook size={13} className="text-wood-450" /> Facebook
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Compass size={13} className="text-wood-450" /> TripAdvisor
              </a>
            </div>
          </div>

          {/* Newsletter subscription Col */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#888] block">Newsletter</span>
            <p className="text-xs leading-relaxed font-sans">
              Subscribe to unlock periodic private offers, mountain snow season updates, and direct booking perks.
            </p>

            {isSubscribed ? (
              <div id="newsletter-success" className="bg-[#122116]/80 border border-forest-500/30 p-3 rounded-lg flex items-center gap-2.5 text-xs text-forest-300 animate-fade-in">
                <CheckCircle2 size={15} />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter email..."
                  className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-wood-500 max-w-[170px] w-full flex-grow transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  className="bg-wood-500 hover:bg-wood-400 text-black font-semibold text-[10px] tracking-wider uppercase px-3.5 py-2 rounded transition-all duration-300 flex items-center gap-1 cursor-pointer hover:scale-105"
                >
                  <Mail size={12} /> Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower disclosures bottom row */}
        <div id="footer-bottom" className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] text-zinc-500 space-y-4 md:space-y-0">
          
          {/* Legal references */}
          <div className="flex gap-4 font-sans flex-wrap justify-center">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="text-zinc-800">•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span className="text-zinc-800">•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Booking Conditions</span>
            <span className="text-zinc-800">•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Local Regulations</span>
          </div>

          {/* Main Copyright Text */}
          <span id="footer-copyright" className="font-mono tracking-wider text-center md:text-right uppercase text-[9px] text-[#777]">
            © 2026 Alma del Bosque – Bariloche, Patagonia Argentina
          </span>
        </div>

      </div>
    </footer>
  );
}
