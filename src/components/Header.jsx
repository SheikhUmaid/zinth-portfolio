import { motion, useScroll, useTransform } from "framer-motion";

export default function Header({ ready }) {
  const { scrollY } = useScroll();

  // Collapse progress
  const scale = useTransform(scrollY, [0, 260], [1, 0.32]);
  const isCollapsed = useTransform(scrollY, v => v > 260);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] pointer-events-none">
     <div
  className={`
    flex
    ${isCollapsed.get() ? "flex-row" : "flex-col-reverse"}
    sm:flex-row
    items-start
    justify-between
    px-4 sm:px-10
    pt-4 sm:pt-8
    gap-4 sm:gap-0
    pointer-events-auto
  `}
>

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            scale,
            transformOrigin: "left top",
          }}
        >
          <motion.div
            layout
            className="flex"
            style={{
              flexDirection: isCollapsed.get() ? "row" : "column",
              gap: isCollapsed.get() ? "0.4rem" : "0",
            }}
          >
            {["ZINTH", "LABS"].map(word => (
              <motion.span
                key={word}
                layout
                className="text-white leading-none"
                style={{
                  fontFamily: "ClashDisplay",
                  fontWeight: 700,

                  /*
                    INITIAL:
                      Mobile → smaller
                      Desktop → EXACTLY 10rem

                    COLLAPSED:
                      Mobile → smaller
                      Desktop → EXACTLY 1.5rem
                  */
                  fontSize: isCollapsed.get()
                    ? "clamp(1.05rem, 3.2vw, 1.5rem)"
                    : "clamp(3.2rem, 18vw, 10rem)",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* HAMBURGER */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="
            flex h-12 w-12 sm:h-14 sm:w-14
            flex-col items-center justify-center
            gap-1.5
            rounded-xl border border-white/30
            bg-black/40 backdrop-blur
            shrink-0
            self-end sm:self-auto
          "
        >
          <span className="h-[2px] sm:h-[3px] w-6 sm:w-7 bg-white rounded-full" />
          <span className="h-[2px] sm:h-[3px] w-6 sm:w-7 bg-white rounded-full" />
          <span className="h-[2px] sm:h-[3px] w-6 sm:w-7 bg-white rounded-full" />
        </motion.button>

      </div>
    </header>
  );
}
