import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* HERO ALWAYS RENDERED */}
      <Hero />

      {/* LOADER ON TOP */}
      <Loader isLoading={loading} />
    </>
  );
}
