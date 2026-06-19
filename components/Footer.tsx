import Image from "next/image";
import {
  SOCIAL,
  SITE,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  waLink,
} from "@/lib/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="Bambuky Fotografía Querétaro"
              width={150}
              height={48}
            />
            <p>
              Estudio de fotografía newborn y familia en Jurica, Querétaro. Desde
              2015 capturando los momentos más irrepetibles de las familias
              queretanas.
            </p>
            <div className="footer-social">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Bambuky"
              >
                IG
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Bambuky"
              >
                FB
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Bambuky"
              >
                WA
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Sesiones</h4>
            <ul>
              <li><a href="#servicios">Newborn · Recién Nacido</a></li>
              <li><a href="#servicios">Maternidad</a></li>
              <li><a href="#servicios">48 Horas Contigo</a></li>
              <li><a href="#servicios">Sitters · Bebé Sentado</a></li>
              <li><a href="#servicios">Smash the Cake</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                  @bambuky
                </a>
              </li>
              <li>
                <a href={SITE.gallery} target="_blank" rel="noopener noreferrer">
                  Galería de clientes · mila-os.com
                </a>
              </li>
              <li><a href="#nosotros">Jurica, Querétaro Norte</a></li>
              <li><a href="#proceso">¿Cómo funciona?</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} Bambuky Fotografía · Jurica, Querétaro, México
          </span>
          <span>
            Fotografía de recién nacidos · Maternidad · Smash the Cake
          </span>
        </div>
      </div>
    </footer>
  );
}
