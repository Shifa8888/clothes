import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "../data";

export type CartItem = Product & { qty: number };

type Props = {
  cart: CartItem[];
  onQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onBackHome: () => void;
  onOrderComplete: () => void;
};

export default function Checkout({
  cart,
  onQty,
  onRemove,
  onBackHome,
  onOrderComplete,
}: Props) {
  const [placed, setPlaced] = useState(false);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    onOrderComplete();
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] px-6 pt-28 pb-20 text-stone-900">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={onBackHome}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-stone-600 transition hover:text-amber-700"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <AnimatePresence mode="wait">
          {placed ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center rounded-3xl bg-white py-24 text-center shadow-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-700 text-white"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </motion.div>
              <h2 className="mt-8 font-serif text-4xl">Merci beaucoup!</h2>
              <p className="mt-3 max-w-md text-stone-600">
                Your order has been placed successfully. A confirmation has been
                sent to your inbox and your dresses are being lovingly packed.
              </p>
              <button
                onClick={onBackHome}
                className="mt-10 rounded-full bg-stone-900 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-amber-700"
              >
                Back to Home
              </button>
            </motion.div>
          ) : cart.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center rounded-3xl bg-white py-24 text-center shadow-sm"
            >
              <div className="text-6xl">🛍️</div>
              <h2 className="mt-6 font-serif text-3xl">Your bag is empty</h2>
              <p className="mt-2 text-stone-600">
                Discover our latest collection and find your next favourite.
              </p>
              <button
                onClick={onBackHome}
                className="mt-8 rounded-full bg-stone-900 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-amber-700"
              >
                Start Shopping
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="cart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-10 lg:grid-cols-[1.5fr_1fr]"
            >
              {/* Cart items */}
              <div>
                <h1 className="mb-6 font-serif text-4xl">Your Bag</h1>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      exit={{ opacity: 0, x: -30 }}
                      className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-24 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-serif text-lg">{item.name}</h3>
                            <p className="text-sm text-stone-500">{item.color}</p>
                          </div>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-stone-400 transition hover:text-red-500"
                          >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-full border border-stone-300 px-3 py-1">
                            <button
                              onClick={() => onQty(item.id, -1)}
                              className="text-lg text-stone-600 hover:text-amber-700"
                            >
                              −
                            </button>
                            <span className="w-6 text-center text-sm font-medium">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => onQty(item.id, 1)}
                              className="text-lg text-stone-600 hover:text-amber-700"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-medium text-amber-700">
                            ${item.price * item.qty}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Summary + form */}
              <form
                onSubmit={handleProceed}
                className="h-fit space-y-5 rounded-3xl bg-white p-7 shadow-sm"
              >
                <h2 className="font-serif text-2xl">Checkout</h2>
                <div className="grid gap-3">
                  <input required placeholder="Full name" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-700" />
                  <input required type="email" placeholder="Email address" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-700" />
                  <input required placeholder="Shipping address" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-700" />
                  <div className="grid grid-cols-2 gap-3">
                    <input required placeholder="City" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-700" />
                    <input required placeholder="ZIP" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-700" />
                  </div>
                  <input required placeholder="Card number" className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-700" />
                </div>

                <div className="space-y-2 border-t border-stone-200 pt-4 text-sm">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span>${shipping}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-amber-700">${total}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-stone-900 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-amber-700"
                >
                  Proceed &amp; Place Order
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
