export default function MarqueeSection() {
  return (
    <section className="relative bg-black overflow-hidden py-2 my-10">
      {/* Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />

      <div className="relative w-full overflow-hidden">
        <div className="marquee flex w-max items-center gap-24 ">
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

      {/* WORKS + (03) */}
      <span
        className="relative uppercase text-white font-black"
        style={{
          fontFamily: "ClashDisplay",
          fontSize: "clamp(3.6rem, 9vw, 7.4rem)",
          letterSpacing: "-0.05em",
          whiteSpace: "nowrap",
        }}
      >
        WORKS

        {/* (03) */}
        <span
  className="absolute text-white/30 font-light"
  style={{
    fontSize: "0.18em",
    top: "0.12em",
    right: "-1.15em",
    letterSpacing: "0.05em",
  }}
>
  (03)
</span>

      </span>
    </div>
  );
}
