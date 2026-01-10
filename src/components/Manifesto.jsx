import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function ManifestoParallaxLayered() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* ---------------- BACKGROUND PARALLAX ---------------- */
  const bgY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-30%", "0%", "30%"]
  );

  const bgScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.14, 1.06, 1.14]
  );

  /* ---------------- TEXT PARALLAX ---------------- */
  const textY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["12%", "0%", "-12%"]
  );

  /* ---------------- STAGGER CONFIG ---------------- */
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black overflow-hidden pt-28"
    >
      {/* ---------------- BACKGROUND ---------------- */}
      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          backgroundImage: "url('/manifesto.jpg')",
        }}
        className="absolute inset-0 h-[170%] bg-cover bg-center will-change-transform"
      />

      {/* ---------------- OVERLAY ---------------- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

      {/* ---------------- CONTENT ---------------- */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex min-h-screen items-center justify-center px-6 will-change-transform"
      >
        {/* LOAD FADE (OPACITY ONLY – IMPORTANT) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full max-w-5xl mx-auto text-center"
          >
            {/* MANIFESTO LABEL */}
            <motion.div
              variants={item}
              className="mb-6 text-zinthOrange"
              style={{
                fontFamily: "Shadows Into Light",
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                letterSpacing: "0.14em",
              }}
            >
              MANIFESTO
            </motion.div>

            {/* STACKED WORDS */}
            <div
              className="uppercase"
              style={{
                fontFamily: "ClashDisplay",
                fontWeight: 700,
                lineHeight: "1.05",
              }}
            >
              {["FORM", "FOLLOWS", "FUNCTION"].map((word) => (
                <motion.div
                  key={word}
                  variants={item}
                  className="text-white"
                  style={{
                    fontSize: "clamp(3.6rem, 8.5vw, 9.6rem)",
                    letterSpacing: "-0.03em",
                    marginBottom: "-0.08em",
                    transform: "scaleX(0.88)",
                    transformOrigin: "center",
                    opacity: 0.96,
                  }}
                >
                  {word}
                </motion.div>
              ))}
            </div>

            {/* SUB COPY */}
            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-[420px] text-neutral-300 text-base md:text-lg leading-[1.6]"
            >
              We bring unique perspective to help you stand out among the crowd.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
