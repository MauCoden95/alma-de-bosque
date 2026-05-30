import { useState } from "react";
import { CABINS_DATA } from "../data";
import { Users, Maximize, ArrowRight, Star } from "lucide-react";

interface CabinsProps {
  onSelectCabin: (cabinId: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Cabins({ onSelectCabin, onNavigate }: CabinsProps) {
  const [filter, setFilter] = useState("all"); // "all", "couples", "families"

  const filteredCabins = CABINS_DATA.filter((cabin) => {
    if (filter === "couples") return cabin.capacity <= 2;
    if (filter === "families") return cabin.capacity >= 4;
    return true;
  });

  const handleBookNow = (cabinId: string) => {
    onSelectCabin(cabinId);
    onNavigate("booking");
  };

  return (
    <section id="cabins" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            Lodging Collections
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Our Featured Cabins
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Every lodge is designed as an architectural response to the woods. Indulge in premium native materials, absolute comfort, and infinite alpine scenery.
          </p>

          {/* Elegant Cabin Filters */}
          <div className="flex justify-center gap-2 mt-8">
            {[
              { label: "All Cabins", value: "all" },
              { label: "Couples & Suites", value: "couples" },
              { label: "Family & Lodges", value: "families" }
            ].map((tab) => (
              <button
                key={tab.value}
                id={`cabin-filter-${tab.value}`}
                onClick={() => setFilter(tab.value)}
                className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                  filter === tab.value
                    ? "bg-wood-500 text-black border-wood-400 font-bold shadow-lg shadow-wood-900/10"
                    : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cabins Responsive Grid */}
        <div
          id="cabins-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCabins.map((cabin) => (
            <div
              key={cabin.id}
              id={`cabin-card-${cabin.id}`}
              className="bg-zinc-900/30 border border-wood-850/10 hover:border-wood-500/30 rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-wood-800/20">
                  <span className="block font-serif text-lg font-bold text-white">${cabin.price}</span>
                  <span className="block text-[8px] tracking-widest uppercase font-mono text-zinc-400 mt-0.5 text-right">per night</span>
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-forest-500/30 flex items-center gap-1.5 text-white">
                  <Star size={11} className="text-wood-400 fill-wood-400" />
                  <span className="text-[10px] tracking-widest font-mono font-bold">4.9 / 5</span>
                </div>
              </div>

              {/* Cabin Metadata & Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Headline Info */}
                <div className="flex items-center justify-between mb-3 border-b border-zinc-850/30 pb-3">
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-wood-400 transition-colors">
                    {cabin.name}
                  </h3>
                  <div className="flex items-center gap-3 text-zinc-400 text-xs font-mono">
                    <span className="flex items-center gap-1.5">
                      <Users size={13} className="text-wood-500" /> up to {cabin.capacity}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="flex items-center gap-1.5">
                      <Maximize size={13} className="text-wood-500" /> {cabin.size}m²
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-xs font-sans leading-relaxed flex-grow mb-5">
                  {cabin.description}
                </p>

                {/* Amenities Badges / Previews */}
                <div className="mb-6">
                  <span className="text-[9px] tracking-widest font-mono uppercase text-zinc-500 block mb-2">Featured Amenities</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cabin.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2.5 py-1 rounded bg-[#101010] border border-zinc-850 text-[10px] text-zinc-300 font-sans tracking-wide"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Block */}
                <button
                  id={`cabin-book-btn-${cabin.id}`}
                  onClick={() => handleBookNow(cabin.id)}
                  className="w-full mt-auto py-3 bg-transparent border border-wood-700 hover:border-wood-500 text-wood-400 hover:text-white hover:bg-wood-700/80 transition-all duration-300 rounded-lg text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book this Cabin
                  <ArrowRight size={13} className="text-wood-400 group-hover:translate-x-1.5 transition-all text-wood-400 group-hover:text-white" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
