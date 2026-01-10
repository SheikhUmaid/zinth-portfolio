import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { testimonials, companies } from "../data/testimonials"

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
}

function ArrowButton({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className="relative w-14 h-14 border border-white/20 overflow-hidden group"
    >
      <span className="relative z-10 text-xl">
        {direction === "left" ? "←" : "→"}
      </span>

      {/* liquid fill */}
      <span className="absolute inset-0 bg-white/20 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out" />
      <span className="absolute inset-0 bg-black mix-blend-difference" />
    </button>
  )
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newIndex) => {
    setDirection(newIndex > index ? 1 : -1)
    setIndex(newIndex)
  }

  return (
    <section className="relative bg-black text-white px-20 py-36 overflow-hidden">
      {/* noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />

      {/* header */}
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <p
          className="text-yellow-400 text-xl mb-4"
          style={{ fontFamily: "Shadows Into Light" }}
        >
          Testimonials
        </p>
        <h2 className="text-[clamp(3rem,6vw,6rem)] font-extrabold tracking-tight">
          WORDS FROM OUR HAPPY CLIENTS
        </h2>
      </div>

      {/* slider */}
      <div className="relative max-w-7xl mx-auto min-h-[320px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
          >
            <p className="text-2xl leading-relaxed mb-12">
              {testimonials[index].quote}
            </p>

            <div className="flex items-center gap-5">
              <img
                src={testimonials[index].image}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold tracking-wide">
                  {testimonials[index].name}
                </p>
                <p
                  className="text-yellow-400 text-sm"
                  style={{ fontFamily: "Shadows Into Light" }}
                >
                  {testimonials[index].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* arrows */}
        <div className="absolute right-0 top-0 flex gap-3">
          <ArrowButton
            onClick={() =>
              paginate((index - 1 + testimonials.length) % testimonials.length)
            }
            direction="left"
          />
          <ArrowButton
            onClick={() =>
              paginate((index + 1) % testimonials.length)
            }
            direction="right"
          />
        </div>
      </div>

      {/* companies */}
      <div className="max-w-7xl mx-auto mt-32 border-t border-white/10">
        <div className="grid grid-cols-4 text-center py-8 relative">
          {companies.map((c, i) => (
            <button
              key={c}
              onClick={() => paginate(i)}
              className={`uppercase tracking-wider transition ${
                i === index ? "opacity-100" : "opacity-40"
              }`}
            >
              {c}
            </button>
          ))}

          <motion.div
            className="absolute bottom-0 h-[2px] bg-yellow-400"
            animate={{
              width: `${100 / companies.length}%`,
              left: `${(100 / companies.length) * index}%`,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  )
}
