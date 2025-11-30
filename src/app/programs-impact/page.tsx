// app/programs-impact/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs & Impact · Association of Eighty5ers FGCS",
};

export default function ProgramsImpactPage() {
  return (
    <main className="mx-auto px-4 space-y-4">
      {/* HERO – same style as Membership hero */}
      <section className="relative overflow-hidden  border-border bg-black text-slate-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=1600&q=80"
            alt="Students studying together"
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
              💼 Programs &amp; Impact
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Turning{" "}
              <span className="text-[var(--brand-gold)]">
                memory into action
              </span>{" "}
              for FGCS and beyond.
            </h1>
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-100/85">
              Our projects reflect our shared passion for education, development
              and community upliftment.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-5">
        <p className="text-sm sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
          Key programmes
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Scholarship & Mentorship */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/65">
              🎓 FGCS Scholarship &amp; Mentorship Program
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              We sponsor brilliant and needy students at and to Federal
              Government College Sokoto, pairing them with alumni mentors from
              the Class of 1985 who provide career and personal guidance.
            </p>
          </div>

          {/* Legacy Infrastructure Projects */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/65">
              🏫 Legacy Infrastructure Projects
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              From classroom upgrades, science lab, kitchen and dining hall
              renovations, to ICT initiatives, we invest in tangible
              improvements that enrich learning conditions for current FGCS
              students.
            </p>
          </div>

          {/* Welfare & Support */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/65">
              💖 Welfare &amp; Support Scheme
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              We maintain a welfare fund to support members in times of need —
              reflecting the “One Love” principle that has bound us since 1985.
            </p>
          </div>

          {/* Community Service */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/65">
              🌍 Community Service &amp; Philanthropy
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Beyond the school, we organise outreach programs, health awareness
              campaigns, and charitable interventions within the legacy Sokoto
              State community (Sokoto, Kebbi, and Zamfara States) and beyond.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
