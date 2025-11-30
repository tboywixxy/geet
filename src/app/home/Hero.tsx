"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

type HeroSlide = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const heroSlides: HeroSlide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Reunion · One Love · Legacy",
    title: (
      <>
        Reuniting the{" "}
        <span className="text-[var(--brand-gold)]">Class of ’85</span> to give
        back and stay connected.
      </>
    ),
    description: (
      <>
        From{" "}
        <span className="text-[var(--brand-yellow)]">
          shared classrooms
        </span>{" "}
        to global careers, we&apos;re turning our journeys into{" "}
        <span className="text-[var(--brand-gold)]">
          scholarships, welfare and projects
        </span>{" "}
        that keep Federal Government College memories alive.
      </>
    ),
  },
  {
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Programs & Impact",
    title: (
      <>
        Turning <span className="text-[var(--brand-gold)]">nostalgia</span>{" "}
        into <span className="text-[var(--brand-yellow)]">impact</span> at home.
      </>
    ),
    description: (
      <>
        Through <span className="text-[var(--brand-gold)]">education</span>,
        <span className="text-[var(--brand-blue)]"> welfare</span>, and{" "}
        <span className="text-[var(--brand-red)]">community projects</span>, the
        Eighty5ers are giving the next generation more than just memories –{" "}
        we&apos;re building opportunities.
      </>
    ),
  },
  {
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Membership · Giving · Community",
    title: (
      <>
        One <span className="text-[var(--brand-gold)]">community</span>, many{" "}
        <span className="text-[var(--brand-yellow)]">stories</span>, one{" "}
        <span className="text-[var(--brand-blue)]">Future FGCS</span>.
      </>
    ),
    description: (
      <>
        Whether you&apos;re in{" "}
        <span className="text-[var(--brand-gold)]">Lagos</span>,
        <span className="text-[var(--brand-blue)]"> London</span> or{" "}
        <span className="text-[var(--brand-red)]">Los Angeles</span>, your
        membership and support keep the{" "}
        <span className="text-[var(--brand-yellow)]">“One Love”</span> spirit
        alive for today&apos;s students.
      </>
    ),
  },
];

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  const goToNext = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrev = useCallback(() => {
    setHeroIndex((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  }, []);

  // Auto-rotate every 5s
  useEffect(() => {
    const id = setInterval(goToNext, 5000);
    return () => clearInterval(id);
  }, [goToNext]);

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
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
              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#membership"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-4 py-2 text-xs font-semibold text-[var(--brand-deep-green)] shadow-sm shadow-black/40 hover:bg-[var(--brand-gold-soft)]"
                >
                  Become a Member
                </Link>
                <Link
                  href="#donate"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-100/40 bg-black/25 px-4 py-2 text-xs font-semibold text-slate-50 backdrop-blur-sm hover:bg-black/40"
                >
                  Support a Project
                </Link>
              </div>

              {/* Arrows / slide controls */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[11px] uppercase tracking-[0.22em] text-slate-100/70">
                  Featured stories
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
