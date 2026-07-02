import type { Metadata } from "next";
import Image from "next/image";
import { waLink } from "@/lib/site";
import { SITE } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { MATERNIDAD_FAQS } from "@/lib/faqs";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import SplitCta from "@/components/SplitCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLink from "@/components/WhatsAppLink";
import GalleryGrid from "@/components/GalleryGrid";
import ServicePageView from "@/components/analytics/ServicePageView";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/* -- METADATA ---------------------------------------- */

const PAGE_URL = `${SITE.url}/fotografia-maternidad-queretaro`;
const WA_MESSAGE =
  "Hola Bambuky, quisiera información sobre la sesión de maternidad 🌿";

export const metadata: Metadata = {
  title: "Fotografía de Maternidad en Querétaro | Bambuky · Sesión Embarazo",
  description:
    "Sesión de fotografía de maternidad en Querétaro. Estudio profesional con vestidos incluidos. Ideal entre la semana 28 y 34 del embarazo. Cristian y Reyna, +10 años de experiencia.",
  alternates: {
    canonical: PAGE_URL,
  },
  keywords: [
    "fotografía maternidad Querétaro",
    "sesión embarazo Querétaro",
    "fotografía embarazo Querétaro",
    "fotos maternidad Querétaro",
    "estudio maternidad Querétaro",
    "fotógrafo maternidad Juriquilla",
    "sesión maternidad Zibatá",
    "maternity photography Querétaro",
    "fotografía embarazada Querétaro",
    "sesión de fotos embarazo Querétaro",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Bambuky",
    title: "Fotografía de Maternidad en Querétaro | Bambuky",
    description:
      "Sesión de fotografía de maternidad en estudio profesional en Querétaro. Vestidos incluidos, dirección de poses y acompañamiento de Cristian y Reyna. Semana 28–34.",
    locale: "es_MX",
    images: [
      {
        url: "/images/maternidad3.jpg",
        width: 1200,
        height: 630,
        alt: "Fotografía de maternidad en Querétaro - sesión de embarazo en estudio Bambuky",
      },
    ],
  },
};

/* -- JSON-LD DATA ------------------------------------ */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "Fotografía de Maternidad Querétaro", url: PAGE_URL },
]);

const serviceLd = serviceSchema({
  name: "Fotografía de Maternidad · Sesión Embarazo en Querétaro",
  description:
    "Sesión de fotografía de maternidad en estudio profesional. Vestidos incluidos, dirección artística y acompañamiento emocional. Ideal entre la semana 28 y 34 del embarazo.",
  url: PAGE_URL,
  image: "/images/maternidad3.jpg",
});

const faqLd = faqSchema(MATERNIDAD_FAQS);

/* -- PAGE COMPONENT ---------------------------------- */

