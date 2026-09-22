import { FloatingWhatsApp, Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
