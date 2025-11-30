// src/app/components/ThemeProvider.tsx
"use client";

import React, { useEffect, useState } from "react";
import { CartProvider } from "./CartContext";
import CartDrawer from "./CartDrawer"; // if you added the slide-in cart

type Theme = "light" | "dark";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initial: Theme =
        stored === "light" || stored === "dark"
          ? stored
          : prefersDark
          ? "dark"
          : "light";

      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <CartProvider>
      {children}
      <CartDrawer />

      {/* Floating theme button */}
      {mounted && (
        <button
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
          className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-surface shadow-lg shadow-emerald-500/30 ring-1 ring-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
              theme === "light"
                ? "bg-amber-300 text-amber-900 rotate-0"
                : "bg-slate-800 text-slate-100 rotate-180"
            }`}
          >
            {theme === "light" ? "☀️" : "🌙"}
          </div>
        </button>
      )}
    </CartProvider>
  );
}
