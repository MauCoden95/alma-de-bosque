import { AMENITIES_DATA } from "../data";
import IconMapper from "./IconMapper";

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20 relative overflow-hidden">
      {/* Decorative Forest Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-950/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            Pure Patagonian Comfort
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            World-Class Amenities
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Equipped with modern elite technology, premium natural details, and personalized boutique services to guarantee absolute peace.
          </p>
        </div>

        {/* 12-Item Bento Grid Layout */}
        <div
          id="amenities-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {AMENITIES_DATA.map((amenity) => (
            <div
              key={amenity.id}
              id={`amenity-item-${amenity.id}`}
              className="bg-zinc-900/20 border border-zinc-800/60 hover:border-wood-550/30 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Icon Container with glowing golden background on hover */}
              <div className="w-12 h-12 rounded-lg bg-wood-950/20 border border-wood-800/10 flex items-center justify-center mb-4 text-wood-400 group-hover:bg-wood-500 group-hover:text-black transition-all duration-500">
                <IconMapper name={amenity.iconName} size={22} className="transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-medium text-white mb-2 group-hover:text-wood-400 transition-colors">
                {amenity.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
