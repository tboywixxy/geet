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
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
            alt="Hands joined together in support"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

        <div className="relative flex min-h-[260px] items-center justify-center px-6 py-16 text-center sm:min-h-[320px] lg:min-h-[360px]">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
              💳 Donate / Support Us
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Invest in legacy,{" "}
              <span className="text-[var(--brand-gold)]">give with love.</span>
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
              Every contribution strengthens our scholarships, welfare, projects
              and the One Love story at Federal Government College Sokoto.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 space-y-4">
        <p className="text-sm leading-relaxed text-foreground/85">
          As an Incorporated Trusteeship, the Association of Eighty5ers FGCS is
          a non-profit body that channels all resources into charitable,
          educational and welfare causes. We rely on the generosity of our
          members and partners to sustain our programmes and development
          initiatives.
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
                  1. One-Time Donations
                </span>{" "}
                <span className="text-foreground/80">
                  via Paystack / Flutterwave — ideal for specific campaigns or
                  general support.
                </span>
              </li>
              <li>
                <span className="font-semibold text-[var(--brand-gold)]">
                  2. Recurring Monthly or Annual Support
                </span>{" "}
                <span className="text-foreground/80">
                  commit to regular giving and help us plan sustainably for
                  scholarships, welfare and projects.
                </span>
              </li>
              <li>
                <span className="font-semibold text-[var(--brand-gold)]">
                  3. Corporate or Project Sponsorship
                </span>{" "}
                <span className="text-foreground/80">
                  partner with the Association on specific initiatives — from
                  infrastructure to capacity-building programmes.
                </span>
              </li>
              <li>
                <span className="font-semibold text-[var(--brand-gold)]">
                  4. In-Kind Donations
                </span>{" "}
                <span className="text-foreground/80">
                  equipment, books, materials, scholarships, or professional
                  expertise that support FGCS and our members.
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
                  First City Monument Bank (FCMB)
                </p>
                <p>Current Account Number (NGN): 0123456789</p>
                <p>Domiciliary Account (USD): 1234567890</p>
                <p>Domiciliary Account (Euro): 2345678901</p>
                <p>Domiciliary Account (GBP): 3456789012</p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/90 p-4 space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                  Association of Eighty5ers FGCS
                </p>
                <p className="text-xs font-semibold text-foreground/80">
                  Eighty5ers Microfinance Bank
                </p>
                <p>Current Account Number (NGN): 4567890123</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[12px] leading-relaxed text-foreground/75">
          Every contribution builds and strengthens the{" "}
          <span className="font-semibold text-[var(--brand-gold)]">
            “One Love” legacy
          </span>{" "}
          — and every donor is acknowledged in our annual reports.
        </p>
      </section>
    </main>
  );
}
