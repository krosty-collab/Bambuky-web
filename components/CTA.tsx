import Image from "next/image";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-split">
        <div className="cta-photo">
          <Image
            src="/images/newborn2.jpg"
            alt="Recién nacido durmiendo con la carita sobre sus manos - fotografía newborn Bambuky Querétaro"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            loading="lazy"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
        <div className="cta-panel">
          <p className="label">Newborn · Querétaro</p>
          <h2 className="cta-title">¿Estás esperando un bebé?</h2>
          <p className="body-text">
            Escríbenos. Te contamos cómo funciona, cuándo conviene hacer la
            sesión y respondemos todas tus dudas. Sin compromiso, sin presión.
          </p>
          <a
            className="btn-wa"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Pedir información y precios
          </a>
        </div>
      </div>
    </section>
  );
}
