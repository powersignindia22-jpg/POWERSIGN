import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sun, MessageCircleQuestion } from "lucide-react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is my roof suitable for solar?",
      answer: "Most Kerala homes with a concrete terrace or tiled roof have excellent solar potential. We conduct a detailed site analysis to determine the best placement for maximum sunlight exposure.",
    },
    {
      question: "How much can I actually save?",
      answer: "A typical 3kW to 5kW system can reduce your KSEB bills by 80% to 90%. Most of our clients see a full return on investment (ROI) within 4 years.",
    },
    {
      question: "What happens during a power outage?",
      answer: "While standard ON-GRID systems shutdown for safety, our Hybrid and LI-ON Inverter solutions switch seamlessly to battery power, ensuring your luxury remains uninterrupted.",
    },
    {
      question: "What maintenance is required?",
      answer: "Solar is incredibly low maintenance. We recommend a simple water cleaning of the panels once a month. Our team provides annual health checks to ensure peak efficiency.",
    },
    {
      question: "How long is the warranty?",
      answer: "We offer an industry-leading 30-year performance warranty on solar panels and a comprehensive 10-year warranty on inverters. വെറും warranty അല്ല.. this is a full On-site & Replacement warranty, ensuring absolute peace of mind.",
    },
    {
      question: "Do you handle MNRE subsidy projects?",
      answer: "Yes, we are certified for MNRE projects and provide a dedicated 5-year service warranty for all such installations, including full processing of government subsidies.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 lg:py-48 bg-transparent">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun/10 border border-sun/20 text-sun-dark text-[10px] font-black tracking-[0.2em] uppercase mb-10"
            >
                <MessageCircleQuestion className="w-3.5 h-3.5" />
                Information Hub
            </motion.div>
            <h2 className="font-display text-5xl lg:text-7xl font-medium text-charcoal-dark mb-8 leading-[0.9] tracking-tighter">
                Common <br/>
                <span className="italic text-charcoal/40 font-light">Inquiries</span>
            </h2>
          </div>

          {/* FAQ BOXED ACCORDION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-4 lg:p-12 rounded-[3.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden"
          >
            <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group border-b border-charcoal/5 last:border-0 px-6 lg:px-8"
                >
                    <AccordionTrigger className="text-left font-display text-xl lg:text-2xl font-medium text-charcoal-dark hover:no-underline py-8 data-[state=open]:text-sun-dark transition-colors">
                    {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/60 pb-10 text-base lg:text-lg leading-relaxed max-w-3xl">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;