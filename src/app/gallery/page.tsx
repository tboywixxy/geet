// app/gallery/page.tsx
import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery / Archives · Association of Eighty5ers FGCS",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
