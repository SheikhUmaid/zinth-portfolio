import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ManifestoSection from "./components/Manifesto";
import MarqueeSection from "./components/MarqueeSection";
import CaseStudySection from "./components/CaseStudySection";
import ServicesSection from "./components/Services";

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
    </>
  );
}
