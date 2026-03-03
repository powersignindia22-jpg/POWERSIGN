import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolarDust from "@/components/SolarDust";
import { useEffect } from "react";
import { galleryItems } from "@/data/gallery";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory relative selection:bg-sun/30 overflow-x-hidden">
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sun/5 rounded-full blur-[150px]" />
      </div>

      <SolarDust />
      <Header />

      <main className="relative z-10 pt-32 lg:pt-48 pb-24">
        <div className="container mx-auto px-6">
          
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative group rounded-[2rem] overflow-hidden bg-white shadow-lg cursor-pointer ${
                  item.size === "wide" ? "md:col-span-2" : 
                  item.size === "tall" ? "row-span-2" : 
                  item.size === "large" ? "md:col-span-2 row-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-charcoal-dark/10 group-hover:bg-charcoal-dark/0 transition-colors duration-700 z-10" />
                <img 
                  src={item.src} 
                  alt="Solar Installation" 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 lg:mt-32 flex flex-col items-center text-center">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal-dark mb-8">Ready to start your project?</h2>
            <Button size="xl" className="rounded-full h-20 px-12 bg-charcoal-dark text-white text-lg hover:bg-sun hover:text-charcoal-dark transition-all duration-500 shadow-2xl group">
              Get Your Free Quote
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
