import { useState, useEffect } from "react";
import { Zap, Clock, Box, Home, Leaf, Sun, ArrowRight, ShieldCheck, Cpu, BatteryCharging } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { contactInfo, getWhatsAppLink } from "@/data/contact";
import lionInverter from "@/assets/lion-inverter.jpg";

const ProductSpotlight = () => {
    const highlights = [
        { icon: Zap, text: "Lithium Core", desc: "High-density performance", accent: "sun" },
        { icon: Clock, text: "Rapid Charge", desc: "Full power in 120 mins", accent: "energy" },
        { icon: Cpu, text: "Smart BMS", desc: "AI-driven cell balancing", accent: "sun" },
        { icon: ShieldCheck, text: "Non-Hazardous", desc: "Safe for indoor luxury", accent: "energy" },
    ];

    const [isHovered, setIsHovered] = useState(false);

    // --- Reusable Header Component with better mobile optimization ---
    const SpotlightHeader = ({ align = "left" }: { align?: "left" | "center" }) => (
        <div className={`${align === "center" ? "text-center mb-12" : "text-left mb-10"}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-energy/10 border border-energy/20 text-energy-dark text-[10px] font-black tracking-[0.2em] uppercase mb-6`}>
                <Zap className="w-3.5 h-3.5 fill-current" />
                Product Innovation
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium text-charcoal-dark mb-6 leading-[1.1] lg:leading-[0.9] tracking-tighter">
                LI-ON <br className="lg:hidden" />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sun via-amber to-honey py-1 lg:py-2">
                    Storage
                    <svg className="absolute w-full h-2 lg:h-5 -bottom-1 left-0 text-sun/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                </span>
            </h2>
            <p className="text-sm lg:text-xl text-charcoal/60 leading-relaxed italic font-light max-w-xl mx-auto lg:mx-0">
                Redefining power storage for the modern Kerala home. Experience the pinnacle of safety and efficiency.
            </p>
        </div>
    );

    return (
        <section id="products" className="relative py-20 lg:py-40 bg-transparent overflow-hidden">

            {/* Dynamic Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-sun/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-5 lg:px-8 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* --- 1. HEADER (Mobile: Top, Desktop: Part of Content) --- */}
                    <div className="lg:hidden w-full">
                        <SpotlightHeader align="center" />
                    </div>

                    {/* --- 2. THE TECH SHOWCASE (Centerpiece) --- */}
                    <div className="lg:col-span-7 w-full">
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative aspect-square sm:aspect-[16/9] lg:aspect-square flex items-center justify-center group"
                        >
                            {/* Visual Anchoring */}
                            <div className="absolute inset-0 bg-gradient-radial from-sun/10 to-transparent scale-110 opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />

                            {/* Static base for better integration */}
                            <div className="absolute bottom-[15%] w-[60%] h-[5%] bg-charcoal-dark/5 blur-2xl rounded-full scale-x-150" />

                            {/* HUD Elements - Simplified for mobile */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[85%] lg:w-[90%] h-[85%] lg:h-[90%] border border-dashed border-sun/10 rounded-full"
                            />

                            {/* The Inverter Assembly */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotateZ: isHovered ? 0 : -2
                                }}
                                transition={{
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                    rotateZ: { duration: 1 }
                                }}
                                className="relative z-20 w-[75%] lg:w-[70%] h-[75%] lg:h-[70%] flex items-center justify-center"
                            >
                                <img
                                    src={lionInverter}
                                    alt="LI-ON Inverter"
                                    className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_40px_80px_rgba(255,180,0,0.2)] transition-all duration-700"
                                />

                                {/* Data Node Tags (Repositioned for mobile safety) */}
                                <div className="absolute top-0 right-0 lg:-right-4">
                                    <div className="w-8 lg:w-12 h-8 lg:h-12 rounded-xl bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center border border-charcoal/5">
                                        <BatteryCharging className="w-4 lg:w-6 h-4 lg:h-6 text-energy animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Info Badges (Responsive) */}
                            <div className="absolute top-10 left-0 lg:-left-4 p-3 lg:p-4 bg-white/80 backdrop-blur-xl border border-charcoal/5 rounded-2xl shadow-xl z-30 transform -rotate-3">
                                <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-charcoal/40">Status</div>
                                <div className="text-xs lg:text-sm font-bold text-charcoal-dark">OPTIMIZED</div>
                            </div>
                        </div>
                    </div>

                    {/* --- 3. CONTENT COLUMN --- */}
                    <div className="lg:col-span-5 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Desktop Header Only */}
                            <div className="hidden lg:block">
                                <SpotlightHeader align="left" />
                            </div>

                            {/* Benefits Grid - Optimized for Mobile */}
                            <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-10 lg:mb-14">
                                {highlights.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-white/40 backdrop-blur-md border border-charcoal/5 hover:bg-white hover:shadow-xl transition-all duration-500"
                                    >
                                        <div className={`w-8 lg:w-12 h-8 lg:h-12 rounded-lg lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 ${item.accent === 'sun' ? 'bg-sun/10 text-sun-dark' : 'bg-energy/10 text-energy-dark'
                                            }`}>
                                            <item.icon className="w-4 lg:w-6 h-4 lg:h-6" />
                                        </div>
                                        <div className="text-[10px] lg:text-sm font-black text-charcoal-dark uppercase tracking-tight lg:tracking-wide mb-0.5">{item.text}</div>
                                        <div className="text-[7px] lg:text-[10px] text-charcoal/50 uppercase tracking-widest font-bold leading-tight">{item.desc}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                                <Link to="/contact" className="w-full sm:w-auto">
                                    <Button size="xl" className="w-full sm:w-auto bg-charcoal-dark hover:bg-black text-white rounded-full px-10 h-14 lg:h-16 shadow-xl transition-all duration-500 hover:scale-105 group">
                                        Technical Specs
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                                <a href={getWhatsAppLink('productInquiry')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button variant="ghost" size="xl" className="w-full sm:w-auto text-charcoal-dark hover:bg-white/50 rounded-full px-8 h-14 lg:h-16 border border-charcoal/5">
                                        Contact Us
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductSpotlight;