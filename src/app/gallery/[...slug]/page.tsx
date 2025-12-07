// src/app/gallery/[...slug]/page.tsx
"use client";

import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  findNodeByPath,
  type AlbumNode,
  type GalleryItem,
} from "../albumsData";

export default function GalleryNodePage() {
  const params = useParams();
  const raw = params?.slug as string | string[] | undefined;
  const slugs = Array.isArray(raw) ? raw : raw ? [raw] : [];

  const { node, ancestors } = findNodeByPath(slugs);

  if (!node) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 text-center space-y-4">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand-gold)]/80">
          Gallery
        </p>
        <h1 className="text-lg font-semibold">Album not found</h1>
        <p className="text-sm text-slate-500">
          The album you’re looking for does not exist or the link is broken.
        </p>
        <div className="mt-4">
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-xs hover:bg-surface/80"
          >
            ‹ Back to all albums
          </Link>
        </div>
      </main>
    );
  }

  const isFolder = node.children && node.children.length > 0;
  const isAlbum = node.images && node.images.length > 0;

  // breadcrumb
  const breadcrumbSegments = [
    { label: "Albums", href: "/gallery" },
    ...slugs.map((slugPart, idx) => {
      const label =
        idx < ancestors.length ? ancestors[idx].title : node.title;
      const href = "/gallery/" + slugs.slice(0, idx + 1).join("/");
      return { label, href };
    }),
  ];

  // lightbox state (album only)
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showNext = useCallback(() => {
    if (!isAlbum || lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % node.images!.length
    );
  }, [isAlbum, lightboxIndex, node.images]);

  const showPrev = useCallback(() => {
    if (!isAlbum || lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null
        ? prev
        : (prev - 1 + node.images!.length) % node.images!.length
    );
  }, [isAlbum, lightboxIndex, node.images]);

  useEffect(() => {
    if (!isOpen || !isAlbum) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, isAlbum, closeLightbox, showNext, showPrev]);

  const currentItem: GalleryItem | null =
    isAlbum && lightboxIndex !== null ? node.images![lightboxIndex] : null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      {/* Back + breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/gallery"
          className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] text-slate-600 hover:bg-surface/80"
        >
          <span className="mr-1 text-[14px]">‹</span>
          Back to albums
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-slate-500">
          {breadcrumbSegments.map((seg, idx) => (
            <span key={seg.href} className="flex items-center gap-1">
              {idx > 0 && <span>/</span>}
              <Link href={seg.href} className="hover:text-[var(--brand-gold)]">
                {seg.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-black text-slate-50">
        <div className="absolute inset-0">
          <Image
            src={node.cover.src}
            alt={node.cover.alt}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

        <div className="relative flex min-h-[220px] items-center justify-center px-6 py-12 text-center sm:min-h-[280px] lg:min-h-[320px]">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              {node.title}
            </h1>
            {node.description && (
              <p className="text-xs sm:text-sm leading-relaxed text-slate-100/85">
                {node.description}
              </p>
            )}
            {isAlbum && (
              <p className="text-[11px] text-slate-300/80">
                {node.images!.length} item
                {node.images!.length === 1 ? "" : "s"} in this album
              </p>
            )}
            {isFolder && !isAlbum && (
              <p className="text-[11px] text-slate-300/80">
                This collection contains {node.children!.length} sub-album
                {node.children!.length === 1 ? "" : "s"}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FOLDER VIEW: sub-albums grid */}
      {isFolder && !isAlbum && (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {node.children!.map((child) => {
            const childHref = "/gallery/" + [...slugs, child.slug].join("/");
            const isChildFolder =
              child.children && child.children.length > 0;
            return (
              <Link
                key={child.slug}
                href={childHref}
                className="group block overflow-hidden rounded-3xl border border-border bg-surface/90 hover:border-[var(--brand-gold)]/70 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={child.cover.src}
                    alt={child.cover.alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="inline-flex items-center rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-slate-100">
                      {isChildFolder ? "Album collection" : "Photo album"}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 space-y-1">
                  <h2 className="text-sm sm:text-base font-semibold tracking-tight">
                    {child.title}
                  </h2>
                  {child.description && (
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {child.description}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </section>
      )}

      {/* ALBUM VIEW: grid + lightbox */}
      {isAlbum && (
        <>
          {/* GRID */}
          <section className="rounded-3xl border border-border bg-surface/90 p-0 overflow-hidden">
            {/* Small helper text above the grid */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-slate-500">
                Click any photo or video to view
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1px] sm:gap-2">
              {node.images!.map((img, idx) => {
                const isVideo = img.type === "video";

                return (
                  <button
                    key={img.src + idx}
                    type="button"
                    className="group relative w-full overflow-hidden cursor-pointer"
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      {isVideo ? (
                        <>
                          <video
                            src={img.src}
                            className="h-full w-full object-cover"
                            muted
                            playsInline
                            preload="metadata"
                          />
                          {/* Play icon overlay */}
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xs text-white group-hover:bg-black/80">
                              ▶
                            </span>
                          </div>
                        </>
                      ) : (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Documents (PDF/Word) section for albums that ALSO have images */}
          {node.docs && node.docs.length > 0 && (
            <section className="rounded-3xl border border-border bg-surface/90 p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-sm sm:text-base font-semibold">
                  Documents
                </h2>
                <p className="text-[11px] text-slate-500">
                  {node.docs.length} file
                  {node.docs.length === 1 ? "" : "s"} attached to this album
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {node.docs.map((doc) => (
                  <a
                    key={doc.src}
                    href={doc.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background px-3 py-3 text-left hover:bg-background/80"
                  >
                    <div className="space-y-0.5">
                      <p className="text-xs sm:text-sm font-medium">
                        {doc.title}
                      </p>
                      {doc.description && (
                        <p className="text-[11px] text-slate-500">
                          {doc.description}
                        </p>
                      )}
                      {doc.format && (
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                          {doc.format}
                        </p>
                      )}
                    </div>
                    <span className="ml-3 text-[11px] rounded-full border border-border px-2 py-1 text-slate-600">
                      View
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Lightbox */}
          {isOpen && currentItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[12px] text-slate-100 hover:bg-black"
              >
                ✕ Close
              </button>

              <div className="flex max-h-full w-full max-w-4xl flex-col items-center gap-3">
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-[18px] text-slate-100 hover:bg-black"
                  >
                    ‹
                  </button>

                  <div className="relative mx-10 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
                    {currentItem.type === "video" ? (
                      <video
                        src={currentItem.src}
                        controls
                        className="max-h-full max-w-full"
                      />
                    ) : (
                      <Image
                        src={currentItem.src}
                        alt={currentItem.alt}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-[18px] text-slate-100 hover:bg-black"
                  >
                    ›
                  </button>
                </div>

                <div className="max-w-3xl text-center text-xs sm:text-sm text-slate-100/90">
                  <p className="font-semibold">{currentItem.label}</p>
                  <p className="mt-1 text-[11px] text-slate-200/80">
                    {currentItem.alt}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Image {lightboxIndex! + 1} of {node.images!.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* DOCS-ONLY VIEW: when there are docs but no images */}
      {!isAlbum && node.docs && node.docs.length > 0 && (
        <section className="rounded-3xl border border-border bg-surface/90 p-4 sm:p-6 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-sm sm:text-base font-semibold">
              Documents
            </h2>
            <p className="text-[11px] text-slate-500">
              {node.docs.length} file
              {node.docs.length === 1 ? "" : "s"} in this collection
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {node.docs.map((doc) => (
              <a
                key={doc.src}
                href={doc.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-border bg-background px-3 py-3 text-left hover:bg-background/80"
              >
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-medium">
                    {doc.title}
                  </p>
                  {doc.description && (
                    <p className="text-[11px] text-slate-500">
                      {doc.description}
                    </p>
                  )}
                  {doc.format && (
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {doc.format}
                    </p>
                  )}
                </div>
                <span className="ml-3 text-[11px] rounded-full border border-border px-2 py-1 text-slate-600">
                  View
                </span>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
