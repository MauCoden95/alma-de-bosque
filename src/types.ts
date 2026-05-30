export interface Cabin {
  id: string;
  name: string;
  capacity: number;
  size: number; // in square meters
  description: string;
  amenities: string[];
  price: number; // per night in USD
  image: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string; // matches Lucide icon names
}

export interface Review {
  id: string;
  name: string;
  country: string;
  rating: number; // 1-5
  reviewText: string;
  image: string;
}

export interface Experience {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Booking {
  fullName: string;
  email: string;
  phone: string;
  arrivalDate: string;
  departureDate: string;
  guests: number;
  cabinId: string;
  specialRequests: string;
}
