import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import RelatedServices from "@/components/RelatedServices";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink } from "@/lib/site";
import { SITE } from "@/lib/site";
import { SITTERS_FAQS } from "@/lib/faqs";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";

/* ── METADATA ────────────────────────────────── */

export const metadata: Metadata = {
  title: "Sesión Sitter en Querétaro | Bambuky · Fotos Bebé 6 Meses",
  description:
    "Sesión de fotos sitter para bebés de 5 a 8 meses en Querétaro. Tu bebé ya se sienta solo, agarra todo y se ríe de la nada — esta es la sesión más divertida. Estudio Bambuky.",
  alternates: {
    canonical: `${SITE.url}/sitters-queretaro`,
  },
  keywords: [
    "sesión sitter Querétaro",
    "fotografía bebé 6 meses Querétaro",
    "fotos bebé sentado Querétaro",
    "sesión bebé sitter Querétaro",
    "fotografía sitter estudio Querétaro",
    "fotos bebé 5 meses Querétaro",
    "sesión bebé Bambuky Querétaro",
    "fotógrafo bebés Querétaro",
  ],
  openGraph: {
    type: "website",
    url: `${SITE.url}/sitters-queretaro`,
    siteName: "Bambuky",
    title: "Sesión Sitter en Querétaro | Bambuky · Fotos Bebé 6 Meses",
    description:
      "Fotografía de bebés de 5 a 8 meses en Querétaro. Tu bebé ya se sienta solo, hace caras increíbles y se ríe con todo — queremos fotografiar eso.",
    locale: "es_MX",
    images: [
      {
        url: "/images/sitters04.jpg",
        width: 1200,
        height: 630,
        alt: "Sesión Sitter en Querétaro - bebé sentado en estudio Bambuky",
      },
    ],
  },
};

/* ── JSON-LD DATA ────────────────────────────── */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "Sesión Sitter Querétaro", url: `${SITE.url}/sitters-queretaro` },
]);

const serviceLd = serviceSchema({
  name: "Sesión Sitter - Fotografía de Bebé 5 a 8 Meses",
  description:
    "Sesión de fotografía para bebés de 5 a 8 meses que ya se sientan solos. Risas, caras chistosas y toda la personalidad de tu bebé en fotos.",
  url: `${SITE.url}/sitters-queretaro`,
  image: "/images/sitters04.jpg",
});

const faqLd = faqSchema(SITTERS_FAQS);

/* ── PAGE COMPONENT ──────────────────────────── */

const WA_MSG =
  "Hola Bambuky, quisiera información sobre la sesión Sitters 👶";

