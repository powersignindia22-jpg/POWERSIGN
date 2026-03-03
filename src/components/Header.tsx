import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, PhoneCall } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { contactInfo, getWhatsAppLink } from "@/data/contact";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isExternal: false },
    { name: "Services", href: "/services", isExternal: false },
    { name: "Gallery", href: "/gallery", isExternal: false },
    { name: "Contact", href: "/contact", isExternal: false },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-6 lg:py-8"
          }`}
      >
        <div className="container mx-auto px-5 lg:px-8">
          <div className={`relative flex items-center justify-between transition-all duration-500 ${isScrolled
            ? "bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg rounded-full px-6 py-3"
            : "bg-transparent px-0 py-0"
            }`}>

            {/* --- LOGO IDENTITY --- */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="POWERSIGN" className="w-10 lg:w-12 h-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-lg lg:text-xl tracking-tight text-charcoal-dark leading-none group-hover:text-sun-dark transition-colors">
                  POWERSIGN
                </span>
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.25em] uppercase text-charcoal/40 group-hover:text-charcoal/60 transition-colors">
                  INDIA (P) LTD
                </span>
              </div>
            </Link>

            {/* --- DESKTOP NAV --- */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-charcoal/60 hover:text-charcoal-dark transition-colors rounded-full hover:bg-white/50"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* --- ACTIONS --- */}
            <div className="flex items-center gap-4">
              <a href={contactInfo.phone.href} className="hidden lg:flex items-center gap-2 text-xs font-bold text-charcoal/60 hover:text-sun-dark transition-colors px-4 py-2 rounded-full border border-transparent hover:border-charcoal/5 hover:bg-white/50">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{contactInfo.phone.display}</span>
              </a>

              <a href={getWhatsAppLink('freeQuote')} target="_blank" rel="noopener noreferrer">
                <Button className="hidden lg:flex rounded-full px-6 bg-charcoal-dark hover:bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Sparkles className="w-3.5 h-3.5 mr-2 text-sun" />
                  Free Quote
                </Button>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2.5 text-charcoal-dark bg-white/50 rounded-full active:scale-95 transition-transform"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-ivory/98 backdrop-blur-3xl flex flex-col"
          >
            {/* Mobile Header */}
            <div className="p-6 flex items-center justify-between border-b border-charcoal/5">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="font-display font-bold text-lg text-charcoal-dark">POWERSIGN</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-white rounded-full text-charcoal-dark shadow-sm active:scale-90 transition-transform"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-5xl font-medium text-charcoal-dark hover:text-sun-dark transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Actions */}
            <div className="p-8 border-t border-charcoal/5 bg-white/40">
              <a href={getWhatsAppLink('freeQuote')} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="xl" className="w-full bg-charcoal-dark text-white rounded-full h-16 text-lg shadow-xl mb-4">
                  Get Free Estimate
                </Button>
              </a>
              <div className="flex justify-center">
                <a href={contactInfo.phone.href} className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">
                  Support: <span className="text-charcoal-dark ml-1">{contactInfo.phone.display}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;