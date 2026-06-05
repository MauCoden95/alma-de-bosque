import { EXPERIENCES_DATA } from "../data";
import { Compass, Calendar } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Experiences() {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            {t.experiences.badge}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            {t.experiences.title}
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            {t.experiences.subtitle}
          </p>
        </div>

        {/* Grid Layout */}
        <div
          id="experiences-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {EXPERIENCES_DATA.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="bg-zinc-900/10 border border-zinc-900 hover:border-wood-550/20 hover:bg-zinc-900/30 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col"
            >
              {/* Image with zoom effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={t.experiences.data[exp.id]?.name || exp.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-black/75 px-2.5 py-1 rounded text-[9px] font-mono tracking-widest uppercase text-wood-400 border border-wood-800/20">
                  {t.experiences.categories[exp.category] || exp.category}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-medium text-white mb-2.5 group-hover:text-wood-400 transition-colors">
                    {t.experiences.data[exp.id]?.name || exp.name}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                    {t.experiences.data[exp.id]?.description || exp.description}
                  </p>
                </div>

                {/* Micro CTA */}
                <div className="mt-5 pt-4 border-t border-zinc-850/30 flex items-center justify-between text-zinc-500 text-[10px] tracking-wider uppercase font-mono">
                  <span className="flex items-center gap-1">
                    <Compass size={11} className="text-wood-500" /> {t.experiences.season}
                  </span>
                  <span className="hover:text-wood-400 transition-colors cursor-pointer flex items-center gap-1 font-semibold text-wood-500">
                    {t.experiences.askLodge} <Calendar size={10} />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
