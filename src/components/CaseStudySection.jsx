import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { caseStudies } from "../data/data";

export default function CaseStudySection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = caseStudies.length;

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

  const panelY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const reveal = useTransform(
    scrollYProgress,
    [activeIndex / total, (activeIndex + 1) / total],
    [100, 0],
    { clamp: true }
  );

  const clipPathMV = useTransform(reveal, (v) => {
    return `inset(${v}% 0% 0% 0%)`;
  });

  const current = caseStudies[activeIndex];
  const next = caseStudies[activeIndex + 1];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${(total + 1) * 100}vh` }}
    >
      {/* STICKY WRAPPER */}
      <div className="sticky top-0 h-screen px-4 lg:px-6">
        <div
          className="
            max-w-[2200px] mx-auto
            grid grid-cols-1 lg:grid-cols-[1.25fr_2fr]
            gap-12 xl:gap-16
            h-full items-center
          "
        >
          {/* LEFT PANEL — MATCH IMAGE HEIGHT */}
          <motion.div
            style={{ y: panelY }}
            className="
              relative
              h-[720px] xl:h-[820px]
              bg-black/85
              border border-white/15
              rounded-xl
              p-16 xl:p-18
              backdrop-blur
              shadow-[0_30px_90px_rgba(0,0,0,0.75)]
              flex flex-col justify-between
            "
          >
            {/* TOP SECTION */}
            <div>
              {/* PROJECT LIST */}
              <div className="flex justify-between mb-16">
                <div className="space-y-3 text-base">
                  {caseStudies.map((p, i) => (
                    <div
                      key={p.id}
                      className={`flex items-center gap-3 transition-opacity duration-300 ${
                        activeIndex === i ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <span className="w-2.5 h-2.5 bg-zinthOrange rounded-full" />
                      {p.id.toUpperCase()}
                    </div>
                  ))}
                </div>

                <span className="text-zinthOrange text-base">
                  All Projects ↗
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative min-h-[460px]">
                {caseStudies.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: activeIndex === i ? 1 : 0,
                      y: activeIndex === i ? 0 : 28,
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {/* LABEL */}
                    <div
                      className="mb-6 text-white/50"
                      style={{
                        fontFamily: "Shadows Into Light",
                        fontSize: "1.6rem",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {project.label}
                    </div>

                    {/* TITLE — BIGGER */}
                    <h3
                      className="text-white mb-12"
                      style={{
                        fontFamily: "ClashDisplay",
                        fontSize: "clamp(3.4rem, 4.6vw, 4.4rem)",
                        lineHeight: "1.05",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* META */}
                    <div className="space-y-5 text-base text-white/60 border-t border-white/10 pt-8">
                      <div className="flex justify-between">
                        <span>Year</span>
                        <span className="text-white">{project.year}</span>
                      </div>

                      <div className="flex justify-between">
                        <span>Timeline</span>
                        <span className="text-white">{project.timeline}</span>
                      </div>

                      <div className="flex justify-between">
                        <span>Services</span>
                        <div className="flex gap-3 flex-wrap justify-end">
                          {project.services.map((s) => (
                            <span
                              key={s}
                              className="px-4 py-1.5 rounded-full bg-white/5 text-white text-sm"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA — BOTTOM ALIGNED */}
            <a
              href="#"
              className="
                mt-12 inline-flex items-center justify-between
                w-full px-8 py-5
                rounded-lg
                border border-white/30
                text-white text-base
                hover:bg-white/5
                hover:border-white/50
                transition
              "
            >
              <span>Read Case Study</span>
              <span>↗</span>
            </a>
          </motion.div>

          {/* RIGHT IMAGE PANEL */}
          <div
            className="
              relative
              h-[720px] xl:h-[820px]
              rounded-xl
              overflow-hidden
              shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]
            "
          >
            {current && (
              <img
                src={current.image}
                alt={current.id}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {next && (
              <motion.img
                src={next.image}
                alt={next.id}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ clipPath: clipPathMV }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
