// components/Manifesto.jsx - FULL PURE PARALLAX VERSION
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifesto({ ready }) {
  const { scrollY } = useScroll();
  
  // PURE PARALLAX (slides OPPOSITE scroll direction)
  const parallaxY = useTransform(scrollY, [0, 600], [0, 80]);   
  const parallaxScale = useTransform(scrollY, [0, 600], [1, 1.05]); 

  // TEXT REVEAL
  const textOpacity = useTransform(scrollY, [50, 300], [0, 1]);
  const textY = useTransform(scrollY, [50, 300], [60, 0]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-28">
      
      {/* PURE PARALLAX IMAGE */}
      <motion.div
        className="absolute inset-0 bg-cover bg-no-repeat bg-bottom"
        style={{ 
          backgroundImage: "url('/manifesto.jpg')",
          y: parallaxY,
          scale: parallaxScale,
          transformOrigin: "center bottom"
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 sm:px-10">
        <motion.div 
          className="text-center w-full max-w-4xl mx-auto"
          style={{ opacity: textOpacity, y: textY }}
          initial={{ opacity: 0, y: 60 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* MANIFESTO LABEL */}
          <div
            className="mb-3 sm:mb-4 text-zinthOrange inline-block"
            style={{
              fontFamily: "Shadows Into Light",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              letterSpacing: "0.12em",
            }}
          >
            MANIFESTO
          </div>

          {/* STACKED STATEMENT */}
          <div
            className="uppercase"
            style={{
              fontFamily: "ClashDisplay",
              fontWeight: 900,
              lineHeight: "0.82",
            }}
          >
            <div
              className="text-white"
              style={{
                fontSize: "clamp(3.4rem, 10vw, 9.8rem)",
                letterSpacing: "-0.07em",
              }}
            >
              FORM
            </div>

            <div
              className="text-white"
              style={{
                fontSize: "clamp(3.4rem, 10vw, 9.8rem)",
                letterSpacing: "-0.06em",
              }}
            >
              FOLLOWS
            </div>

            <div
              className="text-white"
              style={{
                fontSize: "clamp(3.4rem, 10vw, 9.8rem)",
                letterSpacing: "-0.04em",
              }}
            >
              FUNCTION
            </div>
          </div>

          {/* SUBTEXT */}
          <p
            className="
              mt-3 sm:mt-4
              mx-auto
              max-w-[300px] sm:max-w-[420px] md:max-w-[480px]
              text-neutral-300
              text-[0.9rem] sm:text-base md:text-lg
              leading-[1.55]
            "
          >
            We partner with ambitious teams to design and engineer digital
            products that stand out — technically and visually.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
