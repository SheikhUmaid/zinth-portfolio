import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { services } from "../data/services";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = services.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const indexMV = useTransform(scrollYProgress, [0, 1], [0, total - 1]);

  useMotionValueEvent(indexMV, "change", (latest) => {
    const rounded = Math.round(latest);
    if (rounded !== activeIndex && rounded >= 0 && rounded < total) {
      setActiveIndex(rounded);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${total * 120}vh` }}
    >
      {/* STICKY FRAME */}
      <div className="sticky top-0 h-screen flex items-center px-6 lg:px-10">
        <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-16 items-center">

          {/* LEFT IMAGE — SMALLER */}
          <div className="relative h-[260px] sm:h-[300px] lg:h-[340px]">
            {services.map((service, i) => (
              <motion.img
                key={service.id}
                src={service.image}
                alt={service.title}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  rounded
                "
                initial={false}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  scale: activeIndex === i ? 1 : 0.95,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}
          </div>

          {/* RIGHT LIST */}
          <div className="relative">
            {/* SECTION LABEL */}
            <div
              className="mb-10 text-zinthOrange"
              style={{
                fontFamily: "Shadows Into Light",
                fontSize: "1.7rem",
                letterSpacing: "0.12em",
              }}
            >
              Services
            </div>

            {/* SERVICES */}
            <div className="space-y-12">
              {services.map((service, i) => {
                const isActive = i === activeIndex;

                return (
                  <motion.div
                    key={service.id}
                    className="flex items-start gap-6"
                    animate={{
                      opacity: isActive ? 1 : 0.25,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* NUMBER */}
                    <div className="text-white/40 text-sm pt-2">
                      ({service.number})
                    </div>

                    {/* TITLE */}
                    <motion.div
                      animate={{ y: isActive ? 0 : 8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3
                        className={`uppercase ${
                          isActive ? "text-white" : "text-white/40"
                        }`}
                        style={{
                          fontFamily: "ClashDisplay",
                          fontWeight: 700,
                          fontSize: isActive
                            ? "clamp(4rem, 6vw, 5.6rem)"
                            : "clamp(3.2rem, 5vw, 4.6rem)",
                          lineHeight: "0.9",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {service.title}
                      </h3>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
