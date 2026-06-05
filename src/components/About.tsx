import { STATS } from "../data";
import { Award, Shield, Timer, Cloud } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const statIcons = [
    <Award className="text-wood-400 mb-1" size={24} />,
    <Shield className="text-wood-400 mb-1" size={24} />,
    <Timer className="text-wood-400 mb-1" size={24} />,
    <Cloud className="text-wood-400 mb-1" size={24} />
  ];

  const translatedStats = STATS.map((stat, i) => {
    const labels = [
      t.about.stats.cabins,
      t.about.stats.rating,
      t.about.stats.location,
      t.about.stats.wifi
    ];
    return {
      value: stat.value,
      label: labels[i] || stat.label
    };
  });

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20 relative">
      {/* Decorative subtle background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-forest-950/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-wood-950/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with layered wood overlay */}
          <div className="col-span-1 lg:col-span-6 space-y-4">
            <div className="relative group overflow-hidden rounded-2xl border border-wood-800/10 shadow-2xl">
              {/* Inner ambient frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-clear to-clear z-10" />
              <img
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800"
                alt="Cozy cabin camp fire at Alma del Bosque"
                className="w-full h-[380px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating luxury badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-md px-5 py-3 rounded-lg border border-wood-800/20">
                <p className="text-xs font-mono text-wood-400 uppercase tracking-widest mb-1">{t.about.badge}</p>
                <p className="text-sm font-serif text-white font-medium">Circuito Chico, Bariloche</p>
              </div>
            </div>

            {/* Sub-image grid representation */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-24 sm:h-32 border border-wood-800/10">
                <img
                  src="https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=500"
                  alt="Patagonian wood lodge"
                  className="w-full h-full object-cover relative"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-24 sm:h-32 border border-wood-800/10">
                <img
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=500"
                  alt="Scenic winter landscape"
                  className="w-full h-full object-cover relative"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Stats */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            {/* Visual Accent */}
            <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase mb-3">
              {t.about.badge}
            </span>
            
            {/* Title */}
            <h2
              id="about-title"
              className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6"
            >
              {t.about.title}
            </h2>

            {/* Context Narrative */}
            <p className="text-zinc-300 font-sans leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-8">
              {t.about.p2}
            </p>

            {/* Bento Statistics Grid */}
            <div
              id="about-stats-grid"
              className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-850/40"
            >
              {translatedStats.map((stat, i) => (
                <div
                  key={stat.label}
                  id={`stat-card-${i}`}
                  className="bg-zinc-900/40 border border-wood-800/10 hover:border-wood-500/30 transition-all duration-300 p-4 rounded-xl flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-wood-950/30 border border-wood-800/20 group-hover:bg-wood-500/10 transition-colors">
                    {statIcons[i]}
                  </div>
                  <div>
                    <span className="block font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-wood-400 transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs text-zinc-400 tracking-wide font-sans mt-0.5 block">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
