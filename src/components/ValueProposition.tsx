import { TrendingDown, Battery, Wrench, Leaf, Sun, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduced Bills",
      description: "Harness the sun to dramatically lower your monthly energy overheads by up to 90%.",
      accent: "sun",
    },
    {
      icon: ShieldCheck,
      title: "Clean Energy",
      description: "Zero emissions, sustainable operation that protects Kerala's natural beauty.",
      accent: "energy",
    },
    {
      icon: Wrench,
      title: "Expert Engineering",
      description: "Custom-engineered systems by certified experts with life-long maintenance support.",
      accent: "sun",
    },
  ];

  return (
    <section className="relative py-12 lg:py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60 transition-all duration-500 ease-out"
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                  benefit.accent === 'sun' 
                    ? 'bg-gradient-to-br from-sun/20 to-amber/20 text-sun-dark' 
                    : 'bg-gradient-to-br from-energy/20 to-emerald-500/20 text-energy-dark'
                }`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-charcoal-dark mb-4 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed transition-colors">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;