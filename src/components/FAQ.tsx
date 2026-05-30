import { useState } from "react";
import { FAQS_DATA } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // keep first one open by default

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Everything you need to know about preparing your elite woodside stay, seasonal conditions, and booking guidelines.
          </p>
        </div>

        {/* 10-Item Accordion Layout */}
        <div id="faq-accordion-list" className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-zinc-900/15 border border-zinc-850/60 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Question Trigger Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  id={`faq-btn-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:text-wood-400 transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={18} className="text-wood-550 group-hover:scale-105 transition-transform" />
                    <span className="font-serif text-sm md:text-base font-semibold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Expand Chevron Tracker */}
                  <div className={`p-1.5 rounded-full bg-zinc-950 border border-zinc-850 text-zinc-400 transition-all ${
                    isOpen ? "rotate-180 text-wood-400 border-wood-800/30" : ""
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-zinc-900/50" : "max-h-0 pointer-events-none"
                  } overflow-hidden`}
                >
                  <div className="p-6 text-xs md:text-sm text-zinc-450 leading-relaxed font-sans bg-zinc-950/20">
                    <p className="mb-2 uppercase text-[9px] font-mono tracking-wider text-wood-500">
                      Category: {faq.category} · Alma del Bosque Policy
                    </p>
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
