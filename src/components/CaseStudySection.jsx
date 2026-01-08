export default function CaseStudySection() {
  return (
    <section className="relative bg-black px-6 sm:px-10 py-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-10 lg:gap-16">

        {/* LEFT PANEL */}
        <div className="relative bg-black/60 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur">
          
          {/* Project selector */}
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-zinthOrange rounded-full" />
                KRESNA
              </div>
              <div>PANDAWA</div>
              <div>SADEWA</div>
            </div>

            <a
              href="#"
              className="text-zinthOrange text-sm font-medium inline-flex items-center gap-2"
            >
              All Projects →
            </a>
          </div>

          {/* Title */}
          <h3
            className="text-white mb-10"
            style={{
              fontFamily: "ClashDisplay",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: "1.1",
            }}
          >
            Website and Branding
            <br />
            for Kresna Agency
          </h3>

          {/* Meta info */}
          <div className="space-y-4 text-sm text-white/60 border-t border-white/10 pt-6">
            <div className="flex justify-between">
              <span>Year</span>
              <span className="text-white">2023</span>
            </div>

            <div className="flex justify-between">
              <span>Timeline</span>
              <span className="text-white">5 Weeks</span>
            </div>

            <div className="flex justify-between">
              <span>Services</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 text-white">
                  Branding
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-white">
                  Website
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-white">
                  3D
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="
              mt-8 inline-flex items-center justify-between
              w-full px-6 py-4 rounded-xl
              border border-white/15
              text-white hover:bg-white/5
              transition
            "
          >
            <span>Read Case Study</span>
            <span>↗</span>
          </a>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b1c2d] to-[#0f5ba7]">

          {/* Image */}
          <img
            src="/manifesto.jpg"
            alt="Kresna Project"
            className="
              w-full h-full object-cover
              scale-[1.02]
            "
          />

          {/* Floating accent shape */}
          <div className="
            absolute top-10 right-10
            w-24 h-24
            bg-gradient-to-br from-blue-400 to-cyan-300
            rounded-xl
            blur-sm
            opacity-90
          " />

         
        </div>

      </div>
    </section>
  );
}
