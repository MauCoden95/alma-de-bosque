import type { FC } from "react";
import type { Language } from "./LanguageContext";

interface FlagIconProps {
  className?: string;
}

export function FlagES({ className = "w-5 h-3.5 rounded-sm" }: FlagIconProps) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
    </svg>
  );
}

export function FlagGB({ className = "w-5 h-3.5 rounded-sm" }: FlagIconProps) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="2.5" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="4" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2" />
    </svg>
  );
}

export function FlagPT({ className = "w-5 h-3.5 rounded-sm" }: FlagIconProps) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="10" height="16" fill="#006600" />
      <rect x="10" width="14" height="16" fill="#FF0000" />
      <circle cx="10" cy="8" r="3.2" fill="#FFD700" stroke="#003399" strokeWidth="0.6" />
    </svg>
  );
}

export const LANGUAGE_OPTIONS: {
  code: Language;
  label: string;
  Flag: FC<FlagIconProps>;
}[] = [
  { code: "es", label: "ES", Flag: FlagES },
  { code: "pt", label: "PT", Flag: FlagPT },
  { code: "en", label: "EN", Flag: FlagGB }
];

export function LanguageFlag({ lang, className }: { lang: Language; className?: string }) {
  const option = LANGUAGE_OPTIONS.find((o) => o.code === lang);
  if (!option) return null;
  return <option.Flag className={className} />;
}
