export default function MarqueeSection() {
  return (
    <section className="relative bg-black overflow-hidden py-20">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee flex w-max items-center gap-24">
          
          {/* ITEM */}
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />

        </div>
      </div>
    </section>
  );
}

function MarqueeItem() {
  return (
    <div className="flex items-center gap-10">
      {/* Top Picks */}
      <span
        className="text-zinthOrange"
        style={{
          fontFamily: "'Shadows Into Light', cursive",
          fontSize: "1.8rem",
          whiteSpace: "nowrap",
        }}
      >
        Top Picks
      </span>

      {/* WORKS */}
      <span
        className="uppercase text-white font-black"
        style={{
          fontFamily: "ClashDisplay",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          letterSpacing: "-0.06em",
          whiteSpace: "nowrap",
        }}
      >
        Works
      </span>

      {/* (03) */}
      <span className="text-white/50 text-lg font-medium">(03)</span>
    </div>
  );
}
