import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout, { type CartItem } from "./components/Checkout";
import type { Product } from "./data";

export default function App() {
  const [page, setPage] = useState<"home" | "checkout">("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found)
        return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });
    setToast(`${p.name} added to bag`);
    setTimeout(() => setToast(null), 2000);
  };

  const changeQty = (id: number, delta: number) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );

  const removeItem = (id: number) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#faf7f2] font-sans">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setPage("checkout")}
        onHomeClick={() => setPage("home")}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {page === "home" ? (
            <Home onAdd={addToCart} />
          ) : (
            <Checkout
              cart={cart}
              onQty={changeQty}
              onRemove={removeItem}
              onBackHome={() => setPage("home")}
              onOrderComplete={() => setCart([])}
            />
          )}
        </motion.main>
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
