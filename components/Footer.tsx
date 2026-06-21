import Image from "next/image";
import Link from "next/link";
import {
  SOCIAL,
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
              width={180}
              height={58}
            />
            <p>
              Estudio de fotografía newborn y familia en Querétaro.
              Desde 2015.
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
              <li><Link href="/fotografia-newborn-queretaro">Recién Nacido</Link></li>
              <li><Link href="/fotografia-maternidad-queretaro">Maternidad</Link></li>
              <li><Link href="/48-horas-contigo-queretaro">48 Horas Contigo</Link></li>
              <li><Link href="/sitters-queretaro">Sitters</Link></li>
              <li><Link href="/smash-cake-queretaro">Smash the Cake</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li><Link href="/fotografia-newborn-gemelos-queretaro">Gemelos</Link></li>
              <li><Link href="/fotografia-newborn-prematuros-queretaro">Prematuros</Link></li>
              <li><Link href="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
              <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
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
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} Bambuky Fotografía · Querétaro, México
          </span>
        </div>
      </div>
    </footer>
  );
}
