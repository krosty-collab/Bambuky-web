import type { Metadata } from "next";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { CUARENTA_Y_OCHO_FAQS } from "@/lib/faqs";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import RelatedServices from "@/components/RelatedServices";
import SplitCta from "@/components/SplitCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/* ── Metadata ──────────────────────────────────── */

const PAGE_URL = `${SITE.url}/48-horas-contigo-queretaro`;
const WA_MSG = "Hola Bambuky, quisiera información sobre la sesión 48 horas 🏥";

export const metadata: Metadata = {
  title: "48 Horas Contigo · Fotografía de Nacimiento en Querétaro | Bambuky",
  description:
    "Fotografía documental de nacimiento en Querétaro. Vamos al hospital o a tu casa en las primeras 48 horas: sin poses, sin instrucciones, solo lo que realmente pasa.",
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
      <section className="svc-hero svc-hero--split">
        <div className="container svc-hero-grid">
          <div className="svc-hero-text">
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "48 Horas Contigo Querétaro" },
              ]}
            />
            <p className="label">Fotografía documental de nacimiento</p>
            <h1>
              48 Horas Contigo: las primeras horas de tu bebé, tal cual pasaron
            </h1>
            <p className="subheading">
              Vamos al hospital o a tu casa en las primeras 48 horas. Sin poses,
              sin instrucciones. Fotografiamos lo que realmente pasa: el primer
              abrazo, la primera mirada, la familia junta por primera vez.
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
          <div className="svc-hero-img">
            <Image
              src="/images/48hs01.jpg"
              alt="Recién nacido con su familia en las primeras horas de vida - sesión 48 Horas Contigo Bambuky"
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
          <h2>Qué es 48 Horas Contigo</h2>
          <p className="body-text">
            Las primeras horas después del nacimiento son un torbellino de
            emociones que pasan demasiado rápido. Entre el cansancio, la
            alegría y la adrenalina, los detalles se desdibujan. 48 Horas
            Contigo existe para que esos instantes no se pierdan: es una
            sesión completamente documental que hacemos en el hospital o en
            tu casa durante las primeras 48 horas de vida de tu bebé.
          </p>
          <p className="body-text">
            No hay poses, no hay escenarios armados, no hay instrucciones.
            Solo estamos ahí, discretos, capturando lo que realmente sucede:
            el primer contacto piel con piel, la primera lactancia, los
            deditos aferrados al dedo de papá, la abuela conociendo a su
            nieto. Cuando nacieron Thiago y Matheo, vivimos ese torbellino en
            doble. Lo que más agradecemos hoy son las fotos que alguien tomó
            sin que nos diéramos cuenta.
          </p>
        </div>
      </section>

      {/* ── Editorial 1: diferencia (texto izq + img der) ── */}
      <section className="svc-editorial">
        <div className="container svc-editorial-grid">
          <div className="svc-editorial-text">
            <h2>Una sesión que no se parece a nada</h2>
            <p className="body-text">
              A diferencia de una sesión newborn en estudio, que se hace entre
              los 5 y 15 días con poses elaboradas y escenarios cuidados,
              48 Horas Contigo ocurre justo cuando todo comienza. No esperamos
              a que el bebé llegue al estudio: vamos nosotros a donde estés.
              Nuestro enfoque es puramente documental, inspirado en la
              fotografía de reportaje, y se centra en las emociones genuinas
              de toda la familia.
            </p>
            <p className="body-text">
              La sesión dura entre 1 y 2 horas, es silenciosa y respetuosa.
              Nos adaptamos a los ritmos del bebé y de la mamá. Si el bebé
              duerme, capturamos la calma. Si llora, capturamos la realidad.
              Lo que buscamos no es la foto perfecta, sino la foto verdadera.
            </p>
          </div>
          <div className="svc-editorial-img">
            <Image
              src="/images/48hs02.jpg"
              alt="Papás con su bebé recién nacido en sesión documental 48 Horas Contigo"
              width={900}
              height={1150}
              sizes="(max-width: 768px) 92vw, 480px"
            />
          </div>
        </div>
      </section>

      {/* ── Content: logística ─────────────── */}
      <section className="svc-content">
        <div className="container">
          <h2>En el hospital, en tu casa, donde estés</h2>
          <p className="body-text">
            Hemos hecho sesiones en hospitales y en casas por todo Querétaro.
            Nos movemos con equipo ligero y discreto para no alterar la
            intimidad del momento. Llegamos, nos presentamos con el equipo
            médico si es necesario, y comenzamos a trabajar sin interrumpir
            la dinámica natural de la familia.
          </p>
          <p className="body-text">
            Cada hospital tiene sus propios horarios y protocolos de visita,
            y nosotros los conocemos. Coordinamos contigo con anticipación
            para que todo fluya. Lo único que necesitas es avisarnos cuando
            nazca tu bebé y nosotros nos encargamos del resto.
          </p>
        </div>
      </section>

      {/* ── Editorial 2: entrega (img izq + texto der) ── */}
      <section className="svc-editorial">
        <div className="container svc-editorial-grid">
          <div className="svc-editorial-img">
            <Image
              src="/images/48hs03.jpg"
              alt="Familia completa mirando al bebé recién nacido - sesión documental Bambuky"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 92vw, 480px"
            />
          </div>
          <div className="svc-editorial-text">
            <h2>Una entrega rápida para momentos que no pueden esperar</h2>
            <p className="body-text">
              Sabemos que después del nacimiento quieres compartir la noticia
              con familia y amigos. Por eso la entrega de esta sesión es más
              rápida que nuestras otras sesiones: generalmente en dos semanas
              recibes tu galería completa con fotografías editadas con nuestro
              estilo cálido y natural. Sin filtros exagerados, sin nada
              artificial. La luz real del momento, bien tratada.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content: complemento newborn ──── */}
      <section className="svc-content">
        <div className="container">
          <h2>Y si también quieres una sesión newborn</h2>
          <p className="body-text">
            Muchas familias combinan 48 Horas Contigo con una sesión newborn
            en nuestro estudio entre los 5 y 15 días del bebé. Son cosas
            distintas: una es el caos real del hospital, las ojeras, los
            nervios, todo crudo. La otra es el bebé ya en calma, con luz
            bonita y poses cuidadas. Las dos juntas cuentan la historia
            completa.
          </p>
          <p className="body-text">
            Si estás esperando a tu bebé y quieres que esas primeras horas
            queden guardadas, escríbenos. No importa si es tu primer hijo o
            el tercero: nosotros llegamos igual de emocionados cada vez.
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
      <section className="svc-mid-cta">
        <div className="container">
          <h2 className="heading">
            Las primeras horas pasan en un instante
          </h2>
          <p className="body-text">
            Tú dedícate a tu bebé. Nosotros nos encargamos de que no se te
            olvide cómo se sintió.
          </p>
          <a
            className="btn-wa"
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
      <SplitCta
        image="/images/48hs02.jpg"
        alt="Papás con su bebé recién nacido en sesión 48 horas - Bambuky Querétaro"
        label="48 Horas Contigo · Querétaro"
        title="¿Ya casi nace tu bebé?"
        text="Escríbenos y platicamos. Te contamos cómo funciona, qué incluye y resolvemos cualquier duda."
        buttonLabel="Pedir información y precios"
        waMessage={WA_MSG}
        microcopy="Respondemos en menos de 2 horas por WhatsApp"
      />
    </>
  );
}
