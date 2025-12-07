// src/app/gallery/albumsData.ts

import {
  LAGOS_HUB_4Q2023_GATHERING_IMAGES,
  LAGOS_HUB_4Q2023_GATHERING_DOCS,
} from "./albums/lagosHub4Q2023";

import { PRINCIPAL_STAFF_IMAGES } from "./albums/principalStaff";
import { CRESCENDO_IKEJA_IMAGES } from "./albums/crescendoIkeja";
import {
  EIGHTY5ERS_ARTICLES_IMAGES,
  EIGHTY5ERS_ARTICLES_DOCS,
} from "./albums/articles";
import {
  REUNION_2024_SCHEDULE_DOCS,
  REUNION_2024_AWARDS_IMAGES,
  REUNION_2024_AWARDS_DOCS,
  REUNION_2024_GIFT_BAG_IMAGES,
  REUNION_2024_BROCHURE_DOCS,
  REUNION_2024_SPEECH_DOCS,
  REUNION_PIX_2024_IMAGES
} from "./albums/reunion2024";

import {
  REUNION_2017_BROCHURE_IMAGES,
  REUNION_2017_BANNERS_IMAGES,
  REUNION_2017_GIFT_BAG_2017_IMAGES,
  REUNION_2017_CITATION_IMAGES,
  REUNION_2017_CITATION_DOCS,
  REUNION_2017_ROOT_DOCS,
} from "./albums/reunion2017";

/* ---------------- Types ---------------- */

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  type?: "image" | "video"; // optional; default image if omitted
  poster?: string;
};

export type AlbumDoc = {
  title: string;
  src: string;
  description?: string;
  format?: string; // pdf, docx, etc.
  type?: "image" | "video";
};

export type AlbumNode = {
  slug: string;
  title: string;
  description?: string;
  cover: GalleryItem;

  // If this is a "real" album
  images?: GalleryItem[];

  // If this is a "folder" containing sub-albums
  children?: AlbumNode[];

  // Optional docs (pdf / word) attached to an album
  docs?: AlbumDoc[];
};

/* ---------------- Root albums ---------------- */

