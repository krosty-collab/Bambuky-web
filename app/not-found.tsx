import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLink from "@/components/WhatsAppLink";
import { waLink } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="svc-content" style={{ paddingTop: "9rem", paddingBottom: "6rem", textAlign: "center" }}>
          <div className="container">
            <p className="label">Página no encontrada</p>
            <h1>Esta página se nos escapó, como los primeros días de un recién nacido</h1>
            <p className="body-text" style={{ maxWidth: "560px", margin: "0 auto 2rem" }}>
              El enlace que seguiste no existe o cambió de lugar. Aquí tienes lo que
              probablemente buscabas.
            </p>
            <WhatsAppLink
              className="btn-wa"
              href={waLink()}
              location="not_found"
              buttonName="Escríbenos por WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Escríbenos por WhatsApp
            </WhatsAppLink>

            <div style={{ marginTop: "3.5rem" }}>
              <h2 className="heading" style={{ marginBottom: "1.25rem" }}>Páginas principales</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.6rem" }}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/fotografia-newborn-queretaro">Fotografía Newborn en Querétaro</Link></li>
                <li><Link href="/fotografia-maternidad-queretaro">Fotografía de Maternidad</Link></li>
                <li><Link href="/48-horas-contigo-queretaro">48 Horas Contigo</Link></li>
                <li><Link href="/sitters-queretaro">Sesión Sitters</Link></li>
                <li><Link href="/smash-cake-queretaro">Smash the Cake</Link></li>
                <li><Link href="/fotografia-newborn-gemelos-queretaro">Newborn de Gemelos</Link></li>
                <li><Link href="/fotografia-newborn-prematuros-queretaro">Newborn de Prematuros</Link></li>
                <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
