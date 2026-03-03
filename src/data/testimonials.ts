export interface Testimonial {
  name: string;
  location: string;
  text: string;
  accent: "sun" | "energy";
}

export const testimonials: Testimonial[] = [
  { 
    name: "Rajesh Kumar",
    location: "Kochi, Kerala",
    text: "വൈദ്യുതി ബിൽ ലാഭം മാത്രമല്ല, സമാധാനവും. The transition to solar was seamless and the installation looks like modern architecture.",
    accent: "sun",
  },
  {
    name: "Dr. Priya Nair",
    location: "Trivandrum, Kerala",
    text: "As a clinic, we needed absolute reliability. Powersign delivered a system that has never faltered in heavy monsoons.",
    accent: "energy",
  },
  {
    name: "Mohammed Ashraf",
    location: "Thrissur, Kerala",
    text: "The LI-ON lithium inverter is silent and incredibly efficient. It's refreshing to work with true masters.",
    accent: "sun",
  },
  {
    name: "Abraham Varghese",
    location: "Kottayam, Kerala",
    text: "Quality engineering at its best. The team was professional and the installation was completed on time and within budget.",
    accent: "sun",
  },
  {
    name: "Sreejith R.",
    location: "Palakkad, Kerala",
    text: "The most reliable solar partner in Kerala. Their after-sales service and maintenance support are truly exceptional.",
    accent: "energy",
  },
  {
    name: "Lakshmi Menon",
    location: "Ernakulam, Kerala",
    text: "Significant reduction in my monthly electricity bills. The monitoring app is easy to use and very informative.",
    accent: "sun",
  },
  {
    name: "Faisal Ahmed",
    location: "Malappuram, Kerala",
    text: "A very professional approach from start to finish. I highly recommend Powersign for any solar power requirements.",
    accent: "energy",
  },
];