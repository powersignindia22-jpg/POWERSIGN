import { Phone, Mail, MapPin, MessageSquare, Instagram, Linkedin, Facebook } from "lucide-react";
import React from "react";

export interface ContactMethod {
  icon: React.ElementType;
  title: string;
  value: string;
  desc: string;
  href: string;
  accent: "sun" | "energy";
}

export interface Office {
  city: string;
  address: string;
  type: string;
  mapLink?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

export const contactInfo = {
  phone: {
    display: "+91 75618 22446",
    href: "tel:+917561822446",
  },
  email: {
    primary: "powersignindia@gmail.com",
    secondary: "powersignindia@gmail.com",
    href: "mailto:powersignindia@gmail.com",
  },
  whatsapp: {
    number: "917561822446",
    href: "https://wa.me/917561822446",
  },
  offices: [
    {
      city: "Kochi",
      address: "Paradise Road, Ponnurunni, Vyttila, Kochi - 682019",
      type: "Registered Office & HQ",
      mapLink: "https://maps.app.goo.gl/kKvNTfKaGCVNTU6S9",
    },
    // Footer address (kept for compatibility with existing compon ents)
    {
      city: "Kochi (Footer)",
      address: "Paradise Road, Ponnurunni, Vyttila, Kochi - 682019",
      type: "Registered Office",
      mapLink: "https://maps.app.goo.gl/kKvNTfKaGCVNTU6S9",
    }
  ] as Office[],
};

// WhatsApp pre-filled message templates
export const whatsappMessages = {
  freeQuote: "Hello POWERSIGN! I would like to request a free quote for solar installation.",
  consultation: "Hello POWERSIGN! I'm interested in scheduling a consultation for a solar energy system.",
  residential: "Hello POWERSIGN! I would like to discuss solar solutions for my home.",
  commercial: "Hello POWERSIGN! I'm interested in commercial solar solutions for my business.",
  productInquiry: "Hello POWERSIGN! I would like to know more about your solar products and services.",
  siteVisit: "Hello POWERSIGN! I would like to schedule a site visit for my property.",
};

// Helper function to create WhatsApp link with pre-filled message
export const getWhatsAppLink = (messageType: keyof typeof whatsappMessages = 'freeQuote') => {
  const message = whatsappMessages[messageType];
  return `https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(message)}`;
};

export const contactMethods: ContactMethod[] = [
  {
    icon: Phone,
    title: "Direct Call",
    value: contactInfo.phone.display,
    desc: "Speak with our lead engineers.",
    href: contactInfo.phone.href,
    accent: "sun",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Support",
    value: "Chat with us",
    desc: "Instant project queries & updates.",
    href: getWhatsAppLink('consultation'),
    accent: "energy",
  },
  {
    icon: Mail,
    title: "Email Inquiry",
    value: contactInfo.email.primary,
    desc: "For detailed corporate proposals.",
    href: contactInfo.email.href,
    accent: "sun",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/_powersign_",
    icon: Instagram,
  },
  {
    name: "Linkedin",
    href: "#", // Placeholder - update when LinkedIn account is ready
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CDtdk3F77/",
    icon: Facebook,
  },
];