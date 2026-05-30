import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Cabins", id: "cabins" },
    { label: "Amenities", id: "amenities" },
    { label: "Gallery", id: "gallery" },
    { label: "Experiences", id: "experiences" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 shadow-2xl border-b border-wood-500/20 bg-zinc-950/95"
          : "py-5 bg-transparent"
      }`}
      style={{
        backgroundImage: isScrolled
          ? "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(27, 48, 34, 0.85))"
          : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          id="nav-logo"
          onClick={() => handleLinkClick("home")}
          className="flex flex-col items-start cursor-pointer group"
        >
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-wood-500 group-hover:text-wood-400 transition-colors duration-300">
            Alma del Bosque
          </span>
          <span className="text-[9px] tracking-[0.25em] font-mono text-zinc-400 uppercase group-hover:text-wood-300 transition-colors">
            Bariloche · Patagonia
          </span>
        </button>

        {/* Desktop Menu */}
        <div id="desktop-menu" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={`px-3 py-2 text-sm tracking-wide transition-all duration-300 rounded-md cursor-pointer hover:text-wood-500 ${
                activeSection === item.id
                  ? "text-wood-500 font-semibold"
                  : "text-zinc-300"
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            id="nav-btn-book"
            onClick={() => handleLinkClick("booking")}
            className="ml-4 px-5 py-2 text-[11px] font-semibold uppercase tracking-widest border border-wood-500 text-wood-500 rounded bg-transparent hover:bg-wood-500 hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-wood-500/20 cursor-pointer"
          >
            Book Your Stay
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:text-wood-400 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-drawer-backdrop"
        className={`fixed inset-0 top-[65px] bg-black/80 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          id="mobile-drawer-content"
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-full bg-[#0E0E0E] p-6 flex flex-col space-y-4 shadow-2xl border-l border-wood-800/10 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.94), rgba(10, 10, 10, 0.98)), url('https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=400')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-2 pt-6">
            <span className="text-xs tracking-[0.2em] text-wood-500 uppercase font-mono border-b border-wood-800/20 pb-2">
              Menu Navigation
            </span>
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`py-3 px-4 text-left text-lg tracking-wide rounded-md transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-wood-400 bg-wood-950/20 font-medium"
                    : "text-zinc-200 hover:bg-zinc-900/40 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              id="mobile-nav-btn-book"
              onClick={() => handleLinkClick("booking")}
              className="mt-6 w-full py-3.5 text-center text-sm font-semibold uppercase tracking-widest border border-wood-500 text-wood-500 rounded bg-transparent hover:bg-wood-500 hover:text-black transition-colors cursor-pointer"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
