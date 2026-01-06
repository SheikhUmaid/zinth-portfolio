import { motion, AnimatePresence } from "framer-motion";

const columns = [
  { delay: 0, lift: "-120%" },
  { delay: 0.15, lift: "-105%" },
  { delay: 0.3, lift: "-130%" },
  { delay: 0.45, lift: "-110%" },
  { delay: 0.6, lift: "-125%" },
  { delay: 0.75, lift: "-150%" },
];

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">

          {/* ZINTHLABS LOGO */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-black text-6xl font-semibold tracking-widest">
              ZINTHLABS
            </span>
          </motion.div>

          {/* GOLD BARS */}
          <div className="absolute inset-0 flex z-10">
            {columns.map((col, i) => (
              <motion.div
                key={i}
                className="h-full flex-1 bg-zinthGold  "
                initial={{ y: 0 }}
                animate={{ y: col.lift }}
                transition={{
                  delay: 1.3 + col.delay,
                  duration: 1.2,
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
