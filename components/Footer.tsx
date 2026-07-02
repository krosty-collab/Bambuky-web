import Image from "next/image";
import Link from "next/link";
import {
  SOCIAL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  ADDRESS,
  waLink,
} from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";

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
              <WhatsAppLink
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                location="footer_social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Bambuky"
              >
                WA
              </WhatsAppLink>
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
                <WhatsAppLink
                  href={waLink()}
                  location="footer"
                  buttonName={`WhatsApp: ${WHATSAPP_DISPLAY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </WhatsAppLink>
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
          <span className="footer-address">{ADDRESS.display}</span>
        </div>
      </div>
    </footer>
  );
}
