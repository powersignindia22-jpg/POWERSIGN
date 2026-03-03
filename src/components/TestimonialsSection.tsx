import * as React from "react";
import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="relative py-24 lg:py-48 bg-transparent">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun/10 border border-sun/20 text-sun-dark text-[10px] font-black tracking-[0.2em] uppercase mb-10"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            Voices of Power
          </motion.div>
          <h2 className="font-display text-5xl lg:text-7xl font-medium text-charcoal-dark leading-[0.9] tracking-tighter">
            The Living <br/>
            <span className="italic text-charcoal/40 font-light">Proof</span>
          </h2>
        </div>

        {/* TESTIMONIAL CAROUSEL */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-6 lg:-ml-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 lg:pl-8 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="h-full group relative p-8 lg:p-10 rounded-[2.5rem] bg-white border border-charcoal/5 shadow-xl flex flex-col justify-between hover:border-sun/30 transition-all duration-500"
                >
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-sun text-sun" />)}
                    </div>
                    
                    <p className="font-display text-lg lg:text-xl text-charcoal-dark leading-relaxed mb-10 italic">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-4 pt-8 border-t border-charcoal/5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display text-lg font-bold ${
                        testimonial.accent === 'sun' ? 'bg-sun text-charcoal-dark' : 'bg-energy text-white'
                    }`}>
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-display text-lg font-bold text-charcoal-dark">{testimonial.name}</h4>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-charcoal/30">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  );
};

export default TestimonialsSection;