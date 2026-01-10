import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const videoRef = useRef(null);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(() => setShow(true), 300);
      return () => clearTimeout(t);
    }
  }, [ready]);

  /* ===============================
     SCROLL PARALLAX (VIDEO ONLY)
  =============================== */
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-12%", "0%", "12%"]
  );

  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.05, 1, 1.05]
  );

  return (
    <section className="relative z-0 min-h-screen bg-black overflow-hidden">
      <div className="max-w-400 mx-auto px-2 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-14 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            className="space-y-5"
          >
            <div className="h-[36vh] sm:h-[40vh]" />

            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-x-12 gap-y-[2px] text-sm max-w-[420px]"
            >
              <div className="flex items-center gap-2 text-white/85">
                <span className="h-2 w-2 bg-zinthOrange rounded-full" />
                <span>Open for project</span>
              </div>
              <div className="text-right text-white/85">11:22 PM</div>
              <div className="text-white/65">Jan ’26</div>
              <div className="text-right text-white/65">Jakarta, ID</div>
            </motion.div>

            <motion.span
              variants={item}
              className="text-zinthOrange block mt-20 -mb-1"
              style={{
                fontFamily: "'Shadows Into Light', cursive",
                fontSize: "clamp(1.45rem, 3.2vw, 2.3rem)",
                lineHeight: "0.9",
              }}
            >
              We are
            </motion.span>

            <motion.h1
              variants={item}
              className="text-white leading-[1.05]"
              style={{
                fontFamily: "ClashDisplay",
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
              }}
            >
              Creative Agency for <br />
              Bold Companies.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-white/70 text-[0.95rem] sm:text-[1.05rem] leading-[1.65] max-w-[520px]"
            >
              An award-winning design studio sets brand apart from competition
              with stunning branding and websites.
            </motion.p>

            <motion.button
              variants={item}
              className="inline-flex items-center justify-between w-full max-w-[520px] px-8 py-3 bg-zinthOrange text-black text-[1.15rem] font-medium"
            >
              <span>Our Works</span>
              <ArrowUpRight size={26} />
            </motion.button>
          </motion.div>

          {/* RIGHT VIDEO (LOAD + SCROLL PARALLAX) */}
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mt-7 sm:mt-9 lg:mt-14 h-[392px] sm:h-[532px] lg:h-[652px] overflow-hidden"
          >
            {/* PARALLAX LAYER */}
            <motion.div
              style={{ y: videoY, scale: videoScale }}
              className="absolute inset-0 will-change-transform"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            </motion.div>

            <div className="absolute inset-0 bg-black/40" />

            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage: "url(/noise.png)",
                backgroundRepeat: "repeat",
              }}
            />

            <div className="absolute bottom-6 right-6 text-white/60 text-sm">
              ©25
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
