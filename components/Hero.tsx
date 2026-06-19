import { Fragment } from "react";
import Image from "next/image";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const STATS = [
  { value: "10+", label: "Años de experiencia" },
  { value: "800+", label: "Bebés fotografiados" },
  { value: "100%", label: "Familias felices" },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <Image
        className="hero-bg"
        src="/images/hero.jpg"
        alt="Fotografía newborn Querétaro - manos de papás sosteniendo a su recién nacido con contraluz"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="label">Fotografía Newborn · Querétaro</p>
        <h1 className="display">Los primeros días duran para siempre</h1>
        <p className="body-text">
          Estudio especializado en recién nacidos en Jurica, Querétaro. Cristian
          y Reyna cuidan a tu bebé con más de 10 años de experiencia y
          certificación en primeros auxilios pediátricos.
        </p>
        <div className="hero-badges">
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className="hero-badge">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="hero-divider" />}
            </Fragment>
          ))}
        </div>
        <div className="hero-actions">
          <a
            className="btn-wa"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Pedir información y precios
          </a>
          <a className="btn-outline" href="#servicios">
            Ver sesiones
          </a>
        </div>
      </div>
    </section>
  );
}
