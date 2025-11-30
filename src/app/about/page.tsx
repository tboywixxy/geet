import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About · Association of Eighty5ers FGCS",
};

const coreValues = [
  {
    id: "unity",
    title: "Unity",
    desc: "Standing together in purpose and pride.",
    icon: "🤝",
  },
  {
    id: "integrity",
    title: "Integrity",
    desc: "Doing what’s right, always.",
    icon: "⚖️",
  },
  {
    id: "service",
    title: "Service",
    desc: "Giving back with gratitude.",
    icon: "💚",
  },
  {
    id: "accountability",
    title: "Accountability",
    desc: "Ensuring transparency in all actions.",
    icon: "📊",
  },
  {
    id: "excellence",
    title: "Excellence",
    desc: "Honouring the FGCS tradition of achievement.",
    icon: "⭐",
  },
];

export default function AboutPage() {
  return (
    // 🔥 No vertical gaps between sections
    <main className="">
      {/* HERO – IMAGE + DARK OVERLAY */}
      <section className="relative overflow-hidden border-border bg-black text-slate-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
            alt="Reunion of classmates smiling and connecting"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

        {/* Centered hero content */}
        <div className="relative flex min-h-[260px] items-center justify-center px-6 py-16 text-center sm:min-h-[320px] lg:min-h-[360px]">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
              Association of Eighty5ers FGCS
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              One{" "}
              <span className="text-[var(--brand-gold)]">
                Love. Memory. Impact.
              </span>{" "}
              beyond the classroom.
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              The official community of the{" "}
              <span className="font-medium">
                Federal Government College Sokoto Class of 1985
              </span>{" "}
              – a family of classmates turning nostalgia into service,
              solidarity and lasting legacy.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE + IMAGE + LEGAL STATUS */}
      <section className="grid gap-8 rounded-3xl border border-border bg-surface/80 p-6 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] sm:p-10">
        {/* LEFT – Who we are */}
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Who we are
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              A lifelong family united by the FGCS “One Love” spirit.
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              The Association of Eighty5ers FGCS brings together the 1985
              graduating class of Federal Government College Sokoto. We are
              more than old classmates — we are a lifelong family united by the
              “One Love” spirit that defined our school days and continues to
              inspire our service today.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              Incorporated as a Trusteeship under Nigerian law, our Association
              operates transparently, collaboratively, and in harmony with the
              larger FGC Sokoto Alumni body. We function with the structure and
              governance of a full alumni institution, while focusing on the
              shared legacy of our Class of 1985.
            </p>
          </div>
        </div>

        {/* RIGHT – supporting image + legal status */}
        <div className="space-y-5">
          {/* Supporting image */}
          <div className="relative h-[220px] overflow-hidden rounded-2xl border border-border bg-background/70 sm:h-[260px] lg:h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Eighty5ers reconnecting and planning impact"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-100/90">
              <p className="font-semibold">
                Class of &apos;85 – still standing together.
              </p>
              <p className="text-[10px] text-slate-100/80">
                From hostel corridors to boardrooms and ministries, the Eighty5ers
                remain united in friendship and service.
              </p>
            </div>
          </div>

          {/* Legal status card */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 text-sm text-foreground/85 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Our legal status
            </p>
            <p className="mt-2 leading-relaxed">
              We are registered as the{" "}
              <span className="font-semibold">
                Association of Eighty5ers FGCS
              </span>
              , under Part F of the Companies and Allied Matters Act (CAMA) 2020
              as an Incorporated Trusteeship, CAC Registration No.{" "}
              <span className="font-medium">[RC ######]</span>.
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-foreground/70">
              This status reflects our commitment to good governance,
              accountability and continuity, ensuring that the &quot;One
              Love&quot; spirit is backed by clear structures and responsible
              stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION – BG IMAGE + BLURRY OVERLAY, LEFT/RIGHT */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-black text-slate-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Abstract view symbolising vision and mission"
            fill
            className="object-cover"
          />
        </div>

        {/* Blurry dark overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
              Vision &amp; mission
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              Where the Class of &apos;85 is pointing its energy.
            </h2>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {/* Vision – left */}
            <div className="rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                Our Vision
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100/90">
                To be a model alumni class that exemplifies unity, service, and
                impact across generations of Federal Government College Sokoto
                and by extension schools in Nigeria and Africa.
              </p>
            </div>

            {/* Mission – right */}
            <div className="rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                Our Mission
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100/90">
                To promote lifelong friendship, support educational advancement
                at FGC Sokoto, and empower members and communities through
                coordinated service and philanthropy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES – SLIDER-STYLE, NO IMAGES, WITH ICONS */}
      <section className="rounded-3xl border border-border bg-surface/80 px-4 py-6 sm:px-6 sm:py-7">
        {/* Centered heading */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Our core values
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            What still guides the Eighty5ers today.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[11px] text-foreground/65">
            The same principles that shaped us as students now anchor how we
            serve one another, our school and our communities.
          </p>
        </div>

        <div className="mt-4 flex gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="flex-1 min-w-[220px] max-w-[260px] rounded-2xl border border-border bg-background/80 p-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-base">
                  <span aria-hidden="true">{value.icon}</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">
                  {value.title}
                </p>
              </div>
              <p className="mt-2 text-[11px] leading-snug text-foreground/75">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
