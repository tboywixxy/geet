"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type NavLink = {
  href: string;
  label: string;
};

const primaryLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/membership", label: "Membership" },
  { href: "/programs-impact", label: "Programs & Impact" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate / Support Us" },
];

const moreLinks: NavLink[] = [
  { href: "/news", label: "News & Updates" },
  { href: "/gallery", label: "Gallery / Archives" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sliding indicator position
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  // Only allow animation after page has fully loaded
  const [canAnimate, setCanAnimate] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Compute indicator under active link
  const updateIndicator = () => {
    const activeIndex = primaryLinks.findIndex((link) => isActive(link.href));
    if (activeIndex === -1) {
      setIndicator(null);
      return;
    }

    const linkEl = linkRefs.current[activeIndex];
    const navEl = navRef.current;
    if (!linkEl || !navEl) return;

    const navRect = navEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    });
  };

  // Position indicator on first layout + whenever route changes
  useLayoutEffect(() => {
    updateIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Only allow animation after the page has fully loaded
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.readyState === "complete") {
      setCanAnimate(true);
      return;
    }

    const handleLoad = () => {
      setCanAnimate(true);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close More dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!moreOpen) return;
      if (
        moreRef.current &&
        !moreRef.current.contains(event.target as Node)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-emerald-900/60 bg-gradient-to-r from-[var(--brand-deep-green-left)] via-[var(--brand-deep-green-mid)] to-[var(--brand-deep-green-right)] text-emerald-50 backdrop-blur transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
      >
        {/* Main bar */}
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
          {/* Brand block */}
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full px-1 py-1 transition hover:bg-emerald-50/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-green)] text-xs font-semibold text-white shadow-md shadow-emerald-600/60 ring-2 ring-emerald-300/60">
              85
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-white">
                Association of Eighty5ers FGCS
              </p>
              <p className="text-[11px] font-medium text-[var(--brand-gold)]">
                “One Love” Alumni Community
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-4 md:flex">
            <nav
              ref={navRef}
              className="relative flex items-center gap-2 text-[11px] font-medium"
            >
              {primaryLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => (linkRefs.current[index] = el)}
                  className={`relative rounded-full px-3 py-1.5 transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-emerald-50/10 text-white"
                      : "text-emerald-50/85 hover:bg-emerald-50/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Sliding indicator – only animates after page 'load' */}
              {indicator && (
                <span
                  className={`pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-[var(--brand-gold)] ${
                    canAnimate ? "transition-all duration-300 ease-out" : ""
                  }`}
                  style={{
                    left: indicator.left,
                    width: indicator.width,
                  }}
                />
              )}

              {/* More dropdown */}
              <div ref={moreRef} className="relative ml-1">
                <button
                  type="button"
                  onClick={() => setMoreOpen((v) => !v)}
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-50/5 px-3 py-1.5 text-[11px] font-medium text-emerald-50/85 ring-1 ring-emerald-400/40 transition hover:bg-emerald-50/10 hover:text-white"
                >
                  More
                  <span
                    className={`text-[10px] transition-transform duration-200 ${
                      moreOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {moreOpen && (
                  <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-emerald-900/80 bg-[var(--brand-green-soft)] shadow-xl shadow-black/50 backdrop-blur-sm">
                    <div className="border-b border-emerald-900/70 bg-emerald-50/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                      Alumni Links
                    </div>
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className={`block px-3 py-2 text-[11px] transition ${
                          isActive(link.href)
                            ? "bg-emerald-600/35 text-emerald-50"
                            : "text-emerald-100/85 hover:bg-emerald-50/10 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Donate CTA */}
            <Link
              href="/donate"
              className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-gold)] px-3.5 py-1.5 text-[11px] font-semibold text-[var(--brand-deep-green)] shadow-sm shadow-black/40 transition hover:bg-[var(--brand-gold-soft)]"
            >
              <span>Give Now</span>
              <span className="text-[10px]">❤️</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center gap-1 rounded-full bg-emerald-50/5 px-3 py-1.5 text-[11px] font-medium text-emerald-50 ring-1 ring-emerald-400/40 transition hover:bg-emerald-50/10 md:hidden"
          >
            <span>{mobileOpen ? "Close" : "Menu"}</span>
            <span className="text-[10px]">☰</span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[80%] transform border-l border-emerald-900/60 bg-[var(--brand-green-soft)] shadow-2xl shadow-black/60 transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-emerald-900/70 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-green)] text-[11px] font-semibold text-white">
                85
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold text-emerald-50">
                  Eighty5ers FGCS
                </p>
                <p className="text-[10px] text-[var(--brand-gold)]">“One Love”</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="text-[11px] text-emerald-100/80 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Drawer content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 text-[11px] text-emerald-50">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
              Main Menu
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-full px-3 py-1.5 transition ${
                    isActive(link.href)
                      ? "bg-emerald-600/85 text-white"
                      : "bg-emerald-50/5 text-emerald-50/90 hover:bg-emerald-50/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
              More
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-full px-3 py-1.5 transition ${
                    isActive(link.href)
                      ? "bg-emerald-600/85 text-white"
                      : "bg-emerald-50/5 text-emerald-50/90 hover:bg-emerald-50/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer footer CTA */}
          <div className="border-t border-emerald-900/70 px-4 py-3">
            <Link
              href="/donate"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-1 rounded-full bg-[var(--brand-gold)] px-4 py-2 text-[11px] font-semibold text-[var(--brand-deep-green)] shadow-sm shadow-black/40 transition hover:bg-[var(--brand-gold-soft)]"
            >
              <span>Give Now</span>
              <span className="text-[10px]">❤️</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
