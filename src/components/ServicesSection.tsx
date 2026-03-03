import { Home, Building2, Battery, Settings, ArrowRight, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Transform your home into a powerhouse. Premium rooftop installations designed for aesthetics and maximum efficiency.",
      accent: "sun"
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Scale your business sustainably. High-capacity solar grids that reduce operational costs and carbon footprint.",
      accent: "energy"
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Power through the night. Advanced lithium-ion battery solutions ensuring 24/7 energy independence.",
      accent: "sun"
    },
    {
      icon: Settings,
      title: "Smart Maintenance",
      description: "Proactive care for peak performance. IoT-enabled monitoring and rapid-response service teams.",
      accent: "energy"
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-40 bg-transparent">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-center lg:text-left mx-auto lg:mx-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun/10 border border-sun/20 text-sun-dark text-[10px] font-black tracking-[0.2em] uppercase mb-6"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Core Expertise
          </motion.div>
          <h2 className="font-display text-5xl lg:text-7xl font-medium text-charcoal-dark leading-[0.9] tracking-tighter">
            Architectural <br/>
            <span className="italic text-charcoal/40 font-light">Solar Solutions</span>
          </h2>
        </div>

        {/* NEW "Architectural Glass" CARD GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Card Body */}
              <div className="relative h-full p-8 lg:p-10 rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_40px_80px_-20px_rgba(255,180,0,0.15)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between overflow-hidden">
                
                {/* Internal Hover Accent (Corner Glow) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sun/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                    {/* Floating Icon Style */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 ${
                    service.accent === 'sun' ? 'bg-sun text-charcoal-dark shadow-sun/20' : 'bg-energy text-white shadow-energy/20'
                    }`}>
                        <service.icon className="w-8 h-8" />
                    </div>

                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal-dark mb-4 leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm lg:text-base leading-relaxed group-hover:text-charcoal/80 transition-colors duration-500">
                        {service.description}
                    </p>
                </div>

                <div className="relative z-10 mt-12 pt-8 border-t border-charcoal/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Excellence 0{index + 1}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </div>

                {/* Animated Scan Line (Subtle) */}
                <motion.div 
                    animate={{ left: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center lg:justify-start">
            <Link to="/services">
                <Button variant="outline" className="rounded-full border-charcoal/10 hover:border-sun/20 hover:bg-white px-10 h-14 gap-3 group transition-all duration-500">
                    Full Technical Service Matrix
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;