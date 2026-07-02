"use client";

import type { MouseEvent, ReactNode } from "react";
import { trackGallery } from "@/lib/analytics";

/** Envuelve una grilla de galería y registra gallery_image_open por delegación de eventos. */
export default function GalleryGrid({
  section,
  className = "svc-gallery-grid",
  children,
}: {
  section: string;
  className?: string;
  children: ReactNode;
}) {
  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const item = target.closest<HTMLElement>(".svc-gallery-item, .gallery-item");
    if (!item) return;
    const img = item.querySelector("img");
    trackGallery(img?.alt ?? section, section);
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}
