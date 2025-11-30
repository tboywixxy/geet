"use client";

import React from "react";
import { useCart } from "./CartContext";

const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    totalItems,
    totalAmount,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-md transform bg-surface shadow-2xl border-l border-border transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Cart ({totalItems})
              </p>
              <p className="text-[11px] text-foreground/60">
                Review your Lina&apos;s Hub picks.
              </p>
            </div>
            <button
              onClick={closeCart}
              className="text-sm text-foreground/60 hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {items.length === 0 && (
              <p className="text-sm text-foreground/70">
                Your cart is empty. Head to the{" "}
                <a href="/shop" className="text-emerald-600 dark:text-emerald-300">
                  shop
                </a>{" "}
                to add some pieces.
              </p>
            )}

            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-start justify-between gap-3 rounded-2xl bg-background/80 p-3"
              >
                <div className="flex gap-3">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-xl object-cover border border-border"
                    />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[11px] text-foreground/70">
                      Size {item.size} • Qty {item.qty}
                    </p>
                    <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-300">
                      {formatNaira(item.price * item.qty)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-[11px] text-foreground/50 hover:text-foreground"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-border px-4 py-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/80">Total (est.)</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-300">
                {formatNaira(totalAmount)}
              </span>
            </div>
            <button className="w-full rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background shadow-md shadow-foreground/25 transition hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed">
              Proceed to checkout
            </button>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="w-full text-[11px] text-foreground/60 hover:text-foreground"
              >
                Clear cart
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
