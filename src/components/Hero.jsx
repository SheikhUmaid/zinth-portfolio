import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { scale: 0.9, opacity: 0, y: 14 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero({ ready }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(() => setShow(true), 300); // 🔑 after header
      return () => clearTimeout(t);
    }
  }, [ready]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        variants={container}
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        className="
          relative z-10
          px-6 sm:px-10
          mt-[18rem] sm:mt-[25rem]
          max-w-[720px]
          space-y-6 sm:space-y-8
        "
      >
        {/* WE ARE */}
        <motion.span
          variants={item}
          className="text-zinthOrange block"
          style={{
            fontFamily: "'Shadows Into Light', cursive",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: "0.9",
          }}
        >
          We are
        </motion.span>

        {/* HEADLINE */}
        <motion.h1
          variants={item}
          className="text-white leading-[1.05] -mt-6 sm:-mt-8"
          style={{
            fontFamily: "ClashDisplay",
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
          }}
        >
          Digital Product <br />
          Engineers
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          variants={item}
          className="text-white/70 text-[1.1rem] sm:text-[1.3rem] leading-[1.65] max-w-[520px]"
        >
          We design and build high-quality digital products at the intersection
          of design, engineering, and strategy.
        </motion.p>

        {/* CTA */}
        <motion.button
          variants={item}
          className="
            inline-flex items-center justify-between
            w-full max-w-[360px] sm:max-w-[520px]
            px-8 py-4 rounded-lg
            bg-zinthOrange text-black
            text-[1.15rem] sm:text-[1.3rem]
            font-medium
          "
        >
          <span>Our Works</span>
          <ArrowUpRight size={26} />
        </motion.button>
      </motion.div>
    </section>
  );
}
