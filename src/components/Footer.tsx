import { MapPin, Mail, Phone, Leaf, Sun, Zap, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { contactInfo, socialLinks } from "@/data/contact";

const Footer = () => {
      const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
      ];
    const services = [
        { name: "Residential Solar", href: "/services#residential" },
        { name: "Commercial Grids", href: "/services#commercial" },
        { name: "Energy Storage", href: "/services" },
        { name: "Smart Maintenance", href: "/services#maintenance" },
    ];

    return (
        <footer className="relative z-20 bg-gradient-to-b from-[#14161A] to-[#050608] pt-24 pb-12 overflow-hidden rounded-t-[4rem] lg:rounded-t-[6rem] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.5)] border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">

                {/* --- MAIN FOOTER GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

                    {/* 1. BRAND & SOCIAL (4 cols) */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                <img src={logo} alt="Powersign" className="h-8 w-auto" />
                            </div>
                            <div>
                                <div className="font-display font-bold text-xl text-white tracking-tight">POWERSIGN</div>
                                <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black">INDIA (P) LTD</div>
                            </div>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
                            Pioneering high-performance solar engineering and lithium energy storage for Kerala's premier properties since 2022.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link, i) => (
                                <a key={i} href={link.href} className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 hover:text-sun hover:border-sun/30 hover:bg-sun/5 transition-all duration-300">
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. NAVIGATION (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-sun mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-white/40 hover:text-white text-sm font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. EXPERTISE (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-energy mb-8">Expertise</h4>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link to={service.href} className="text-white/40 hover:text-white text-sm font-medium transition-colors">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. CONTACT & HQ (4 cols) */}
                    <div className="lg:col-span-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-8">Headquarters</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-sun shrink-0 mt-0.5" />
                                <a
                                    href={contactInfo.offices.find(o => o.city.includes("Footer"))?.mapLink || contactInfo.offices[0].mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/50 text-sm leading-relaxed font-light hover:text-sun transition-colors"
                                >
                                    {contactInfo.offices.find(o => o.city.includes("Footer"))?.address || contactInfo.offices[0].address}
                                </a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a href={contactInfo.email.href} className="flex items-center gap-4 text-white/40 hover:text-white transition-colors group">
                                    <Mail className="w-4 h-4 text-white/20 group-hover:text-sun transition-colors" />
                                    <span className="text-sm">{contactInfo.email.secondary}</span>
                                </a>
                                <a href={contactInfo.phone.href} className="flex items-center gap-4 text-white/40 hover:text-white transition-colors group">
                                    <Phone className="w-4 h-4 text-white/20 group-hover:text-sun transition-colors" />
                                    <span className="text-sm font-bold">{contactInfo.phone.display}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8">
                        <p className="text-white/10 text-[9px] uppercase tracking-[0.3em] font-black">
                            © {new Date().getFullYear()} POWERSIGN INDIA (P) LTD.
                        </p>
                        <div className="hidden sm:flex items-center gap-4">
                            <Link to="/privacy" className="text-white/10 hover:text-white text-[9px] uppercase tracking-[0.2em] transition-colors">Privacy</Link>
                            <Link to="/terms" className="text-white/10 hover:text-white text-[9px] uppercase tracking-[0.2em] transition-colors">Terms</Link>
                        </div>
                    </div>

                    {/* Cavell attribution (glow-style button) */}
                    <a
                        href="https://cavelltech.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group inline-flex items-center gap-3 px-4 py-2 border border-green-400 rounded-full text-[9px] uppercase tracking-widest font-black text-white transition-all duration-300 overflow-hidden"
                    >
                        {/* glow effect */}
                        <span className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="opacity-60 group-hover:opacity-100 transition-opacity">DESIGNED &amp; BUILT BY</span>
                            <img
                                src="https://cavelltech.in/logo.png"
                                alt="Cavell Tech"
                                className="h-4 w-auto object-contain"
                            />
                            <span className="flex items-center">
                                <span className="ml-1">CAVELL</span>
                                <ChevronRight className="w-3.5 h-3.5 ml-1" />
                            </span>
                        </span>
                    </a>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-white/20 text-[9px] font-black uppercase tracking-widest">
                            <Leaf className="w-3.5 h-3.5 text-energy/40" />
                            Go Green
                        </div>
                        <div className="flex items-center gap-2 text-white/20 text-[9px] font-black uppercase tracking-widest">
                            <Sun className="w-3.5 h-3.5 text-sun/40" />
                            Solar Powered
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;