export default function SittersQueretaroPage() {
  return (
    <>
      {/* ── Structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="svc-hero svc-hero--split">
          <div className="container svc-hero-grid">
            <div className="svc-hero-text">
              <Breadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Sesión Sitter Querétaro" },
                ]}
              />
              <p className="label">Bebés de 5 a 8 meses</p>
              <h1>
                Sesión Sitter en Querétaro: la edad de las carcajadas
              </h1>
              <p className="subheading">
                Tu bebé ya se sienta solo, agarra todo lo que encuentra y te
                mira con esa cara que te derrite. Esta es la sesión más
                divertida que hacemos &mdash; y queremos fotografiarla contigo.
              </p>
              <a
                className="btn-wa"
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> Pedir informaci&oacute;n y precios
              </a>
              <p className="svc-microcopy">
                Respondemos en menos de 2 horas &middot; Sin compromiso
              </p>
            </div>
            <div className="svc-hero-img">
              <Image
                src="/images/sitters04.jpg"
                alt="Bebé de 6 meses sentado y sonriendo en sesión sitter - Bambuky Fotografía Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 420px"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Content: intro ─────────────────── */}
        <section className="svc-content">
          <div className="container">
            <h2>Qu&eacute; es una sesi&oacute;n sitter y por qu&eacute; nos encanta</h2>
            <p className="body-text">
              Entre los 5 y los 8 meses pasan tantas cosas que si no las
              fotograf&iacute;as, en serio se te olvidan. Tu beb&eacute; ya se sienta
              solo, se mete todo a la boca, se r&iacute;e de la nada y pone caras
              que nunca le hab&iacute;as visto. No es que seas mala mam&aacute;
              &mdash; es que cambian demasiado r&aacute;pido.
            </p>
            <p className="body-text">
              La sesi&oacute;n sitter es nuestra forma de frenar ese momento.
              Cristian se encarga de la luz (de esa que hace que la piel de tu
              beb&eacute; se vea de terciopelo) y Reyna es la que logra las
              carcajadas. Tiene un don. A veces los pap&aacute;s nos dicen
              &ldquo;nunca se r&iacute;e as&iacute; con desconocidos&rdquo;
              &mdash; y ah&iacute; est&aacute; el beb&eacute;, muerto de risa
              con Reyna.
            </p>
          </div>
        </section>

        {/* ── Editorial: edad ideal (texto izq + img der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>La edad ideal: entre los 5 y los 8 meses</h2>
              <p className="body-text">
                Cada beb&eacute; va a su ritmo, pero generalmente entre los 5 y
                los 8 meses ya se mantienen sentados. Es el punto perfecto:
                todav&iacute;a tienen las mejillas redondas y los rollitos, pero
                ya tienen personalidad de sobra. Sonr&iacute;en a prop&oacute;sito,
                se asombran con cualquier cosa y muchas veces se sueltan unas
                carcajadas que nos matan a todos en el estudio.
              </p>
              <p className="body-text">
                Si tu beb&eacute; a&uacute;n no se sienta completamente solo,
                no te preocupes. Escr&iacute;benos y platicamos &mdash; te
                preguntamos cositas como si ya se sostiene un ratito, si ya le
                interesa agarrar objetos, y te decimos con honestidad si es
                mejor esperar unas semanas.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/sitters02.jpg"
                alt="Bebé de 7 meses explorando con curiosidad durante sesión sitter - Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── Content: qué incluye ────────────────── */}
        <section className="svc-content">
          <div className="container">
            <h2>Qu&eacute; incluye la sesi&oacute;n y c&oacute;mo nos preparamos</h2>
            <p className="body-text">
              La sesi&oacute;n sitter dura entre 1 y 2 horas, pero se siente
              mucho m&aacute;s corta porque nos la pasamos jugando. A diferencia
              de la sesi&oacute;n newborn (donde todo es silencio y sue&ntilde;o),
              aqu&iacute; hay ruido, risas y movimiento. Tu beb&eacute;
              est&aacute; despierto, activo, y nosotros trabajamos con esa
              energ&iacute;a &mdash; no en contra de ella.
            </p>
            <p className="body-text">
              Te recomendamos traer 2 o 3 cambios de ropa en tonos neutros o
              pastel, aunque tenemos algunos outfits y accesorios en el estudio.
              Si tu beb&eacute; tiene un juguete favorito o una mantita que lo
              tranquiliza, tr&aacute;elo &mdash; esos detalles hacen las fotos
              mucho m&aacute;s de ustedes. Y si a media sesi&oacute;n necesita
              comer, descansar o un rato en brazos de mam&aacute;, le paramos
              sin ning&uacute;n problema. Aqu&iacute; manda tu beb&eacute;.
            </p>
          </div>
        </section>

        {/* ── Editorial: recorrido (img izq + texto der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-img">
              <Image
                src="/images/sitters05.jpg"
                alt="Bebé sentado con osito de peluche en sesión sitter profesional - estudio Bambuky"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
            <div className="svc-editorial-text">
              <h2>De reci&eacute;n nacido a sitter a Smash the Cake</h2>
              <p className="body-text">
                Muchas familias nos conocen por la sesi&oacute;n newborn y
                regresan para la sesi&oacute;n sitter. Despu&eacute;s viene el
                Smash the Cake en su primer cumplea&ntilde;os. Cuando pones las
                tres sesiones juntas ves c&oacute;mo creci&oacute; tu
                beb&eacute; de verdad &mdash; no solo de tama&ntilde;o, sino de
                carita, de gestos, de todo. Es de las cosas que m&aacute;s nos
                gusta ense&ntilde;arles a los pap&aacute;s.
              </p>
              <p className="body-text">
                Si no hiciste la sesi&oacute;n newborn, no pasa nada. La
                sesi&oacute;n sitter es un arranque incre&iacute;ble. Tu
                beb&eacute; ya interact&uacute;a, ya te busca con la mirada, ya
                se r&iacute;e cuando le haces cosquillas &mdash; y todo eso
                queda en las fotos.
              </p>
            </div>
          </div>
        </section>

        {/* ── Content: estudio y seguridad ── */}
        <section className="svc-content">
          <div className="container">
            <h2>C&oacute;mo te recibimos en el estudio</h2>
            <p className="body-text">
              Cuando llegas, Reyna te recibe, te ofrece algo de tomar y
              platicamos un rato antes de empezar. El estudio est&aacute;
              calientito (a los beb&eacute;s les gusta), hay m&uacute;sica
              bajita de fondo, y todo est&aacute; pensado para que tu
              beb&eacute; se sienta a gusto.
            </p>
            <p className="body-text">
              Llevamos m&aacute;s de 800 beb&eacute;s fotografiados y tenemos
              certificaci&oacute;n en primeros auxilios pedi&aacute;tricos.
              Si tu beb&eacute; se rueda, si se jala algo, si decide que hoy es
              d&iacute;a de llorar &mdash; lo hemos visto todo y sabemos
              c&oacute;mo manejarlo con calma.
            </p>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="svc-gallery">
          <div className="container">
            <div className="section-header">
              <p className="label">Galer&iacute;a Sitter</p>
              <h2 className="heading">
                As&iacute; se ven los 6 meses
              </h2>
            </div>
            <div className="svc-gallery-grid">
              <div className="svc-gallery-item">
                <Image
                  src="/images/sitters01.jpg"
                  alt="Sesión sitter Querétaro - bebé de 6 meses sentado con sonrisa"
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/sitters03.jpg"
                  alt="Fotografía sitter bebé Querétaro - niño con gorrito de oso en estudio Bambuky"
                  width={900}
                  height={1250}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/sitters04.jpg"
                  alt="Sesión sitter profesional Querétaro - bebé sentado explorando con curiosidad"
                  width={900}
                  height={1100}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/sitters05.jpg"
                  alt="Fotografía bebé sitter Querétaro - bebé sentado con osito de peluche"
                  width={900}
                  height={1250}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section className="svc-cta">
          <div className="container">
            <h2 className="heading">
              Reserva la sesi&oacute;n sitter de tu beb&eacute;
            </h2>
            <p className="body-text">
              Escr&iacute;benos por WhatsApp, te contamos c&oacute;mo funciona,
              qu&eacute; incluye cada paquete y apartamos tu fecha. Cero
              presi&oacute;n, pura pl&aacute;tica.
            </p>
            <a
              className="btn-wa-dark"
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir informaci&oacute;n y precios
            </a>
            <p className="svc-microcopy">
              Respondemos en menos de 2 horas &middot; Sin compromiso
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ items={SITTERS_FAQS} id="preguntas-sitters" />

        {/* ── Related Services ── */}
        <RelatedServices
          current="/sitters-queretaro"
          show={["/smash-cake-queretaro", "/fotografia-newborn-queretaro"]}
        />

        {/* ── Final CTA ── */}
        <section className="svc-cta">
          <div className="container">
            <h2 className="heading">
              Tu beb&eacute; no va a estar as&iacute; de chiquito mucho tiempo
            </h2>
            <p className="body-text">
              M&aacute;ndanos un WhatsApp y platicamos. Te contamos fechas,
              precios y todo lo que necesitas saber para la sesi&oacute;n
              sitter de tu beb&eacute;.
            </p>
            <a
              className="btn-wa-dark"
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir informaci&oacute;n y precios
            </a>
            <p className="svc-microcopy">
              Respondemos en menos de 2 horas &middot; Sin compromiso
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
