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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segment = 1 / total;
    const index = Math.min(total - 1, Math.floor(latest / segment));
    if (index !== activeIndex) setActiveIndex(index);
  });

  const reveal = useTransform(
    scrollYProgress,
    [activeIndex / total, (activeIndex + 1) / total],
    [100, 0],
    { clamp: true }
  );

  const clipPathMV = useTransform(
    reveal,
    (v) => `inset(${v}% 0% 0% 0%)`
  );

  const current = caseStudies[activeIndex];
  const next = caseStudies[activeIndex + 1];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${total * 70}vh` }}
    >
      <div className="sticky top-0 h-screen px-4 lg:px-6">
        <div
          className="
            max-w-[2200px] mx-auto
            grid grid-cols-1 lg:grid-cols-[1.15fr_2fr]
            gap-10
            h-full items-center
          "
        >
          {/* LEFT PANEL — LOCKED */}
          <div
            className="
              relative
              h-[560px] xl:h-[600px]
              bg-black
              border border-white/15
              p-12 xl:p-14
              shadow-[0_30px_90px_rgba(0,0,0,0.75)]
              flex flex-col justify-between
            "
          >
            <div>
              <div className="flex justify-between mb-12">
                <div className="space-y-3 text-sm">
                  {caseStudies.map((p, i) => (
                    <div
                      key={p.id}
                      className={`flex items-center gap-3 ${
                        activeIndex === i ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <span className="w-2 h-2 bg-zinthOrange" />
                      {p.id.toUpperCase()}
                    </div>
                  ))}
                </div>

                <span className="text-zinthOrange text-sm">
                  All Projects ↗
                </span>
              </div>

              <div className="relative min-h-[360px]">
                {caseStudies.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="absolute inset-0"
                    animate={{
                      opacity: activeIndex === i ? 1 : 0,
                      y: activeIndex === i ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="mb-4 text-white/50 uppercase tracking-widest text-xs">
                      {project.label}
                    </div>

                    <h3 className="text-white text-3xl leading-tight mb-8">
                      {project.title}
                    </h3>

                    <div className="space-y-4 text-xs text-white/60 border-t border-white/10 pt-5">
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
                        <div className="flex gap-2 flex-wrap justify-end">
                          {project.services.map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 bg-white/5 text-white text-[11px]"
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

            <a
              href="#"
              className="
                -mt-4 flex justify-between items-center
                w-full px-5 py-3
                border border-white/30
                text-white text-sm
                hover:bg-white/5
                transition
              "
            >
              <span>Read Case Study</span>
              <span>↗</span>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[560px] xl:h-[600px] overflow-hidden">
            {current && (
              <img
                src={current.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {next && (
              <motion.img
                src={next.image}
                alt=""
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
