import type { Metadata } from "next";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { CUARENTA_Y_OCHO_FAQS } from "@/lib/faqs";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import RelatedServices from "@/components/RelatedServices";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/* ── Metadata ──────────────────────────────────── */

const PAGE_URL = `${SITE.url}/48-horas-contigo-queretaro`;
const WA_MSG = "Hola Bambuky, quisiera información sobre la sesión 48 horas 🏥";

export const metadata: Metadata = {
  title: "48 Horas Contigo · Fotografía de Nacimiento en Querétaro | Bambuky",
  description:
    "Fotografía documental de nacimiento en Querétaro. Capturamos las primeras 48 horas de tu bebé en hospital o en casa: abrazos, miradas y familia completa por primera vez.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Bambuky",
    title: "48 Horas Contigo · Fotografía de Nacimiento en Querétaro | Bambuky",
    description:
      "Fotografía documental de nacimiento en Querétaro. Las primeras 48 horas de tu bebé: momentos reales, sin poses forzadas.",
    locale: "es_MX",
    images: [
      {
        url: "/images/48hs01.jpg",
        width: 1200,
        height: 630,
        alt: "Sesión 48 Horas Contigo - recién nacido con su familia en hospital de Querétaro",
      },
    ],
  },
};

/* ── JSON-LD ───────────────────────────────────── */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "48 Horas Contigo Querétaro", url: PAGE_URL },
]);

const serviceLd = serviceSchema({
  name: "48 Horas Contigo · Fotografía de Nacimiento",
  description:
    "Sesión documental en hospital o casa durante las primeras 48 horas de vida del bebé. Momentos reales, sin poses forzadas.",
  url: PAGE_URL,
  image: "/images/48hs01.jpg",
});

const faqLd = faqSchema(CUARENTA_Y_OCHO_FAQS);

/* ── Page ──────────────────────────────────────── */

