export default function BigFooter() {
  return (
    <footer className="relative bg-black text-white px-10 pt-24 pb-10">

      {/* ================= TOP GIANT TITLE ================= */}
      <div className="relative mb-24">
        <h2 className="text-[14vw] leading-none font-semibold tracking-tight">
          START A PROJECT
        </h2>

        {/* Arrow */}
        <div className="absolute right-0 top-6 w-24 h-24 border border-neutral-700 flex items-center justify-center">
          <span className="text-5xl">↗</span>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-[1.2fr_1fr_1fr_1.4fr] border-t border-neutral-800">

        {/* BRAND BLOCK */}
        <div className="bg-yellow-400 text-black p-8 flex flex-col justify-between">
          <div>
            <div className="text-6xl font-black mb-6">RM</div>

            <div className="flex gap-6 text-xl mb-10">
              <span>*</span>
              <span>🌐</span>
              <span>{"</>"}</span>
            </div>
          </div>

          <div>
            <p className="font-semibold">
              Creative Design Agency <br /> based in Kuningan
            </p>
            <p className="text-sm mt-6">
              © 2025 Rama. All rights reserved
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="border-l border-neutral-800 flex flex-col">
          {["Works", "About", "Blog", "Contact", "404"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between px-8 py-6 border-b border-neutral-800 hover:bg-neutral-900 transition"
            >
              <span>{item}</span>
              <span className="opacity-50">↗</span>
            </div>
          ))}
        </div>

        {/* SOCIALS */}
        <div className="border-l border-neutral-800 p-8">
          <p className="text-yellow-400 mb-6">Follow Us</p>
          <ul className="space-y-4 text-lg">
            <li>X / Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="border-l border-neutral-800 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-6xl font-semibold opacity-20 mb-10">
              STAY AHEAD
            </h3>

            <p className="text-yellow-400 mb-2">Newsletter</p>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Subscribe to our newsletter for more insights.
            </p>

            <div className="flex border border-neutral-700">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-3 outline-none"
              />
              <button className="bg-neutral-800 px-6">
                Subscribe
              </button>
            </div>
          </div>

          {/* Envelope */}
          <div className="self-end mt-10 text-6xl">✉</div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="mt-10 pt-8 border-t border-neutral-800 flex items-center justify-between">
        <div>
          <p className="text-yellow-400 mb-1">Reach Out</p>
          <p className="text-4xl font-semibold">
            contact@rama.studio
          </p>
        </div>

        <p className="text-sm text-neutral-500">
          Made by Velox Themes · Made in Framer
        </p>
      </div>
    </footer>
  )
}
