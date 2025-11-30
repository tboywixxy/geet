"use client";

import React, { useRef, useState } from "react";
import { useCart } from "../components/CartContext";

const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

type Product = {
  id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
  sizes: string[];
};

const products: Product[] = [
  {
    id: "a-gym-bag",
    name: "Everyday Gym Bag",
    desc: "Roomy holdall with separate shoe pocket and internal mesh.",
    price: 21000,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    sizes: ["One size"],
  },
  {
    id: "a-lifting-straps",
    name: "Lifting Straps",
    desc: "Cotton straps for heavy pulls and rack pulls.",
    price: 8500,
    img: "https://images.unsplash.com/photo-1597754269202-97e9a270cc5b?auto=format&fit=crop&w=1200&q=80",
    sizes: ["One size"],
  },
  {
    id: "a-wrist-wraps",
    name: "Support Wrist Wraps",
    desc: "Adjustable wraps for pressing days and overhead work.",
    price: 9000,
    img: "https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&w=1200&q=80",
    sizes: ["S/M", "L/XL"],
  },
  {
    id: "a-shaker-bottle",
    name: "Lina Shaker Bottle",
    desc: "700ml shaker with secure lid and metal mixer ball.",
    price: 6500,
    img: "https://images.unsplash.com/photo-1540206276207-3af25c08abc4?auto=format&fit=crop&w=1200&q=80",
    sizes: ["One size"],
  },
  {
    id: "a-lifting-belt",
    name: "Support Lifting Belt",
    desc: "Soft but sturdy belt to keep your core tight under load.",
    price: 23000,
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=80",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "a-socks-pack",
    name: "Training Socks 3-Pack",
    desc: "Cushioned socks built for long sessions.",
    price: 7500,
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    sizes: ["S/M", "L/XL"],
  },
  // + 3 more slider items
  {
    id: "a-headband",
    name: "Sweat Control Headband",
    desc: "Keeps hair and sweat out of your face mid-session.",
    price: 4500,
    img: "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?auto=format&fit=crop&w=1200&q=80",
    sizes: ["One size"],
  },
  {
    id: "a-glute-band",
    name: "Glute Training Band",
    desc: "Fabric resistance band that doesn’t roll up mid-set.",
    price: 6500,
    img: "https://images.unsplash.com/photo-1638612900205-61e36bb5bd12?auto=format&fit=crop&w=1200&q=80",
    sizes: ["Light", "Medium", "Heavy"],
  },
  {
    id: "a-mini-towel",
    name: "Micro Gym Towel",
    desc: "Small, fast-drying towel that fits in your bag.",
    price: 5000,
    img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=1200&q=80",
    sizes: ["One size"],
  },
];

function ProductCard({ product }: { product: Product }) {
  const { addItem, items } = useCart();

  const inCart = items.some((i) => i.id === product.id);

  const selectedSizes = Array.from(
    new Set(
      items
        .filter((i) => i.id === product.id)
        .map((i) => i.size)
    )
  );

  const handleAdd = (size: string) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size,
      image: product.img,
    });
  };

  return (
    <div
      data-card="true"
      className="group relative flex min-w-[340px] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
    >
      {/* IMAGE */}
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

        {inCart && (
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-slate-100">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 10V7.5A5 5 0 0117 7.5V10" />
              <path d="M6 10h12l-1 9H7L6 10z" />
            </svg>
          </div>
        )}
      </div>

      {/* TEXT */}
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {product.name}
          </p>
          <p className="mt-1 text-[11px] text-foreground/75">
            {product.desc}
          </p>

          <div className="mt-2 flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleAdd(size)}
                className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-semibold text-foreground hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="mt-1 h-4">
            {selectedSizes.length > 0 && (
              <p className="text-[11px] font-medium text-emerald-500">
                Added to cart · Sizes {selectedSizes.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">
            {formatNaira(product.price)}
          </p>
          <p className="text-[10px] text-foreground/50">Tap a size to add</p>
        </div>
      </div>
    </div>
  );
}

export default function AccessoriesPage() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [activeFilterId, setActiveFilterId] = useState<string | null>(null);

  const filteredBySearch = products.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
  });

  const filteredProducts =
    activeFilterId == null
      ? filteredBySearch
      : filteredBySearch.filter((p) => p.id === activeFilterId);

  const scroll = (direction: "left" | "right") => {
    const container = scrollerRef.current;
    if (!container) return;

    const firstCard =
      container.querySelector<HTMLDivElement>('[data-card="true"]');
    const cardWidth = firstCard?.clientWidth ?? 360;
    const gap = 16;

    container.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  const handleSidebarItemClick = (id: string) => {
    setActiveFilterId((prev) => (prev === id ? null : id));
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <section>
          <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Accessories
          </h1>
          <p className="mt-2 max-w-md text-sm text-foreground/80">
            Bags, straps, bottles and small pieces that make every session run
            smoother.
          </p>
        </section>

        <button
          type="button"
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="hidden shrink-0 items-center rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground shadow-sm hover:bg-background sm:inline-flex"
        >
          {sidebarOpen ? "Hide kit list" : "Show kit list"}
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } self-start rounded-2xl border border-border bg-surface shadow-sm lg:sticky lg:top-24`}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                Kit extras
              </p>
              <p className="mt-0.5 text-[11px] text-foreground/60">
                Search bags, straps, belts, socks.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] text-foreground/60 hover:bg-background"
            >
              ✕
            </button>
          </div>

          {/* Search */}
          <div className="border-b border-border px-4 pb-3 pt-2">
            <div className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs ring-1 ring-border">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="M16 16l4 4" />
              </svg>
              <input
                type="text"
                placeholder="Search bags, straps, bottles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-xs text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
            </div>
            {activeFilterId && (
              <button
                type="button"
                onClick={() => setActiveFilterId(null)}
                className="mt-2 text-[11px] text-emerald-500 hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Scrollable list */}
          <div className="max-h-[70vh] space-y-1 overflow-y-auto px-2 pb-3 pt-2 text-xs">
            {filteredBySearch.length === 0 ? (
              <p className="px-2 py-4 text-[11px] text-foreground/60">
                No matches for &quot;{search}&quot;. Try adjusting your search.
              </p>
            ) : (
              filteredBySearch.map((product) => {
                const isActive = activeFilterId === product.id;
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleSidebarItemClick(product.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left ${
                      isActive
                        ? "bg-background ring-1 ring-emerald-400/60"
                        : "hover:bg-background"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-medium text-foreground">
                        {product.name}
                      </p>
                      <p className="mt-0.5 truncate text-[11px] text-foreground/60">
                        {product.sizes.join(" • ")}
                      </p>
                    </div>
                    {/* NO price in subsection */}
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* Main scroller */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Kit extras
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-xs text-foreground shadow-sm ring-1 ring-border hover:bg-background"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-xs text-foreground shadow-sm ring-1 ring-border hover:bg-background"
              >
                ›
              </button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-border text-sm text-foreground/60">
              No items found. Try a different search or clear filters.
            </div>
          ) : (
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
