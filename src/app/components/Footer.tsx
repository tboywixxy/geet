import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-900/50 bg-[#02140e] text-emerald-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)]">
        {/* Brand + tagline */}
        <div>
          <p className="text-sm font-semibold text-white">
            Association of Eighty5ers FGCS
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F2C94C]">
            One Love · United by Memory, Driven by Purpose
          </p>
          <p className="mt-3 text-[11px] text-emerald-100/80">
            Official alumni community of the Federal Government College Sokoto
            Class of 1985. We exist to reconnect classmates, support current
            students and give back to the wider community through service,
            welfare and legacy projects.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-semibold text-emerald-50">
            Quick Links
          </p>
          <ul className="mt-3 space-y-1.5 text-[11px] text-emerald-100/80">
            <li>
              <Link
                href="/about"
                className="hover:text-white hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/membership"
                className="hover:text-white hover:underline"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                href="/programs-impact"
                className="hover:text-white hover:underline"
              >
                Programs &amp; Impact
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="hover:text-white hover:underline"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="hover:text-white hover:underline"
              >
                News &amp; Updates
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-white hover:underline"
              >
                Gallery / Archives
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="hover:text-white hover:underline"
              >
                Donate / Support Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies + Transparency + Socials */}
        <div>
          <p className="text-xs font-semibold text-emerald-50">
            Governance &amp; Policies
          </p>
          <ul className="mt-3 space-y-1.5 text-[11px] text-emerald-100/80">
            <li>
              <Link
                href="/privacy"
                className="hover:text-white hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-white hover:underline"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/transparency"
                className="hover:text-white hover:underline"
              >
                Transparency Centre
              </Link>
            </li>
          </ul>

          <p className="mt-4 text-xs font-semibold text-emerald-50">
            Connect with Us
          </p>
          <p className="mt-1 text-[11px] text-emerald-100/80">
            Email:{" "}
            <span className="underline">info@eighty5ers.org</span>
            <br />
            WhatsApp / Mobile: +234-000-000-0000
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-[11px] text-emerald-100/70">
              Social:
            </span>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-900/60 text-emerald-50/80 hover:bg-emerald-700 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="currentColor"
              >
                <path d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H7v4h2v8h4z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-900/60 text-emerald-50/80 hover:bg-emerald-700 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 7.75h4.5V24h-4.5zM8.75 7.75h4.31v2.22h.06c.6-1.13 2.07-2.32 4.26-2.32 4.55 0 5.39 2.99 5.39 6.88V24h-4.5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.96 2-2.96 4.07V24h-4.5z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-900/60 text-emerald-50/80 hover:bg-emerald-700 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-emerald-900/70 bg-[#010c08]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-3 text-[10px] text-emerald-100/70 sm:flex-row sm:items-center">
          <p>
            © {year} Association of Eighty5ers FGCS. All rights reserved.
          </p>
          <p>“One Love” · Alumni of Federal Government College Sokoto, Class of 1985.</p>
        </div>
      </div>
    </footer>
  );
}
