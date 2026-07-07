import { motion } from "framer-motion";

type Props = {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
};

const links = ["Evening", "Summer", "Bridal", "Autumn"];

export default function Navbar({ cartCount, onCartClick, onHomeClick }: Props) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/60 bg-[#faf7f2]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={onHomeClick}
          className="font-serif text-2xl font-semibold tracking-[0.3em] text-stone-900"
        >
          AURÉLIE
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <button
              key={l}
              onClick={onHomeClick}
              className="group relative text-sm font-medium uppercase tracking-widest text-stone-600 transition hover:text-stone-900"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-700 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <button
          onClick={onCartClick}
          className="relative flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <motion.span
              key={cartCount}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-[11px] font-bold text-white"
            >
              {cartCount}
            </motion.span>
          )}
        </button>
      </div>
    </motion.header>
  );
}
