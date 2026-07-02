"use client";

import Image from "next/image";
import { GALLERY } from "@/lib/site";
import { trackGallery } from "@/lib/analytics";

export default function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <div className="section-header">
          <p className="label">Portafolio</p>
          <h2 className="heading">Momentos que duran toda una vida</h2>
        </div>
        <div className="gallery-masonry">
          {GALLERY.map((item) => (
            <div
              className="gallery-item"
              key={item.src}
              onClick={() => trackGallery(item.alt, "portafolio")}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                sizes="(max-width: 480px) 92vw, (max-width: 768px) 46vw, 30vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
