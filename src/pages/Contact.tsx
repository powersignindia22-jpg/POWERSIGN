import { motion } from "framer-motion";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolarDust from "@/components/SolarDust";
import { useEffect, useState } from "react";
import { contactMethods, contactInfo, socialLinks } from "@/data/contact";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential Rooftop",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Solar Inquiry - ${formData.projectType}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}

Message:
${formData.message}

---
Sent from POWERSIGN Contact Form
    `.trim());

    const mailtoLink = `mailto:${contactInfo.email.primary}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Show success message
    toast.success("Opening your email client...");

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Residential Rooftop",
        message: ""
      });
    }, 1000);
  };

  // Filter out the footer-specific office for display here
  const displayOffices = contactInfo.offices.filter(o => !o.city.includes("Footer"));

  return (
    <div className="min-h-screen bg-ivory relative selection:bg-sun/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sun/5 rounded-full blur-[150px]" />
      </div>

      <SEO 
        title="Contact POWERSIGN | Solar Installation & Queries"
        description="Get in touch with POWERSIGN INDIA for a free quote on solar installations, commercial grids, and energy storage solutions in Kerala."
      />
      <SolarDust />
      <Header />

      <main className="relative z-10 pt-32 lg:pt-48 pb-24">
        <div className="container mx-auto px-6">

          {/* Header Section */}
          <div className="max-w-4xl mb-20 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun/10 border border-sun/20 text-sun-dark text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                <Globe className="w-3.5 h-3.5" />
                Connect with POWERSIGN
              </div>
              <h1 className="font-display text-5xl lg:text-[7rem] font-medium text-charcoal-dark leading-[0.9] tracking-tighter mb-12">
                Initiate Your <br />
                <span className="italic text-charcoal/30">Renaissance</span>
              </h1>
              <p className="text-xl lg:text-3xl text-charcoal/40 leading-relaxed italic font-light max-w-3xl">
                Ready to blueprint your energy future? Reach out to Kerala's master solar engineers for a bespoke consultation.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* Left: Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8 lg:space-y-12">
              <div className="grid gap-4 lg:gap-6">
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={i}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-6 p-6 lg:p-8 rounded-[2.5rem] bg-white border border-charcoal/5 shadow-xl hover:shadow-2xl hover:border-sun/20 transition-all duration-500"
                  >
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${method.accent === 'sun' ? 'bg-sun/10 text-sun-dark' : 'bg-energy/10 text-energy-dark'
                      }`}>
                      <method.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/30 mb-1">{method.title}</h4>
                      <div className="text-lg lg:text-xl font-display font-bold text-charcoal-dark group-hover:text-sun-dark transition-colors">{method.value}</div>
                      <p className="text-xs text-charcoal/40 mt-1">{method.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-8 lg:p-12 rounded-[3.5rem] bg-charcoal-dark text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sun/10 rounded-full blur-3xl" />
                <h3 className="font-display text-2xl mb-8">Our Headquarters</h3>
                <div className="space-y-8">
                  {displayOffices.map((office, i) => (
                    <div key={i} className="flex gap-4">
                      <MapPin className="w-5 h-5 text-sun shrink-0" />
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest text-sun/60 mb-1">{office.city} — {office.type}</div>
                        {office.mapLink ? (
                          <a
                            href={office.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/60 leading-relaxed hover:text-sun transition-colors"
                          >
                            {office.address}
                          </a>
                        ) : (
                          <p className="text-sm text-white/60 leading-relaxed">{office.address}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex gap-6">
                  {socialLinks.map((link, i) => (
                    <a key={i} href={link.href} className="text-white/20 hover:text-sun transition-colors cursor-pointer">
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 relative"
            >
              <div className="p-8 lg:p-16 rounded-[3.5rem] lg:rounded-[4.5rem] bg-white shadow-2xl border border-charcoal/5 relative z-10">
                <div className="mb-12">
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-charcoal-dark mb-4">Send a Message</h3>
                  <p className="text-charcoal/50 leading-relaxed">Fill out the form below and our strategic team will reach out within 24 hours.</p>
                </div>

                <form className="space-y-6 lg:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40 ml-4">Full Name</label>
                      <Input placeholder="John Doe" className="rounded-2xl h-14 bg-slate-50 border-transparent focus:bg-white focus:border-sun/30 transition-all px-6" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40 ml-4">Email Address</label>
                      <Input placeholder="john@example.com" className="rounded-2xl h-14 bg-slate-50 border-transparent focus:bg-white focus:border-sun/30 transition-all px-6" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40 ml-4">Phone Number</label>
                      <Input placeholder="+91 00000 00000" className="rounded-2xl h-14 bg-slate-50 border-transparent focus:bg-white focus:border-sun/30 transition-all px-6" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40 ml-4">Project Type</label>
                      <select className="w-full rounded-2xl h-14 bg-slate-50 border-transparent focus:bg-white focus:border-sun/30 transition-all px-6 text-sm text-charcoal/60 appearance-none outline-none">
                        <option>Residential Rooftop</option>
                        <option>Commercial Grid</option>
                        <option>Lithium Inverter (LI-ON)</option>
                        <option>Maintenance Support</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40 ml-4">Message</label>
                    <Textarea placeholder="Tell us about your energy goals..." className="rounded-3xl min-h-[150px] bg-slate-50 border-transparent focus:bg-white focus:border-sun/30 transition-all p-6" />
                  </div>

                  <Button className="w-full rounded-full h-20 lg:h-24 bg-charcoal-dark hover:bg-sun hover:text-charcoal-dark text-white text-xl font-bold shadow-xl transition-all duration-500 group">
                    Submit Inquiry
                    <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-sun/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-energy/5 rounded-full blur-3xl -z-10" />
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;