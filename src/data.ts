import { Amenity, Cabin, Experience, FAQItem, Review } from "./types";

export const STATS = [
  { value: "15", label: "Premium Cabins" },
  { value: "4.9/5", label: "Guest Rating" },
  { value: "10 Minutes", label: "From Downtown" },
  { value: "Free", label: "Wi-Fi & Parking" }
];

export const CABINS_DATA: Cabin[] = [
  {
    id: "arrayan-suite",
    name: "Arrayán Suite",
    capacity: 2,
    size: 45,
    description:
      "Intimate hideaway designed for couples, with floor-to-ceiling forest views, a private deck, and a handcrafted stone fireplace.",
    amenities: ["Fireplace", "Hot tub", "Mountain views", "Heating", "Breakfast service", "High-speed Wi-Fi"],
    price: 250,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1300&auto=format&fit=crop"
  },
  {
    id: "coihue-premium",
    name: "Coihue Premium",
    capacity: 4,
    size: 75,
    description:
      "Warm alpine cabin with two bedrooms, full kitchen, private BBQ deck, and oversized windows facing the native Patagonian forest.",
    amenities: ["Fireplace", "Full kitchen", "BBQ area", "Heating", "Smart TV", "Private parking"],
    price: 380,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1300&auto=format&fit=crop"
  },
  {
    id: "lenga-deluxe",
    name: "Lenga Deluxe",
    capacity: 2,
    size: 55,
    description:
      "A deluxe retreat with panoramic mountain views, spa-style bathroom, curated interior design, and premium concierge services.",
    amenities: ["Mountain views", "Hot tub", "Fireplace", "Heating", "High-speed Wi-Fi", "Housekeeping"],
    price: 290,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1300&auto=format&fit=crop"
  },
  {
    id: "cipres-family-cabin",
    name: "Ciprés Family Cabin",
    capacity: 6,
    size: 120,
    description:
      "Spacious two-level cabin for families with three bedrooms, generous social areas, large terrace, and private parking access.",
    amenities: ["Fireplace", "Full kitchen", "BBQ area", "Heating", "Smart TV", "Pet-friendly cabins", "Private parking"],
    price: 520,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1300&auto=format&fit=crop"
  },
  {
    id: "patagonia-retreat",
    name: "Patagonia Retreat",
    capacity: 4,
    size: 90,
    description:
      "Signature cabin with elevated forest perspective, outdoor hot tub, premium bedding, and minimalist luxury inspired by Patagonia.",
    amenities: ["Hot tub", "Mountain views", "Fireplace", "High-speed Wi-Fi", "Breakfast service", "Heating"],
    price: 440,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1300&auto=format&fit=crop"
  },
  {
    id: "bosque-luxury-lodge",
    name: "Bosque Luxury Lodge",
    capacity: 8,
    size: 180,
    description:
      "Our most exclusive lodge with expansive living areas, private wellness space, chef-ready kitchen, and high-end bespoke services.",
    amenities: ["Hot tub", "Mountain views", "Fireplace", "Full kitchen", "BBQ area", "Smart TV", "Breakfast service", "Housekeeping", "Private parking"],
    price: 850,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1300&auto=format&fit=crop"
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "wifi",
    title: "High-speed Wi-Fi",
    description: "Reliable high-speed internet in every cabin for streaming, remote work, and calls.",
    iconName: "Wifi"
  },
  {
    id: "parking",
    title: "Private parking",
    description: "Each cabin includes on-site private parking with easy access and 24/7 security.",
    iconName: "Car"
  },
  {
    id: "fireplace",
    title: "Fireplace",
    description: "Warm stone fireplaces with native wood for cozy nights after mountain adventures.",
    iconName: "Flame"
  },
  {
    id: "kitchen",
    title: "Full kitchen",
    description: "Fully equipped kitchens with premium appliances, cookware, and dining essentials.",
    iconName: "ChefHat"
  },
  {
    id: "bbq",
    title: "BBQ area",
    description: "Traditional Patagonian grill spaces on private decks surrounded by the forest.",
    iconName: "Utensils"
  },
  {
    id: "tv",
    title: "Smart TV",
    description: "Smart TVs with streaming apps and local channels in all premium cabins.",
    iconName: "Tv"
  },
  {
    id: "views",
    title: "Mountain views",
    description: "Privileged views to the Andes and native woodlands from selected cabin terraces.",
    iconName: "Mountain"
  },
  {
    id: "hottub",
    title: "Hot tub",
    description: "Outdoor hot tubs available in selected units for an immersive forest spa experience.",
    iconName: "Waves"
  },
  {
    id: "heating",
    title: "Heating",
    description: "Powerful heating systems designed for winter comfort during the snow season.",
    iconName: "Thermometer"
  },
  {
    id: "petfriendly",
    title: "Pet-friendly cabins",
    description: "Dedicated pet-friendly options so guests can travel with their companions.",
    iconName: "Heart"
  },
  {
    id: "breakfast",
    title: "Breakfast service",
    description: "Daily breakfast service with artisanal products from Patagonia.",
    iconName: "Coffee"
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Daily housekeeping to keep each cabin fresh, organized, and ready to enjoy.",
    iconName: "Sparkles"
  }
];

