// app/contact/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact, Secretariat & Governance · Association of Eighty5ers FGCS",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden border border-border bg-black text-slate-50 rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Office and secretariat setting"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

        <div className="relative flex min-h-[280px] items-center justify-center px-6 py-16 text-center sm:min-h-[340px] lg:min-h-[380px]">
          <div className="max-w-3xl space-y-4">
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.30em] text-[var(--brand-gold)]/90">
              📞 Contact • ⚖️ Governance
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Secretariat &nbsp;{" "}
              <span className="text-[var(--brand-gold)]">
                governance &amp; transparency
              </span>
              .
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-slate-100/85">
              Stay connected to the Association of Eighty5ers FGCS and explore
              how we are structured, governed and held accountable.
            </p>
          </div>
        </div>
      </section>

      {/* SECRETARIAT DETAILS */}
      <section className="rounded-3xl border border-border bg-surface/80 p-7 sm:p-9 space-y-6">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.26em] text-foreground/60">
          The Secretariat Office
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Address & Office hours */}
          <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-foreground/85">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Physical address
              </p>
              <p className="mt-1">
                House 3, 63 Road, A-Close, Gwarimpa, Abuja FCT
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Office hours
              </p>
              <p className="mt-1">Monday – Friday, 9:00 AM – 4:00 PM.</p>
            </div>
          </div>

          {/* Contact channels */}
          <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-foreground/85">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Email
              </p>
              <p className="mt-1">
                <a
                  href="mailto:info@eighty5ers.org"
                  className="font-semibold text-[var(--brand-gold)] underline-offset-2 hover:underline"
                >
                  info@eighty5ers.org
                </a>
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Mobile
              </p>
              <p className="mt-1">+234-123-456-7890</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Social media
              </p>
              <p className="mt-1 text-[14px] sm:text-[15px] text-foreground/80">
                Facebook | Instagram | LinkedIn | YouTube
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE & TRANSPARENCY */}
      <section className="rounded-3xl border border-border bg-surface/80 p-7 sm:p-9 space-y-7">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.26em] text-foreground/60">
            Governance &amp; transparency
          </p>
          <p className="text-[15px] sm:text-base leading-relaxed text-foreground/85">
            The Association operates with the discipline and clarity of a
            serious alumni institution.
          </p>
        </div>

        {/* Transparency Centre */}
        <div className="space-y-3">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Transparency Centre
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-[14px] sm:text-[15px] text-foreground/85">
            <div className="rounded-2xl border border-border/70 bg-background/90 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-foreground/65">
                📘 Annual Reports
              </p>
              <p>Yearly summaries of activities, impact and outlook.</p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/90 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-foreground/65">
                💰 Financial Summaries
              </p>
              <p>
                High-level income and expenditure updates for members and
                partners.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/90 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-foreground/65">
                📝 AGM Minutes &amp; Resolutions
              </p>
              <p>
                Key decisions and resolutions from Annual General Meetings.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/90 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-foreground/65">
                📂 Governance Documents
              </p>
              <p>
                Frameworks, policies and guidelines that shape how the
                Association is run.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/90 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-foreground/65">
                📄 Association Constitution
              </p>
              <p>The foundational document of rights, roles and processes.</p>
              <p className="text-[12px] text-[var(--brand-gold)]">
                (Download PDF – coming soon)
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/90 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-foreground/65">
                🔐 Privacy &amp; Data Protection Policy
              </p>
              <p>
                How we safeguard member information and comply with data
                protection standards.
              </p>
            </div>
          </div>
        </div>

        {/* Governance Ethos */}
        <div className="pt-2 border-t border-border/60 mt-4">
          <p className="text-[13px] sm:text-[14px] text-foreground/80">
            <span className="font-semibold text-[var(--brand-gold)]">
              Integrity. Accountability. Transparency.
            </span>{" "}
            Values we lived as students — and uphold as adults.
          </p>
        </div>
      </section>
    </main>
  );
}
