import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { FloatingWhatsApp, Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PromptLab } from "@/components/PromptLab";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PromptLab />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
