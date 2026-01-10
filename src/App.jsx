import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ManifestoSection from "./components/Manifesto";
import MarqueeSection from "./components/MarqueeSection";
import CaseStudySection from "./components/CaseStudySection";
import ServicesSection from "./components/Services";
import WhyUsSection from "./components/WhyUsSection";
import StatsParallaxSection from "./components/Stats";
import TestimonialsSection from "./components/Testimonials";
import TeamSection from "./components/Team";
import FAQSection from "./components/FAQSection";
import BigFooter from "./components/Footer";
import LatestNewsSection from "./components/Blog";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Header ready={!loading} />
      <Hero ready={!loading} />
      <div className="h-2 bg-black" />
      <Loader isLoading={loading} />
      <ManifestoSection />
      <MarqueeSection />
      <CaseStudySection />
      <ServicesSection/>
      <WhyUsSection />
      <StatsParallaxSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <LatestNewsSection />
      <BigFooter />
    </>
  );
}
