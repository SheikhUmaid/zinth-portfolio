import { motion, useScroll, useTransform } from "framer-motion";

export default function Header({ ready }) {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 260], [1, 0.32]);
  const isCollapsed = useTransform(scrollY, (v) => v > 260);

  return (
    <header className="fixed inset-x-0 top-0 z-9999 pointer-events-none">
      <div className="  pointer-events-auto px-2 sm:px-8 pt-2 sm:pt-8">
        <div className="flex items-start justify-between gap-4">
          
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
              {["ZINTH", "LABS"].map((word) => (
                <motion.span
                  key={word}
                  layout
                  className="relative text-white leading-none"
                  style={{
                    fontFamily: "ClashDisplay",
                    fontWeight: 700,
                    fontSize: isCollapsed.get()
                      ? "clamp(1.05rem, 3.2vw, 1.5rem)"
                      : "clamp(2.8rem, 14vw, 9rem)",
                  }}
                >
                  {word}

                  {/* REGISTERED MARK */}
                  {word === "ZINTH" && (
                    <span
                      className="absolute -top-[0.25em] -right-[0.55em]"
                      style={{
                        fontSize: "0.40em",
                        lineHeight: 2,
                      }}
                    >
                      ®
                    </span>
                  )}
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
              border border-white/30
              bg-black/40 backdrop-blur
              shrink-0
            "
          >
            <span className="h-[2px] sm:h-[3px] w-6 sm:w-7 bg-white" />
            <span className="h-[2px] sm:h-[3px] w-6 sm:w-7 bg-white" />
            <span className="h-[2px] sm:h-[3px] w-6 sm:w-7 bg-white" />
          </motion.button>

        </div>
      </div>
    </header>
  );
}
