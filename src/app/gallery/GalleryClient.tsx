"use client";

import Image from "next/image";
import React, { useEffect, useCallback } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

// 🔹 Images (swap with your own later if you like)
const GALLERY_IMAGES: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=1200&q=80",
    alt: "Alumni sharing a laugh during reunion",
    label: "Reunion laughter in the courtyard",
  },
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    alt: "Panel session with alumni speakers",
    label: "Topical webinar with alumni speakers",
  },
  {
    src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
    alt: "Hands joined together in unity",
    label: "One Love – hands joined in unity",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Evening gala celebration",
    label: "Gala night – One Love in full colour",
  },
  {
    src: "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?auto=format&fit=crop&w=1200&q=80",
    alt: "Old classroom hallway",
    label: "FGCS hallways – memory lane",
  },
  {
    src: "https://images.unsplash.com/photo-1526962563870-4c7b3e697089?auto=format&fit=crop&w=1200&q=80",
    alt: "Group photo outside school building",
    label: "Class group photo after project handover",
  },
  {
    src: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=1200&q=80",
    alt: "Alumni networking at an event",
    label: "Networking moments between alumni",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Roundtable mentorship session",
    label: "Mentorship circle with students",
  },
  {
    src: "https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=1200&q=80",
    alt: "Students working together at a table",
    label: "FGCS students during study support",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Group of young people smiling",
    label: "Future leaders – mentees and mentors",
  },
  {
    src: "https://images.unsplash.com/photo-1524312153609-85b6c9c33180?auto=format&fit=crop&w=1200&q=80",
    alt: "Landscape of a sports field",
    label: "Sports field memories from FGCS days",
  },
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    alt: "Books and study materials",
    label: "Scholarship & book donations",
  },
  {
    src: "https://images.unsplash.com/photo-1517586979033-65db7c4737f8?auto=format&fit=crop&w=1200&q=80",
    alt: "Band playing at an event",
    label: "Music and praise during Thanksgiving",
  },
  {
    src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80",
    alt: "Buffet table at event",
    label: "Shared meals at reunion weekends",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunset over city",
    label: "From Sokoto to the world – our spread",
  },
  {
    src: "https://images.unsplash.com/photo-1526403228366-585c1a7851c5?auto=format&fit=crop&w=1200&q=80",
    alt: "Microphone and podium",
    label: "Public lectures and dialogue series",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
    alt: "People high-fiving at event",
    label: "Celebrating another project milestone",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Team working around laptops",
    label: "Committee planning session",
  },
  {
    src: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?auto=format&fit=crop&w=1200&q=80",
    alt: "Trees and campus walkway",
    label: "Walkway memories from school days",
  },
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
    alt: "Hands raised in worship",
    label: "Thanksgiving service worship moments",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    alt: "Speaker with projector behind",
    label: "Strategy briefing for new projects",
  },
  {
    src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
    alt: "City aerial view at night",
    label: "Eighty5ers chapters across cities",
  },
  {
    src: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=1200&q=80",
    alt: "Pathway leading forward",
    label: "From yesterday’s classrooms to today’s milestones",
  },
];

// 🔹 Unique-ish aspect ratios for “random” tall/short look
const SIZE_CLASSES: string[] = [
  "aspect-[4/5]",   // tall
  "aspect-[16/9]",  // wide
  "aspect-[3/4]",   // tall
  "aspect-[5/4]",   // almost square
  "aspect-[2/3]",   // tall
  "aspect-[3/2]",   // wide
  "aspect-[9/16]",  // very tall
  "aspect-[7/5]",
  "aspect-[5/3]",
  "aspect-[11/9]",
  "aspect-[10/7]",
  "aspect-[4/3]",
  "aspect-[13/10]",
  "aspect-[21/10]", // ultra wide
  "aspect-[6/5]",
  "aspect-[9/7]",
  "aspect-[8/5]",
  "aspect-[5/2]",
  "aspect-[12/7]",
  "aspect-[7/3]",
  "aspect-[11/5]",
  "aspect-[32/9]",  // crazy wide
  "aspect-[19/10]",
  "aspect-[9/5]",
];

const getSizeClass = (index: number) =>
  SIZE_CLASSES[index] ?? SIZE_CLASSES[index % SIZE_CLASSES.length];

export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % GALLERY_IMAGES.length
    );
  }, [lightboxIndex]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null
        ? prev
        : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, [lightboxIndex]);

  // Close / navigate with keyboard
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeLightbox, showNext, showPrev]);

  const currentItem =
    lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-black text-slate-50">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
            alt="Photo albums and memories"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

        <div className="relative flex min-h-[260px] items-center justify-center px-6 py-16 text-center sm:min-h-[320px] lg:min-h-[360px]">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
              🖼 Gallery / Archives
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Relive the{" "}
              <span className="text-[var(--brand-gold)]">
                laughter, friendships
              </span>{" "}
              and milestones.
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              From reunions and service days to quiet campus memories — this is
              the visual story of the Association of Eighty5ers FGCS.
            </p>
          </div>
        </div>
      </section>

      {/* MASONRY GRID – NO GAPS, RANDOM HEIGHTS */}
      <section className="rounded-3xl border border-border bg-surface/90 p-0 overflow-hidden">
        <div className="columns-2 sm:columns-3 lg:columns-4 [column-gap:0]">
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              className="relative mb-0 w-full overflow-hidden break-inside-avoid p-0"
              onClick={() => setLightboxIndex(idx)}
            >
              <div className={`relative w-full ${getSizeClass(idx)}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX VIEWER */}
      {isOpen && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[12px] text-slate-100 hover:bg-black"
          >
            ✕ Close
          </button>

          <div className="flex max-h-full w-full max-w-4xl flex-col items-center gap-3">
            {/* Image + arrows */}
            <div className="relative w-full">
              {/* Prev */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-[18px] text-slate-100 hover:bg-black"
              >
                ‹
              </button>

              {/* Image container */}
              <div className="relative mx-10 aspect-[16/10] sm:aspect-[16/9]">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={showNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-[18px] text-slate-100 hover:bg-black"
              >
                ›
              </button>
            </div>

            {/* Caption */}
            <div className="max-w-3xl text-center text-xs sm:text-sm text-slate-100/90">
              <p className="font-semibold">{currentItem.label}</p>
              <p className="mt-1 text-[11px] text-slate-200/80">
                {currentItem.alt}
              </p>
              <p className="mt-1 text-[10px] text-slate-400">
                Image {lightboxIndex! + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
