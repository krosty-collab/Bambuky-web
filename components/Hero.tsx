import { Fragment } from "react";
import Image from "next/image";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const STATS = [
  { value: "10+", label: "Años juntos en esto" },
  { value: "800+", label: "Bebés fotografiados" },
  { value: "2", label: "Gemelos propios" },
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
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="label">Fotografía Newborn · Querétaro</p>
        <h1 className="display">Los primeros días pasan volando</h1>
        <p className="body-text">
          Somos Cristian y Reyna. Desde 2015 fotografiamos recién nacidos
          en Querétaro. Cada foto que hacemos es un pedacito de tu historia
          que vas a volver a mirar mil veces.
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
