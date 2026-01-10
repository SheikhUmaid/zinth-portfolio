import { BLOG_POSTS } from "../data/blog";

export default function LatestNewsSection() {
  return (
    <section className="relative bg-black text-white px-10 py-32">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-20">
          <div>
            <span className="text-yellow-400 text-sm block mb-2">
              Blog
            </span>
            <h2 className="text-6xl font-semibold">
              LATEST NEWS
            </h2>
          </div>

          <button className="border border-neutral-700 px-6 py-3 text-sm flex items-center gap-2 hover:border-white transition">
            See More <span>↗</span>
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-10 items-start">
          {BLOG_POSTS.map((post) => (
            <ArticleCard
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              tall={post.featured}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ================= ARTICLE CARD ================= */

function ArticleCard({ image, title, date, tall }) {
  return (
    <article className="flex flex-col">
      <div
        className={`relative w-full overflow-hidden ${
          tall ? "h-[640px]" : "h-[420px]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-neutral-400">
          {date}
        </p>
      </div>
    </article>
  )
}
