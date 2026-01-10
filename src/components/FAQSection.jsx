import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FAQS = [
  {
    q: "What’s your typical process for a new project?",
    a: "We start with a discovery call to understand your goals, followed by strategy, design, development, and final delivery with ongoing support.",
  },
  {
    q: "How long does a project usually take?",
    a: "Timelines vary by scope, but most projects take between 2–6 weeks depending on complexity and feedback cycles.",
  },
  {
    q: "Do you offer packages or custom quotes?",
    a: "Yes. We offer flexible packages as well as custom quotes tailored to your specific requirements.",
  },
  {
    q: "What’s included in a branding package?",
    a: "Brand strategy, logo design, typography, color systems, and brand guidelines for consistent use across platforms.",
  },
  {
    q: "Can you work with our existing dev or marketing team?",
    a: "Absolutely. We collaborate seamlessly with in-house teams to enhance workflows and accelerate delivery.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="relative bg-black text-white py-32 px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_1.2fr] gap-24">

        {/* LEFT */}
        <div>
          <span className="text-yellow-400 text-sm font-medium mb-4 block">
            FAQ
          </span>

          <h2 className="text-6xl font-semibold leading-tight">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>

          <p className="mt-6 text-neutral-400">
            Have more questions?{" "}
            <span className="text-yellow-400 cursor-pointer">
              Contact Us
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col divide-y divide-neutral-800">
          {FAQS.map((item, i) => {
            const isOpen = activeIndex === i

            return (
              <div key={i} className="py-6">
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : i)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg">
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-yellow-400 text-2xl"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-neutral-400 max-w-[90%]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
