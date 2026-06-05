export interface TranslationType {
  nav: {
    home: string;
    cabins: string;
    amenities: string;
    gallery: string;
    experiences: string;
    reviews: string;
    faq: string;
    contact: string;
    book: string;
    menu: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    searchBtn: string;
    exploreBtn: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    stats: {
      cabins: string;
      rating: string;
      location: string;
      wifi: string;
    };
  };
  cabins: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterCouples: string;
    filterFamilies: string;
    perNight: string;
    featuredAmenities: string;
    bookBtn: string;
    capacity: string;
    size: string;
    data: {
      [key: string]: {
        description: string;
      };
    };
  };
  amenities: {
    badge: string;
    title: string;
    subtitle: string;
    data: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      [key: string]: string;
    };
    titles: {
      [key: string]: string;
    };
    expand: string;
  };
  experiences: {
    badge: string;
    title: string;
    subtitle: string;
    season: string;
    askLodge: string;
    categories: {
      [key: string]: string;
    };
    data: {
      [key: string]: {
        name: string;
        description: string;
      };
    };
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    verified: string;
    countries: {
      [key: string]: string;
    };
    data: {
      [key: string]: string; // reviewText translations
    };
  };
  map: {
    badge: string;
    title: string;
    subtitle: string;
    navTitle: string;
    detailsTitle: string;
    ourLodge: string;
    away: string;
    travelTime: string;
    loaded: string;
    types: {
      [key: string]: string;
    };
    data: {
      [key: string]: {
        description: string;
      };
    };
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    policyTitle: string;
    categoryPrefix: string;
    categories: {
      [key: string]: string;
    };
    data: {
      [key: string]: {
        question: string;
        answer: string;
      };
    };
  };
  booking: {
    badge: string;
    title: string;
    subtitle: string;
    successTitle: string;
    refLabel: string;
    leadGuest: string;
    cabinChoice: string;
    duration: string;
    totalPrice: string;
    successMsg: string;
    anotherBtn: string;
    c1_title: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    c2_title: string;
    arrivalLabel: string;
    departureLabel: string;
    cabinTypeLabel: string;
    guestsCountLabel: string;
    guest: string;
    guests: string;
    maxGuests: string;
    c3_title: string;
    specialLabel: string;
    specialPlaceholder: string;
    submitBtn: string;
    processing: string;
    submitError: string;
    pricingSummary: string;
    baseFare: string;
    rateCalculation: string;
    night: string;
    nights: string;
    subtotal: string;
    taxLabel: string;
    levyLabel: string;
    levyFree: string;
    totalEstCost: string;
    taxIncluded: string;
    awaitingTitle: string;
    awaitingMsg: string;
    guarantee: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    location: string;
    address: string;
    phoneDesk: string;
    whatsapp: string;
    followStories: string;
    formHint: string;
    successTitle: string;
    anotherMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sending: string;
    successMsg: string;
    errorMsg: string;
  };
  footer: {
    desc: string;
    explore: string;
    social: string;
    newsletter: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    subscribeBtn: string;
    newsletterSuccess: string;
    legal: string;
    privacy: string;
    terms: string;
    bookingConditions: string;
    localRegulations: string;
    cookies: string;
    rights: string;
    copyright: string;
  };
}