export default function FotografiaMaternidadQueretaro() {
  return (
    <>
      <ServicePageView serviceType="maternidad" />
      {/* -- Structured data -- */}
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
        {/* -- Hero -- */}
        <section className="svc-hero svc-hero--split">
          <div className="container svc-hero-grid">
            <div className="svc-hero-text">
              <Breadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Fotografía de Maternidad Querétaro" },
                ]}
              />
              <p className="label">Maternidad &middot; Semana 28&ndash;34</p>
              <h1>
                Fotografía de Maternidad en Querétaro: tu cuerpo
                está haciendo algo increíble y merece verse así
              </h1>
              <p className="subheading">
                Una sesión tranquila en nuestro estudio, con vestidos,
                telas y dirección de poses incluidos. Tú solo
                llégate &mdash; nosotros nos encargamos de todo.
              </p>
              <WhatsAppLink
                className="btn-wa"
                href={waLink(WA_MESSAGE)}
                location="hero"
                buttonName="Pedir información y precios"
                serviceType="maternidad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> Pedir información y precios
              </WhatsAppLink>
              <p className="svc-microcopy">
                Te respondemos por WhatsApp en minutos
              </p>
            </div>
            <div className="svc-hero-img">
              <Image
                src="/images/maternidad8.jpg"
                alt="Cristian y Reyna en su sesión de maternidad - Bambuky Fotografía Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 420px"
                priority
              />
            </div>
          </div>
        </section>

        {/* -- Content: intro -- */}
        <section className="svc-content">
          <div className="container">
            <h2>Cómo es una sesión de maternidad con nosotros</h2>
            <p className="body-text">
              Lo primero que hacemos es platicar contigo. Te preguntamos
              qué estilo te gusta, qué colores te hacen sentir bien,
              si quieres algo más clásico o más arriesgado. Con
              eso armamos la selección de vestidos, telas e
              iluminación. No hay fórmula &mdash; cada sesión
              sale diferente porque cada mamá es diferente.
            </p>
            <p className="body-text">
              Somos dos en cada sesión, siempre. Reyna te dirige las
              poses, te ayuda con cada cambio de vestido y está pendiente
              de que estés cómoda: agua, snack, descanso, lo que
              necesites. Cristian se encarga de la cámara. Llevamos más
              de 10 años fotografiando familias y somos papás de
              gemelos, así que sabemos lo que se siente esperar un hijo.
            </p>
          </div>
        </section>

        {/* -- Editorial: semana ideal (texto izq + img der) -- */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>La semana ideal: entre la 28 y la 34</h2>
              <p className="body-text">
                Te recomendamos venir entre la semana 28 y la 34. El vientre de
                mamá ya se nota bien y normalmente todavía te sientes
                con energía para moverte y posar. Pero si ya pasaste de la
                34 o quieres hacerla antes, no hay problema &mdash;
                escríbenos y lo platicamos. Hemos hecho sesiones en la
                semana 38 y quedan increíbles.
              </p>
              <p className="body-text">
                Lo mejor es que nos escribas desde que decidas que quieres la
                sesión. Apartamos la fecha y si necesitas moverla, la
                movemos sin problema.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/maternidad3.jpg"
                alt="Fotografía de embarazo en estudio - mamá con vestido de maternidad"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* -- Content: vestidos y direccion -- */}
        <section className="svc-content">
          <div className="container">
            <h2>Vestidos, telas y dirección artística incluidos</h2>
            <p className="body-text">
              No tienes que traer nada. Tenemos vestidos de maternidad, tops,
              telas y accesorios &mdash; los vamos renovando seguido para que
              siempre haya opciones frescas. Tú eliges lo que te guste y
              Reyna te ayuda a probártelo antes de empezar. Si quieres
              traer algo tuyo también funciona: los zapatos del bebé,
              un ultrasonido, una carta, lo que tenga significado para ti.
            </p>
            <p className="body-text">
              Si nunca te han tomado fotos profesionales, no te preocupes.
              Reyna te va diciendo dónde poner las manos, cómo
              girar, hacia dónde mirar &mdash; todo paso a paso. La
              mayoría de las mamás llegan nerviosas y a los diez
              minutos ya están riéndose. No necesitas saber posar;
              para eso estamos nosotros.
            </p>
          </div>
        </section>

        {/* -- Editorial: familia (img izq + texto der) -- */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-img">
              <Image
                src="/images/maternidad5.jpg"
                alt="Sesión de maternidad en pareja - fotografía de embarazo en estudio"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
            <div className="svc-editorial-text">
              <h2>Tu pareja y tu familia también son parte</h2>
              <p className="body-text">
                Si quieres que venga tu pareja o tus hijos
                &mdash; bienvenidos. Algunas de las fotos que más nos
                gustan son así: el hermano mayor abrazando el vientre de
                mamá, tu pareja viéndote de una forma que no
                sabías que podía verse en una foto. Esos momentos
                pasan rápido en la vida real, pero en la sesión los
                podemos detener.
              </p>
            </div>
          </div>
        </section>

        {/* -- Content: lo que nos dicen -- */}
        <section className="svc-content">
          <div className="container">
            <h2>Lo que nos dicen las mamás después</h2>
            <p className="body-text">
              Algo que nos pasa seguido: mamás nos escriben días
              después diciendo que la sesión les cambió la forma
              de verse a sí mismas durante el embarazo. No porque hagamos
              algo mágico &mdash; sino porque por una hora, alguien las
              cuidó, las dirigió y les dijo &ldquo;quédate
              así, te ves increíble&rdquo;. A veces eso es lo que
              necesitas cuando tu cuerpo se siente raro y nuevo.
            </p>
            <p className="body-text">
              Si quieres sentirte acompañada y no solo
              &ldquo;posada&rdquo;, escríbenos por WhatsApp. Te platicamos
              cómo funciona, vemos fechas y armamos algo que se ajuste a lo
              que tú quieres.
            </p>
          </div>
        </section>

        {/* -- Gallery -- */}
        <section className="svc-gallery">
          <div className="container">
            <div className="section-header">
              <p className="label">Galería</p>
              <h2 className="heading">Sesiones de maternidad</h2>
            </div>
            <GalleryGrid section="maternidad">
              <div className="svc-gallery-item">
                <Image
                  src="/images/maternidad2.jpg"
                  alt="Fotografía embarazo - sesión de maternidad en estudio"
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/maternidad5.jpg"
                  alt="Fotografía maternidad - pareja esperando bebé"
                  width={900}
                  height={1250}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/maternidad6.jpg"
                  alt="Maternidad en pareja - sesión de embarazo en estudio"
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/maternidad7.jpg"
                  alt="Sesión de embarazo en pareja - estudio Bambuky"
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/maternidad8.jpg"
                  alt="Fotografía de maternidad en estudio - Bambuky"
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
            </GalleryGrid>
          </div>
        </section>

        {/* -- Mid CTA -- */}
        <section className="svc-mid-cta">
          <div className="container">
            <h2 className="heading">
              Esto pasa rápido &mdash; que queden las fotos
            </h2>
            <p className="body-text">
              Escríbenos y te contamos paquetes, fechas disponibles y
              qué llevar el día de tu sesión. Sin compromiso.
            </p>
            <WhatsAppLink
              className="btn-wa"
              href={waLink(WA_MESSAGE)}
              location="cta_mid"
              buttonName="Agendar mi sesión de maternidad"
              serviceType="maternidad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Agendar mi sesión de maternidad
            </WhatsAppLink>
            <p className="svc-microcopy">
              Te orientamos según tu semana de embarazo
            </p>
          </div>
        </section>

        {/* -- FAQ -- */}
        <FAQ items={MATERNIDAD_FAQS} id="preguntas-maternidad" />

        {/* -- Related services -- */}
        <RelatedServices
          current="/fotografia-maternidad-queretaro"
          show={[
            "/fotografia-newborn-queretaro",
            "/48-horas-contigo-queretaro",
          ]}
        />

        {/* -- Final CTA -- */}
        <SplitCta
          image="/images/maternidad5.jpg"
          alt="Sesión de fotografía de maternidad en Querétaro - Bambuky"
          label="Maternidad · Querétaro"
          title="Platiquemos de tu sesión"
          text="Un mensaje por WhatsApp y te respondemos con todo: estilos, precios y fechas. Nos adaptamos a ti."
          buttonLabel="Reservar por WhatsApp"
          waMessage={WA_MESSAGE}
          microcopy="Te respondemos por WhatsApp"
          location="cta_final"
        />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
