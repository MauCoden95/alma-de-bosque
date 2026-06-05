import { useState, useEffect } from "react";
import { GALLERY_DATA } from "../data";
import { X, ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  const categories = [
    { label: t.gallery.categories.All || "All Photos", value: "all" },
    { label: t.gallery.categories.Cabins || "Cabins", value: "Cabins" },
    { label: t.gallery.categories.Interiors || "Interiors", value: "Interiors" },
    { label: t.gallery.categories.Forest || "Forest", value: "Forest" },
    { label: t.gallery.categories["Snow Season"] || "Snow Season", value: "Snow Season" },
    { label: t.gallery.categories["Summer Activities"] || "Summer Activities", value: "Summer Activities" }
  ];

  // Filter gallery items
  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            {t.gallery.badge}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            {t.gallery.subtitle}
          </p>

          {/* Categories Tab selectors */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`gallery-cat-${cat.value.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setLightboxIndex(null); // reset lightbox state
                }}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 border cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-forest-600 text-white border-forest-500 font-bold"
                    : "bg-[#101010] text-[#8C8C8C] border-zinc-850 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* CSS Columns - Masonry Grid */}
        <div
          id="gallery-masonry"
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative rounded-xl overflow-hidden border border-zinc-900 group cursor-pointer shadow-lg hover:shadow-2xl hover:border-wood-500/20 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={t.gallery.titles[item.title] || item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Fade Overlay with Hover details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="text-[9px] font-mono uppercase text-wood-400 tracking-wider mb-1">
                  {t.gallery.categories[item.category] || item.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white mb-2 leading-tight">
                  {t.gallery.titles[item.title] || item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                  <Maximize2 size={12} className="text-wood-500" />
                  <span>{t.gallery.expand}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX FULLSCREEN MODAL */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 bg-black/98 z-50 flex flex-col justify-between p-6 cursor-default select-none animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between text-zinc-400 text-sm z-50 relative w-full max-w-7xl mx-auto pt-2">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#888]">
                {t.gallery.categories[filteredItems[lightboxIndex].category] || filteredItems[lightboxIndex].category}
              </span>
              <p className="font-serif text-lg font-medium text-white mt-1">
                {t.gallery.titles[filteredItems[lightboxIndex].title] || filteredItems[lightboxIndex].title}
              </p>
            </div>
            
            {/* Action Group */}
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-zinc-500">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <button
                id="lightbox-close"
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-white hover:text-wood-400 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          {/* Core Image Display & Navigation Arrows */}
          <div className="relative flex-grow flex items-center justify-center py-6 w-full max-w-7xl mx-auto z-40">
            {/* Left Prev Arrow Button */}
            <button
              id="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-0 md:left-4 p-3 bg-zinc-950/40 hover:bg-zinc-900 rounded-full text-white border border-zinc-800/50 hover:text-wood-400 hover:border-wood-500/20 lg:-translate-x-1/2 transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              <ArrowLeft size={24} />
            </button>

            {/* Central High quality image */}
            <img
              src={filteredItems[lightboxIndex].image}
              alt={t.gallery.titles[filteredItems[lightboxIndex].title] || filteredItems[lightboxIndex].title}
              className="max-h-[72vh] max-w-full md:max-w-[78vw] object-contain rounded-lg border border-zinc-900 shadow-2xl scale-98 transition-transform duration-500"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />

            {/* Right Next Arrow Button */}
            <button
              id="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-0 md:right-4 p-3 bg-zinc-950/40 hover:bg-zinc-900 rounded-full text-white border border-zinc-800/50 hover:text-wood-400 hover:border-wood-500/20 lg:translate-x-1/2 transition-all cursor-pointer"
              aria-label="Next Image"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Footer Bar */}
          <div className="text-center text-[10px] text-zinc-500 font-mono tracking-widest uppercase z-50 py-3 block">
            {lang === "es"
              ? "Haga clic fuera de la imagen o presione ESC para cerrar"
              : lang === "pt"
              ? "Clique fora da imagem ou pressione ESC para fechar"
              : "Click outside image or press ESC to dismiss projection"}
          </div>
        </div>
      )}
    </section>
  );
}
