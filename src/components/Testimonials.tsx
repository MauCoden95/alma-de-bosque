import { useState } from "react";
import { TESTIMONIALS_DATA } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Show 1 review at a time on mobile, but let's slide through all 6 step-by-step
  const maxSlides = TESTIMONIALS_DATA.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === maxSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A] border-b border-wood-950/20 relative overflow-hidden">
      {/* Visual Ambiance Backdrop Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-wood-950/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-wood-500 uppercase block mb-3">
            Guest Chronicles
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Guest Testimonials
          </h2>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Read letters from those who wandered into our Patagonian forest sanctuary and discovered the quiet majesty of Alma del Bosque.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide Card */}
          <div
            id="testimonial-active-slide"
            className="bg-zinc-900/35 border border-wood-850/10 rounded-2xl p-8 md:p-12 shadow-2xl relative"
          >
            {/* Quote Icon watermark */}
            <Quote className="absolute top-8 right-8 text-wood-800/10 w-24 h-24 -z-10" />

            {/* Testimonial Core */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Guest Profile Photo */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border border-wood-500/20 flex-shrink-0">
                <img
                  src={TESTIMONIALS_DATA[activeIndex].image}
                  alt={TESTIMONIALS_DATA[activeIndex].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Guest Review Details */}
              <div className="flex-grow">
                {/* 5-Star Indicator */}
                <div id="stars-row" className="flex gap-1 mb-4">
                  {Array.from({ length: TESTIMONIALS_DATA[activeIndex].rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-wood-400 fill-wood-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-zinc-200 text-sm md:text-base leading-relaxed italic font-serif mb-6">
                  "{TESTIMONIALS_DATA[activeIndex].reviewText}"
                </blockquote>

                {/* Guest Author Footer */}
                <div className="flex flex-col">
                  <cite className="font-sans text-sm font-semibold text-white uppercase tracking-wider not-italic">
                    {TESTIMONIALS_DATA[activeIndex].name}
                  </cite>
                  <span className="text-xs text-wood-450 tracking-wide font-mono mt-0.5">
                    Verified Lodge Guest · {TESTIMONIALS_DATA[activeIndex].country}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Left/Right Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-20 z-20">
            <button
              id="review-carousel-prev"
              onClick={handlePrev}
              className="p-3 bg-zinc-950 border border-zinc-800 hover:border-wood-400 rounded-full text-white hover:text-wood-400 transition-colors cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-20 z-20">
            <button
              id="review-carousel-next"
              onClick={handleNext}
              className="p-3 bg-zinc-950 border border-zinc-800 hover:border-wood-400 rounded-full text-white hover:text-wood-400 transition-colors cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div id="review-dots-container" className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              id={`review-dot-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "bg-wood-400 w-6" : "bg-zinc-800 hover:bg-zinc-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
