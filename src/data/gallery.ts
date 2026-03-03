// Import all project images
import work1 from "@/assets/works/WhatsApp Image 2025-06-02 at 3.13.26 PM (1).jpeg";
import work2 from "@/assets/works/WhatsApp Image 2025-06-02 at 3.13.26 PM (2).jpeg";
import work3 from "@/assets/works/WhatsApp Image 2025-06-12 at 4.10.09 PM.jpeg";
import work4 from "@/assets/works/WhatsApp Image 2025-06-12 at 4.11.37 PM (1).jpeg";
import work5 from "@/assets/works/WhatsApp Image 2025-06-12 at 4.11.38 PM.jpeg";
import work6 from "@/assets/works/WhatsApp Image 2025-06-12 at 4.11.39 PM.jpeg";
import work7 from "@/assets/works/WhatsApp Image 2025-06-12 at 4.13.03 PM (1).jpeg";
import work8 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.21.23 PM (1).jpeg";
import work9 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.27.59 PM (1).jpeg";
import work10 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.33.34 PM (1).jpeg";
import work11 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.33.34 PM.jpeg";
import work12 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.33.50 PM.jpeg";
import work13 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.34.02 PM.jpeg";
import work14 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.34.03 PM.jpeg";
import work15 from "@/assets/works/WhatsApp Image 2025-08-07 at 12.11.43 PM (1).jpeg";
import work16 from "@/assets/works/WhatsApp Image 2025-08-07 at 12.14.07 PM (1).jpeg";

export interface GalleryItem {
  id: number;
  src: string;
  size?: string; // e.g., "large", "tall", "wide" for masonry layout
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: work4, size: "tall" },
  { id: 2, src: work2, size: "wide" },
  { id: 3, src: work3 },
  { id: 4, src: work1, size: "large" },
  { id: 5, src: work5 },
  { id: 6, src: work6 },
  { id: 7, src: work7, size: "wide" },
  { id: 8, src: work8 },
  { id: 9, src: work9, size: "tall" },
  { id: 10, src: work10 },
  { id: 11, src: work11 },
  { id: 12, src: work15, size: "large" },
  { id: 13, src: work13 },
  { id: 14, src: work14 },
  { id: 15, src: work12, size: "wide" },
  { id: 16, src: work16 },
];