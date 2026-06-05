import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../i18n/LanguageSwitcher";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.cabins, id: "cabins" },
    { label: t.nav.amenities, id: "amenities" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.experiences, id: "experiences" },
    { label: t.nav.reviews, id: "reviews" },
    { label: t.nav.faq, id: "faq" },
    { label: t.nav.contact, id: "contact" }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "pt-3 pb-3 max-lg:pb-6 shadow-2xl border-b border-wood-500/20 bg-zinc-950/95"
          : "pt-5 pb-5 max-lg:pb-8 bg-transparent"
      }`}
      style={{
        backgroundImage: isScrolled || isMobileMenuOpen
          ? "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(27, 48, 34, 0.85))"
          : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="relative z-[60] max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          id="nav-logo"
          onClick={() => handleLinkClick("home")}
          className="flex shrink-0 flex-col items-start gap-1 cursor-pointer group mr-6 lg:mr-10"
        >
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-wood-500 group-hover:text-wood-400 transition-colors duration-300 whitespace-nowrap">
            Alma del Bosque
          </span>
          <span className="text-[9px] tracking-[0.25em] font-mono text-zinc-400 uppercase group-hover:text-wood-300 transition-colors whitespace-nowrap">
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
            {t.nav.book}
          </button>

          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:text-wood-400 transition-colors cursor-pointer rounded-md border border-transparent hover:border-white/10"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        id="mobile-drawer-content"
        className={`fixed inset-0 z-40 flex flex-col overflow-hidden transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.94), rgba(10, 10, 10, 0.98)), url('https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=400')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          className="flex flex-1 min-h-0 flex-col space-y-1 overflow-y-auto overscroll-contain px-6 pb-8"
          style={{ paddingTop: isScrolled || isMobileMenuOpen ? 78 : 92 }}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={`py-2.5 px-4 text-left text-base tracking-wide rounded-md transition-colors duration-300 cursor-pointer ${
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
            className="mt-4 w-full py-3 text-center text-sm font-semibold uppercase tracking-widest border border-wood-500 text-wood-500 rounded bg-transparent hover:bg-wood-500 hover:text-black transition-colors cursor-pointer"
          >
            {t.nav.book}
          </button>

          <span className="text-xs tracking-[0.2em] text-wood-500 uppercase font-mono border-b border-wood-800/20 pb-2 mt-4">
            {t.nav.language}
          </span>
          <LanguageSwitcher
            variant="mobile"
            onSelect={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}
