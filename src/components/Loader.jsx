import { motion, AnimatePresence } from "framer-motion";

const columns = [
  { delay: 0 },
  { delay: 0.15 },
  { delay: 0.3 },
  { delay: 0.45 },
  { delay: 0.6 },
  { delay: 0.75 },
];

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-9999 pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* LOGO */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span
              className="
    text-black
    leading-none
    tracking-[0.03em]
   text-[clamp(2rem,15vw,10rem)]

  "
              style={{ fontFamily: "ClashDisplay", fontWeight: 600 }}
            >
              ZINTHLABS
            </span>
          </motion.div>

          {/* BARS */}
          <div className="absolute inset-0 flex z-10">
            {columns.map((col, i) => (
              <motion.div
                key={i}
                className="h-full flex-1 bg-zinthOrange -ml-px"
                initial={{ y: 0 }}
                animate={{ y: `-${120 + i * 4}vh` }}
                transition={{
                  delay: 1.3 + col.delay,
                  duration: i === columns.length - 1 ? 1.45 : 1.2,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
