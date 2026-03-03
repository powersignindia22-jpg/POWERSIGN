import { Target, Lightbulb, Users, Leaf, Sun, Award, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const values = [
    { icon: Target, accentColor: "sun", title: "Mission", text: "Empowering Kerala with sustainable, high-performance solar energy solutions since 2022." },
    { icon: Lightbulb, accentColor: "energy", title: "Innovation", text: "Integrating the latest bifacial technology and smart IoT monitoring for maximum energy yield." },
    { icon: ShieldCheck, accentColor: "sun", title: "Reliability", text: "30Y Panel & 10Y Inverter Warranty. വെറും warranty അല്ല.. full On-site & Replacement guaranteed." },
  ];

  const stats = [
    { value: "1000+", label: "Master Installs" },
    { value: "30+", label: "BPCL Projects" },
    { value: "4+", label: "Year Excellence" },
    { value: "100%", label: "On-site Support" },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-48 bg-transparent overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Main Legacy Box (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 lg:p-16 rounded-[2.5rem] lg:rounded-[3.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden flex flex-col justify-between h-full">
                {/* Background Details */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sun/5 rounded-full blur-[80px]" />
                
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-energy/10 border border-energy/20 text-energy-dark text-[10px] font-black tracking-[0.2em] uppercase mb-8 lg:mb-10">
                        <Leaf className="w-3.5 h-3.5" />
                        Our Journey
                    </div>
                    
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium text-charcoal-dark mb-6 lg:mb-12 leading-[1.1] lg:leading-[0.9] tracking-tighter">
                        Engineering <br/>
                        <span className="italic text-charcoal/30 font-light">Kerala's Future</span>
                    </h2>
                    
                    <p className="text-xl lg:text-3xl text-sun-dark font-extrabold mb-10 lg:mb-12 font-ml tracking-tight">
                        വിശ്വസ്ത സേവനം, ഉറപ്പുള്ള ഗുണനിലവാരം
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 lg:mt-16">
                        {values.map((v, i) => (
                            <div key={i} className="flex flex-col gap-3 lg:gap-4">
                                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center ${
                                    v.accentColor === 'sun' ? 'bg-sun/10 text-sun-dark' : 'bg-energy/10 text-energy-dark'
                                }`}>
                                    <v.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                </div>
                                <h4 className="text-xs lg:text-sm font-black uppercase tracking-widest text-charcoal-dark">{v.title}</h4>
                                <p className="text-[11px] lg:text-xs leading-relaxed text-charcoal/50">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 mt-12 lg:mt-16 p-5 lg:p-6 rounded-2xl lg:rounded-3xl bg-charcoal-dark text-white flex items-center gap-4 lg:gap-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-sun flex items-center justify-center flex-shrink-0 shadow-lg shadow-sun/20">
                        <Award className="w-6 h-6 lg:w-7 lg:h-7 text-charcoal-dark" />
                    </div>
                    <div>
                        <div className="text-[9px] lg:text-[10px] font-black tracking-widest uppercase text-sun">Official Integration Partner</div>
                        <div className="text-sm lg:text-base font-display">LIVGUARD Strategic Integrator Status</div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right: Floating Stats Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl flex flex-col justify-center items-center text-center group hover:bg-white transition-all duration-500 hover:shadow-sun/10"
                >
                    <div className="font-display text-3xl lg:text-5xl font-bold text-charcoal-dark mb-1 lg:mb-2 group-hover:text-sun-dark transition-colors">{stat.value}</div>
                    <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/30 group-hover:text-charcoal/60 transition-colors">{stat.label}</div>
                </motion.div>
            ))}
            
            {/* Redesigned BPCL Technical Milestone Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-2 relative aspect-[16/9] rounded-[2.5rem] lg:rounded-[3rem] bg-charcoal-dark overflow-hidden shadow-2xl border-4 border-white/10 group/bpcl"
            >
                {/* 1. Blueprint Grid Background */}
                <div className="absolute inset-0 opacity-20" 
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }} 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sun/10 via-transparent to-transparent" />
                
                {/* 2. Central Technical HUD */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32 lg:w-48 lg:h-48 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                        <div className="absolute inset-0 border-t border-sun/40 rounded-full" />
                    </div>
                    <div className="absolute flex flex-col items-center">
                        <div className="text-4xl lg:text-6xl font-display font-black text-white leading-none mb-1">30<span className="text-sun">+</span></div>
                        <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Technical Assets</div>
                    </div>
                </div>

                {/* 3. Branding & Context */}
                <div className="absolute top-6 lg:top-10 left-6 lg:left-10 flex items-center gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-sun" />
                    </div>
                    <div>
                        <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-sun">Strategic Infrastructure</div>
                        <div className="text-sm lg:text-lg font-display text-white">BPCL Network Integration</div>
                    </div>
                </div>

                {/* 4. Bottom Technical Specs */}
                <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-energy animate-pulse" />
                            <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Master Grid Status: Operational</span>
                        </div>
                        <p className="text-[10px] lg:text-xs text-white/30 font-medium">Full-scale solar electrification across BPCL petrol pumps.</p>
                    </div>
                    <div className="hidden sm:block text-right">
                        <div className="text-[8px] font-black text-sun/40 uppercase tracking-tighter mb-1">Eng. Code: PS-BPCL-SR</div>
                        <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="h-full w-1/2 bg-sun/40"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;