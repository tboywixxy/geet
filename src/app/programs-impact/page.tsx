// app/programs-impact/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs & Impact · Association of Eighty5ers FGCS",
};

export default function ProgramsImpactPage() {
  return (
    <main className="mx-auto px-4 space-y-4">
      {/* HERO – aligned with Membership hero style */}
      <section className="relative overflow-hidden border-border bg-black text-slate-50">
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
              Transforming{" "}
              <span className="text-[var(--brand-gold)]">“One Love”</span> into
              lasting impact.
            </h1>
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-100/85">
              Our initiatives reflect who we are: a class committed to{" "}
              <span className="font-medium">
                education, community and compassionate support
              </span>{" "}
              — for FGCS and the world beyond its gates.
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
              Supporting brilliant but financially challenged students at
              Federal Government College Sokoto, while pairing them with alumni
              mentors from the Eighty5ers family — shaping both academic
              success and personal growth.
            </p>
          </div>

          {/* Legacy Infrastructure Projects */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/65">
              🏫 Legacy Infrastructure Projects
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              We invest in long-term improvements that upgrade the physical and
              learning environment of FGCS.
            </p>
            <p className="mt-2 text-[12px] font-semibold text-foreground/70">
              Focus areas include:
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-[12px] text-foreground/75">
              <li>Classroom renovation</li>
              <li>Laboratory modernization</li>
              <li>ICT upgrades</li>
              <li>Dining hall &amp; kitchen enhancements</li>
            </ul>
            <p className="mt-2 text-[12px] text-foreground/70">
              Each project strengthens the learning environment for current FGCS
              students and preserves the legacy we inherited.
            </p>
          </div>

          {/* Welfare & Support */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/65">
              💖 Welfare &amp; Support Scheme
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              The heart of our Association. The Welfare &amp; Support Scheme
              provides rapid assistance in emergencies, health crises,
              bereavements and other moments of need — ensuring{" "}
              <span className="font-medium">
                no Eighty5er ever stands alone.
              </span>
            </p>
          </div>

          {/* Community Service & Philanthropy */}
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/65">
              🌍 Community Service &amp; Philanthropy
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Our “One Love” culture extends beyond school walls into the wider
              community, translating compassion into tangible action through:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[12px] text-foreground/75">
              <li>Health outreach</li>
              <li>Educational support</li>
              <li>Charity events</li>
              <li>Youth mentorship</li>
              <li>Social intervention projects</li>
            </ul>
            <p className="mt-2 text-[12px] text-foreground/70">
              Together, we transform compassion into impact — for FGCS, for
              Sokoto and for the communities we touch around the world.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
