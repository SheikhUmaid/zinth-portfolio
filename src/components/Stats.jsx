import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* ----------------------------
   Counter component
----------------------------- */
function StatCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 1.6,
        ease: "easeOut",
      });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

/* ----------------------------
   Section
----------------------------- */
export default function StatsParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* IMAGE PARALLAX (TONED DOWN) */
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-22%", "0%", "22%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.04, 1.12]
  );

  /* STATS PARALLAX (SUBTLE) */
  const statsY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["6%", "0%", "-6%"]
  );

  return (
    <section
      ref={ref}
      className="relative bg-black overflow-hidden py-32 lg:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden">
          <motion.img
            src="/manifesto.jpg"
            alt="Brand visual"
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 h-[140%] w-full object-cover will-change-transform"
          />
        </div>

        {/* RIGHT STATS */}
        <motion.div
          style={{ y: statsY }}
          className="
            relative z-10
            flex items-center
            px-8 sm:px-16 lg:px-24
            will-change-transform
          "
        >
          <div className="w-full max-w-xl space-y-12">
            {/* STAT 1 */}
            <div className="flex items-center justify-between gap-10">
              <div className="text-white font-semibold text-5xl sm:text-6xl">
                <StatCounter value={90} suffix={<span className="text-zinthOrange">+</span>} />
              </div>
              <p className="text-neutral-400 text-base sm:text-lg">
                Projects completed to date.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            {/* STAT 2 */}
            <div className="flex items-center justify-between gap-10">
              <div className="text-white font-semibold text-5xl sm:text-6xl">
                <StatCounter value={100} suffix={<span className="text-zinthOrange">%</span>} />
              </div>
              <p className="text-neutral-400 text-base sm:text-lg">
                Client satisfaction rate.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            {/* STAT 3 */}
            <div className="flex items-center justify-between gap-10">
              <div className="text-white font-semibold text-5xl sm:text-6xl">
                $
                <StatCounter value={14} suffix={<span className="text-zinthOrange">M+</span>} />
              </div>
              <p className="text-neutral-400 text-base sm:text-lg">
                Client successful fund raise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
