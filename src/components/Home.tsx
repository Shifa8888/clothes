import { motion } from "framer-motion";
import { products, categories, type Product } from "../data";

type Props = {
  onAdd: (p: Product) => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Home({ onAdd }: Props) {
  return (
    <div className="bg-[#faf7f2] text-stone-900">
      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-amber-700">
              Spring / Summer 2026
            </span>
            <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Dress the
              <span className="block italic text-amber-700">moment.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-stone-600">
              A curated atelier of handcrafted gowns and dresses, designed for
              women who wear confidence like couture.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-amber-700"
              >
                Shop Collection
              </a>
              <a
                href="#categories"
                className="rounded-full border border-stone-400 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-stone-800 transition hover:border-stone-900"
              >
                Explore
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -right-6 -top-6 h-full w-full rounded-[2rem] border border-amber-700/40" />
            <img
              src={products[1].image}
              alt="Featured gown"
              className="relative z-10 h-[34rem] w-full rounded-[2rem] object-cover shadow-2xl"
            />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 bottom-10 z-20 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur"
            >
              <p className="font-serif text-lg">Azure Silk Gown</p>
              <p className="text-sm text-amber-700">$349</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — FEATURED COLLECTION */}
      <section id="collection" className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.35em] text-amber-700">
            The Collection
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Signature Pieces</h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-600">
            Each dress is cut, draped, and finished by hand in our atelier.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {p.tag && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                    {p.tag}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-96"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 transition duration-500 group-hover:translate-y-0">
                  <button
                    onClick={() => onAdd(p)}
                    className="w-full rounded-full bg-white py-3 text-xs font-semibold uppercase tracking-widest text-stone-900 transition hover:bg-amber-700 hover:text-white"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg leading-tight">{p.name}</h3>
                  <p className="text-sm text-stone-500">{p.color}</p>
                </div>
                <p className="font-medium text-amber-700">${p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — CATEGORIES */}
      <section id="categories" className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-amber-500">
              Shop by Occasion
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Four Worlds of Style</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <motion.a
                href="#collection"
                key={c.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative block h-96 overflow-hidden rounded-2xl"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl">{c.name}</h3>
                  <p className="mt-1 text-sm text-stone-300 opacity-0 transition duration-500 group-hover:opacity-100">
                    {c.tagline}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — NEWSLETTER / ATELIER */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 rounded-[2.5rem] bg-gradient-to-br from-amber-50 to-stone-100 p-10 md:grid-cols-2 md:p-16"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-amber-700">
              The Atelier
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Join the AURÉLIE circle
            </h2>
            <p className="mt-5 max-w-md text-stone-600">
              Be the first to preview new collections, private sales, and
              styling invitations. A little luxury, straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-full border border-stone-300 bg-white px-5 py-4 text-sm outline-none focus:border-amber-700"
              />
              <button className="rounded-full bg-stone-900 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-amber-700">
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              "https://images.pexels.com/photos/8386641/pexels-photo-8386641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400",
              "https://images.pexels.com/photos/8386643/pexels-photo-8386643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400",
              "https://images.pexels.com/photos/8311882/pexels-photo-8311882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400",
            ].map((src, i) => (
              <motion.img
                key={i}
                animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                src={src}
                alt="Atelier"
                className={`h-40 w-full rounded-xl object-cover shadow-lg ${i === 1 ? "mt-8" : ""}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-stone-200 py-10 text-center text-sm text-stone-500">
        <p className="font-serif text-xl tracking-[0.3em] text-stone-800">AURÉLIE</p>
        <p className="mt-3">© 2026 Aurélie Atelier · Crafted with love</p>
      </footer>
    </div>
  );
}