export const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "Forest Cabin Exterior",
    category: "Cabins",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: "Warm Interior with Fireplace",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: "Patagonian Forest Trails",
    category: "Forest",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: "Cabins During Snow Season",
    category: "Snow Season",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: "Kayaking on Nahuel Huapi",
    category: "Summer Activities",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: "Luxury Bedroom Details",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-7",
    title: "Deck with Mountain Light",
    category: "Cabins",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-8",
    title: "Ancient Coihue Forest",
    category: "Forest",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-9",
    title: "Winter Lodge Atmosphere",
    category: "Snow Season",
    image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gal-10",
    title: "Summer Hiking Adventures",
    category: "Summer Activities",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop"
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "exp-1",
    name: "Cerro Catedral skiing",
    category: "Winter",
    description: "World-class ski terrain with stunning views and options for all levels.",
    image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "exp-2",
    name: "Hiking trails",
    category: "Nature",
    description: "Guided and self-guided forest and mountain trails near Circuito Chico.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "exp-3",
    name: "Kayaking",
    category: "Adventure",
    description: "Paddle in calm Patagonian lakes with mountain scenery all around.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "exp-4",
    name: "Fishing",
    category: "Outdoor",
    description: "Enjoy fly-fishing in local rivers and lakes with expert local guides.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "exp-5",
    name: "Horseback riding",
    category: "Adventure",
    description: "Ride through forest routes and open landscapes with traditional gauchos.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "exp-6",
    name: "Craft breweries",
    category: "Local Culture",
    description: "Taste Bariloche’s signature craft beers and artisanal pairings.",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "exp-7",
    name: "Scenic viewpoints",
    category: "Sightseeing",
    description: "Discover breathtaking panoramic points around lakes and mountains.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "exp-8",
    name: "Patagonian gastronomy",
    category: "Gastronomy",
    description: "Taste local lamb, trout, chocolates, and regional cuisine in selected restaurants.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
  }
];

export const TESTIMONIALS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Sofía Ramírez",
    country: "Argentina",
    rating: 5,
    reviewText:
      "The cabin design is beautiful and warm. We loved waking up to the forest view and ending the day in the hot tub.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "rev-2",
    name: "Lucas Pereira",
    country: "Brazil",
    rating: 5,
    reviewText:
      "Excellent location near Circuito Chico and very peaceful. Service was attentive and everything felt premium.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "rev-3",
    name: "Isabella Turner",
    country: "United Kingdom",
    rating: 5,
    reviewText:
      "A perfect boutique lodge experience. Stylish interiors, spotless housekeeping, and incredible mountain scenery.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "rev-4",
    name: "Jonas Keller",
    country: "Germany",
    rating: 5,
    reviewText:
      "Reliable internet, great heating, and quiet surroundings made this ideal for a mixed work and rest trip.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "rev-5",
    name: "Camille Laurent",
    country: "France",
    rating: 5,
    reviewText:
      "The staff arranged amazing local experiences for us. Every detail felt curated and authentic to Patagonia.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "rev-6",
    name: "Diego Morales",
    country: "Chile",
    rating: 5,
    reviewText:
      "Great for ski season. Returning from Cerro Catedral to a warm cabin and fireplace was exactly what we wanted.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What time is check-in?",
    category: "Check-in",
    answer: "Check-in starts at 3:00 PM. Early check-in can be requested based on availability."
  },
  {
    id: "faq-2",
    question: "What time is check-out?",
    category: "Check-out",
    answer: "Check-out is at 11:00 AM. Late check-out is subject to occupancy and may have an extra fee."
  },
  {
    id: "faq-3",
    question: "Are pets allowed?",
    category: "Pets",
    answer: "Yes, we offer selected pet-friendly cabins. Please mention your pet when booking."
  },
  {
    id: "faq-4",
    question: "What is the cancellation policy?",
    category: "Cancellations",
    answer: "Free cancellation up to 30 days before arrival. Partial refunds apply between 30 and 15 days."
  },
  {
    id: "faq-5",
    question: "Is breakfast included?",
    category: "Breakfast",
    answer: "Yes, breakfast service is included and delivered daily to your cabin."
  },
  {
    id: "faq-6",
    question: "Do you provide private parking?",
    category: "Parking",
    answer: "Yes, all guests have free private parking near each cabin."
  },
  {
    id: "faq-7",
    question: "How good is the Wi-Fi?",
    category: "Wi-Fi",
    answer: "Our high-speed Wi-Fi supports streaming, video calls, and remote work."
  },
  {
    id: "faq-8",
    question: "Are cabins prepared for snow season?",
    category: "Snow season",
    answer: "Yes, all cabins are winterized with quality insulation and robust heating systems."
  },
  {
    id: "faq-9",
    question: "Which payment methods do you accept?",
    category: "Payment methods",
    answer: "We accept major credit cards, bank transfers, and secure online payment links."
  },
  {
    id: "faq-10",
    question: "Can you arrange airport transportation?",
    category: "Transportation",
    answer: "Yes, we can organize private airport transfers and local transportation on request."
  }
];

export const MAP_ATTRACTIONS = [
  {
    name: "Alma del Bosque",
    type: "Cabins",
    distance: "0 km",
    isCore: true,
    description: "Your private forest retreat in the heart of Circuito Chico."
  },
  {
    name: "Civic Center",
    type: "City Landmark",
    distance: "10 min",
    description: "Historic downtown area with shops, chocolatiers, and restaurants."
  },
  {
    name: "Cerro Catedral",
    type: "Ski Center",
    distance: "15 min",
    description: "Iconic ski destination with runs, lifts, and mountain activities."
  },
  {
    name: "Circuito Chico",
    type: "Scenic Route",
    distance: "5 min",
    description: "One of Bariloche’s most beautiful panoramic drives and nature stops."
  },
  {
    name: "Llao Llao",
    type: "Nature & Heritage",
    distance: "12 min",
    description: "Landmark zone with incredible viewpoints, trails, and lake access."
  },
  {
    name: "Nahuel Huapi Lake",
    type: "Nature",
    distance: "8 min",
    description: "Crystal-clear waters surrounded by mountains and native forest."
  },
  {
    name: "Airport",
    type: "Transport",
    distance: "30 min",
    description: "Teniente Luis Candelaria International Airport with domestic connections."
  }
];
