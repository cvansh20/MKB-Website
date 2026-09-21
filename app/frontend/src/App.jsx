import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream font-body text-ink antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Contact />
          <MapSection />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </LanguageProvider>
  );
}
