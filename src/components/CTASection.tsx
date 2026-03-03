import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sun, Leaf, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo, getWhatsAppLink } from "@/data/contact";

const CTASection = () => {
    return (
        <section id="contact" className="relative py-20 lg:py-48 bg-transparent">

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-charcoal-dark rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden text-center flex flex-col items-center"
                >
                    {/* Background Details */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="absolute top-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-sun/10 rounded-full blur-[80px] lg:blur-[150px] -translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute bottom-0 right-0 w-[200px] lg:w-[500px] h-[200px] lg:h-[500px] bg-energy/5 rounded-full blur-[60px] lg:blur-[120px] translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 w-full max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sun text-[10px] font-black tracking-[0.3em] uppercase mb-10 lg:mb-16">
                            <Sparkles className="w-3.5 h-3.5" />
                            The Final Step
                        </div>

                        <h2 className="font-display text-4xl sm:text-5xl lg:text-[8rem] font-medium text-white mb-8 lg:mb-12 leading-[1.1] lg:leading-[0.85] tracking-tighter">
                            Ready to <span className="italic text-sun font-light lg:font-medium">Revolutionize</span> <br className="hidden lg:block" />
                            Your Energy?
                        </h2>

                        <p className="text-base lg:text-3xl text-white/40 mb-12 lg:mb-20 max-w-3xl mx-auto leading-relaxed italic font-light">
                            Experience the luxury of unlimited power. Our engineers are ready to blueprint your bespoke ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-16 lg:mb-24 justify-center">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                                <a href={getWhatsAppLink('consultation')} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button size="xl" className="w-full sm:w-auto bg-sun hover:bg-white text-charcoal-dark rounded-full px-10 lg:px-16 h-16 lg:h-24 text-lg lg:text-xl font-bold shadow-[0_20px_40px_-10px_rgba(255,180,0,0.3)] transition-all duration-500 group">
                                        Request a Consult
                                        <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 ml-3 lg:ml-4 group-hover:translate-x-2 transition-transform duration-500" />
                                    </Button>
                                </a>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                                <a href={contactInfo.phone.href} className="w-full">
                                    <Button variant="ghost" size="xl" className="w-full sm:w-auto text-white hover:bg-white/5 rounded-full px-8 lg:px-12 h-16 lg:h-24 border border-white/10 gap-3 lg:gap-4 text-base lg:text-lg">
                                        <Calendar className="w-5 lg:w-6 h-5 lg:h-6 text-sun" />
                                        Book Site Visit
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 lg:gap-24 opacity-20">
                            {[
                                { label: "Zero Obligation", icon: Leaf },
                                { label: "Premium Support", icon: Sun },
                                { label: "Govt. Subsidies", icon: Sparkles },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 lg:gap-3">
                                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                                    <span className="text-[8px] lg:text-[10px] font-black tracking-[0.2em] uppercase">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;