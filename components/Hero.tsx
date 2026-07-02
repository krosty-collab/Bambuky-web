import Image from "next/image";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";
import CTALink from "./CTALink";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* Art direction: la foto horizontal (manos sosteniendo al bebé) solo
          funciona completa en desktop. En móvil, el encuadre vertical se
          recortaría perdiendo ambas manos, así que usamos una foto compuesta
          en vertical. Solo se renderiza una según el viewport. */}
      <Image
        className="hero-bg hero-bg--desktop"
        src="/images/hero.jpg"
        alt="Fotografía newborn Querétaro - manos de papás sosteniendo a su recién nacido con contraluz"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Image
        className="hero-bg hero-bg--mobile"
        src="/images/bebe-recien-nacido-fotografia-newborn-queretaro-bambuky-01.webp"
        alt="Recién nacida dormida con las manos bajo el mentón durante una sesión newborn en Querétaro"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="label">Fotografía Newborn · Querétaro</p>
        <h1 className="display">Los primeros días pasan volando</h1>
        <p className="body-text">
          Somos Cristian y Reyna. Fotografiamos recién nacidos en Querétaro
          desde 2015.
        </p>
        <div className="hero-actions">
          <WhatsAppLink
            className="btn-wa"
            href={waLink()}
            location="hero"
            buttonName="Agendar sesión"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Agendar sesión
          </WhatsAppLink>
          <CTALink
            className="btn-outline"
            href="#galeria"
            buttonName="Ver nuestro trabajo"
            section="hero"
          >
            Ver nuestro trabajo
          </CTALink>
        </div>
      </div>
    </section>
  );
}
