import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Award, ArrowRight, Play, CheckCircle2, ChevronDown, Zap, Star, Activity, Cpu, Globe, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroSolar from "@/assets/hero-solar.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const stats = [
    { value: "1000+", label: "Projects Completed" },
    { value: "30+", label: "BPCL Petrol Pumps" },
    { value: "30Y", label: "Panel Warranty" },
    { value: "10Y", label: "Inverter Warranty" },
  ];

  // --- COMPONENT: THE HYBRID TECH VISUAL (Image + Surrounds) ---
  const HybridSolarVisual = () => (
    <div className="relative w-full aspect-square max-w-[550px] mx-auto flex items-center justify-center">
      
      {/* Decorative Brand Text behind visual */}
      <div className="absolute -top-10 -right-10 pointer-events-none opacity-[0.03] select-none hidden lg:block">
        <span className="font-display text-[12rem] font-black tracking-tighter uppercase">Power</span>
      </div>

      {/* 1. Outer Rotating HUD Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[98%] h-[98%] border border-dashed border-sun/10 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[85%] h-[85%] border border-dashed border-energy/10 rounded-full"
      />
      
      {/* 2. Orbiting Energy Sparks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transform: `rotate(${i * 60}deg)` }}
            >
                <div className="w-1.5 h-1.5 bg-sun rounded-full shadow-[0_0_10px_var(--sun)]" style={{ marginLeft: '48%' }} />
            </motion.div>
        ))}
      </div>

      {/* 3. Pulsing Data Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[
            { pos: "top-0 left-1/2", icon: Activity, label: "SYNC", color: "sun" },
            { pos: "bottom-0 left-1/2", icon: Shield, label: "30Y-WARR", color: "sun" },
            { pos: "bottom-1/4 right-0", icon: Cpu, label: "HV-CORE", color: "energy" },
            { pos: "bottom-1/4 left-0", icon: Globe, label: "GRID", color: "sun" }
        ].map((node, i) => (
            <motion.div 
                key={i}
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, delay: i * 1.2, repeat: Infinity }}
                className={`absolute ${node.pos} -translate-x-1/2 flex flex-col items-center gap-1.5 z-20`}
            >
                <div className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-xl border border-charcoal/5 flex items-center justify-center shadow-xl">
                    <node.icon className={`w-5 h-5 ${node.color === 'sun' ? 'text-sun-dark' : 'text-energy-dark'}`} />
                </div>
                <span className="text-[9px] font-black tracking-widest text-charcoal/40 uppercase">{node.label}</span>
            </motion.div>
        ))}
      </div>

      {/* 4. THE MAIN IMAGE (The Centerpiece) */}
      <div className="relative w-[65%] h-[65%] z-10 group">
        <div className="absolute inset-0 bg-sun/10 blur-[80px] rounded-full scale-125" />
        <div className="absolute inset-0 bg-white p-2 rounded-[3rem] lg:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="relative w-full h-full rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden bg-slate-100">
                <img 
                    src={heroSolar} 
                    alt="Premium Solar" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/40 to-transparent" />
                <motion.div 
                    animate={{ top: ["-50%", "150%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
                />
            </div>
        </div>
        <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -left-8 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl z-20"
        >
            <div className="absolute inset-0 bg-sun/20 blur-xl rounded-full" />
            <Sun className="w-8 h-8 text-sun fill-sun/10 animate-pulse" />
        </motion.div>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" stroke="var(--sun)" strokeWidth="0.1" fill="none" strokeDasharray="1 4" />
        <motion.circle 
            cx="50" cy="50" r="48" 
            stroke="var(--sun)" strokeWidth="0.3" fill="none" 
            strokeDasharray="5 95"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-24 lg:pt-32">
      
      <div className="container relative z-10 mx-auto px-5">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- RIGHT COLUMN: VISUAL --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 order-1 lg:order-2 w-full"
          >
            <HybridSolarVisual />
          </motion.div>

          {/* --- LEFT COLUMN: CONTENT (ENHANCED DESIGN) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            {/* 1. Ultra-Premium Editorial Branding */}
            <div className="flex flex-col items-center lg:items-start mb-16 relative">
                <div className="flex items-stretch gap-6 mb-8">
                    {/* Vertical Suture Line */}
                    <div className="w-1 bg-gradient-to-b from-sun via-sun/20 to-transparent rounded-full" />
                    
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-display font-black tracking-[0.6em] uppercase text-charcoal-dark leading-none group cursor-default">
                            POWER<span className="text-sun opacity-80 group-hover:opacity-100 transition-opacity">SIGN</span>
                        </h2>
                    </div>
                </div>

                {/* Floating Glass Jewel (Trust Badge) */}
                <div className="relative group cursor-default">
                    <div className="absolute inset-0 bg-sun/5 rounded-full blur-xl group-hover:bg-sun/10 transition-all duration-700" />
                    <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] group-hover:shadow-sun/10 transition-all duration-500">
                        <div className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sun"></span>
                        </div>
                        <span className="text-[12px] lg:text-[13px] font-extrabold tracking-tight text-charcoal-dark/90 font-ml leading-none">
                            സൗരോർജ്ജം, <span className="text-sun-dark">സുരക്ഷിതം, സമാധാനം</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. Headline with Editorial Flair */}
            <h1 className="font-display text-[2.8rem] sm:text-6xl lg:text-[6rem] font-medium leading-[1.1] lg:leading-[0.9] text-charcoal-dark mb-10 tracking-tighter">
              <span className="block mb-4 text-charcoal/40 font-light tracking-normal italic text-[0.4em] lg:text-[0.35em] uppercase not-italic font-sans font-bold tracking-[0.2em] ml-1">
                Engineering The
              </span>
              Power Your{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sun via-amber to-honey">
                Future
                <svg className="absolute w-full h-2 lg:h-5 -bottom-1 lg:-bottom-2 left-0 text-sun/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <br/>
              <span className="italic font-light text-charcoal/90 relative">
                With Solar Energy
                <span className="absolute -right-8 top-0 hidden lg:block">
                    <Zap className="w-8 h-8 text-sun/20 rotate-12" />
                </span>
              </span>
            </h1>

            {/* 3. Description with Vertical Accents */}
            <div className="relative pl-0 lg:pl-8 mb-12 max-w-xl mx-auto lg:mx-0">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sun via-amber/20 to-transparent rounded-full" />
              <p className="text-base lg:text-xl text-charcoal/60 leading-relaxed">
                Transform your property with <span className="text-charcoal-dark font-semibold italic">bespoke solar ecosystems</span> featuring <span className="text-charcoal-dark font-medium underline underline-offset-8 decoration-sun/30">On-site Replacement Warranty</span> and uncompromising aesthetics.
              </p>
            </div>

            {/* 4. High-End CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="xl" className="w-full bg-charcoal-dark hover:bg-black text-white rounded-full px-12 h-16 lg:h-20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105 active:scale-95 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                      Request an Estimate
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sun/0 via-sun/10 to-sun/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
              
              <a href="#projects" className="w-full sm:w-auto">
                <Button variant="ghost" size="xl" className="w-full text-charcoal-dark hover:bg-white/50 rounded-full px-10 h-16 lg:h-20 gap-4 group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-charcoal/10 flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-500">
                    <Play className="w-5 h-5 fill-charcoal text-charcoal ml-1" />
                  </div>
                  <span className="font-bold tracking-wide">Our Portfolio</span>
                </Button>
              </a>
            </div>

            {/* 5. Trust Indicators */}
            <div className="hidden sm:flex items-center justify-center lg:justify-start gap-12 pt-10 border-t border-charcoal/5">
              {[
                { label: "ISO Certified", icon: Shield },
                { label: "10-Year Warranty", icon: Award },
                { label: "KSEB Approved", icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-sun/10 flex items-center justify-center group-hover:bg-sun group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-sun/20">
                    <item.icon className="w-6 h-6 text-sun-dark transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-black tracking-[0.15em] uppercase text-charcoal/50 group-hover:text-charcoal-dark transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- STATS BAR --- */}
        <div className="mt-16 lg:mt-24 mb-[15px] grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-3 bg-white/40 backdrop-blur-xl border border-charcoal/5 rounded-[3rem] lg:rounded-full shadow-2xl">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center py-8 px-4 hover:bg-white/80 rounded-[2.5rem] transition-all duration-500 group">
                    <div className="font-display text-3xl lg:text-5xl font-bold text-charcoal-dark leading-none mb-2 group-hover:text-sun-dark transition-colors">{stat.value}</div>
                    <div className="text-[11px] lg:text-xs font-black uppercase tracking-[0.2em] text-charcoal/30 text-center group-hover:text-charcoal/60 transition-colors">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 opacity-30 animate-bounce">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-charcoal-dark">Discovery</span>
        <ChevronDown className="w-5 h-5 text-charcoal-dark" />
      </div>
    </section>
  );
};

export default HeroSection;