import React from "react";
import {
  Wifi,
  Car,
  Flame,
  ChefHat,
  Utensils,
  Tv,
  Mountain,
  Waves,
  Thermometer,
  Heart,
  Coffee,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  Star,
  ArrowRight,
  ArrowLeft,
  X,
  Send,
  MessageCircle,
  Menu,
  CheckCircle2,
  Lock,
  Compass,
  Award
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Wifi,
  Car,
  Flame,
  ChefHat,
  Utensils,
  Tv,
  Mountain,
  Waves,
  Water: Waves, // fallback helper
  Thermometer,
  Heart,
  Coffee,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  Star,
  ArrowRight,
  ArrowLeft,
  X,
  Send,
  MessageCircle,
  Menu,
  CheckCircle2,
  Lock,
  Compass,
  Award
};

interface IconMapperProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IconMapper({ name, className = "", size = 20 }: IconMapperProps) {
  const IconComponent = iconMap[name] || Sparkles; // fallback to Sparkles if not found
  return <IconComponent className={className} size={size} />;
}
