import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="display">¿Estás esperando un bebé?</h2>
        <p className="body-text">
          Reserva tu sesión newborn durante el embarazo. Los lugares son
          limitados y se agotan rápido, especialmente en temporada alta.
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
