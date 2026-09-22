export const APP_NAME = "Ticketing Solution";

export const PAGE_TITLES = {
  HOME: "Home | Ticketing Solution",
  PROCESS: "Process | Ticketing Solution",
  FEATURES: "Features | Ticketing Solution",
  ABOUT: "About | Ticketing Solution",
  SIGNUP: "Sign Up | Ticketing Solution",
  HELP_CENTER: "Help Center | Ticketing Solution",
  FAQS: "FAQs | Ticketing Solution",
  TERMS: "Terms & Conditions | Ticketing Solution",
  PRIVACY: "Privacy Policy | Ticketing Solution",
  CANCELLATION: "Cancellation Policy | Ticketing Solution",
} as const;

export const META_DESCRIPTIONS = {
  DEFAULT:
    "A unified desktop platform for managing attractions, ticket bookings, visitors, seating and daily operations.",
  HOME: "Smart Attraction & Ticketing Platform - Manage Every Journey, From One Place.",
  PROCESS: "Seamless ticket booking and travel management process.",
  FEATURES: "Comprehensive ticketing and attraction management features.",
  ABOUT:
    "Your trusted platform for seamless ticket booking, travel management, and unforgettable journeys.",
} as const;

export const SITE_METADATA = {
  title: PAGE_TITLES.HOME,
  description: META_DESCRIPTIONS.DEFAULT,
  icons: {
    icon: "/assest/images/logo.png",
    shortcut: "/assest/images/logo.png",
    apple: "/assest/images/logo.png",
  },
} as const;
