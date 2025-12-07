import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About · Association of Eighty5ers FGCS",
};

const coreValues = [
  {
    id: "unity",
    title: "Unity",
    desc: "Because together, we stand stronger.",
    icon: "🤝",
  },
  {
    id: "integrity",
    title: "Integrity",
    desc: "Doing what is right, consistently.",
    icon: "⚖️",
  },
  {
    id: "service",
    title: "Service",
    desc: "Turning gratitude into action.",
    icon: "💚",
  },
  {
    id: "accountability",
    title: "Accountability",
    desc: "Transparency as our cornerstone.",
    icon: "📊",
  },
  {
    id: "excellence",
    title: "Excellence",
    desc: "Reflecting the FGCS tradition of high standards.",
    icon: "⭐",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-border bg-black text-slate-50">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
            alt="Reunion of classmates smiling and connecting"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

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
              The united body of the{" "}
              <span className="font-medium">
                Federal Government College Sokoto Class of 1985
              </span>{" "}
              — a family of brothers and sisters shaped by the desert winds of
              Sokoto and the values instilled within the walls of FGCS.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE + LEGAL STATUS (TOP HALF) */}
      <section className="mt-6 grid gap-8 rounded-3xl border border-border bg-surface/80 p-6 sm:mt-8 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] sm:p-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Who we are
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              A lifelong family united by the FGCS “One Love” spirit.
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              The Association of Eighty5ers FGCS is the united body of the 1985
              graduating class of Federal Government College Sokoto — a family
              of brothers and sisters shaped by the desert winds of Sokoto and
              the values instilled within the walls of FGCS.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              We are more than old classmates. We are a lifelong network —
              matured by experience, strengthened by brotherhood, and empowered
              by service. Incorporated as a legal Trusteeship, our Association
              blends nostalgia with structure, memory with mission, and
              fellowship with impact.
            </p>
          </div>
        </div>

        <div className="space-y-5">
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
                From hostel corridors to boardrooms and ministries, the
                Eighty5ers remain united in friendship and service.
              </p>
            </div>
          </div>

          {/* LEGAL STATUS */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 text-sm text-foreground/85 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Legal status
            </p>
            <p className="mt-2 leading-relaxed">
              The Association is registered as the{" "}
              <span className="font-semibold">
                Association of Eighty5ers FGCS Incorporated Trusteeship
              </span>{" "}
              under Part F of the Companies and Allied Matters Act (CAMA) 2020.
            </p>
            <p className="mt-2 leading-relaxed">
              <span className="font-medium">CAC Reg. No.:</span>{" "}
              <span className="font-medium">[Insert Number]</span>
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-foreground/70">
              This status reflects our commitment to good governance,
              accountability and continuity, ensuring that the “One Love” spirit
              is backed by clear structures and responsible stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="mt-6 relative overflow-hidden rounded-3xl border border-border bg-black text-slate-50 sm:mt-8">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Abstract view symbolising vision and mission"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
              Vision &amp; mission
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              The heart of why the Class of &apos;85 exists as an association.
            </h2>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 mb-2">
            <div className="rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                Our Vision
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100/90">
                To be a model alumni class — one that exemplifies unity,
                service, and impact across generations of Federal Government
                College Sokoto and beyond.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                Our Mission
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100/90">
                To promote lifelong friendship, support educational advancement,
                and empower our members and communities through coordinated
                service and philanthropy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mt-6 rounded-3xl border border-border bg-surface/80 px-4 py-6 sm:mt-8 sm:px-6 sm:py-7">
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