export default function CuarentaYOchoHorasPage() {
  return (
    <>
      {/* JSON-LD */}
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

      {/* ── Hero ─────────────────────────────── */}
      <section className="svc-hero">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "48 Horas Contigo Querétaro" },
            ]}
          />
          <p className="label">Fotografía documental de nacimiento</p>
          <h1>
            48 Horas Contigo: los primeros momentos de tu bebé, para siempre
          </h1>
          <p className="subheading">
            Una sesión suave y sin poses en el hospital o en tu casa durante las
            primeras 48 horas de vida. El primer abrazo, la primera mirada, la
            familia completa por primera vez.
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
            Respondemos en menos de 2 horas por WhatsApp
          </p>
        </div>
      </section>

      {/* ── Contenido principal ──────────────── */}
      <section className="svc-content">
        <div className="container">
          <h2>Qué es 48 Horas Contigo</h2>
          <p className="body-text">
            Las primeras horas después del nacimiento son un torbellino de
            emociones que pasan demasiado rápido. Entre el cansancio, la alegría
            y la adrenalina, los detalles se desdibujan. 48 Horas Contigo existe
            para que esos instantes no se pierdan: es una sesión completamente
            documental que realizamos en el hospital o en tu casa durante las
            primeras 48 horas de vida de tu bebé.
          </p>
          <p className="body-text">
            No hay poses, no hay escenarios armados, no hay instrucciones. Solo
            estamos ahí, con discreción y sensibilidad, capturando lo que
            realmente sucede: el primer contacto piel con piel, la primera
            lactancia, los deditos aferrados al dedo de papá, la abuela
            conociendo a su nieto, las lágrimas que nadie quiso contener. Son
            momentos que no se repiten y que, con el tiempo, se convierten en el
            recuerdo más valioso de toda la experiencia.
          </p>

          <h2>
            Lo que hace diferente a 48 Horas Contigo
          </h2>
          <p className="body-text">
            A diferencia de una sesión newborn en estudio, que se realiza entre
            los 5 y 15 días con poses elaboradas y escenarios cuidados, 48 Horas
            Contigo ocurre justo cuando todo comienza. No esperamos a que el
            bebé llegue al estudio: vamos nosotros a donde estés. Nuestro
            enfoque es puramente documental, inspirado en la fotografía de
            reportaje, y se centra en las emociones genuinas de toda la familia.
          </p>
          <p className="body-text">
            La sesión dura entre 1 y 2 horas, es silenciosa y respetuosa. Nos
            adaptamos a los ritmos del bebé y de la mamá. Si el bebé duerme,
            capturamos la calma. Si llora, capturamos la realidad. Lo que
            buscamos no es la foto perfecta, sino la foto verdadera.
          </p>

          <h2>
            En el hospital, en tu casa, donde estés
          </h2>
          <p className="body-text">
            Hemos realizado sesiones en los principales hospitales de Querétaro
            y en la comodidad de hogares en Juriquilla, Zibatá, El Refugio y
            toda la zona metropolitana. Nos movemos con equipo ligero y discreto
            para no alterar la intimidad del momento. Llegamos, nos
            presentamos con el equipo médico si es necesario, y comenzamos a
            trabajar sin interrumpir la dinámica natural de la familia.
          </p>
          <p className="body-text">
            Cada hospital tiene sus propios horarios y protocolos de visita, y
            nosotros los conocemos bien. Coordinamos contigo con anticipación
            para que todo fluya sin complicaciones. Lo único que necesitas es
            avisarnos cuando nazca tu bebé y nosotros nos encargamos del resto.
          </p>

          <h2>
            Una entrega rápida para momentos que no pueden esperar
          </h2>
          <p className="body-text">
            Sabemos que después del nacimiento quieres compartir la noticia con
            familia y amigos. Por eso la entrega de esta sesión es más rápida
            que nuestras otras sesiones: generalmente en dos semanas recibes tu
            galería completa con fotografías editadas con el estilo cálido y
            natural que nos caracteriza. Nada de filtros exagerados, nada
            artificial. Solo la luz real del momento, tratada con el cuidado que
            merece.
          </p>

          <h2>
            El complemento perfecto de tu sesión newborn
          </h2>
          <p className="body-text">
            Muchas familias en Querétaro combinan 48 Horas Contigo con una
            sesión newborn en nuestro estudio entre los 5 y 15 días del bebé.
            Son experiencias completamente diferentes y complementarias: una
            captura la emoción cruda y real del nacimiento; la otra, la belleza
            artística del recién nacido en un ambiente controlado. Juntas,
            cuentan la historia completa de la llegada de tu hijo al mundo.
          </p>
          <p className="body-text">
            Si estás esperando a tu bebé y quieres que esas primeras horas
            queden guardadas para siempre, escríbenos. No importa si es tu
            primer hijo o el tercero: cada nacimiento es único, y cada historia
            merece ser contada con cariño, respeto y la misma emoción que
            sentiste al escuchar ese primer llanto.
          </p>
        </div>
      </section>

      {/* ── Galería ──────────────────────────── */}
      <section className="svc-gallery">
        <div className="container">
          <div className="svc-gallery-grid">
            <div className="svc-gallery-item">
              <Image
                src="/images/48hs01.jpg"
                alt="Fotografía 48 horas - recién nacido con su familia en hospital de Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 33vw"
              />
            </div>
            <div className="svc-gallery-item">
              <Image
                src="/images/48hs02.jpg"
                alt="Sesión 48 horas Querétaro - papás con su bebé recién nacido"
                width={900}
                height={1150}
                sizes="(max-width: 768px) 92vw, 33vw"
              />
            </div>
            <div className="svc-gallery-item">
              <Image
                src="/images/48hs03.jpg"
                alt="Sesión 48 horas hospital Querétaro - familia completa mirando al bebé"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 92vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA intermedio ────────────────────── */}
      <section className="svc-cta">
        <div className="container">
          <h2 className="heading">
            Las primeras horas pasan en un instante
          </h2>
          <p className="body-text">
            Reserva tu sesión 48 Horas Contigo y deja que capturemos esos
            momentos irrepetibles mientras tú simplemente los vives.
          </p>
          <a
            className="btn-wa-dark"
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Reservar mi sesión
          </a>
          <p className="svc-microcopy">
            Escríbenos por WhatsApp y te respondemos hoy mismo
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────── */}
      <FAQ items={CUARENTA_Y_OCHO_FAQS} id="preguntas-48-horas" />

      {/* ── Servicios relacionados ────────────── */}
      <RelatedServices
        current="/48-horas-contigo-queretaro"
        show={[
          "/fotografia-newborn-queretaro",
          "/fotografia-maternidad-queretaro",
        ]}
      />

      {/* ── CTA final ─────────────────────────── */}
      <section className="svc-cta">
        <div className="container">
          <h2 className="heading">
            Cada nacimiento merece ser recordado
          </h2>
          <p className="body-text">
            Cuéntanos sobre ti, tu bebé y cómo te gustaría vivir esta
            experiencia. Estamos aquí para acompañarte.
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
            Respondemos en menos de 2 horas por WhatsApp
          </p>
        </div>
      </section>
    </>
  );
}
