import Image from "next/image";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CTA() {
  return (
    <section className="cta-section">
      <Image
        className="cta-bg"
        src="/images/48hs03.jpg"
        alt="Familia mirando a su bebé recién nacido - sesión Bambuky Querétaro"
        fill
        sizes="100vw"
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="cta-overlay" />
      <div className="container">
        <h2 className="display">¿Estás esperando un bebé?</h2>
        <p className="body-text">
          Escríbenos. Te contamos cómo funciona, cuándo conviene hacer la
          sesión y respondemos todas tus dudas. Sin compromiso, sin presión.
        </p>
        <a
          className="btn-wa-dark"
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Pedir información y precios
        </a>
      </div>
    </section>
  );
}