export const ROOT_ALBUMS: AlbumNode[] = [
  // 🔹 New: Lagos Hub – 4Q 2023 Gathering (Cloudinary album)
  {
    slug: "lagos-hub-4q2023-gathering",
    title: "Lagos Hub – 4Q 2023 Gathering",
    description:
      "Photos, videos and collections from the Eighty5ers Lagos Hub 4Q 2023 Gathering.",
    cover: LAGOS_HUB_4Q2023_GATHERING_IMAGES[0],
    images: LAGOS_HUB_4Q2023_GATHERING_IMAGES,
    docs: LAGOS_HUB_4Q2023_GATHERING_DOCS,
  },

    // 🔹 2024 Reunion – parent album with sub-albums
  {
    slug: "2024-reunion",
    title: "2024 Reunion",
    description:
      "Schedule, awards, speeches, gift bags and brochure from the 2024 reunion weekend.",
    // use one of the real photos as the cover (from gift bag album)
    cover: REUNION_PIX_2024_IMAGES[1],
    children: [

    
        {
            slug: "2024-reunion",
            title: "2024 Reunion",
            description:
            "photos from the 2024 reunion.",
                cover: REUNION_PIX_2024_IMAGES[0], // first photo from the 444-pic album
                images: REUNION_PIX_2024_IMAGES,
        },
      {
        slug: "schedule-of-activities",
        title: "Schedule of Activities",
        description: "Official programme for the 2024 reunion weekend.",
        cover: {
          src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
          alt: "Printed schedule and notes",
          label: "Reunion schedule",
        },
        // docs-only album
        docs: REUNION_2024_SCHEDULE_DOCS,
      },
      {
        slug: "awards",
        title: "Awards",
        description: "Awards list and supporting documents for the 2024 reunion.",
        cover: REUNION_2024_AWARDS_IMAGES[0],
        images: REUNION_2024_AWARDS_IMAGES,
        docs: REUNION_2024_AWARDS_DOCS,
      },
      {
        slug: "gift-bag-contents-2024",
        title: "Gift Bag Contents 2024",
        description: "Photos of the 2024 reunion gift bag items.",
        cover: REUNION_2024_GIFT_BAG_IMAGES[0],
        images: REUNION_2024_GIFT_BAG_IMAGES,
      },
      {
        slug: "reunion-brochure-2024",
        title: "Reunion Brochure 2024",
        description: "The full 2024 reunion brochure in PDF format.",
        cover: {
          src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
          alt: "Books and printed brochures",
          label: "Reunion brochure",
        },
        docs: REUNION_2024_BROCHURE_DOCS,
      },
      {
        slug: "speech-he-ms-philda-nani-kereng",
        title: "Speech by HE Ms Philda Nani Kereng",
        description: "Keynote speech delivered at the 2024 reunion.",
        cover: {
          src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
          alt: "Speaker at podium",
          label: "Keynote speech",
        },
        docs: REUNION_2024_SPEECH_DOCS,
      },

    ],
  },

    // 🔹 NEW: 2017 Reunion folder with sub-albums + a root doc
  {
    slug: "2017-reunion",
    title: "2017 Reunion",
    description:
      "Brochure, banners, citations and gift bag contents from the 2017 reunion.",
    cover:
      REUNION_2017_BROCHURE_IMAGES[0] ??
      REUNION_2017_BANNERS_IMAGES[0] ??
      CAMPUS_IMAGES[0], // small safety fallback
    docs: REUNION_2017_ROOT_DOCS,
    children: [
      {
        slug: "brochure",
        title: "Reunion 2017 Brochure",
        description: "Full brochure pages from the 2017 reunion.",
        cover: REUNION_2017_BROCHURE_IMAGES[0],
        images: REUNION_2017_BROCHURE_IMAGES,
      },
      {
        slug: "banners",
        title: "Banners",
        description: "Event banners designed for the 2017 reunion.",
        cover: REUNION_2017_BANNERS_IMAGES[0],
        images: REUNION_2017_BANNERS_IMAGES,
      },
      {
        slug: "citation-principal-ajepe",
        title: "Citation of Principal Ajepe & Award Plaque",
        description:
          "Citation text and images for the award presented to Principal Ajepe.",
        cover: REUNION_2017_CITATION_IMAGES[0],
        images: REUNION_2017_CITATION_IMAGES,
        docs: REUNION_2017_CITATION_DOCS,
      },
      {
        slug: "gift-bag-contents-2017",
        title: "Gift Bag Contents 2017",
        description: "Customised gifts shared at the 2017 reunion.",
        cover: REUNION_2017_GIFT_BAG_2017_IMAGES[0],
        images: REUNION_2017_GIFT_BAG_2017_IMAGES,
      },
    ],
  },

    {
    slug: "principal-and-staff",
    title: "Some Pix of Principal and Staff",
    description: "Portraits and moments with school leadership and staff.",
    cover: PRINCIPAL_STAFF_IMAGES[2],
    images: PRINCIPAL_STAFF_IMAGES,
  },

    {
    slug: "crescendo-ikeja",
    title: "Crescendo, Ikeja",
    description:
      "An evening at Crescendo, Ikeja – good food, music and Eighty5ers’ fellowship.",
    cover: CRESCENDO_IKEJA_IMAGES[0],
    images: CRESCENDO_IKEJA_IMAGES,
  },

    // 🔹 Articles (docs-only album)
  {
    slug: "articles",
    title: "Articles & Reflections",
    description:
      "Written pieces, reflections and history shared by Eighty5ers.",
    cover: {
      src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      alt: "Books and study materials",
      label: "Articles & reflections",
    },
    // no images – this album is docs-only
    images: EIGHTY5ERS_ARTICLES_IMAGES, // currently []
    docs: EIGHTY5ERS_ARTICLES_DOCS,
  },

];

/* ---------------- Helper: resolve path → node ---------------- */

export type FindResult = {
  node: AlbumNode | null;
  ancestors: AlbumNode[];
};

export function findNodeByPath(slugs: string[]): FindResult {
  const helper = (
    nodes: AlbumNode[],
    remaining: string[],
    ancestors: AlbumNode[]
  ): FindResult => {
    if (remaining.length === 0) {
      return { node: null, ancestors };
    }

    const [head, ...rest] = remaining;
    const match = nodes.find((n) => n.slug === head);
    if (!match) return { node: null, ancestors };

    if (rest.length === 0) {
      return { node: match, ancestors };
    }

    if (!match.children || match.children.length === 0) {
      return { node: null, ancestors };
    }

    return helper(match.children, rest, [...ancestors, match]);
  };

  return helper(ROOT_ALBUMS, slugs, []);
}
