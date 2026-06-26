import { motion } from "framer-motion";
import { Home, Building2, Wrench, ArrowLeft, Zap, ShieldCheck, Clock, Settings, Headphones, Sun, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolarDust from "@/components/SolarDust";
import { contactInfo, getWhatsAppLink } from "@/data/contact";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  const { hash } = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-ivory relative selection:bg-sun/30 overflow-x-hidden">
      <SEO 
        title="Solar Services & Solutions | POWERSIGN INDIA"
        description="Explore our premium solar services: Residential Solar, Commercial Grids, and Lithium Energy Storage solutions in Kerala."
      />
      {/* Background System (Matching Index) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-sun/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-energy/10 rounded-full blur-[100px]" />
      </div>

      {/* The "Sun-Dust" Particle Canvas */}
      <SolarDust />

      <Header />

      <main className="relative z-10 pt-32 lg:pt-48 pb-24">
        <div className="container mx-auto px-6">

          {/* Header Section */}
          <div className="max-w-4xl mb-24">
            <Link to="/">
              <Button variant="ghost" className="mb-8 group text-charcoal/50 hover:text-charcoal-dark -ml-4 rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Overview
              </Button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun/10 border border-sun/20 text-sun-dark text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                <Zap className="w-3.5 h-3.5" />
                Engineering Capabilities
              </div>
              <h1 className="font-display text-5xl lg:text-[7rem] font-medium text-charcoal-dark leading-[0.9] tracking-tighter mb-12">
                Our <span className="italic text-charcoal/30">Service</span> <br />
                Architecture
              </h1>
              <p className="text-xl lg:text-3xl text-charcoal/40 leading-relaxed italic font-light max-w-3xl">
                We design and deploy high-performance energy ecosystems for those who refuse to compromise on quality, reliability, or aesthetics.
              </p>
            </motion.div>
          </div>

          <div className="space-y-32 lg:space-y-48">

            {/* 1. Residential Solar Solution */}
            <section id="residential" className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-1 lg:p-2 rounded-[3.5rem] bg-white shadow-2xl overflow-hidden border border-charcoal/5"
                >
                  <div className="aspect-[4/3] rounded-[3rem] bg-slate-100 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
                      alt="Residential Solar"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/40 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-sun/20 rounded-full blur-3xl" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-sun/10 flex items-center justify-center text-sun-dark">
                    <Home className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30">Vertical 01</span>
                </div>
                <h2 className="font-display text-4xl lg:text-6xl font-bold text-charcoal-dark mb-8 tracking-tight leading-tight">Residential <br /><span className="italic font-light text-charcoal/40">Solar Excellence</span></h2>
                <p className="text-lg lg:text-xl text-charcoal/60 leading-relaxed mb-10">
                  Transform your home into an independent power plant. We specialize in rooftop engineering that integrates bifacial panel technology with the luxury aesthetics of your property.
                </p>
                <div className="space-y-5 mb-12">
                  {[
                    "Bespoke Rooftop Engineering & Design",
                    "High-Yield Bifacial Panel Technology",
                    "Seamless Battery Integration (LIVGUARD LI-ON)",
                    "Real-time IoT Energy Performance Tracking",
                    "30-Year Solar Panel Warranty Support",
                    "10-Year Smart Inverter Warranty"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-charcoal/80 font-medium group">
                      <div className="w-6 h-6 rounded-full bg-sun/10 flex items-center justify-center group-hover:bg-sun group-hover:text-white transition-colors">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-base lg:text-lg">{item}</span>
                    </div>
                  ))}
                  <div className="mt-6 p-4 rounded-2xl bg-sun/5 border border-sun/10">
                    <p className="text-sm font-ml font-bold text-sun-dark">
                      വെറും warranty അല്ല.. <span className="font-sans uppercase tracking-widest ml-2 opacity-60">On-site & Replacement</span>
                    </p>
                  </div>
                </div>
                <a href={getWhatsAppLink('residential')} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full px-10 h-16 bg-charcoal-dark hover:bg-sun hover:text-charcoal-dark transition-all text-lg font-bold shadow-xl">Consult for your Home</Button>
                </a>
              </motion.div>
            </section>

            {/* 2. Commercial Solar Solution */}
            <section id="commercial" className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-energy/10 flex items-center justify-center text-energy-dark">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30">Vertical 02</span>
                </div>
                <h2 className="font-display text-4xl lg:text-6xl font-bold text-charcoal-dark mb-8 tracking-tight leading-tight">Commercial <br /><span className="italic font-light text-charcoal/40">Power Grit</span></h2>
                <p className="text-lg lg:text-xl text-charcoal/60 leading-relaxed mb-10">
                  Engineered for reliability and ROI. We deliver high-capacity industrial and commercial solar grids designed to withstand Kerala's environment while delivering massive energy overhead reductions.
                </p>
                <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-12">
                  <div className="p-8 rounded-[2rem] bg-white border border-charcoal/5 shadow-xl group hover:border-energy/20 transition-all">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-energy-dark mb-2 group-hover:scale-110 transition-transform origin-left">30+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">BPCL Pumps Completed</div>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-white border border-charcoal/5 shadow-xl group hover:border-energy/20 transition-all">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-energy-dark mb-2 group-hover:scale-110 transition-transform origin-left">1000+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Master Installations</div>
                  </div>
                </div>
                <a href={getWhatsAppLink('commercial')} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full px-10 h-16 bg-charcoal-dark hover:bg-energy hover:text-white transition-all text-lg font-bold shadow-xl">Scale your Business</Button>
                </a>
              </motion.div>
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-1 lg:p-2 rounded-[3.5rem] bg-white shadow-2xl overflow-hidden border border-charcoal/5"
                >
                  <div className="aspect-[4/3] rounded-[3rem] bg-slate-100 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80"
                      alt="Commercial Solar"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/40 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-energy/20 rounded-full blur-3xl" />
                </motion.div>
              </div>
            </section>

            {/* 3. Installation & Maintenance Support */}
            <section id="maintenance" className="relative p-10 lg:p-24 rounded-[3rem] lg:rounded-[4.5rem] bg-charcoal-dark text-white overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-50" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sun/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-energy/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sun text-[10px] font-black tracking-[0.2em] uppercase mb-10">
                    <Settings className="w-3.5 h-3.5" />
                    Engineering Lifecycle
                  </div>
                  <h2 className="font-display text-4xl lg:text-7xl font-medium mb-8 leading-[0.9] tracking-tighter">
                    Installation & <br />
                    <span className="italic text-sun font-light lg:font-medium">Lifecycle Support</span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-white/50 mb-12 leading-relaxed italic font-light">
                    Our commitment doesn't end at installation. We provide a full ecosystem of support, from certified deployment to life-long maintenance.
                  </p>

                  <div className="space-y-8">
                    {[
                      { icon: Clock, title: "24/7 Rapid Response", desc: "Dedicated emergency support and technical troubleshooting." },
                      { icon: ShieldCheck, title: "Annual Efficiency Checks", desc: "Proactive maintenance ensuring your panels perform at 100% capacity." },
                      { icon: Headphones, title: "Official MNRE Processing", desc: "5 Year Service warranty for MNRE Projects with full subsidy support." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sun group-hover:bg-sun group-hover:text-charcoal-dark transition-all shrink-0">
                          <item.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{item.title}</h4>
                          <p className="text-white/40 text-base leading-relaxed max-w-lg">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div className="pt-6 border-t border-white/5">
                      <p className="font-ml text-xl text-sun font-bold italic">
                        "വെറും warranty അല്ല.. On-site & Replacement..."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="aspect-square rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-8 group hover:bg-white/10 transition-all shadow-2xl">
                    <Wrench className="w-12 h-12 text-sun mb-4 group-hover:rotate-45 transition-transform" />
                    <div className="font-display text-3xl lg:text-4xl font-bold">100%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">On-site Support</div>
                  </div>
                  <div className="aspect-square rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-8 group hover:bg-white/10 transition-all shadow-2xl">
                    <ShieldCheck className="w-12 h-12 text-energy-light mb-4 group-hover:scale-110 transition-transform" />
                    <div className="font-display text-3xl lg:text-4xl font-bold">10Y</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Service Warranty</div>
                  </div>
                  <div className="col-span-2 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sun/10 rounded-full blur-3xl -z-10 group-hover:bg-sun/20 transition-all" />
                    <div className="text-xs font-black uppercase tracking-widest text-sun mb-6">Certified Integrator</div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-sun flex items-center justify-center text-charcoal-dark shadow-xl">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-lg font-display font-medium">LIVGUARD Strategic Status</div>
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Premium Partnership 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Final Redirect */}
          <div className="mt-48 text-center bg-white/40 backdrop-blur-xl border border-white/60 p-16 lg:p-24 rounded-[4rem] shadow-2xl">
            <h3 className="font-display text-4xl lg:text-6xl text-charcoal-dark mb-10 tracking-tight leading-tight">Ready to start <br /><span className="italic text-charcoal/30">Your Solar Journey?</span></h3>
            <Link to="/">
              <Button size="xl" className="rounded-full px-16 h-20 lg:h-24 bg-charcoal-dark text-white hover:bg-sun hover:text-charcoal-dark transition-all shadow-2xl text-xl font-bold group">
                Return to Main Page
                <ArrowLeft className="ml-4 w-6 h-6 group-hover:-translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;