export const translations: Record<'en' | 'es' | 'pt', TranslationType> = {
  en: {
    nav: {
      home: "Home",
      cabins: "Cabins",
      amenities: "Amenities",
      gallery: "Gallery",
      experiences: "Experiences",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      book: "Book Your Stay",
      menu: "Menu Navigation",
      language: "Language"
    },
    hero: {
      badge: "Exclusive Forest Lodges",
      title: "Immersive Wilderness Luxury",
      subtitle: "Experience raw Patagonian nature from the absolute comfort of architecturally curated boutique cabins.",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      guests: "Guests",
      searchBtn: "Search Stay",
      exploreBtn: "Explore Cabins"
    },
    about: {
      badge: "The Sanctuary",
      title: "Where Luxury Meets Primitive Forest",
      p1: "Alma del Bosque is an architecturally designed boutique lodge sanctuary located in the legendary Circuito Chico region of Bariloche. Surrounded by centuries-old Coihue and Lenga forests, we offer an intimate escape for travelers looking to reconnect with nature without sacrificing modern sophistication.",
      p2: "Each cabin is crafted using locally sourced stone and native woods, featuring expansive windows that integrate the wilderness into your living space. From the crackle of handcrafted fireplaces to the soothing warmth of outdoor hot tubs, we provide a curated sanctuary in the Patagonian Andes.",
      stats: {
        cabins: "Premium Cabins",
        rating: "Guest Rating",
        location: "From Downtown",
        wifi: "Wi-Fi & Parking"
      }
    },
    cabins: {
      badge: "Lodge Sanctum",
      title: "Curated Cabin Selection",
      subtitle: "Each lodge is isolated, architecturally unique, and fully serviced. Pick the perfect refuge for your Patagonian escape.",
      filterAll: "All Cabins",
      filterCouples: "For Couples (2 Guests)",
      filterFamilies: "For Families / Groups (4+ Guests)",
      perNight: "per night",
      featuredAmenities: "Featured Amenities",
      bookBtn: "Book this Cabin",
      capacity: "Guests",
      size: "m²",
      data: {
        "arrayan-suite": {
          description: "Intimate hideaway designed for couples, with floor-to-ceiling forest views, a private deck, and a handcrafted stone fireplace."
        },
        "coihue-premium": {
          description: "Warm alpine cabin with two bedrooms, full kitchen, private BBQ deck, and oversized windows facing the native Patagonian forest."
        },
        "lenga-deluxe": {
          description: "A deluxe retreat with panoramic mountain views, spa-style bathroom, curated interior design, and premium concierge services."
        },
        "cipres-family-cabin": {
          description: "Spacious two-level cabin for families with three bedrooms, generous social areas, large terrace, and private parking access."
        },
        "patagonia-retreat": {
          description: "Signature cabin with elevated forest perspective, outdoor hot tub, premium bedding, and minimalist luxury inspired by Patagonia."
        },
        "bosque-luxury-lodge": {
          description: "Our most exclusive lodge with expansive living areas, private wellness space, chef-ready kitchen, and high-end bespoke services."
        }
      }
    },
    amenities: {
      badge: "Resort Luxuries",
      title: "Bespoke Services & Features",
      subtitle: "Enjoy premium comforts designed to elevate your stay, blending wilderness immersion with boutique hotel services.",
      data: {
        wifi: {
          title: "High-speed Wi-Fi",
          description: "Reliable high-speed internet in every cabin for streaming, remote work, and calls."
        },
        parking: {
          title: "Private parking",
          description: "Each cabin includes on-site private parking with easy access and 24/7 security."
        },
        fireplace: {
          title: "Fireplace",
          description: "Warm stone fireplaces with native wood for cozy nights after mountain adventures."
        },
        kitchen: {
          title: "Full kitchen",
          description: "Fully equipped kitchens with premium appliances, cookware, and dining essentials."
        },
        bbq: {
          title: "BBQ area",
          description: "Traditional Patagonian grill spaces on private decks surrounded by the forest."
        },
        tv: {
          title: "Smart TV",
          description: "Smart TVs with streaming apps and local channels in all premium cabins."
        },
        views: {
          title: "Mountain views",
          description: "Privileged views to the Andes and native woodlands from selected cabin terraces."
        },
        hottub: {
          title: "Hot tub",
          description: "Outdoor hot tubs available in selected units for an immersive forest spa experience."
        },
        heating: {
          title: "Heating",
          description: "Powerful heating systems designed for winter comfort during the snow season."
        },
        petfriendly: {
          title: "Pet-friendly cabins",
          description: "Dedicated pet-friendly options so guests can travel with their companions."
        },
        breakfast: {
          title: "Breakfast service",
          description: "Daily breakfast service with artisanal products from Patagonia."
        },
        housekeeping: {
          title: "Housekeeping",
          description: "Daily housekeeping to keep each cabin fresh, organized, and ready to enjoy."
        }
      }
    },
    gallery: {
      badge: "Visual Almanac",
      title: "Lodge & Landscape Gallery",
      subtitle: "A visual tour of our private architecture, cozy interiors, and the surrounding ancient forest across seasons.",
      categories: {
        All: "All Photos",
        Cabins: "Cabins",
        Interiors: "Interiors",
        Forest: "Forest",
        "Snow Season": "Snow Season",
        "Summer Activities": "Summer Activities"
      },
      titles: {
        "Forest Cabin Exterior": "Forest Cabin Exterior",
        "Warm Interior with Fireplace": "Warm Interior with Fireplace",
        "Patagonian Forest Trails": "Patagonian Forest Trails",
        "Cabins During Snow Season": "Cabins During Snow Season",
        "Kayaking on Nahuel Huapi": "Kayaking on Nahuel Huapi",
        "Luxury Bedroom Details": "Luxury Bedroom Details",
        "Deck with Mountain Light": "Deck with Mountain Light",
        "Ancient Coihue Forest": "Ancient Coihue Forest",
        "Winter Lodge Atmosphere": "Winter Lodge Atmosphere",
        "Summer Hiking Adventures": "Summer Hiking Adventures"
      },
      expand: "Expand Photo"
    },
    experiences: {
      badge: "Wilderness Excursions",
      title: "Authentic Patagonian Experiences",
      subtitle: "Discover Bariloche's majestic nature and local secrets. Our concierge can customize any of these activities for you.",
      season: "Seasons: Year-round",
      askLodge: "Ask Lodge Coordinator",
      categories: {
        Winter: "Winter",
        Nature: "Nature",
        Adventure: "Adventure",
        Outdoor: "Outdoor",
        "Local Culture": "Local Culture",
        Sightseeing: "Sightseeing",
        Gastronomy: "Gastronomy"
      },
      data: {
        "exp-1": {
          name: "Cerro Catedral skiing",
          description: "World-class ski terrain with stunning views and options for all levels."
        },
        "exp-2": {
          name: "Hiking trails",
          description: "Guided and self-guided forest and mountain trails near Circuito Chico."
        },
        "exp-3": {
          name: "Kayaking",
          description: "Paddle in calm Patagonian lakes with mountain scenery all around."
        },
        "exp-4": {
          name: "Fishing",
          description: "Enjoy fly-fishing in local rivers and lakes with expert local guides."
        },
        "exp-5": {
          name: "Horseback riding",
          description: "Ride through forest routes and open landscapes with traditional gauchos."
        },
        "exp-6": {
          name: "Craft breweries",
          description: "Taste Bariloche’s signature craft beers and artisanal pairings."
        },
        "exp-7": {
          name: "Scenic viewpoints",
          description: "Discover breathtaking panoramic points around lakes and mountains."
        },
        "exp-8": {
          name: "Patagonian gastronomy",
          description: "Taste local lamb, trout, chocolates, and regional cuisine in selected restaurants."
        }
      }
    },
    reviews: {
      badge: "Guest Logs",
      title: "Shared Sanctuaries",
      subtitle: "Read about the stays, forest connections, and travel logs written by our recent visitors from around the world.",
      verified: "Verified Lodge Guest",
      countries: {
        Argentina: "Argentina",
        Brazil: "Brazil",
        "United Kingdom": "United Kingdom",
        Germany: "Germany",
        France: "France",
        Chile: "Chile"
      },
      data: {
        "rev-1": "The cabin design is beautiful and warm. We loved waking up to the forest view and ending the day in the hot tub.",
        "rev-2": "Excellent location near Circuito Chico and very peaceful. Service was attentive and everything felt premium.",
        "rev-3": "A perfect boutique lodge experience. Stylish interiors, spotless housekeeping, and incredible mountain scenery.",
        "rev-4": "Reliable internet, great heating, and quiet surroundings made this ideal for a mixed work and rest trip.",
        "rev-5": "The staff arranged amazing local experiences for us. Every detail felt curated and authentic to Patagonia.",
        "rev-6": "Great for ski season. Returning from Cerro Catedral to a warm cabin and fireplace was exactly what we wanted."
      }
    },
    map: {
      badge: "Regional Atlas",
      title: "Interactive Location Navigator",
      subtitle: "Explore our location in Circuito Chico and its proximity to Bariloche's main landmarks, outdoor spots, and services.",
      navTitle: "Local Attraction Navigator",
      detailsTitle: "Attraction Details",
      ourLodge: "Our Lodge",
      away: "away",
      travelTime: "Estimated travel time",
      loaded: "Map Loaded",
      types: {
        "Cabins": "Cabins",
        "City Landmark": "City Landmark",
        "Ski Center": "Ski Center",
        "Scenic Route": "Scenic Route",
        "Nature & Heritage": "Nature & Heritage",
        "Nature": "Nature",
        "Transport": "Transport"
      },
      data: {
        "Alma del Bosque": {
          description: "Your private forest retreat in the heart of Circuito Chico."
        },
        "Civic Center": {
          description: "Historic downtown area with shops, chocolatiers, and restaurants."
        },
        "Cerro Catedral": {
          description: "Iconic ski destination with runs, lifts, and mountain activities."
        },
        "Circuito Chico": {
          description: "One of Bariloche’s most beautiful panoramic drives and nature stops."
        },
        "Llao Llao": {
          description: "Landmark zone with incredible viewpoints, trails, and lake access."
        },
        "Nahuel Huapi Lake": {
          description: "Crystal-clear waters surrounded by mountains and native forest."
        },
        "Airport": {
          description: "Teniente Luis Candelaria International Airport with domestic connections."
        }
      }
    },
    faq: {
      badge: "Lodge Protocol",
      title: "Frequently Asked Questions",
      subtitle: "Understand check-in guidelines, cancellation rules, seasonal readiness, and services prior to your arrival.",
      policyTitle: "Alma del Bosque Policy",
      categoryPrefix: "Category",
      categories: {
        "Check-in": "Check-in",
        "Check-out": "Check-out",
        "Pets": "Pets",
        "Cancellations": "Cancellations",
        "Breakfast": "Breakfast",
        "Parking": "Parking",
        "Wi-Fi": "Wi-Fi",
        "Snow season": "Snow season",
        "Payment methods": "Payment methods",
        "Transportation": "Transportation"
      },
      data: {
        "faq-1": {
          question: "What time is check-in?",
          answer: "Check-in starts at 3:00 PM. Early check-in can be requested based on availability."
        },
        "faq-2": {
          question: "What time is check-out?",
          answer: "Check-out is at 11:00 AM. Late check-out is subject to occupancy and may have an extra fee."
        },
        "faq-3": {
          question: "Are pets allowed?",
          answer: "Yes, we offer selected pet-friendly cabins. Please mention your pet when booking."
        },
        "faq-4": {
          question: "What is the cancellation policy?",
          answer: "Free cancellation up to 30 days before arrival. Partial refunds apply between 30 and 15 days."
        },
        "faq-5": {
          question: "Is breakfast included?",
          answer: "Yes, breakfast service is included and delivered daily to your cabin."
        },
        "faq-6": {
          question: "Do you provide private parking?",
          answer: "Yes, all guests have free private parking near each cabin."
        },
        "faq-7": {
          question: "How good is the Wi-Fi?",
          answer: "Our high-speed Wi-Fi supports streaming, video calls, and remote work."
        },
        "faq-8": {
          question: "Are cabins prepared for snow season?",
          answer: "Yes, all cabins are winterized with quality insulation and robust heating systems."
        },
        "faq-9": {
          question: "Which payment methods do you accept?",
          answer: "We accept major credit cards, bank transfers, and secure online payment links."
        },
        "faq-10": {
          question: "Can you arrange airport transportation?",
          answer: "Yes, we can organize private airport transfers and local transportation on request."
        }
      }
    },
    booking: {
      badge: "Secure Booking Engine",
      title: "Book Your Retreat",
      subtitle: "Configure your stay, calculate your pricing summary in real time, and summon a dedicated Patagonian guest coordinator.",
      successTitle: "Your Booking Request is Verified",
      refLabel: "Reservation Reference",
      leadGuest: "Lead Guest",
      cabinChoice: "Cabin Choice",
      duration: "Stays Duration",
      totalPrice: "Total Price",
      successMsg: "We have dispatched your requested details to our guest host at Alma del Bosque. A coordinate response will be sent to your email or WhatsApp within 2 hours to confirm checking requirements and luxury transfer arrangements.",
      anotherBtn: "Book Another Session",
      c1_title: "1. Contact Details",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      phoneLabel: "Phone / WhatsApp Number",
      phonePlaceholder: "+54 9 11 1234-5678",
      c2_title: "2. Lodge Specifics",
      arrivalLabel: "Arrival Date (Check-in)",
      departureLabel: "Departure Date (Check-out)",
      cabinTypeLabel: "Select Cabin Type",
      guestsCountLabel: "Number of Guests",
      guest: "Guest",
      guests: "Guests",
      maxGuests: "Max",
      c3_title: "3. Additional Comments",
      specialLabel: "Special Requests & Services",
      specialPlaceholder: "Mention pet setups, private transfers, firewood replacements, dietary needs or customized excursions.",
      submitBtn: "Send Booking Request",
      processing: "Processing...",
      submitError: "There was an error submitting your booking. Please try again.",
      pricingSummary: "Stay Pricing Summary",
      baseFare: "Base Fare",
      rateCalculation: "Rate Calculation",
      night: "night",
      nights: "nights",
      subtotal: "Subtotal",
      taxLabel: "Patagonian IVA/VAT (21%)",
      levyLabel: "Local Resort Tourism Levy",
      levyFree: "Complimentary",
      totalEstCost: "Total Estimated cost",
      taxIncluded: "including all taxes",
      awaitingTitle: "Awaiting Stay Schedule",
      awaitingMsg: "Please configure your arrival and departure dates on the form to compute complete tax calculations and total rates.",
      guarantee: "Alma del Bosque guarantees premium rates, zero concealed resort commissions, and customized butler schedules for booking direct."
    },
    contact: {
      badge: "Lodge Host",
      title: "Reach Our Coordinator",
      subtitle: "Contact us directly for custom events, helicopter transfers, long-term retreats, or specific inquiries.",
      phone: "Phone / WhatsApp",
      email: "Direct Registry Email",
      location: "Our Location",
      address: "Avenida Bustillo Km 12.5 (Circuito Chico), San Carlos de Bariloche, Río Negro, Patagonia Argentina",
      phoneDesk: "Call Booking Desk",
      whatsapp: "Launch WhatsApp chat",
      followStories: "Follow our stories",
      formHint: "Write Your Comments",
      successTitle: "Message Dispatched",
      anotherMessage: "Write another message",
      nameLabel: "Full Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email Address",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "How can we help you?",
      messageLabel: "Message",
      messagePlaceholder: "Write your inquiry here...",
      submitBtn: "Send Inquiry",
      sending: "Sending...",
      successMsg: "Message sent! Our lodge host will contact you shortly.",
      errorMsg: "Error sending message. Please try again."
    },
    footer: {
      desc: "Architecturally curated luxury cabins designed for deep wilderness connection in Circuito Chico, Bariloche.",
      explore: "Explore",
      social: "Social",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe to unlock periodic private offers, mountain snow season updates, and direct booking perks.",
      newsletterPlaceholder: "Enter your email",
      subscribeBtn: "Subscribe",
      newsletterSuccess: "Thank you! You are subscribed.",
      legal: "Legal Info",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      bookingConditions: "Booking Conditions",
      localRegulations: "Local Regulations",
      cookies: "Cookie Settings",
      rights: "All rights reserved. Designed for deep wilderness connection.",
      copyright: "© 2026 Alma del Bosque – Bariloche, Patagonia Argentina"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      cabins: "Cabañas",
      amenities: "Servicios",
      gallery: "Galería",
      experiences: "Experiencias",
      reviews: "Reseñas",
      faq: "FAQ",
      contact: "Contacto",
      book: "Reservar Estadía",
      menu: "Menú de Navegación",
      language: "Idioma"
    },
    hero: {
      badge: "Cabañas de Bosque Exclusivas",
      title: "Lujo Inmersivo en la Naturaleza",
      subtitle: "Viva la naturaleza patagónica en su estado más puro con el confort absoluto de cabañas boutique de diseño arquitectónico.",
      checkIn: "Fecha de Entrada",
      checkOut: "Fecha de Salida",
      guests: "Huéspedes",
      searchBtn: "Buscar Estadía",
      exploreBtn: "Explorar Cabañas"
    },
    about: {
      badge: "El Santuario",
      title: "Donde el Lujo Encuentra el Bosque Primitivo",
      p1: "Alma del Bosque es un santuario de cabañas boutique de diseño arquitectónico situado en la legendaria región de Circuito Chico en Bariloche. Rodeados de bosques centenarios de Coihues y Lengas, ofrecemos una escapada íntima para viajeros que buscan reconectarse con la naturaleza sin renunciar a la sofisticación moderna.",
      p2: "Cada cabaña está construida con piedra de la zona y maderas nativas, con amplios ventanales que integran el paisaje en su espacio habitable. Desde el crujido de las chimeneas artesanales hasta la calidez relajante de los jacuzzis al aire libre, brindamos un santuario curado en los Andes patagónicos.",
      stats: {
        cabins: "Cabañas Premium",
        rating: "Calificación",
        location: "Desde el Centro",
        wifi: "Wi-Fi y Estacionamiento Gratis"
      }
    },
    cabins: {
      badge: "Santuario del Lodge",
      title: "Nuestra Selección de Cabañas",
      subtitle: "Cada cabaña es independiente, arquitectónicamente única y con servicio completo. Elija el refugio perfecto para su escapada patagónica.",
      filterAll: "Todas las Cabañas",
      filterCouples: "Para Parejas (2 Huéspedes)",
      filterFamilies: "Para Familias / Grupos (4+ Huéspedes)",
      perNight: "por noche",
      featuredAmenities: "Servicios Destacados",
      bookBtn: "Reservar esta Cabaña",
      capacity: "Huéspedes",
      size: "m²",
      data: {
        "arrayan-suite": {
          description: "Refugio íntimo diseñado para parejas, con vistas al bosque de piso a techo, terraza privada y chimenea de piedra artesanal."
        },
        "coihue-premium": {
          description: "Cálida cabaña alpina de dos dormitorios, cocina completa, terraza con parrilla privada y amplios ventanales hacia el bosque nativo patagónico."
        },
        "lenga-deluxe": {
          description: "Un retiro de lujo con vistas panorámicas a la montaña, baño estilo spa, diseño interior curado y servicios de conserjería premium."
        },
        "cipres-family-cabin": {
          description: "Espaciosa cabaña de dos niveles para familias con tres dormitorios, amplias áreas sociales, gran terraza y acceso a estacionamiento privado."
        },
        "patagonia-retreat": {
          description: "Cabaña exclusiva con vistas elevadas al bosque, jacuzzi exterior, ropa de cama premium y lujo minimalista inspirado en la Patagonia."
        },
        "bosque-luxury-lodge": {
          description: "Nuestro lodge más exclusivo con amplias áreas de estar, espacio de bienestar privado, cocina equipada para chef y servicios personalizados de alta gama."
        }
      }
    },
    amenities: {
      badge: "Lujos del Complejo",
      title: "Servicios y Detalles Exclusivos",
      subtitle: "Disfrute de comodidades de primer nivel diseñadas para elevar su estadía, combinando la inmersión en la naturaleza con servicios de hotel boutique.",
      data: {
        wifi: {
          title: "Wi-Fi de alta velocidad",
          description: "Conexión a internet confiable de alta velocidad en cada cabaña para streaming, teletrabajo y llamadas."
        },
        parking: {
          title: "Estacionamiento privado",
          description: "Cada cabaña incluye estacionamiento privado en el predio con fácil acceso y seguridad las 24 horas, los 7 días de la semana."
        },
        fireplace: {
          title: "Chimenea",
          description: "Cálidas chimeneas de piedra con leña nativa para noches acogedoras después de las aventuras en la montaña."
        },
        kitchen: {
          title: "Cocina completa",
          description: "Cocinas totalmente equipadas con electrodomésticos premium, utensilios y vajilla de primera calidad."
        },
        bbq: {
          title: "Zona de parrilla",
          description: "Espacios de parrilla tradicionales patagónicos en terrazas privadas rodeadas por el bosque."
        },
        tv: {
          title: "Smart TV",
          description: "Televisores inteligentes con aplicaciones de streaming y canales locales en todas las cabañas premium."
        },
        views: {
          title: "Vistas a la montaña",
          description: "Vistas privilegiadas a los Andes y bosques nativos desde las terrazas de cabañas seleccionadas."
        },
        hottub: {
          title: "Jacuzzi",
          description: "Jacuzzis al aire libre disponibles en unidades seleccionadas para una experiencia de spa inmersiva en el bosque."
        },
        heating: {
          title: "Calefacción",
          description: "Potentes sistemas de calefacción diseñados para el máximo confort durante la temporada de nieve."
        },
        petfriendly: {
          title: "Cabañas aptas para mascotas",
          description: "Opciones dedicadas que aceptan mascotas para que los huéspedes puedan viajar con sus compañeros."
        },
        breakfast: {
          title: "Servicio de desayuno",
          description: "Servicio de desayuno diario con productos artesanales de la Patagonia entregados en su cabaña."
        },
        housekeeping: {
          title: "Servicio de limpieza",
          description: "Servicio de limpieza diario para mantener cada cabaña fresca, organizada y lista para disfrutar."
        }
      }
    },
    gallery: {
      badge: "Almanaque Visual",
      title: "Galería del Lodge y del Paisaje",
      subtitle: "Un recorrido visual por nuestra arquitectura privada, acogedores interiores y el bosque ancestral circundante en las distintas estaciones.",
      categories: {
        All: "Todas las Fotos",
        Cabins: "Cabañas",
        Interiors: "Interiores",
        Forest: "Bosque",
        "Snow Season": "Temporada de Nieve",
        "Summer Activities": "Actividades de Verano"
      },
      titles: {
        "Forest Cabin Exterior": "Exterior de Cabaña en el Bosque",
        "Warm Interior with Fireplace": "Interior Cálido con Chimenea",
        "Patagonian Forest Trails": "Senderos del Bosque Patagónico",
        "Cabins During Snow Season": "Cabañas durante la Temporada de Nieve",
        "Kayaking on Nahuel Huapi": "Kayak en el Nahuel Huapi",
        "Luxury Bedroom Details": "Detalles de Dormitorio de Lujo",
        "Deck with Mountain Light": "Terraza con Luz de Montaña",
        "Ancient Coihue Forest": "Bosque Ancestral de Coihues",
        "Winter Lodge Atmosphere": "Atmósfera del Lodge en Invierno",
        "Summer Hiking Adventures": "Aventuras de Senderismo en Verano"
      },
      expand: "Ampliar Foto"
    },
    experiences: {
      badge: "Excursiones en la Naturaleza",
      title: "Experiencias Patagónicas Auténticas",
      subtitle: "Descubra la majestuosa naturaleza de Bariloche y sus secretos locales. Nuestro conserje puede personalizar cualquiera de estas actividades.",
      season: "Temporadas: Todo el año",
      askLodge: "Consultar con el Coordinador del Lodge",
      categories: {
        Winter: "Invierno",
        Nature: "Naturaleza",
        Adventure: "Aventura",
        Outdoor: "Aire Libre",
        "Local Culture": "Cultura Local",
        Sightseeing: "Paseos",
        Gastronomy: "Gastronomía"
      },
      data: {
        "exp-1": {
          name: "Esquí en Cerro Catedral",
          description: "Pistas de esquí de clase mundial con vistas impresionantes y opciones para todos los niveles."
        },
        "exp-2": {
          name: "Senderos de trekking",
          description: "Senderos guiados y autoguiados por bosques y montañas cerca de Circuito Chico."
        },
        "exp-3": {
          name: "Paseos en kayak",
          description: "Navegue en lagos patagónicos tranquilos rodeados de majestuosos paisajes montañosos."
        },
        "exp-4": {
          name: "Pesca con mosca",
          description: "Disfrute de la pesca con mosca en ríos y lagos locales de la mano de guías expertos."
        },
        "exp-5": {
          name: "Cabalgatas",
          description: "Recorra rutas boscosas y paisajes abiertos junto a gauchos tradicionales."
        },
        "exp-6": {
          name: "Cervecerías artesanales",
          description: "Deguste las emblemáticas cervezas artesanales y maridajes locales de Bariloche."
        },
        "exp-7": {
          name: "Puntos panorámicos",
          description: "Descubra miradores con vistas de ensueño a los lagos y cordones montañosos."
        },
        "exp-8": {
          name: "Gastronomía patagónica",
          description: "Pruebe el cordero patagónico, la trucha, los chocolates y la cocina regional en restaurantes seleccionados."
        }
      }
    },
    reviews: {
      badge: "Bitácora de Huéspedes",
      title: "Santuarios Compartidos",
      subtitle: "Lea sobre las estadías, conexiones con el bosque y diarios de viaje escritos por nuestros recientes visitantes de todo el mundo.",
      verified: "Huésped Verificado del Lodge",
      countries: {
        Argentina: "Argentina",
        Brazil: "Brasil",
        "United Kingdom": "Reino Unido",
        Germany: "Alemania",
        France: "Francia",
        Chile: "Chile"
      },
      data: {
        "rev-1": "El diseño de la cabaña es hermoso y cálido. Nos encantó despertar con la vista al bosque y terminar el día en el jacuzzi.",
        "rev-2": "Excelente ubicación cerca de Circuito Chico y mucha paz. El servicio fue muy atento y todo se sintió de primera categoría.",
        "rev-3": "Una experiencia perfecta de lodge boutique. Interiores con estilo, limpieza impecable e increíbles paisajes de montaña.",
        "rev-4": "Internet confiable, excelente calefacción y un entorno silencioso hicieron que esto fuera ideal para combinar trabajo y descanso.",
        "rev-5": "El personal organizó increíbles experiencias locales para nosotros. Cada detalle se sintió curado y auténtico de la Patagonia.",
        "rev-6": "Ideal para la temporada de esquí. Volver de Cerro Catedral a una cabaña cálida con chimenea fue exactamente lo que queríamos."
      }
    },
    map: {
      badge: "Atlas Regional",
      title: "Navegador de Ubicación Interactivo",
      subtitle: "Explore nuestra ubicación en Circuito Chico y la cercanía a los principales puntos de interés de Bariloche, actividades al aire libre y servicios.",
      navTitle: "Navegador de Atracciones Locales",
      detailsTitle: "Detalles de Atracción",
      ourLodge: "Nuestro Lodge",
      away: "de distancia",
      travelTime: "Tiempo estimado de viaje",
      loaded: "Mapa Cargado",
      types: {
        "Cabins": "Cabañas",
        "City Landmark": "Punto de Interés",
        "Ski Center": "Centro de Esquí",
        "Scenic Route": "Ruta Escénica",
        "Nature & Heritage": "Naturaleza y Patrimonio",
        "Nature": "Naturaleza",
        "Transport": "Transporte"
      },
      data: {
        "Alma del Bosque": {
          description: "Su refugio forestal privado en el corazón de Circuito Chico."
        },
        "Civic Center": {
          description: "Zona histórica del centro con tiendas, chocolaterías y restaurantes."
        },
        "Cerro Catedral": {
          description: "Destino icónico de esquí con pistas, medios de elevación y actividades de montaña."
        },
        "Circuito Chico": {
          description: "Uno de los paseos panorámicos y paradas naturales más hermosos de Bariloche."
        },
        "Llao Llao": {
          description: "Zona emblemática con miradores increíbles, senderos y acceso al lago."
        },
        "Nahuel Huapi Lake": {
          description: "Aguas cristalinas rodeadas de montañas y bosques nativos."
        },
        "Airport": {
          description: "Aeropuerto Internacional Teniente Luis Candelaria con conexiones nacionales."
        }
      }
    },
    faq: {
      badge: "Protocolo del Lodge",
      title: "Preguntas Frecuentes",
      subtitle: "Conozca las pautas de check-in, reglas de cancelación, preparación para la temporada de nieve y servicios antes de su llegada.",
      policyTitle: "Políticas de Alma del Bosque",
      categoryPrefix: "Categoría",
      categories: {
        "Check-in": "Check-in",
        "Check-out": "Check-out",
        "Pets": "Mascotas",
        "Cancellations": "Cancelaciones",
        "Breakfast": "Desayuno",
        "Parking": "Estacionamiento",
        "Wi-Fi": "Wi-Fi",
        "Snow season": "Temporada de nieve",
        "Payment methods": "Métodos de pago",
        "Transportation": "Transporte"
      },
      data: {
        "faq-1": {
          question: "¿A qué hora es el check-in?",
          answer: "El check-in comienza a las 15:00. El check-in anticipado se puede solicitar según disponibilidad."
        },
        "faq-2": {
          question: "¿A qué hora es el check-out?",
          answer: "El check-out es a las 11:00. El check-out tardío está sujeto a la ocupación y puede tener un cargo adicional."
        },
        "faq-3": {
          question: "¿Se permiten mascotas?",
          answer: "Sí, ofrecemos cabañas seleccionadas que aceptan mascotas. Indíquelo al realizar su reserva."
        },
        "faq-4": {
          question: "¿Cuál es la política de cancelación?",
          answer: "Cancelación gratuita hasta 30 días antes de la llegada. Se aplican reembolsos parciales entre 30 y 15 días."
        },
        "faq-5": {
          question: "¿El desayuno está incluido?",
          answer: "Sí, el servicio de desayuno está incluido y se entrega a diario en su cabaña."
        },
        "faq-6": {
          question: "¿Ofrecen estacionamiento privado?",
          answer: "Sí, todos los huéspedes disponen de estacionamiento privado gratuito cerca de cada cabaña."
        },
        "faq-7": {
          question: "¿Qué tan bueno es el Wi-Fi?",
          answer: "Nuestro Wi-Fi de alta velocidad admite streaming, videollamadas y trabajo a distancia."
        },
        "faq-8": {
          question: "¿Las cabañas están preparadas para la temporada de nieve?",
          answer: "Sí, todas las cabañas están preparadas para el invierno con aislamiento de calidad y potentes sistemas de calefacción."
        },
        "faq-9": {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos las principales tarjetas de crédito, transferencias bancarias y enlaces de pago seguro en línea."
        },
        "faq-10": {
          question: "¿Pueden coordinar el traslado desde/hacia el aeropuerto?",
          answer: "Sí, podemos organizar traslados privados al aeropuerto y transporte local bajo petición."
        }
      }
    },
    booking: {
      badge: "Motor de Reserva Seguro",
      title: "Reserve su Estadía",
      subtitle: "Configure su estadía, calcule su tarifa detallada en tiempo real y sea contactado por un coordinador de huéspedes patagónico.",
      successTitle: "Su Solicitud de Reserva ha sido Verificada",
      refLabel: "Referencia de la Reserva",
      leadGuest: "Huésped Principal",
      cabinChoice: "Cabaña Seleccionada",
      duration: "Duración de la Estadía",
      totalPrice: "Precio Total",
      successMsg: "Hemos enviado los detalles solicitados a nuestro anfitrión de Alma del Bosque. Se le enviará una respuesta coordinada a su correo electrónico o WhatsApp en un plazo de 2 horas para confirmar los requisitos de check-in y la coordinación de traslados.",
      anotherBtn: "Reservar Otra Estadía",
      c1_title: "1. Datos de Contacto",
      fullNameLabel: "Nombre Completo",
      fullNamePlaceholder: "Juan Pérez",
      emailLabel: "Dirección de Email",
      emailPlaceholder: "juan@ejemplo.com",
      phoneLabel: "Número de Teléfono / WhatsApp",
      phonePlaceholder: "+54 9 11 1234-5678",
      c2_title: "2. Detalles del Hospedaje",
      arrivalLabel: "Fecha de Entrada (Check-in)",
      departureLabel: "Fecha de Salida (Check-out)",
      cabinTypeLabel: "Seleccionar Tipo de Cabaña",
      guestsCountLabel: "Cantidad de Huéspedes",
      guest: "Huésped",
      guests: "Huéspedes",
      maxGuests: "Máx",
      c3_title: "3. Comentarios Adicionales",
      specialLabel: "Peticiones Especiales y Servicios",
      specialPlaceholder: "Mencione si viaja con mascotas, traslados privados, reposición de leña, necesidades alimenticias o excursiones a medida.",
      submitBtn: "Enviar Solicitud de Reserva",
      processing: "Procesando...",
      submitError: "Hubo un error al enviar su reserva. Por favor, intente nuevamente.",
      pricingSummary: "Resumen de la Estadía",
      baseFare: "Tarifa Base",
      rateCalculation: "Cálculo de la Tarifa",
      night: "noche",
      nights: "noches",
      subtotal: "Subtotal",
      taxLabel: "IVA Patagónico (21%)",
      levyLabel: "Tasa de Turismo Local",
      levyFree: "Sin Cargo",
      totalEstCost: "Costo Total Estimado",
      taxIncluded: "impuestos incluidos",
      awaitingTitle: "Esperando Fechas de Estadía",
      awaitingMsg: "Por favor, configure sus fechas de entrada y salida en el formulario para calcular el costo total con impuestos.",
      guarantee: "Alma del Bosque garantiza tarifas preferenciales, sin comisiones ocultas y atención personalizada de mayordomía al reservar directamente."
    },
    contact: {
      badge: "Anfitrión del Lodge",
      title: "Contacte a Nuestro Coordinador",
      subtitle: "Comuníquese directamente para eventos a medida, traslados en helicóptero, retiros a largo plazo o consultas específicas.",
      phone: "Teléfono / WhatsApp",
      email: "Email de Registro Directo",
      location: "Nuestra Ubicación",
      address: "Avenida Bustillo Km 12.5 (Circuito Chico), San Carlos de Bariloche, Río Negro, Patagonia Argentina",
      phoneDesk: "Llamar a Reservas",
      whatsapp: "Abrir chat de WhatsApp",
      followStories: "Síganos en redes",
      formHint: "Escriba su Mensaje",
      successTitle: "Mensaje Enviado",
      anotherMessage: "Escribir otro mensaje",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Su Nombre",
      emailLabel: "Dirección de Email",
      emailPlaceholder: "su@email.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿En qué podemos ayudarle?",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escriba su consulta aquí...",
      submitBtn: "Enviar Mensaje",
      sending: "Enviando...",
      successMsg: "¡Mensaje enviado! Nuestro anfitrión del lodge se contactará con usted a la brevedad.",
      errorMsg: "Error al enviar el mensaje. Por favor, intente nuevamente."
    },
    footer: {
      desc: "Cabañas de lujo de diseño arquitectónico creadas para una conexión profunda con la naturaleza en Circuito Chico, Bariloche.",
      explore: "Explorar",
      social: "Redes",
      newsletter: "Boletín Informativo",
      newsletterDesc: "Suscríbase para recibir ofertas privadas, novedades de la temporada de nieve y ventajas de reserva directa.",
      newsletterPlaceholder: "Ingrese su email",
      subscribeBtn: "Suscribirse",
      newsletterSuccess: "¡Gracias! Ya está suscrito.",
      legal: "Información Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      bookingConditions: "Condiciones de Reserva",
      localRegulations: "Normativa Local",
      cookies: "Configuración de Cookies",
      rights: "Todos los derechos reservados. Diseñado para una profunda conexión con el bosque.",
      copyright: "© 2026 Alma del Bosque – Bariloche, Patagonia Argentina"
    }
  },
  pt: {
    nav: {
      home: "Início",
      cabins: "Cabanas",
      amenities: "Serviços",
      gallery: "Galeria",
      experiences: "Experiências",
      reviews: "Avaliações",
      faq: "FAQ",
      contact: "Contato",
      book: "Reservar Estadia",
      menu: "Menu de Navegação",
      language: "Idioma"
    },
    hero: {
      badge: "Cabanas de Floresta Exclusivas",
      title: "Luxo Imersivo na Natureza",
      subtitle: "Vivencie a natureza patagônica em seu estado mais puro com o conforto absoluto de cabanas boutique de design arquitetônico.",
      checkIn: "Data de Entrada",
      checkOut: "Data de Saída",
      guests: "Hóspedes",
      searchBtn: "Buscar Estadia",
      exploreBtn: "Explorar Cabanas"
    },
    about: {
      badge: "O Santuário",
      title: "Onde o Luxo Encontra a Floresta Primitiva",
      p1: "Alma del Bosque é um santuário de cabanas boutique de design arquitetônico situado na lendária região de Circuito Chico, em Bariloche. Cercados por florestas centenárias de Coihues e Lengas, oferecemos um refúgio íntimo para viajantes que buscam se reconectar com a natureza sem abrir mão da sofisticação moderna.",
      p2: "Cada cabana é construída com pedra da região e madeiras nativas, com amplas janelas que integram a floresta ao seu espaço habitável. Do estalar das lareiras artesanais ao calor relaxante das banheiras de hidromassagem ao ar livre, oferecemos um santuário curado nos Andes patagônicos.",
      stats: {
        cabins: "Cabanas Premium",
        rating: "Avaliação",
        location: "Do Centro",
        wifi: "Wi-Fi e Estacionamento Grátis"
      }
    },
    cabins: {
      badge: "Santuário do Lodge",
      title: "Nossa Seleção de Cabanas",
      subtitle: "Cada cabana é independente, arquitetonicamente única e com serviço completo. Escolha o refúgio perfeito para sua escapada patagônica.",
      filterAll: "Todas as Cabanas",
      filterCouples: "Para Casais (2 Hóspedes)",
      filterFamilies: "Para Famílias / Grupos (4+ Hóspedes)",
      perNight: "por noite",
      featuredAmenities: "Serviços Destacados",
      bookBtn: "Reservar esta Cabana",
      capacity: "Hóspedes",
      size: "m²",
      data: {
        "arrayan-suite": {
          description: "Refúgio íntimo projetado para casais, com vista para a floresta do chão ao teto, deck privado e lareira de pedra artesanal."
        },
        "coihue-premium": {
          description: "Calorosa cabana alpina com dois quartos, cozinha completa, deck com churrasqueira privada e janelas amplas voltadas para a floresta nativa da Patagônia."
        },
        "lenga-deluxe": {
          description: "Um retiro de luxo com vista panorâmica para a montanha, banheiro estilo spa, design de interiores curado e serviços de concierge premium."
        },
        "cipres-family-cabin": {
          description: "Espaçosa cabana de dois níveis para famílias com três quartos, amplas áreas sociais, grande terraço e acesso a estacionamento privado."
        },
        "patagonia-retreat": {
          description: "Cabana exclusiva com vista elevada para a floresta, banheira de hidromassagem externa, roupa de cama premium e luxo minimalista inspirado na Patagônia."
        },
        "bosque-luxury-lodge": {
          description: "Nosso lodge mais exclusivo com amplas áreas de estar, espaço de bem-estar privado, cozinha equipada para chef e serviços personalizados de alta qualidade."
        }
      }
    },
    amenities: {
      badge: "Luxos do Complexo",
      title: "Serviços e Detalhes Exclusivos",
      subtitle: "Desfrute de comodidades de alto padrão projetadas para elevar sua estadia, combinando a imersão na natureza com serviços de hotel boutique.",
      data: {
        wifi: {
          title: "Wi-Fi de alta velocidade",
          description: "Conexão de internet rápida e confiável em cada cabana para streaming, trabalho remoto e chamadas."
        },
        parking: {
          title: "Estacionamento privado",
          description: "Cada cabana inclui estacionamento privado no local com fácil acesso e segurança 24 horas, 7 dias por semana."
        },
        fireplace: {
          title: "Lareira",
          description: "Lareiras de pedra acolhedoras com lenha nativa para noites aconchegantes após as aventuras na montanha."
        },
        kitchen: {
          title: "Cozinha completa",
          description: "Cozinhas totalmente equipadas com eletrodomésticos premium, utensílios e louças de alta qualidade."
        },
        bbq: {
          title: "Área de churrasco",
          description: "Espaços tradicionais de churrasco patagônico em decks privados cercados pela floresta."
        },
        tv: {
          title: "Smart TV",
          description: "Smart TVs com aplicativos de streaming e canais locais em todas as cabanas premium."
        },
        views: {
          title: "Vista para a montanha",
          description: "Vistas privilegiadas para os Andes e florestas nativas a partir das varandas de cabanas selecionadas."
        },
        hottub: {
          title: "Banheira de hidromassagem",
          description: "Banheiras de hidromassagem externas disponíveis em unidades selecionadas para uma experiência imersiva de spa na floresta."
        },
        heating: {
          title: "Calefação",
          description: "Sistemas de calefação potentes projetados para o máximo conforto durante a temporada de neve."
        },
        petfriendly: {
          title: "Cabanas aceitam animais",
          description: "Opções dedicadas que aceitam animais de estimação para que os hóspedes possam viajar com seus companheiros."
        },
        breakfast: {
          title: "Serviço de café da manhã",
          description: "Serviço de café da manhã diário com produtos artesanais da Patônia entregues em sua cabana."
        },
        housekeeping: {
          title: "Serviço de limpeza",
          description: "Serviço de limpeza diário para manter cada cabana fresca, organizada e pronta para desfrutar."
        }
      }
    },
    gallery: {
      badge: "Almanaque Visual",
      title: "Galeria do Lodge e da Paisagem",
      subtitle: "Um passeio visual por nossa arquitetura privada, interiores aconchegantes e a floresta antiga circundante ao longo das estações.",
      categories: {
        All: "Todas as Fotos",
        Cabins: "Cabanas",
        Interiors: "Interiores",
        Forest: "Floresta",
        "Snow Season": "Temporada de Neve",
        "Summer Activities": "Atividades de Verão"
      },
      titles: {
        "Forest Cabin Exterior": "Exterior da Cabana na Floresta",
        "Warm Interior with Fireplace": "Interior Acolhedor com Lareira",
        "Patagonian Forest Trails": "Trilhas na Floresta Patagônica",
        "Cabins During Snow Season": "Cabanas durante a Temporada de Neve",
        "Kayaking on Nahuel Huapi": "Caiaque no Nahuel Huapi",
        "Luxury Bedroom Details": "Detalhes de Quarto de Luxo",
        "Deck with Mountain Light": "Deck com Luz da Montanha",
        "Ancient Coihue Forest": "Floresta Antiga de Coihues",
        "Winter Lodge Atmosphere": "Atmosfera do Lodge no Inverno",
        "Summer Hiking Adventures": "Aventuras de Caminhada no Verão"
      },
      expand: "Ampliar Foto"
    },
    experiences: {
      badge: "Excursões na Natureza",
      title: "Experiências Patagônicas Autênticas",
      subtitle: "Descubra a majestosa natureza de Bariloche e seus segredos locais. Nosso concierge pode personalizar qualquer uma destas atividades.",
      season: "Temporadas: O ano todo",
      askLodge: "Consultar com o Coordenador do Lodge",
      categories: {
        Winter: "Inverno",
        Nature: "Natureza",
        Adventure: "Aventura",
        Outdoor: "Ao Ar Livre",
        "Local Culture": "Cultura Local",
        Sightseeing: "Passeios",
        Gastronomy: "Gastronomia"
      },
      data: {
        "exp-1": {
          name: "Esqui em Cerro Catedral",
          description: "Pistas de esqui de classe mundial com vistas deslumbrantes e opções para todos os níveis."
        },
        "exp-2": {
          name: "Trilhas de caminhada",
          description: "Trilhas guiadas e autoguiadas por florestas e montanhas perto de Circuito Chico."
        },
        "exp-3": {
          name: "Passeios de caiaque",
          description: "Navegue em lagos patagônicos tranquilos cercados por paisagens montanhosas deslumbrantes."
        },
        "exp-4": {
          name: "Pesca com mosca",
          description: "Desfrute da pesca com mosca em rios e lagos locais acompanhado por guias especialistas."
        },
        "exp-5": {
          name: "Cavalgadas",
          description: "Percorra rotas arborizadas e paisagens abertas ao lado de gaúchos tradicionais."
        },
        "exp-6": {
          name: "Cervejarias artesanais",
          description: "Deguste as cervejas artesanais emblemáticas e harmonizações locais de Bariloche."
        },
        "exp-7": {
          name: "Mirantes panorâmicos",
          description: "Descubra mirantes com vistas espetaculares dos lagos e cadeias de montanhas."
        },
        "exp-8": {
          name: "Gastronomia patagônica",
          description: "Experimente cordeiro patagônico, truta, chocolates e a culinária regional em restaurantes selecionados."
        }
      }
    },
    reviews: {
      badge: "Diário de Hóspedes",
      title: "Santuários Compartilhados",
      subtitle: "Leia sobre as estadias, conexões com a floresta e diários de viagem escritos por nossos visitantes recentes de todo o mundo.",
      verified: "Hóspede Verificado do Lodge",
      countries: {
        Argentina: "Argentina",
        Brazil: "Brasil",
        "United Kingdom": "Reino Unido",
        Germany: "Alemanha",
        France: "França",
        Chile: "Chile"
      },
      data: {
        "rev-1": "O design da cabana é lindo e aconchegante. Adoramos acordar com a vista da floresta e terminar o dia na banheira de hidromassagem.",
        "rev-2": "Excelente localização perto do Circuito Chico e muita paz. O serviço foi muito atencioso e tudo pareceu de altíssima qualidade.",
        "rev-3": "Uma experiência perfeita de lodge boutique. Interiores elegantes, limpeza impecável e paisagens de montanha inacreditáveis.",
        "rev-4": "Internet confiável, excelente aquecimento e ambiente silencioso tornaram tudo ideal para combinar trabalho e descanso.",
        "rev-5": "A equipe organizou experiências locais incríveis para nós. Cada detalhe pareceu curado e autêntico da Patagônia.",
        "rev-6": "Ideal para a temporada de esqui. Voltar do Cerro Catedral para uma cabana quente com lareira era exatamente o que queríamos."
      }
    },
    map: {
      badge: "Atlas Regional",
      title: "Navegador de Localização Interativo",
      subtitle: "Explore nossa localização no Circuito Chico e a proximidade com os principais pontos de interesse de Bariloche, atividades ao ar livre e serviços.",
      navTitle: "Navegador de Atrações Locais",
      detailsTitle: "Detalhes da Atração",
      ourLodge: "Nosso Lodge",
      away: "de distância",
      travelTime: "Tempo de viagem estimado",
      loaded: "Mapa Carregado",
      types: {
        "Cabins": "Cabanas",
        "City Landmark": "Ponto de Referência",
        "Ski Center": "Centro de Esqui",
        "Scenic Route": "Rota Cênica",
        "Nature & Heritage": "Natureza e Patrimônio",
        "Nature": "Natureza",
        "Transport": "Transporte"
      },
      data: {
        "Alma del Bosque": {
          description: "Seu refúgio na floresta privada no coração do Circuito Chico."
        },
        "Civic Center": {
          description: "Área histórica do centro com lojas, chocolaterias e restaurantes."
        },
        "Cerro Catedral": {
          description: "Destino de esqui icônico com pistas, bondinhos e atividades de montanha."
        },
        "Circuito Chico": {
          description: "Um dos passeios panorâmicos e paradas naturais mais bonitos de Bariloche."
        },
        "Llao Llao": {
          description: "Zona emblemática com mirantes incríveis, trilhas e acesso ao lago."
        },
        "Nahuel Huapi Lake": {
          description: "Águas cristalinas cercadas por montanhas e florestas nativas."
        },
        "Airport": {
          description: "Aeroporto Internacional Teniente Luis Candelaria com conexões domésticas."
        }
      }
    },
    faq: {
      badge: "Protocolo do Lodge",
      title: "Perguntas Frequentes",
      subtitle: "Entenda as diretrizes de check-in, regras de cancelamento, prontidão sazonal e serviços antes da sua chegada.",
      policyTitle: "Políticas do Alma del Bosque",
      categoryPrefix: "Categoria",
      categories: {
        "Check-in": "Check-in",
        "Check-out": "Check-out",
        "Pets": "Animais",
        "Cancellations": "Cancelamentos",
        "Breakfast": "Café da manhã",
        "Parking": "Estacionamento",
        "Wi-Fi": "Wi-Fi",
        "Snow season": "Temporada de neve",
        "Payment methods": "Formas de pagamento",
        "Transportation": "Transporte"
      },
      data: {
        "faq-1": {
          question: "Qual é o horário do check-in?",
          answer: "O check-in começa às 15:00. O check-in antecipado pode ser solicitado sujeito a disponibilidade."
        },
        "faq-2": {
          question: "Qual é o horário do check-out?",
          answer: "O check-out é às 11:00. O check-out tardio está sujeito à ocupação e pode ter uma taxa adicional."
        },
        "faq-3": {
          question: "Animais de estimação são permitidos?",
          answer: "Sim, oferecemos cabanas selecionadas que aceitam animais de estimação. Por favor, mencione seu animal de estimação ao reservar."
        },
        "faq-4": {
          question: "Qual é a política de cancelamento?",
          answer: "Cancelamento gratuito até 30 dias antes da chegada. Reembolsos parciais são aplicados entre 30 e 15 dias."
        },
        "faq-5": {
          question: "O café da manhã está incluído?",
          answer: "Sim, o serviço de café da manhã está incluído e é entregue diariamente em sua cabana."
        },
        "faq-6": {
          question: "Vocês oferecem estacionamento privado?",
          answer: "Sim, todos os hóspedes dispõem de estacionamento privado gratuito perto de cada cabana."
        },
        "faq-7": {
          question: "Qual é a qualidade do Wi-Fi?",
          answer: "Nosso Wi-Fi de alta velocidade suporta streaming, videochamadas e trabalho remoto."
        },
        "faq-8": {
          question: "As cabanas estão preparadas para a temporada de neve?",
          answer: "Sim, todas as cabanas estão preparadas para o inverno com isolamento de alta qualidade e sistemas de aquecimento robustos."
        },
        "faq-9": {
          question: "Quais formas de pagamento são aceitas?",
          answer: "Aceitamos os principais cartões de crédito, transferências bancárias e links de pagamento online seguros."
        },
        "faq-10": {
          question: "Vocês organizam transporte para o aeroporto?",
          answer: "Sim, podemos organizar traslados privados para o aeroporto e transporte local sob solicitação."
        }
      }
    },
    booking: {
      badge: "Motor de Reservas Seguro",
      title: "Reserve a sua Estadia",
      subtitle: "Configure sua estadia, calcule sua tarifa detalhada em tempo real e seja contactado por um coordenador de hóspedes patagônico.",
      successTitle: "Sua Solicitação de Reserva foi Verificada",
      refLabel: "Referência da Reserva",
      leadGuest: "Hóspede Principal",
      cabinChoice: "Cabana Selecionada",
      duration: "Duração da Estadia",
      totalPrice: "Preço Total",
      successMsg: "Enviamos os detalhes solicitados ao nosso anfitrião no Alma del Bosque. Uma resposta será enviada para o seu email ou WhatsApp dentro de 2 horas para confirmar os requisitos de check-in e a coordenação de traslados.",
      anotherBtn: "Reservar Outra Estadia",
      c1_title: "1. Dados de Contato",
      fullNameLabel: "Nome Completo",
      fullNamePlaceholder: "João Silva",
      emailLabel: "Endereço de E-mail",
      emailPlaceholder: "joao@exemplo.com",
      phoneLabel: "Número de Telefone / WhatsApp",
      phonePlaceholder: "+54 9 11 1234-5678",
      c2_title: "2. Detalhes do Alojamento",
      arrivalLabel: "Data de Entrada (Check-in)",
      departureLabel: "Data de Saída (Check-out)",
      cabinTypeLabel: "Selecionar Tipo de Cabana",
      guestsCountLabel: "Quantidade de Hóspedes",
      guest: "Hóspede",
      guests: "Hóspedes",
      maxGuests: "Máx",
      c3_title: "3. Comentários Adicionais",
      specialLabel: "Solicitações Especiais e Serviços",
      specialPlaceholder: "Mencione se viaja com animais, traslados privados, reposição de lenha, restrições alimentares ou excursões personalizadas.",
      submitBtn: "Enviar Solicitação de Reserva",
      processing: "Processando...",
      submitError: "Ocorreu um erro ao enviar sua reserva. Por favor, tente novamente.",
      pricingSummary: "Resumo da Estadia",
      baseFare: "Tarifa Base",
      rateCalculation: "Cálculo da Tarifa",
      night: "noite",
      nights: "noites",
      subtotal: "Subtotal",
      taxLabel: "IVA Patagônico (21%)",
      levyLabel: "Taxa de Turismo Local",
      levyFree: "Cortesia",
      totalEstCost: "Custo Total Estimado",
      taxIncluded: "impostos incluídos",
      awaitingTitle: "Aguardando Datas da Estadia",
      awaitingMsg: "Por favor, configure suas datas de entrada e saída no formulário para calcular o custo total com impostos.",
      guarantee: "Alma del Bosque garante tarifas preferenciais, sem comissões ocultas e atendimento de mordomo personalizado ao reservar diretamente."
    },
    contact: {
      badge: "Anfitrião do Lodge",
      title: "Contate Nosso Coordenador",
      subtitle: "Entre em contato diretamente para eventos sob medida, traslados de helicóptero, retiros de longo prazo ou dúvidas específicas.",
      phone: "Telefone / WhatsApp",
      email: "E-mail de Registro Direto",
      location: "A Nossa Localização",
      address: "Avenida Bustillo Km 12.5 (Circuito Chico), San Carlos de Bariloche, Río Negro, Patagônia Argentina",
      phoneDesk: "Ligar para Reservas",
      whatsapp: "Abrir chat no WhatsApp",
      followStories: "Siga-nos nas redes",
      formHint: "Escreva a sua Mensagem",
      successTitle: "Mensagem Enviada",
      anotherMessage: "Escrever outra mensagem",
      nameLabel: "Nome Completo",
      namePlaceholder: "Seu Nome",
      emailLabel: "Endereço de E-mail",
      emailPlaceholder: "seu@email.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Como podemos ajudar?",
      messageLabel: "Mensagem",
      messagePlaceholder: "Escreva sua mensagem aqui...",
      submitBtn: "Enviar Mensagem",
      sending: "Enviando...",
      successMsg: "Mensagem enviada! Nosso anfitrião do lodge entrará em contato em breve.",
      errorMsg: "Erro ao enviar mensagem. Por favor, tente novamente."
    },
    footer: {
      desc: "Cabanas de luxo com design arquitetônico criadas para uma conexão profunda com a natureza no Circuito Chico, Bariloche.",
      explore: "Explorar",
      social: "Redes",
      newsletter: "Boletim Informativo",
      newsletterDesc: "Subscreva-se para receber ofertas privadas, novidades da época de neve e vantagens de reserva direta.",
      newsletterPlaceholder: "Digite seu e-mail",
      subscribeBtn: "Subscrever",
      newsletterSuccess: "Obrigado! A sua subscrição foi registada.",
      legal: "Informações Legais",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      bookingConditions: "Condições de Reserva",
      localRegulations: "Regulamentação Local",
      cookies: "Configurações de Cookies",
      rights: "Todos os direitos reservados. Projetado para uma profunda conexão com a floresta.",
      copyright: "© 2026 Alma del Bosque – Bariloche, Patagônia Argentina"
    }
  }
};
