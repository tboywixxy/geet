// app/donate/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Donate / Support Us · Association of Eighty5ers FGCS",
};

export default function DonatePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      {/* HERO */}
      <section className="relative overflow-hidden border border-border bg-black text-slate-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
            alt="Hands joined together in support"
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
              💳 Donate / Support Us
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Invest in Legacy.{" "}
              <span className="text-[var(--brand-gold)]">Give with Love.</span>
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              The Eighty5ers operate as a non-profit Incorporated Trusteeship —{" "}
              dedicated to supporting education, welfare, and community
              development. Your donations fuel programmes that strengthen FGCS,
              uplift communities, and support our members.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-4">
        <p className="text-sm leading-relaxed text-foreground/85">
          The Eighty5ers operate as a non-profit Incorporated Trusteeship —
          dedicated to supporting education, welfare, and community development.
          Your donations fuel programmes that strengthen FGCS, uplift
          communities, and support our members.
        </p>
      </section>

      {/* WAYS TO GIVE + BANK DETAILS */}
      <section className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)]">
          {/* Ways to Give */}
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Ways to give
            </p>
            <ol className="space-y-3 text-sm leading-relaxed text-foreground/85">
              <li>
                <span className="font-semibold text-[var(--brand-gold)]">
                  1. One-Time Donations (Paystack / Flutterwave)
                </span>
              </li>
              <li>
                <span className="font-semibold text-[var(--brand-gold)]">
                  2. Recurring Monthly or Annual Support
                </span>
              </li>
              <li>
                <span className="font-semibold text-[var(--brand-gold)]">
                  3. Corporate Sponsorship
                </span>
              </li>
              <li>
                <span className="font-semibold text-[var(--brand-gold)]">
                  4. In-Kind Donations — books, equipment, materials, medical
                  support, or scholarships.
                </span>
              </li>
            </ol>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Bank account details
            </p>

            <div className="space-y-3 text-[13px] sm:text-sm text-foreground/85">
              <div className="rounded-2xl border border-border/70 bg-background/90 p-4 space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                  Association of Eighty5ers FGCS
                </p>
                <p className="text-xs font-semibold text-foreground/80">
                  FCMB
                </p>
                <p>FCMB – 0123456789 (NGN)</p>
                <p>USD – 1234567890</p>
                <p>EUR – 2345678901</p>
                <p>GBP – 3456789012</p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/90 p-4 space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                  Eighty5ers Microfinance Bank
                </p>
                <p>NGN – 4567890123</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[12px] leading-relaxed text-foreground/75">
          Every contribution strengthens the{" "}
          <span className="font-semibold text-[var(--brand-gold)]">
            “One Love” legacy
          </span>{" "}
          and transforms the lives of students, members, and communities.
        </p>
      </section>
    </main>
  );
}
