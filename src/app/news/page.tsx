// app/news/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News & Updates · Association of Eighty5ers FGCS",
};

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      {/* HERO */}
      <section className="relative overflow-hidden border border-border bg-black text-slate-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512428232641-8feca4f37421?auto=format&fit=crop&w=1600&q=80"
            alt="News and updates layout"
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
              📰 News &amp; Updates
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Stay informed with{" "}
              <span className="text-[var(--brand-gold)]">One Love stories</span>{" "}
              and updates.
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              All the latest from the Association of Eighty5ers FGCS — spotlights,
              reports, school news and alumni perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS CATEGORIES */}
      <section className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
          News streams
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Alumni Spotlight */}
          <div className="rounded-2xl border border-border/70 bg-background/90 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/65">
              ⭐ Alumni Spotlight
            </p>
            <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-foreground/80">
              Celebrating Eighty5ers making a difference in their professions,
              communities and across the world. From boardrooms to classrooms,
              from public service to entrepreneurship.
            </p>
          </div>

          {/* Project Reports */}
          <div className="rounded-2xl border border-border/70 bg-background/90 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/65">
              📊 Project Reports
            </p>
            <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-foreground/80">
              Transparent updates on our programmes, including scholarships,
              legacy projects, welfare interventions and community outreach —
              with outcomes, photos and impact stories.
            </p>
          </div>

          {/* School News */}
          <div className="rounded-2xl border border-border/70 bg-background/90 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/65">
              🏫 School News
            </p>
            <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-foreground/80">
              Updates from Federal Government College Sokoto: academic
              milestones, infrastructure developments, student achievements and
              important announcements that matter to the Eighty5ers.
            </p>
          </div>

          {/* Editorials */}
          <div className="rounded-2xl border border-border/70 bg-background/90 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/65">
              ✍️ Editorials
            </p>
            <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-foreground/80">
              Insight pieces from alumni professionals — reflections on
              leadership, education, public service, nation-building and the
              FGCS legacy.
            </p>
          </div>
        </div>
      </section>

      {/* CONTRIBUTIONS CALLOUT */}
      <section className="rounded-3xl border border-dashed border-[var(--brand-gold)]/70 bg-[var(--brand-green-soft)]/20 p-6 sm:p-8 space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
          Contribute a story
        </p>
        <p className="text-sm leading-relaxed text-foreground/85">
          Contributions and stories are welcome — alumni achievements, project
          experiences, tributes to teachers, and reflections on “One Love”
          across the years.
        </p>
        <p className="text-[13px] text-foreground/80">
          Send your articles, features or photo essays to{" "}
          <a
            href="mailto:info@eighty5ers.org"
            className="font-semibold text-[var(--brand-gold)] underline-offset-2 hover:underline"
          >
            info@eighty5ers.org
          </a>
          .
        </p>
      </section>
    </main>
  );
}
