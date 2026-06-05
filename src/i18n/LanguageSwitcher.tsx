import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage, type Language } from "./LanguageContext";
import { LANGUAGE_OPTIONS, LanguageFlag } from "./flags";

interface LanguageSwitcherProps {
  onSelect?: () => void;
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({ onSelect, variant = "desktop" }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLang(code);
    setIsOpen(false);
    onSelect?.();
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-col space-y-1 pt-2">
        {LANGUAGE_OPTIONS.map(({ code, label, Flag }) => (
          <button
            key={code}
            type="button"
            onClick={() => handleSelect(code)}
            className={`flex items-center gap-3 text-left py-2.5 px-3 rounded transition-colors focus:outline-none cursor-pointer ${
              lang === code
                ? "text-wood-400 bg-wood-950/10 font-semibold"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/20"
            }`}
          >
            <Flag className="w-6 h-4" />
            <span className="font-mono tracking-widest text-sm">{label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative border-l border-zinc-800 pl-4 ml-4">
      <button
        type="button"
        id="nav-lang-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-300 hover:text-wood-400 transition-colors rounded-md cursor-pointer focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <LanguageFlag lang={lang} className="w-5 h-3.5" />
        <span className="font-mono tracking-widest text-xs uppercase">{lang === "en" ? "EN" : lang === "es" ? "ES" : "PT"}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[120px] bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl py-1 z-[60] overflow-hidden"
        >
          {LANGUAGE_OPTIONS.map(({ code, label, Flag }) => (
            <li key={code} role="option" aria-selected={lang === code}>
              <button
                type="button"
                onClick={() => handleSelect(code)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                  lang === code
                    ? "bg-wood-950/30 text-wood-400 font-semibold"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Flag className="w-5 h-3.5" />
                <span className="font-mono tracking-widest text-xs">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
