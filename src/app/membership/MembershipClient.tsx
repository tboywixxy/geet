"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BENEFITS = [
  "Reconnect and strengthen lifelong bonds.",
  "Participate in welfare and empowerment initiatives.",
  "Enjoy professional networking and mentorship.",
  "Contribute to meaningful school and social projects.",
];

const MEMBERSHIP_CATEGORIES = [
  {
    title: "Ordinary Members",
    description:
      "Those who meet the core Eighty5ers criteria. Annual dues, voting rights and full access to Association activities.",
  },
  {
    title: "Associate Members",
    description:
      "Old students of the College outside the 1980–1985 set who are admitted in recognition of their contributions.",
  },
  {
    title: "Honorary Members",
    description:
      "Distinguished individuals, alumni or friends of the College invited in recognition of their support and service.",
  },
  {
    title: "Patrons / Matriarchs",
    description:
      "Respected individuals appointed by the General Meeting to serve as patrons, mentors and advisers.",
  },
  {
    title: "Corporate Partners (Top Tier)",
    description:
      "Organisations that support alumni programmes, scholarships and projects through strategic partnerships.",
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
    <main className="mx-auto px-4 space-y-1 ">
      {/* HERO */}
      <section className="relative overflow-hidden  border-border bg-black text-slate-50">
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
              Join the family —{" "}
              <span className="text-[var(--brand-gold)]">
                “One Love – One Legacy.”
              </span>
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              Open to all Eighty5ers and friends who share our vision, values
              and commitment to Federal Government College Sokoto.
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
          Membership is open to all persons who accept the Association&apos;s
          aims and objectives and who are old students of the{" "}
          <span className="font-medium">Federal Government College Sokoto</span>{" "}
          duly admitted during the 1980/1981 academic session and/or sat for the
          school certificate examination during the 1984/1985 academic session,
          or are old students of the College who were duly admitted and spent at
          least one (1) academic session as students between 1980 and 1985.
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
              Arranged as a ladder — from core members to strategic partners.
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
          As each benefit lights up, remember:{" "}
          <span className="font-semibold text-[var(--brand-gold)]">
            “One Love” is a commitment, not just a slogan.
          </span>
        </p>
      </section>
    </main>
  );
}
