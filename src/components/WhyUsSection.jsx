import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyUsSplitParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // IMAGE PARALLAX
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-25%", "0%", "25%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.15, 1.05, 1.15]
  );

  // TEXT PARALLAX (very subtle)
  const textY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["8%", "0%", "-8%"]
  );

  return (
    <section
      ref={ref}
      className="relative bg-black overflow-hidden py-32 lg:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* LEFT — TEXT PANEL */}
        <motion.div
          style={{ y: textY }}
          className="
            relative z-10
            flex items-center
            px-8 sm:px-16 lg:px-24
            will-change-transform
          "
        >
          <div className="max-w-xl">
            {/* LABEL */}
            <div
              className="mb-8 text-zinthOrange"
              style={{
                fontFamily: "Shadows Into Light",
                fontSize: "1.6rem",
                letterSpacing: "0.14em",
              }}
            >
              Why Us
            </div>

            {/* STATEMENT */}
            <p
              className="text-white"
              style={{
                fontFamily: "ClashDisplay",
                fontSize: "clamp(1.9rem, 2.6vw, 2.5rem)",
                lineHeight: "1.3",
              }}
            >
              With a decade of expertise,
              <br />
              We craft bold brands and
              <br />
              high-impact digital
              <br />
              experiences that get results.
            </p>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <div className="relative overflow-hidden">
          <motion.img
            src="/manifesto.jpg"
            alt="Why Us Visual"
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 h-[150%] w-full object-cover will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
