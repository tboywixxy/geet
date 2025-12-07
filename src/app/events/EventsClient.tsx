"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CALENDAR_SLIDES = [
  {
    title: "Topical Webinars & Conversations",
    description:
      "Tapping into the wealth of experience within the Eighty5ers family to discuss leadership, careers, family, faith and nation-building.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    tag: "Learning & Conversations",
  },
  {
    title: "Mentorship & Career Seminars",
    description:
      "Bridging generations as alumni share guidance with younger FGCS students and fellow classmates seeking new paths and opportunities.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tag: "Guidance & Mentoring",
  },
  {
    title: "Legacy Project Launch & Handover",
    description:
      "Commissioning classroom, lab, ICT and facility upgrades that keep FGCS strong — and visibly linking them to the Class of ’85 story.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
    tag: "Building Legacy",
  },
  {
    title: "General Meeting & Thanksgiving Service",
    description:
      "Strengthening faith, unity and accountability through prayer, worship, gratitude and formal updates on Association business.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    tag: "Faith & Governance",
  },
  {
    title: "Reunion Weekend & Gala Night",
    description:
      "From hugs and hostel stories to music and laughter, our reunions bring Eighty5ers together across cities, countries and continents.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    tag: "One Love in Full Colour",
  },
];

const HIGHLIGHT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1526962563870-4c7b3e697089?auto=format&fit=crop&w=1200&q=80",
    alt: "Reunion and gala night moments",
  },
  {
    src: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=1200&q=80",
    alt: "Alumni sharing ideas at an event",
  },
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    alt: "Webinar and learning session",
  },
];

export default function EventsClient() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeHighlightImage, setActiveHighlightImage] = useState(0);

  // Auto-advance for calendar slider
  useEffect(() => {
    const timer = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % CALENDAR_SLIDES.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  // Auto-advance for highlight images
  useEffect(() => {
    const timer = setInterval(
      () =>
        setActiveHighlightImage(
          (prev) => (prev + 1) % HIGHLIGHT_IMAGES.length
        ),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO – same family as Membership / Programs hero */}
      <section className="relative overflow-hidden border-border bg-black text-slate-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
            alt="Alumni gathering and celebration"
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
              📅 Events &amp; Gatherings
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Reunions, worship,{" "}
              <span className="text-[var(--brand-gold)]">
                learning and laughter
              </span>{" "}
              all year.
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              Our calendar blends serious conversations, moments of faith,
              community projects and joyful reunions that keep the{" "}
              <span className="font-medium">Class of &apos;85</span> connected
              in spirit and in action.
            </p>
          </div>
        </div>
      </section>

      {/* ANNUAL CALENDAR HIGHLIGHTS – SLIDER WITH IMAGE */}
      <section className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Annual calendar highlights
            </p>
            <p className="mt-1 text-xs text-foreground/65">
              A rhythm of learning, worship, service and celebration for
              Eighty5ers at home and abroad.
            </p>
          </div>

          {/* Dots for slider state */}
          <div className="mt-2 flex items-center gap-1.5 sm:mt-0">
            {CALENDAR_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide
                    ? "w-5 bg-[var(--brand-gold)]"
                    : "w-2 bg-foreground/25"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slider body */}
        <div className="relative mt-3 h-[260px] sm:h-[260px] lg:h-[280px] overflow-hidden rounded-2xl border border-border/70 bg-background/95">
          {CALENDAR_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={slide.title}
                className={`absolute inset-0 grid gap-4 p-4 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:p-6 transition-all duration-600 ease-out 
                ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100"
                    : "pointer-events-none opacity-0 translate-y-3 scale-[0.98]"
                }`}
              >
                {/* Text side */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="inline-flex items-center rounded-full bg-[var(--brand-green-soft)]/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                      {slide.tag}
                    </p>
                    <h2 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-foreground">
                      {slide.title}
                    </h2>
                    <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-foreground/80">
                      {slide.description}
                    </p>
                  </div>
                  <p className="mt-3 text-[11px] text-foreground/60">
                    Each highlight is an invitation to show up — on-site or
                    online — and keep the “One Love” story alive.
                  </p>
                </div>

                {/* Image side */}
                <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/80">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isActive ? "scale-100" : "scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PAST HIGHLIGHTS – AUTO IMAGE SWAP + BUTTON */}
      <section className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
          Past highlights
        </p>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Text + button */}
          <div className="flex flex-col justify-between space-y-3 text-sm leading-relaxed text-foreground/80">
            <div className="space-y-2">
              <p>
                Reunion weekends, thanksgiving services, project handovers and
                outreach visits are captured in our{" "}
                <span className="font-medium">
                  Gallery / Archives collection
                </span>
                .
              </p>
              <p className="text-[12px] text-foreground/70">
                These stories remind us why we keep gathering: to celebrate
                progress, honour our teachers, comfort one another and pass the
                “One Love” spirit to the next generation.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-gold)] px-4 py-2 text-[11px] font-semibold text-[var(--brand-deep-green)] shadow-sm shadow-black/30 transition hover:bg-[var(--brand-gold-soft)]"
              >
                <span>View Gallery / Archives</span>
                <span className="text-[10px]">↗</span>
              </Link>
            </div>
          </div>

          {/* Auto-rotating image card */}
          <div className="relative h-[190px] overflow-hidden rounded-2xl border border-border/70 bg-background/80 sm:h-[220px]">
            {HIGHLIGHT_IMAGES.map((img, idx) => {
              const isActive = idx === activeHighlightImage;
              return (
                <div
                  key={img.src}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "pointer-events-none opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
              );
            })}

            <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-100/90">
              <p className="font-semibold">Reunion &amp; project stories</p>
              <p className="text-[10px] text-slate-100/80">
                Visit our Gallery / Archives page to relive key moments from
                Eighty5ers events across the years.
              </p>
            </div>

            {/* Tiny dots for image rotation */}
            <div className="absolute top-3 right-3 flex gap-1.5">
              {HIGHLIGHT_IMAGES.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    idx === activeHighlightImage
                      ? "bg-[var(--brand-gold)]"
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
