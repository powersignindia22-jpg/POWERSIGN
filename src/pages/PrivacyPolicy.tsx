import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolarDust from "@/components/SolarDust";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-ivory relative selection:bg-sun/30 overflow-x-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <SolarDust />
            <Header />

            <main className="relative z-10 pt-32 lg:pt-48 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">

                    <Link to="/">
                        <Button variant="ghost" className="mb-8 group text-charcoal/50 hover:text-charcoal-dark -ml-4 rounded-full">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Button>
                    </Link>

                    <h1 className="font-display text-4xl lg:text-6xl font-bold text-charcoal-dark mb-8">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-lg max-w-none bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 lg:p-12">
                        <p className="text-charcoal/60 leading-relaxed mb-8">
                            <strong>Last Updated:</strong> February 2026
                        </p>

                        <p className="text-charcoal/80 leading-relaxed">
                            POWERSIGN INDIA (P) LTD is committed to protecting your privacy. This Privacy Policy page will be updated with complete details shortly.
                        </p>

                        <p className="text-charcoal/80 leading-relaxed mt-6">
                            For any privacy-related inquiries, please contact us at{" "}
                            <a href="mailto:powersignindia@gmail.com" className="text-sun-dark hover:underline">
                                powersignindia@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
