import { Handshake, Star, Shield, Leaf, Sun, Award, Globe, Zap, CheckCircle2, BadgeCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import livguardLogo from "@/assets/livguard-new.png";
import livguardImage from "@/assets/liveguardimage.png";

const PartnershipSection = () => {
  const features = [
    { icon: Globe, title: "Global Standards", desc: "World-class energy storage technology.", color: "text-emerald-600" },
    { icon: Shield, title: "Warranty Secured", desc: "Direct manufacturer-backed guarantees.", color: "text-amber-500" },
  ];

  return (
    <section id="partnership" className="relative py-20 lg:py-48 bg-transparent overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* THE MASTER PARTNERSHIP BOX (Trust & Stability Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 lg:p-24 rounded-[3.5rem] lg:rounded-[5rem] bg-white/90 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-white overflow-hidden"
        >
            {/* 1. Subtle Background Geometry */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
            
            {/* 2. Trustworthy Auras (Silver & Emerald) */}
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px]" />
            <div className="absolute -bottom-32 -left-24 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px]" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                
                {/* --- Left Column: Visual & Trust Badges (5 cols) --- */}
                <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
                    
                    {/* Official Partner Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-black tracking-[0.2em] uppercase mb-10 shadow-sm">
                        <BadgeCheck className="w-4 h-4 text-emerald-500" />
                        Official Certified Partner
                    </div>
                    
                    {/* Independent Visual Frame */}
                    <div className="relative w-full aspect-[4/3] mb-8 rounded-[2.5rem] overflow-hidden shadow-2xl group border-[6px] border-white">
                        <img 
                            src={livguardImage} 
                            alt="LIVGUARD Excellence" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                    
                    {/* Brand Card ("Away" from the image) */}
                    <div className="w-full bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex items-center justify-between mb-12">
                        <img 
                            src={livguardLogo} 
                            alt="LIVGUARD" 
                            className="h-8 lg:h-12 w-auto object-contain" 
                        />
                        <div className="h-10 w-px bg-slate-200 mx-4 lg:mx-8" />
                        <div className="flex items-center gap-3">
                            <Award className="w-6 h-6 text-amber-500" />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 text-left leading-tight">Certified<br/>Premium Integrator</span>
                        </div>
                    </div>

                    <h2 className="font-display text-4xl lg:text-6xl font-medium text-charcoal-dark mb-6 leading-[1.1] tracking-tighter text-left w-full">
                        Building Trust with <br/>
                        <span className="italic text-slate-500">Global Leaders</span>
                    </h2>
                    
                    <p className="text-lg lg:text-xl text-charcoal/50 leading-relaxed italic font-light max-w-sm text-left w-full">
                        "Your energy security backed by India's most trusted manufacturing power."
                    </p>
                </div>

                {/* --- Right Column: The Narrative (7 cols) --- */}
                <div className="lg:col-span-7">
                    <div className="space-y-10 lg:space-y-16">
                        {/* Narrative Paragraph */}
                        <div className="relative pl-0 lg:pl-10">
                            {/* Trust Line (Platinum Gradient) */}
                            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-slate-300 via-emerald-200 to-amber-200 rounded-full" />
                            
                            <p className="text-xl lg:text-3xl text-charcoal/70 leading-relaxed font-light">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-livguard block mb-6">Our Journey</span>
                                POWERSIGN INDIA is honored to hold <span className="text-charcoal-dark font-semibold">Strategic Partner Status</span> with <span className="text-[#e31e24] font-bold">LIVGUARD</span>, India's premier energy solutions provider. 
                            </p>
                            <p className="mt-6 text-lg text-charcoal/60 leading-relaxed max-w-2xl">
                                We prioritize your peace of mind. This alliance guarantees that every installation is backed by direct manufacturer support and robust long-term reliability.
                            </p>
                        </div>

                        {/* Partner Stats - Unified 3-Stat Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 border-t border-slate-100 pt-10">
                            <div className="group cursor-default">
                                <div className="text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">Platinum</div>
                                <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                                    Trust Status
                                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                </div>
                            </div>
                            <div className="group cursor-default">
                                <div className="text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-2 group-hover:text-amber-500 transition-colors">4+</div>
                                <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                                    Years Mastery
                                    <Clock className="w-3 h-3 text-amber-500" />
                                </div>
                            </div>
                            <div className="group cursor-default">
                                <div className="text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-2 group-hover:text-blue-500 transition-colors">#1</div>
                                <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                                    Region Leader
                                    <Star className="w-3 h-3 text-blue-500 fill-blue-500" />
                                </div>
                            </div>
                        </div>

                        {/* Trust Feature Tags */}
                        <div className="flex flex-wrap gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wide group-hover:text-black transition-colors">{feature.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PartnershipSection;