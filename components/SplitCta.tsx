import Image from "next/image";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

type SplitCtaProps = {
  image: string;
  alt: string;
  label?: string;
  title: string;
  text: string;
  buttonLabel: string;
  waMessage?: string;
  microcopy?: string;
  imagePosition?: string;
  location?: string;
};

/**
 * CTA editorial split: foto limpia a un lado, texto + botón en panel crema.
 * Cierre consistente en la home y en todas las páginas de servicio.
 */
export default function SplitCta({
  image,
  alt,
  label,
  title,
  text,
  buttonLabel,
  waMessage,
  microcopy,
  imagePosition = "center 30%",
  location = "cta_final",
}: SplitCtaProps) {
  return (
    <section className="cta-section">
      <div className="cta-split">
        <div className="cta-photo">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            loading="lazy"
            style={{ objectFit: "cover", objectPosition: imagePosition }}
          />
        </div>
        <div className="cta-panel">
          {label ? <p className="label">{label}</p> : null}
          <h2 className="cta-title">{title}</h2>
          <p className="body-text">{text}</p>
          <WhatsAppLink
            className="btn-wa"
            href={waLink(waMessage)}
            location={location}
            buttonName={buttonLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> {buttonLabel}
          </WhatsAppLink>
          {microcopy ? <p className="cta-microcopy">{microcopy}</p> : null}
        </div>
      </div>
    </section>
  );
}
