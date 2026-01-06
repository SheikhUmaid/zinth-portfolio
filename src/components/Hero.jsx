import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const zoomIn = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export default function Hero({ ready }) {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(() => setReveal(true), 180); //  black hold
      return () => clearTimeout(t);
    }
  }, [ready]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl space-y-6 sm:space-y-8 lg:space-y-10">

            {/* MAIN HEADING */}
            <motion.h1
              variants={zoomIn}
              initial="hidden"
              animate={reveal ? "visible" : "hidden"}
              transition={{ delay: 0.05 }}
              style={{ fontFamily: "ClashDisplay" }}
              className="
                text-white
                leading-tight
                text-[clamp(2.6rem,6vw,5.5rem)]
              "
            >
              Digital Product <br />
              Engineers
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={zoomIn}
              initial="hidden"
              animate={reveal ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="
                text-white/80
                max-w-xl
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              We design and build high-quality digital products
              at the intersection of design, engineering, and strategy.
            </motion.p>

            {/* CTA */}
            <motion.button
              variants={zoomIn}
              initial="hidden"
              animate={reveal ? "visible" : "hidden"}
              transition={{ delay: 0.15 }}
              className="
                inline-flex
                items-center
                justify-center
                mt-2
                px-7
                py-3
                sm:px-8
                sm:py-4
                bg-zinthOrange
                text-black
                text-sm
                sm:text-base
                font-medium
                hover:scale-[1.02]
                transition
              "
            >
              Our Work
            </motion.button>

          </div>
        </div>
      </div>
    </section>
  );
}
