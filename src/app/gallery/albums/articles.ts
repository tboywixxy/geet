// src/app/gallery/albums/articles.ts

import type { GalleryItem, AlbumDoc } from "../albumsData";

// If you ever add images for this album, put them here
export const EIGHTY5ERS_ARTICLES_IMAGES: GalleryItem[] = [];

// Document items (pdf/doc/docx) for Cloudinary folder "Eighty5ers/Articles"
export const EIGHTY5ERS_ARTICLES_DOCS: AlbumDoc[] = [
  {
    title: "Articles Document 1",
    src: "https://res.cloudinary.com/df2e1ug1q/raw/upload/v1765093928/Gulli_Danda_Article_-_final_cxicpd.docx",
    format: "docx",
  },
  {
    title: "Articles Document 2",
    src: "https://res.cloudinary.com/df2e1ug1q/raw/upload/v1765093928/List_of_Prefects_and_House_Captains_New_gypqpi.docx",
    format: "docx",
  },
  {
    title: "Articles Document 3",
    src: "https://res.cloudinary.com/df2e1ug1q/raw/upload/v1765093929/Summary_of_Discussion_by_Some_Eighty5ers_August_2018_aapzhe.docx",
    format: "docx",
  },
  {
    title: "Articles Document 4",
    src: "https://res.cloudinary.com/df2e1ug1q/raw/upload/v1765093929/The_Bangi_Experience_l8ue0b.docx",
    format: "docx",
  },
  {
    title: "Articles Document 5",
    src: "https://res.cloudinary.com/df2e1ug1q/raw/upload/v1765093929/Two-Minute_History_of_Our_School_and_85_Set_tl6zty.docx",
    format: "docx",
  },
];
