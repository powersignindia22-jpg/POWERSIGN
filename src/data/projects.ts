import work1 from "@/assets/works/WhatsApp Image 2025-06-02 at 3.13.26 PM (1).jpeg";
import work16 from "@/assets/works/WhatsApp Image 2025-08-07 at 12.14.07 PM (1).jpeg";
import work12 from "@/assets/works/WhatsApp Image 2025-07-23 at 3.33.50 PM.jpeg";

export interface Project {
  image: string;
  className: string;
}

export const projects: Project[] = [
  {
    image: work1,
    className: "lg:col-span-8 lg:row-span-2"
  },
  {
    image: work16,
    className: "lg:col-span-4 lg:row-span-1"
  },
  {
    image: work12,
    className: "lg:col-span-4 lg:row-span-1"
  },
];