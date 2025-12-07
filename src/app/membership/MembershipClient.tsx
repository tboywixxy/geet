"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BENEFITS = [
  "Reconnect with lifelong friends",
  "Access member welfare and support",
  "Participate in reunions, mentorship, and legacy projects",
  "Expand your professional network",
  "Leave a mark on FGCS and future generations",
];

const MEMBERSHIP_CATEGORIES = [
  {
    title: "Ordinary Members",
    description:
      "1980–1985 classmates with full voting and participation rights.",
  },
  {
    title: "Associate Members",
    description:
      "Alumni outside the set who contribute meaningfully to our mission.",
  },
  {
    title: "Honorary Members",
    description:
      "Individuals honoured for exceptional service or support.",
  },
  {
    title: "Patrons / Matriarchs",
    description:
      "Elders and respected supporters who offer direction, blessing and counsel.",
  },
  {
    title: "Corporate Partners",
    description:
      "Organisations that support our programmes, projects and values.",
  },
];

// Heights for the “staircase” effect (smallest → tallest)
const STEP_HEIGHTS = [
  "md:min-h-[140px]",
  "md:min-h-[170px]",
  "md:min-h-[200px]",
  "md:min-h-[230px]",
  "md:min-h-[260px]",
];

export default function MembershipClient() {
  // Typewriter state for benefits
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = BENEFITS[activeBenefitIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (charIndex < currentText.length) {
      // keep typing current line
      timeout = setTimeout(
        () => setCharIndex((c) => c + 1),
        40 // typing speed
      );
    } else {
      // pause on full line, then move to next
      timeout = setTimeout(() => {
        setCharIndex(0);
        setActiveBenefitIndex((prev) => (prev + 1) % BENEFITS.length);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, activeBenefitIndex]);

  return (
    <main className="mx-auto px-4 space-y-1">
      {/* HERO */}
      <section className="relative overflow-hidden border-border bg-black text-slate-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Friends standing together in unity"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

        {/* Centered content */}
        <div className="relative flex min-h-[260px] items-center justify-center px-6 py-16 text-center sm:min-h-[320px] lg:min-h-[360px]">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
              👥 Membership
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Join the Family –{" "}
              <span className="text-[var(--brand-gold)]">
                “One Love, One Legacy.”
              </span>
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              Membership is open to all who were admitted into FGC Sokoto
              between 1980–1985 or graduated in 1985. Our doors also extend to
              friends, supporters and distinguished alumni committed to our
              shared purpose.
            </p>
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="rounded-t-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
          Who can join?
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          Membership is open to all who were admitted into{" "}
          <span className="font-medium">Federal Government College Sokoto</span>{" "}
          between 1980 and 1985 or graduated in 1985. Our doors also extend to
          friends, supporters and distinguished alumni who share our vision and
          are committed to our shared purpose of service, legacy and “One Love.”
        </p>
      </section>

      {/* MEMBERSHIP CATEGORIES – STAIR / LADDER HIERARCHY */}
      <section className="border border-border bg-surface/80 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Membership categories
            </p>
            <p className="mt-1 text-xs text-foreground/65">
              Arranged as a ladder — from core Eighty5ers to strategic partners.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-5 md:items-end">
          {MEMBERSHIP_CATEGORIES.map((cat, index) => {
            const isTop = index === MEMBERSHIP_CATEGORIES.length - 1;

            return (
              <div
                key={cat.title}
                className={[
                  "flex flex-col justify-between rounded-1xl border bg-background/90 p-4 text-[11px] shadow-sm transition",
                  STEP_HEIGHTS[index],
                  isTop
                    ? "border-[var(--brand-gold)] bg-[var(--brand-green-soft)]/90 shadow-md shadow-black/30"
                    : "border-border/70 hover:border-[var(--brand-gold)]/70",
                ].join(" ")}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/70">
                  {cat.title}
                </p>
                <p className="mt-2 leading-snug text-foreground/80">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS – SEQUENTIAL TYPEWRITER */}
      <section className="rounded-b-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
          Benefits of membership
        </p>

        <div className="space-y-3 text-base">
          {BENEFITS.map((text, index) => {
            const isActive = index === activeBenefitIndex;

            if (!isActive) {
              // Default, non-highlighted line
              return (
                <p
                  key={text}
                  className="text-foreground/80 transition-colors duration-200"
                >
                  • {text}
                </p>
              );
            }

            // Active line: typewriter + highlight
            const typed = text.slice(0, charIndex);
            const remaining = text.slice(charIndex);

            return (
              <p
                key={text}
                className="text-foreground/80 transition-colors duration-200"
              >
                <span>• </span>
                <span className="text-[var(--brand-gold)] font-semibold">
                  {typed}
                </span>
                <span>{remaining}</span>
                {/* blinking cursor */}
                <span className="ml-1 inline-block h-4 w-[1px] align-middle bg-[var(--brand-gold)] animate-pulse sm:h-5" />
              </p>
            );
          })}
        </div>

        <p className="mt-3 text-[11px] text-foreground/65">
          Join today — and keep the spirit of{" "}
          <span className="font-semibold text-[var(--brand-gold)]">
            “One Love”
          </span>{" "}
          alive.
        </p>
      </section>
    </main>
  );
}
