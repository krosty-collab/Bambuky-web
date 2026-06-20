import type { Metadata } from "next";
import Image from "next/image";
import { waLink } from "@/lib/site";
import { SITE } from "@/lib/site";
import { SITTERS_FAQS } from "@/lib/faqs";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WA_MSG = "Hola Bambuky, quisiera información sobre la sesión Sitters 👶";

export const metadata: Metadata = {
  title: "Sesión Sitter en Querétaro | Bambuky · Fotos Bebé 6 Meses",
  description:
    "Sesión de fotos sitter para bebés de 5 a 8 meses en Querétaro. Capturamos la etapa en que tu bebé se sienta solo, llena de sonrisas y personalidad. Estudio Bambuky.",
  alternates: {
    canonical: `${SITE.url}/sitters-queretaro`,
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/sitters-queretaro`,
    siteName: "Bambuky",
    title: "Sesión Sitter en Querétaro | Bambuky · Fotos Bebé 6 Meses",
    description:
      "Fotografía profesional para bebés de 5 a 8 meses en Querétaro. Tu bebé ya se sienta solo y queremos capturar cada gesto, cada sonrisa.",
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

const breadcrumbItems = [
  { name: "Inicio", url: SITE.url },
  { name: "Sesión Sitter Querétaro", url: `${SITE.url}/sitters-queretaro` },
];

const service = {
  name: "Sesión Sitter - Fotografía de Bebé 5 a 8 Meses",
  description:
    "Sesión de fotografía profesional para bebés de 5 a 8 meses que ya se sientan solos. Capturamos expresiones, sonrisas y toda la personalidad de esta etapa única.",
  url: `${SITE.url}/sitters-queretaro`,
  image: "/images/sitters04.jpg",
};

export default function SittersQueretaroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(SITTERS_FAQS)),
        }}
      />

      <Nav />

      <main>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Sesión Sitter Querétaro" },
          ]}
        />

        {/* Hero */}
        <section className="svc-hero">
          <div className="container">
            <p className="label">Bebés de 5 a 8 meses</p>
            <h1 className="display">
              Sesión Sitter en Querétaro
            </h1>
            <p className="subheading">
              Tu bebé ya se sienta solo y descubre el mundo con curiosidad.
              Capturamos cada gesto, cada sonrisa y toda la personalidad de esta
              etapa irrepetible.
            </p>
            <a
              className="btn-wa"
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir información y precios
            </a>
            <p className="svc-microcopy">
              Respondemos en menos de 2 horas · Sin compromiso
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="svc-content">
          <div className="container">
            <h2 className="heading">
              ¿Qué es una sesión sitter y por qué es tan especial?
            </h2>
            <p className="body-text">
              La sesión sitter celebra uno de los hitos más emocionantes del
              primer año de tu bebé: el momento en que se sienta solo por primera
              vez. Entre los 5 y los 8 meses, tu pequeño ha dejado atrás la
              fragilidad del recién nacido y ahora explora el mundo con las manos,
              la mirada y unas expresiones que cambian cada día. Es una etapa
              breve, llena de descubrimientos, y merece ser recordada con
              fotografías que capturen toda esa magia.
            </p>
            <p className="body-text">
              En Bambuky, Cristian y Reyna llevan más de diez años fotografiando
              bebés en Querétaro. Han visto cientos de pequeños sentarse por
              primera vez frente a su cámara, y saben exactamente cómo crear el
              ambiente perfecto para que tu bebé se sienta seguro, cómodo y libre
              de ser quien es. Cristian aporta su experiencia cinematográfica para
              lograr una luz cálida y envolvente, mientras Reyna acompaña a cada
              familia con la paciencia y el cariño que hacen de cada sesión una
              experiencia relajada y especial.
            </p>

            <h2 className="heading">
              La edad ideal: entre los 5 y los 8 meses
            </h2>
            <p className="body-text">
              Cada bebé tiene su propio ritmo, pero generalmente entre los 5 y los
              8 meses alcanzan la fuerza suficiente para mantenerse sentados con
              estabilidad. Es justo ese punto en el que todavía tienen las
              mejillas redondas y los pliegues adorables del bebé, pero ya
              muestran una personalidad desbordante: sonríen con intención, se
              sorprenden con todo, agarran objetos con curiosidad y muchas veces
              nos regalan carcajadas que llenan el estudio de alegría.
            </p>
            <p className="body-text">
              Si tu bebé aún no se sienta completamente solo, no te preocupes.
              Antes de agendar, conversamos contigo para conocer en qué etapa de
              desarrollo se encuentra y así asegurarnos de que el momento sea el
              indicado. Lo importante es que disfrute la sesión tanto como tú.
            </p>

            <h2 className="heading">
              ¿Qué incluye la sesión y cómo nos preparamos?
            </h2>
            <p className="body-text">
              La sesión sitter dura aproximadamente entre 1 y 2 horas. A
              diferencia de una sesión newborn, aquí los bebés están despiertos y
              activos, así que trabajamos con su energía natural. Preparamos
              escenarios sencillos y cuidados, con fondos y props que complementan
              sin distraer, para que el protagonista absoluto sea tu hijo.
            </p>
            <p className="body-text">
              Te recomendamos traer entre 2 y 3 cambios de ropa en tonos neutros o
              pastel, aunque también contamos con algunos outfits y accesorios en
              el estudio. Si tu bebé tiene un juguete favorito o una mantita que lo
              tranquiliza, tráelo: esos detalles hacen las fotos más auténticas y
              personales. Respetamos siempre los tiempos de tu bebé: si necesita
              comer, descansar o simplemente un momento en brazos de mamá o papá,
              nos detenemos sin prisa.
            </p>

            <h2 className="heading">
              El puente perfecto entre el recién nacido y el primer año
            </h2>
            <p className="body-text">
              Muchas familias en Querétaro, Juriquilla, Zibatá, El Refugio y
              Corregidora conocen Bambuky por la sesión newborn, y regresan meses
              después para la sesión sitter. Es el capítulo intermedio de una
              historia que comenzó con los primeros días de vida y que culminará con
              el Smash the Cake en su primer cumpleaños. Cuando ves las tres
              sesiones juntas, el crecimiento de tu bebé cobra una dimensión
              emocional que te acompaña para siempre.
            </p>
            <p className="body-text">
              Si no tuviste la oportunidad de hacer la sesión newborn, la sesión
              sitter es un punto de partida maravilloso. Tu bebé ya interactúa, ya
              te busca con la mirada, ya se ríe cuando le haces cosquillas, y todo
              eso queda capturado en imágenes que vas a atesorar durante toda tu
              vida.
            </p>

            <h2 className="heading">
              Familias de todo Querétaro confían en Bambuky
            </h2>
            <p className="body-text">
              Nuestro estudio recibe familias de todas las zonas de la ciudad:
              Juriquilla, Zibatá, El Refugio, Milenio III, Corregidora, Centro y
              toda la zona metropolitana de Querétaro. No importa de dónde vengas,
              lo que sí importa es que te sientas como en casa desde el momento en
              que llegues. Cristian y Reyna cuidan cada detalle, desde la
              temperatura del estudio hasta la música suave de fondo, para que tu
              bebé esté relajado y feliz.
            </p>
            <p className="body-text">
              Con más de 800 bebés fotografiados y certificación en primeros
              auxilios pediátricos, tu bebé está en las mejores manos. La seguridad
              y la tranquilidad de tu familia siempre son nuestra prioridad.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="svc-gallery">
          <div className="container">
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

        {/* Mid-content CTA */}
        <section className="svc-cta">
          <div className="container">
            <h2 className="heading">
              Reserva la sesión sitter de tu bebé
            </h2>
            <p className="body-text">
              Los meses pasan volando y esta etapa no se repite. Escríbenos hoy
              para apartar tu fecha y recibir toda la información sobre paquetes y
              precios.
            </p>
            <a
              className="btn-wa-dark"
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir información y precios
            </a>
            <p className="svc-microcopy">
              Respondemos en menos de 2 horas · Sin compromiso
            </p>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={SITTERS_FAQS} id="preguntas-sitters" />

        {/* Related Services */}
        <RelatedServices
          current="/sitters-queretaro"
          show={["/smash-cake-queretaro", "/fotografia-newborn-queretaro"]}
        />

        {/* Final CTA */}
        <section className="svc-cta">
          <div className="container">
            <h2 className="heading">
              Cada sonrisa merece ser recordada
            </h2>
            <p className="body-text">
              No dejes pasar esta etapa tan bonita. Escríbenos por WhatsApp y te
              contamos todo lo que necesitas saber para la sesión sitter de tu
              bebé.
            </p>
            <a
              className="btn-wa-dark"
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir información y precios
            </a>
            <p className="svc-microcopy">
              Respondemos en menos de 2 horas · Sin compromiso
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
