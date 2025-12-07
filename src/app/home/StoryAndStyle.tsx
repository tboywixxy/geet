"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

function StorySection() {
  // Scroll-reveal for the donate block
  const donateRef = useRef<HTMLDivElement | null>(null);
  const [donateVisible, setDonateVisible] = useState(false);

  // Typewriter state
  const fullText = "Donate today / Support us";
  const donatePart = "Donate today";
  const middlePart = " / ";
  const supportPart = "Support us";

  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Scroll-to-reveal observer for donate section
  useEffect(() => {
    const el = donateRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setDonateVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typewriter effect (looping)
  useEffect(() => {
    const totalLength = fullText.length;
    let timeout: ReturnType<typeof setTimeout>;

    if (direction === "forward") {
      if (charIndex < totalLength) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 90);
      } else {
        // Pause when fully typed before deleting
        timeout = setTimeout(() => setDirection("backward"), 1200);
      }
    } else {
      if (charIndex > 1) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 50);
      } else {
        // Pause a bit before typing again
        timeout = setTimeout(() => setDirection("forward"), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, direction, fullText.length]);

  // Split the currently visible text into colored segments
  const visibleText = fullText.slice(0, charIndex);

  const donateVisibleText = visibleText.slice(
    0,
    Math.min(visibleText.length, donatePart.length)
  );

  let middleVisibleText = "";
  let supportVisibleText = "";

  if (visibleText.length > donatePart.length) {
    middleVisibleText = visibleText.slice(
      donatePart.length,
      Math.min(visibleText.length, donatePart.length + middlePart.length)
    );
  }

  if (visibleText.length > donatePart.length + middlePart.length) {
    supportVisibleText = visibleText.slice(
      donatePart.length + middlePart.length,
      visibleText.length
    );
  }

  return (
    <section>
      {/* Block 1 - Our story */}
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80">
        <div className="pointer-events-none absolute inset-0 animate-soft-gradient opacity-80 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.15),transparent_55%)]" />
        <div className="relative grid gap-6 p-6 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-500">
              Our story
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              From classmates to a community that shows up for one another.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              The Association of Eighty5ers FGCS was born from a simple
              decision: not to let time and distance erase the bond we formed as
              teenagers. What started as WhatsApp chats and small meet-ups has
              grown into a structured community that raises funds, visits
              campus, honours teachers and looks after one another.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              We are professionals, parents, entrepreneurs, public servants and
              retirees – but underneath all of that, we are still the same
              classmates who shared notes, exams, chores and dreams. This
              website is one more way to organise that energy and keep our story
              going.
            </p>
          </div>
          {/* Decorative gradient column only – no text or images */}
          <div className="hidden rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)] sm:block" />
        </div>
      </div>

      {/* Block 2 - Why we exist */}
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80">
        <div className="pointer-events-none absolute inset-0 animate-soft-gradient opacity-80 bg-[radial-gradient(circle_at_0%_100%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.16),transparent_55%)]" />
        <div className="relative grid gap-6 p-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:p-8">
          {/* Decorative block */}
          <div className="hidden rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(16,185,129,0.16),transparent_55%)] sm:block" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Why we exist
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              To stay connected, give back and leave FGCS better than we met it.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Our association channels nostalgia into action. We organise
              reunions and hangouts because relationships matter – but we also
              pool resources for welfare, student support and campus projects
              because impact matters too. Every contribution, big or small, is a
              way of saying thank you for the foundation the school gave us.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              As we formalise our structures, publish reports and grow our
              endowment, our goal is simple: to be a model old students&apos;
              association that combines warmth, accountability and results.
            </p>
          </div>
        </div>
      </div>

      {/* Block 3 - Donate CTA */}
      <div
        ref={donateRef}
        className={`relative overflow-hidden border border-border/70 bg-black text-slate-50 transition-all duration-700 ease-out ${
          donateVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1600&q=80"
          alt="Hands joined together in unity"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

        {/* Content */}
        <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
            Donate
          </p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Help the Eighty5ers keep{" "}
            <span className="text-[var(--brand-gold)]">“One Love”</span> alive
            through giving.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-100/85">
           The Eighty5ers operate as a non-profit Incorporated Trusteeship — dedicated to supporting education, welfare, and community development. Your donations fuel programmes that strengthen FGCS, uplift communities, and support our members.
          </p>

          {/* Typewriter line */}
          <div className="mt-5 flex items-center justify-center">
            <p className="flex items-center text-sm font-semibold tracking-wide sm:text-base">
              <span className="text-[var(--brand-gold)]">
                {donateVisibleText}
              </span>
              <span className="text-slate-100">{middleVisibleText}</span>
              {/* changed to high-contrast light text */}
              <span className="text-slate-100">{supportVisibleText}</span>
              {/* Cursor */}
              <span className="ml-1 h-4 w-[1px] animate-pulse bg-slate-100/80 sm:h-5" />
            </p>
          </div>

          {/* Donate button */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-5 py-2.5 text-xs font-semibold text-[var(--brand-deep-green)] shadow-sm shadow-black/40 hover:bg-[var(--brand-gold-soft)]"
            >
              Go to donate page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function StoryAndStyle() {
  return <StorySection />;
}
