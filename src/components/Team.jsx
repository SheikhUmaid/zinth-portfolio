import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function TeamScrollSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  /* =============================
     TEAM IMAGE MOTION (UNCHANGED)
     ============================= */

  const imagesY = useTransform(
    scrollYProgress,
    [0.25, 0.45, 0.75, 1],
    ["150vh", "40vh", "-120vh", "-260vh"]
  )

  /* =============================
     GRAIN (UNCHANGED)
     ============================= */

  const grainScaleY = useTransform(
    scrollYProgress,
    [0.15, 0.3],
    [0, 1]
  )

  const grainOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.3],
    [0, 0.25]
  )

  /* =============================
     PRICING – DELAYED TAKEOVER
     ============================= */

  const pricingY = useTransform(
    scrollYProgress,
    [0.82, 0.92],
    ["100vh", "0vh"]
  )

  const pricingOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.86],
    [0, 1]
  )

  /* =============================
     TEAM SHRINK (AFTER TAKEOVER)
     ============================= */

  const teamScale = useTransform(
    scrollYProgress,
    [0.88, 1],
    [1, 0.94]
  )

  const teamY = useTransform(
    scrollYProgress,
    [0.88, 1],
    ["0vh", "10vh"]
  )

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] bg-black"
    >
      {/* ================= STICKY VIEWPORT ================= */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ================= TEAM LAYER ================= */}
        <motion.div
          style={{
            scale: teamScale,
            y: teamY,
          }}
          className="absolute inset-0 z-10 origin-center"
        >
          {/* Background Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-6xl md:text-7xl font-semibold tracking-wide">
              THE CHOSEN ONES
            </h2>
          </div>

          {/* Images */}
          <motion.div
            style={{ y: imagesY }}
            className="relative z-20 h-full flex items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-x-56">

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-56">
                {[1, 3, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/400/520?${i}`}
                    className="w-[260px] rounded-2xl"
                    alt=""
                  />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-56 pt-72">
                {[2, 4, 6].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/400/520?${i}`}
                    className="w-[260px] rounded-2xl"
                    alt=""
                  />
                ))}
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* ================= GRAIN OVERLAY ================= */}
        <motion.div
          style={{
            scaleY: grainScaleY,
            opacity: grainOpacity,
            originY: 0.5,
          }}
          className="pointer-events-none absolute inset-0 z-30
                     bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
                     bg-repeat mix-blend-overlay"
        />

        {/* ================= PRICING LAYER ================= */}
        <motion.div
          style={{
            y: pricingY,
            opacity: pricingOpacity,
          }}
          className="absolute inset-0 z-40 bg-black flex items-center justify-center"
        >
          <PricingSection />
        </motion.div>

      </div>
    </section>
  )
}

/* =============================
   PRICING SECTION (FULL)
   ============================= */

function PricingSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white px-12">
      <h2 className="text-6xl font-semibold mb-20">PRICING</h2>

      <div className="flex gap-10 w-[960px]">
        <PricingCard title="Starter" price="5999" />
        <PricingCard title="Growth" price="8999" highlight />
      </div>
    </div>
  )
}

function PricingCard({ title, price, highlight }) {
  return (
    <div
      className={`relative flex-1 p-10 rounded-2xl border ${
        highlight
          ? "border-yellow-400"
          : "border-neutral-800"
      } bg-neutral-900`}
    >
      {highlight && (
        <span className="absolute top-6 right-6 text-xs text-yellow-400">
          Popular
        </span>
      )}

      <div className="h-[120px] mb-10 rounded-lg bg-neutral-800" />

      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      <div className="text-5xl font-bold text-yellow-400 mb-10">
        ${price}
        <span className="text-sm text-neutral-400 ml-2">/ month</span>
      </div>

      <ul className="space-y-4 text-neutral-300">
        <li>✓ Ongoing design support</li>
        <li>✓ Unlimited requests</li>
        <li>✓ Fast turnaround</li>
      </ul>
    </div>
  )
}
