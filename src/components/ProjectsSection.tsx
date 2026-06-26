import { MapPin, Zap, Leaf, Sun, ArrowUpRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-48 bg-transparent overflow-hidden">

      <div className="container mx-auto px-5 lg:px-8 relative z-10">

        {/* --- HEADER: EDITORIAL STYLE --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun/10 border border-sun/20 text-sun-dark text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              <Camera className="w-3.5 h-3.5" />
              The Portfolio
            </div>
            <h2 className="font-display text-5xl lg:text-[8rem] font-medium text-charcoal-dark leading-[0.9] tracking-tighter">
              Energy <br />
              <span className="italic text-charcoal/30 font-light">Landmarks.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md text-lg text-charcoal/50 leading-relaxed italic border-l-2 border-sun/30 pl-8 pb-2"
          >
            Every installation is a statement of intent. We transform rooftops into high-performance engineering marvels across Kerala.
          </motion.p>
        </div>

        {/* --- ASYMMETRIC PROJECT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px] lg:auto-rows-[400px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden bg-white shadow-2xl ${project.className}`}
            >
              {/* Image Container with Physical Framing */}
              <div className="absolute inset-0 p-2 lg:p-3">
                <div className="relative w-full h-full rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden">
                  <img
                    src={project.image}
                    alt="Solar Project"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  />

                  {/* Mobile-only Indicator (Keep for interaction cue) */}
                  <div className="absolute top-6 right-6 lg:hidden z-30">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Camera className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER ACTION --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 lg:mt-32 flex flex-col items-center gap-8"
        >
             <div className="h-px w-32 bg-charcoal/10" />
             <Link to="/gallery">
                <Button variant="ghost" size="xl" className="rounded-full px-12 h-20 text-charcoal-dark/40 hover:text-charcoal-dark gap-4 group transition-all">
                    <span className="font-display text-2xl">Explore Full Gallery</span>
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
             </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;