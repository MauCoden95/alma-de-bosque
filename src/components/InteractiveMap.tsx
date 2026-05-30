import { useState } from "react";
import { MAP_ATTRACTIONS } from "../data";
import { MapPin, Navigation, Info, Car } from "lucide-react";

export default function InteractiveMap() {
  const [selectedSpot, setSelectedSpot] = useState(MAP_ATTRACTIONS[4]); // default to Alma del Bosque

  return (
    <section id="map-section" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            Patagonian Coordinates
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Where We Are located
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Secluded in protected tranquility inside Circuito Chico, yet positioned right near the major attractions, ski slopes, and airport hubs of San Carlos de Bariloche.
          </p>
        </div>

        {/* Split Layout: Interactive Sidepanel & Google Map Frame */}
        <div id="map-grid-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Attractions List & Detail Widget */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-zinc-900/30 border border-wood-850/10 p-6 rounded-2xl flex flex-col space-y-4">
              <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase block">
                Local Attraction Navigator
              </span>
              
              {/* Attraction Button List */}
              <div className="flex flex-col space-y-2">
                {MAP_ATTRACTIONS.map((spot) => (
                  <button
                    key={spot.name}
                    id={`map-spot-btn-${spot.name.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => setSelectedSpot(spot)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-lg text-left transition-all duration-300 border cursor-pointer ${
                      selectedSpot.name === spot.name
                        ? "bg-wood-950/20 border-wood-500/45 text-white"
                        : "bg-[#101010]/55 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        size={16}
                        className={spot.isCore ? "text-forest-400 fill-forest-400" : "text-wood-400"}
                      />
                      <div>
                        <span className="text-sm font-medium block leading-tight">{spot.name}</span>
                        <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">{spot.type}</span>
                      </div>
                    </div>
                    {spot.isCore ? (
                      <span className="text-[8px] tracking-widest bg-forest-950 border border-forest-500/20 px-2 py-0.5 rounded font-mono uppercase text-forest-300">
                        Our Lodge
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-wood-500">{spot.distance} away</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Spot Details Showcase */}
            <div className="bg-zinc-950 border border-wood-850/20 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wood-950/10 rounded-full filter blur-xl -z-10" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-wood-500/10 rounded-lg border border-wood-550/20 text-wood-400">
                  <Navigation size={20} className="animate-pulse" />
                </div>
                <div className="space-y-2 flex-grow">
                  <span className="text-[9px] font-mono tracking-widest text-wood-400 uppercase">
                    Attraction Details
                  </span>
                  <h3 className="font-serif text-lg font-medium text-white">
                    {selectedSpot.name}
                  </h3>
                  <p className="text-zinc-450 text-xs leading-relaxed font-sans">
                    {selectedSpot.description}
                  </p>
                  
                  {!selectedSpot.isCore && (
                    <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                      <Car size={13} className="text-wood-500" />
                      <span>Estimated travel time: {parseInt(selectedSpot.distance) * 2} minutes by car</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Embedded Map Frame */}
          <div className="col-span-1 lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl relative h-[450px] lg:h-auto min-h-[400px]">
            {/* Embed an exquisite Google Map centered on Bariloche with a subtle dark mask filter for premium luxury design integration */}
            <iframe
              id="bariloche-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188235.68822606543!2d-71.4939223!3d-41.1334752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615a13dfd59cb65%3A0x9597f7422f7cc4b2!2sSan%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro%2C%20Argentina!5e0!3m2!1sen!2sus!4v1717006000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(85%) invert(95%) contrast(100%) opacity(85%)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Bariloche Map Embed"
            ></iframe>
            
            {/* Overlay badge to remind user of the actual location */}
            <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest-400" />
              <span className="text-xs text-white font-mono uppercase tracking-wider">Map Loaded Offline-Secure</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
