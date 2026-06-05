import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cabins from "./components/Cabins";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Experiences from "./components/Experiences";
import Testimonials from "./components/Testimonials";
import InteractiveMap from "./components/InteractiveMap";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [bookingPrefills, setBookingPrefills] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2 as number,
    cabinId: ""
  });

  const trackableSections = [
    "home",
    "cabins",
    "amenities",
    "gallery",
    "experiences",
    "reviews",
    "faq",
    "contact",
    "booking"
  ];

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const navbarHeight = 84;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth"
    });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let topVisible: { id: string; ratio: number } | null = null;

        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const sectionId = entry.target.getAttribute("id");
          if (!sectionId) {
            continue;
          }

          if (!topVisible || entry.intersectionRatio > topVisible.ratio) {
            topVisible = { id: sectionId, ratio: entry.intersectionRatio };
          }
        }

        if (topVisible) {
          setActiveSection(topVisible.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.75],
        rootMargin: "-25% 0px -50% 0px"
      }
    );

    for (const sectionId of trackableSections) {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, []);

  const handleSearchStay = (params: { checkIn: string; checkOut: string; guests: number }) => {
    setBookingPrefills((prev) => ({
      ...prev,
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      guests: params.guests
    }));
  };

  const handleSelectCabin = (cabinId: string) => {
    setBookingPrefills((prev) => ({
      ...prev,
      cabinId
    }));
  };

  const handleClearPrefills = () => {
    setBookingPrefills({
      checkIn: "",
      checkOut: "",
      guests: 2,
      cabinId: ""
    });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-wood-500 selection:text-black">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:wood-border"
        >
          Skip to main content
        </a>

        <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

        <main id="main-content">
          <Hero onNavigate={handleNavigate} onSearchStay={handleSearchStay} />
          <About />
          <Cabins onSelectCabin={handleSelectCabin} onNavigate={handleNavigate} />
          <Amenities />
          <Gallery />
          <Experiences />
          <Testimonials />
          <InteractiveMap />
          <FAQ />
          <BookingForm prefilledParams={bookingPrefills} onClearPrefills={handleClearPrefills} />
          <Contact />
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}
