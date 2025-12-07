// src/app/gallery/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ROOT_ALBUMS, type AlbumNode } from "./albumsData";

function getBadge(node: AlbumNode) {
  if (node.children && node.children.length > 0) return "Album collection";
  return "Photo album";
}

export default function GalleryAlbumsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* Header */}
      <section className="space-y-3 text-center">
        <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]/90">
          🖼 Gallery / Archives
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          Every <span className="text-[var(--brand-gold)]">memory</span> tells a
          story.
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
          Every story strengthens our legacy. Explore curated collections of
          reunion photos, historic snapshots from the 1980s, video highlights,
          legacy project albums and “Memory Lane” yearbook scans. Relive the
          laughter, reconnect with the faces, rejoice in the journey.
        </p>
      </section>

      {/* Albums / folders grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ROOT_ALBUMS.map((node) => (
          <Link
            key={node.slug}
            href={`/gallery/${node.slug}`}
            className="group block overflow-hidden rounded-3xl border border-border bg-surface/90 hover:border-[var(--brand-gold)]/70 transition-colors"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={node.cover.src}
                alt={node.cover.alt}
                fill
                // 👇 IMPORTANT: bypass Next optimizer, let Cloudinary handle it
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left">
                <p className="inline-flex items-center rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-slate-100">
                  {getBadge(node)}
                </p>
              </div>
            </div>

            <div className="px-4 py-3 space-y-1">
              <h2 className="text-sm sm:text-base font-semibold tracking-tight">
                {node.title}
              </h2>
              {node.description && (
                <p className="text-xs text-slate-500 leading-relaxed">
                  {node.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
