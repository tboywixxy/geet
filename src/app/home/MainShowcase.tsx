"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Highlight = {
  id: string;
  title: string;
  desc: string;
  img: string;
  meta?: string;
};

/* =======================
   STORIES OF IMPACT DATA
   ======================= */

const impactHighlights: Highlight[] = [
  {
    id: "impact-student",
    title: "Student Stories",
    desc: "Hearing directly from students whose fees, textbooks or exams were covered by Eighty5ers support.",
    img: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
    meta: "Real impact",
  },
  {
    id: "impact-health",
    title: "Health & Wellness Support",
    desc: "Pooling resources to help classmates with surgeries, treatments and recovery journeys.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    meta: "Welfare",
  },
  {
    id: "impact-teachers",
    title: "Honouring Our Teachers",
    desc: "Recognising teachers who shaped us with appreciation visits and support packages.",
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    meta: "Gratitude",
  },
  {
    id: "impact-network",
    title: "Global Network",
    desc: "From Abuja to Atlanta, strengthening professional and personal bonds within the Class of ’85.",
    img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80",
    meta: "Connections",
  },
];

/* ============================
   REUSABLE CARD COMPONENT
   ============================ */

function HighlightCard({ item }: { item: Highlight }) {
  return (
    <div
      data-card="true"
      className="group relative flex min-w-[320px] max-w-[420px] flex-col overflow-hidden border border-border bg-surface shadow-sm"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {item.meta && (
          <div className="absolute left-3 top-3 inline-flex items-center bg-black/65 px-2.5 py-1 text-[10px] font-semibold text-slate-100">
            {item.meta}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{item.title}</p>
          <p className="mt-1 text-[11px] text-foreground/75">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ======================================
   PROGRAMS & IMPACT – STORIES OF IMPACT
   ====================================== */

export function ProgramsImpactSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  // Scroll-to-reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="programs-impact"
      ref={sectionRef}
      className={`mt-10 rounded-3xl border border-border bg-surface/80 px-4 pt-8 pb-6 sm:px-8 sm:pt-9 sm:pb-7 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/70">
          How your support is changing lives
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          <span className="text-[var(--brand-gold)]">Stories</span> of impact
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-[12px] text-foreground/70">
          From scholarships and welfare to campus projects and teacher
          appreciation, every contribution from the Eighty5ers is writing a new
          chapter for FGCS.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs text-foreground shadow-sm hover:bg-foreground/5"
            aria-label="Previous story"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs text-foreground shadow-sm hover:bg-foreground/5"
            aria-label="Next story"
          >
            ›
          </button>
        </div>

        <Link
          href="/programs-impact"
          className="text-xs font-medium text-[var(--brand-green)] underline-offset-4 hover:underline dark:text-[var(--brand-gold)]"
        >
          View all programmes &amp; impact
        </Link>
      </div>

      <div
        ref={scrollerRef}
        className="mt-4 flex gap-4 overflow-x-auto scroll-smooth pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {impactHighlights.map((item) => (
          <HighlightCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

/* ========================
   MEMBERSHIP SECTION
   ======================== */

const membershipPillars = [
  {
    title: "Reconnect with lifelong friends",
    body: "Find classmates again, rebuild bonds and relive FGCS memories through reunions, gatherings and everyday check-ins.",
  },
  {
    title: "Access member welfare and support",
    body: "Be part of a community that stands by members in times of need through structured welfare and support schemes.",
  },
  {
    title: "Participate in reunions & legacy projects",
    body: "Join reunions, mentorship initiatives and legacy projects that give back to FGCS and the wider community.",
  },
  {
    title: "Expand your professional network",
    body: "Connect with Eighty5ers across sectors and continents, opening doors for collaboration, careers and business.",
  },
  {
    title: "Leave a mark on FGCS and future generations",
    body: "Support the school through scholarships, school improvement projects and programmes that shape future FGCS students.",
  },
];

export function MembershipSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Scroll-to-reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="membership"
      ref={sectionRef}
      className={`mt-0 rounded-3xl border border-border bg-surface/80 px-4 pt-8 pb-0 sm:px-8 sm:pt-9 sm:pb-0 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
        {/* LEFT – text + accordion */}
        <div className="pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Membership · One Love · Legacy
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Join the Family –{" "}
            <span className="text-[var(--brand-gold)]">“One Love, One Legacy.”</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/80">
            Membership is open to all who were admitted into FGC Sokoto between
            1980–1985 or graduated in 1985. Our doors also extend to friends,
            supporters, and distinguished alumni committed to our shared purpose.
          </p>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/60">
            Benefits of membership
          </p>

          {/* Accordion with benefits */}
          <div className="mt-3 space-y-2">
            {membershipPillars.map((item, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-background/60 shadow-sm transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between px-3 py-2"
                  >
                    <p className="text-xs font-semibold text-foreground">
                      {item.title}
                    </p>
                    <span
                      className={`text-[12px] text-foreground/60 transition-transform duration-200 ${
                        open ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      ›
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden px-3 pr-4 transition-all duration-300 ease-out ${
                      open
                        ? "max-h-24 opacity-100 translate-y-0 pb-3"
                        : "max-h-0 opacity-0 -translate-y-1 pb-0"
                    }`}
                  >
                    <p className="text-[11px] leading-snug text-foreground/70">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-[11px] text-foreground/70 italic">
            Join today — and keep the spirit of “One Love” alive.
          </p>

        </div>

        {/* RIGHT – tall image filling the column, flush with bottom */}
        <div className="relative flex items-end justify-end">
          <div className="w-full max-w-sm sm:max-w-md">
            <img
              src="https://res.cloudinary.com/df2e1ug1q/image/upload/v1765093894/IMG_1558_yrcvdo.jpg"
              alt="Eighty5ers reunion group photo"
              className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px] border border-border object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================
   DEFAULT EXPORT FOR HOMEPAGE
   =========================== */

export default function MembershipAndProgramsShowcase() {
  return (
    <>
      <ProgramsImpactSection />
      <MembershipSection />
    </>
  );
}
