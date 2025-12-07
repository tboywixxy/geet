"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

// 🔹 Adjust this path if needed
import { LAGOS_HUB_4Q2023_GATHERING_IMAGES } from "../gallery/albums/lagosHub4Q2023";

type HeroSlide = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

/**
 * We “split” your homepage hero copy into 3 variations,
 * so as the image changes, the text also changes.
 */
const heroMeta: Omit<HeroSlide, "image">[] = [
  {
    eyebrow: "Association of Eighty5ers FGCS",
    title: <>One Love — United by Memory, Driven by Purpose.</>,
    description: (
      <>
        <span className="block">
          Welcome to the official online home of the Association of Eighty5ers FGCS — Class of 1985, Federal Government College Sokoto.
        </span>
        <span className="block mt-1">
          Here, memory meets purpose. Here, friendship becomes service. Here, our journey continues — stronger, wiser, and more united than ever.
        </span>
      </>
    ),
  },
  {
    eyebrow: "Our Journey Since 1985",
    title: (
      <>
        From shared classrooms to{" "}
        <span className="text-[var(--brand-gold)]">shared impact</span>.
      </>
    ),
    description: (
      <>
        <span className="block">
          For over 40 years, we have remained a family bound by shared experiences, enduring bonds, and an unwavering spirit of “One Love.”
        </span>
        <span className="block mt-1">
          Across cities, careers and continents, we are still showing up for one another and for today&apos;s FGCS students.
        </span>
      </>
    ),
  },
  {
    eyebrow: "Legacy · Service · Community",
    title: (
      <>
        Preserving our{" "}
        <span className="text-[var(--brand-gold)]">past</span>, strengthening
        our <span className="text-[var(--brand-yellow)]">future</span>.
      </>
    ),
    description: (
      <>
        <span className="block">
          This platform preserves our past, celebrates our present, and strengthens our collective future as Eighty5ers.
        </span>
        <span className="block mt-1">
          Through membership, giving and service, we are turning memory into structured support, welfare and legacy projects for FGCS.
        </span>
      </>
    ),
  },
];

// Build slides from Lagos Hub images + the meta above
const heroSlides: HeroSlide[] = (LAGOS_HUB_4Q2023_GATHERING_IMAGES || [])
  .slice(6, 22) // adjust slice if you want different images
  .map((img, idx) => {
    const meta = heroMeta[idx % heroMeta.length];
    return {
      image: img.src,
      eyebrow: meta.eyebrow,
      title: meta.title,
      description: meta.description,
    };
  });

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  const goToNext = useCallback(() => {
    setHeroIndex((prev) =>
      heroSlides.length > 0 ? (prev + 1) % heroSlides.length : prev
    );
  }, []);

  const goToPrev = useCallback(() => {
    setHeroIndex((prev) =>
      heroSlides.length === 0
        ? prev
        : prev === 0
        ? heroSlides.length - 1
        : prev - 1
    );
  }, []);

  // Auto-rotate every 5s
  useEffect(() => {
    if (heroSlides.length === 0) return;
    const id = setInterval(goToNext, 5000);
    return () => clearInterval(id);
  }, [goToNext]);

  if (heroSlides.length === 0) {
    // Safety fallback so the page doesn't break if array is empty
    return null;
  }

  const currentSlide = heroSlides[heroIndex];

  return (
    <section className="relative overflow-hidden border-border bg-muted/40">
      <div className="relative h-[420px] sm:h-[480px]">
        {/* Background image carousel */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === heroIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Association reunion hero"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
          </div>
        ))}

        {/* Foreground content */}
        <div className="relative z-10 flex h-full items-center px-5 py-8 sm:px-10">
          <div className="max-w-xl space-y-4 text-slate-50">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]/85">
              {currentSlide.eyebrow}
            </p>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {currentSlide.title}
            </h1>

            <p className="text-sm text-slate-100/85 sm:text-base">
              {currentSlide.description}
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:mt-3 sm:flex-col">
              {/* CTAs – homepage buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#membership"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-4 py-2 text-xs font-semibold text-[var(--brand-deep-green)] shadow-sm shadow-black/40 hover:bg-[var(--brand-gold-soft)]"
                >
                  Join the Association
                </Link>
                <Link
                  href="#donate"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-100/40 bg-black/25 px-4 py-2 text-xs font-semibold text-slate-50 backdrop-blur-sm hover:bg-black/40"
                >
                  Donate Now
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-100/40 bg-black/10 px-4 py-2 text-xs font-semibold text-slate-50 backdrop-blur-sm hover:bg-black/30"
                >
                  View Upcoming Events
                </Link>
              </div>

              {/* Arrows / slide controls */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[11px] uppercase tracking-[0.22em] text-slate-100/70">
                  Featured highlights
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goToPrev}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-100/50 bg-black/30 text-xs text-slate-50 shadow-sm shadow-black/40 backdrop-blur-sm transition hover:bg-black/60"
                    aria-label="Previous highlight"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-100/50 bg-black/30 text-xs text-slate-50 shadow-sm shadow-black/40 backdrop-blur-sm transition hover:bg-black/60"
                    aria-label="Next highlight"
                  >
                    →
                  </button>
                </div>

                {/* Tiny slide indicators */}
                <div className="ml-2 flex items-center gap-1">
                  {heroSlides.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === heroIndex
                          ? "w-5 bg-[var(--brand-gold)]"
                          : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
