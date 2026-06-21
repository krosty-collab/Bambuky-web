import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import RelatedServices from "@/components/RelatedServices";
import SplitCta from "@/components/SplitCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink, SITE } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";

/* ── METADATA ────────────────────────────────── */

const PAGE_URL = `${SITE.url}/fotografia-newborn-gemelos-queretaro`;

export const metadata: Metadata = {
  title:
    "Fotografía Newborn de Gemelos en Querétaro | Bambuky · Cristian y Reyna, Papás de Gemelos",
  description:
    "Sesión newborn de gemelos en Querétaro por Cristian y Reyna, papás de gemelos. Entendemos lo que significa tener dos bebés al mismo tiempo porque lo vivimos. Más de 830 recién nacidos, estudio climatizado, cero prisa.",
  alternates: {
    canonical: PAGE_URL,
  },
  keywords: [
    "fotografía newborn gemelos Querétaro",
    "sesión newborn gemelos Querétaro",
    "fotógrafo recién nacidos gemelos Querétaro",
    "fotos gemelos recién nacidos Querétaro",
    "fotografía newborn mellizos Querétaro",
    "sesión fotos gemelos bebés Querétaro",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Bambuky",
    title:
      "Fotografía Newborn de Gemelos en Querétaro | Bambuky",
    description:
      "Cristian y Reyna son papás de gemelos. Entienden la sesión desde adentro. Estudio climatizado en Querétaro, más de 830 bebés fotografiados.",
    locale: "es_MX",
    images: [
      {
        url: "/images/newborn1.jpg",
        width: 1200,
        height: 630,
        alt: "Fotografía newborn de gemelos en Querétaro - estudio Bambuky",
      },
    ],
  },
};

/* ── JSON-LD ─────────────────────────────────── */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "Fotografía Newborn", url: `${SITE.url}/fotografia-newborn-queretaro` },
  { name: "Gemelos", url: PAGE_URL },
]);

const serviceLd = serviceSchema({
  name: "Fotografía Newborn de Gemelos · Sesión para Dos en Querétaro",
  description:
    "Sesión de fotografía newborn especializada para gemelos. Fotógrafos padres de gemelos con experiencia personal y profesional. Estudio climatizado, protocolos de seguridad, sin límite de tiempo.",
  url: PAGE_URL,
  image: "/images/newborn1.jpg",
});

const GEMELOS_FAQS = [
  {
    q: "¿A qué edad se hace la sesión newborn de gemelos?",
    a: "En la misma ventana que una sesión individual: entre los 5 y 15 días de nacidos. Si tus gemelos fueron prematuros, trabajamos con la edad corregida. Escríbenos cuando nazcan y encontramos juntos el mejor momento.",
  },
  {
    q: "¿Necesitamos traer ayuda extra a la sesión?",
    a: "Sí, siempre recomendamos que vengan con una persona adicional además de mamá y papá. Puede ser un abuelo, una tía, alguien de confianza. Mientras trabajamos con un bebé, esa persona sostiene al otro. Hace toda la diferencia.",
  },
  {
    q: "¿Hacen fotos individuales y juntos?",
    a: "Sí, las dos cosas. Hacemos poses individuales de cada bebé, fotos de los dos juntos y retratos con mamá, papá o la familia completa. Las fotos de gemelos juntos — buscándose, tocándose, acomodándose uno contra el otro — suelen ser las favoritas.",
  },
  {
    q: "¿Qué pasa si uno duerme y el otro no?",
    a: "Pasa seguido y estamos preparados. Trabajamos con el que coopera y esperamos al otro. A veces uno necesita comer, a veces los dos al mismo tiempo. No nos ponemos un límite de tiempo rígido. La sesión dura lo que los bebés necesiten.",
  },
  {
    q: "¿Y si mis gemelos fueron prematuros?",
    a: "En bebés prematuros trabajamos con la edad corregida, no con la cronológica. Nos cuentas su historia y vemos juntos cuándo es el mejor momento. Si necesitan más tiempo para estar listos, esperamos. Vivimos esa experiencia en carne propia y entendemos lo que significa. Tenemos una página completa sobre nuestra sesión para prematuros.",
  },
];

const faqLd = faqSchema(GEMELOS_FAQS);

/* ── PAGE COMPONENT ──────────────────────────── */

const WA_MESSAGE =
  "Hola Bambuky, estamos esperando gemelos y queremos información sobre la sesión newborn 👶👶";

export default function FotografiaNewbornGemelosQueretaro() {
  return (
    <>
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
                  {
                    label: "Fotografía Newborn",
                    href: "/fotografia-newborn-queretaro",
                  },
                  { label: "Gemelos" },
                ]}
              />
              <p className="label">Gemelos &middot; Sesión para dos</p>
              <h1>
                Fotografía Newborn de Gemelos en Querétaro: sabemos lo que
                se siente porque lo vivimos
              </h1>
              <p className="subheading">
                Somos Cristian y Reyna, papás de Thiago y Matheo. Sabemos
                lo que significa tener dos necesidades al mismo tiempo. Por
                eso una sesión de gemelos con nosotros no es una sesión
                newborn multiplicada por dos &mdash; es una sesión pensada
                desde adentro.
              </p>
              <a
                className="btn-wa"
                href={waLink(WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> Pedir información y precios
              </a>
              <p className="svc-microcopy">
                Te respondemos por WhatsApp en minutos
              </p>
            </div>
            <div className="svc-hero-img">
              <Image
                src="/images/newborn1.jpg"
                alt="Fotografía newborn de gemelos recién nacidos en estudio Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 420px"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Lo que aprendimos siendo papás de gemelos ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>Lo que aprendimos siendo papás de gemelos</h2>
              <p className="body-text">
                En 2022 nos enteramos de que esperábamos gemelos. Thiago y
                Matheo llegaron para ponernos del otro lado: el de los papás
                que ponen a sus hijos de días de nacido en manos de alguien
                más. Entendimos en carne propia lo que significa tener dos
                bebés que necesitan cosas distintas al mismo tiempo. Dos
                despertares. Dos alimentaciones. Dos ritmos que casi nunca
                coinciden.
              </p>
              <p className="body-text">
                También vivimos la hospitalización neonatal. Sabemos lo que es
                ir al hospital cada día, esperar el alta, volver a casa sin
                saber si mañana va a ser el día. Esa incertidumbre de los
                primeros días la conocemos de primera mano. No es algo que
                leímos. Es algo que nos pasó. Y cambió por completo la forma
                en la que recibimos a cada familia que llega con gemelos al
                estudio.
              </p>
              <p className="body-text">
                Podés conocer más de{" "}
                <Link href="/sobre-nosotros">nuestra historia aquí</Link>.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/behind.jpg"
                alt="Cristian y Reyna en su estudio de fotografía newborn - papás de gemelos, Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── Por qué es distinta ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Por qué una sesión de gemelos es distinta</h2>
            <p className="body-text">
              La dificultad no es fotografiar dos bebés. Es que existen dos
              ritmos al mismo tiempo. Uno se duerme y el otro se despierta.
              Uno necesita comer y el otro necesita que lo sostengan. A veces
              los dos lloran juntos. A veces los dos duermen al mismo
              tiempo y tenés una ventana de diez minutos para hacer magia.
            </p>
            <p className="body-text">
              Una sesión de gemelos necesita más tiempo, más paciencia y la
              capacidad de leer las señales de dos recién nacidos
              simultáneamente. Después de más de 830 bebés aprendimos a
              interpretar lo que cada uno necesita antes de que llegue el
              llanto. Con gemelos esa habilidad se vuelve esencial. Si
              querés conocer cómo funciona nuestra{" "}
              <Link href="/fotografia-newborn-queretaro">
                sesión newborn en detalle
              </Link>
              , te contamos todo ahí.
            </p>
          </div>
        </section>

        {/* ── Cómo funciona ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn4.jpg"
                alt="Gemelos recién nacidos durmiendo juntos en sesión newborn - estudio Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
            <div className="svc-editorial-text">
              <h2>Cómo funciona la sesión de gemelos</h2>
              <p className="body-text">
                La sesión dura más que una sesión individual. No ponemos un
                límite rígido porque con gemelos los tiempos son
                impredecibles. Empezamos con el bebé que esté más
                tranquilo mientras el otro descansa en brazos. Hacemos poses
                individuales, fotos de los dos juntos y retratos con mamá,
                papá o la familia completa.
              </p>
              <p className="body-text">
                Te pedimos que vengas con una persona extra de apoyo:
                un abuelo, una tía, alguien de confianza. Mientras
                trabajamos con un bebé, esa persona sostiene al otro. El
                estudio está climatizado entre 26 y 28 grados, como en
                todas nuestras sesiones. Mismos protocolos de seguridad:
                check-up visual antes de empezar, manos sanitizadas,
                montaje digital para poses complejas. Todo multiplicado por
                dos, pero con la misma calma.
              </p>
            </div>
          </div>
        </section>

        {/* ── Cuando los ves juntos ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Cuando los ves juntos, se te olvida todo lo demás</h2>
            <p className="body-text">
              Hay un momento en la sesión que se repite siempre: ponemos a
              los dos juntos, se buscan, se tocan, se acomodan uno contra
              el otro como si supieran exactamente dónde va cada quien.
              Vivieron nueve meses así. Reconocen al otro. Y cuando los
              ves, todo el cansancio de las últimas semanas se
              relativiza.
            </p>
            <p className="body-text">
              Las fotos de gemelos juntos suelen ser las que más emocionan a
              los papás. No solo porque son bonitas, sino porque capturan
              algo que ya no se va a repetir: esos primeros días donde los
              dos caben en el mismo rebozo, donde las manos de papá
              sostienen a los dos al mismo tiempo, donde todavía son así
              de chiquitos.
            </p>
          </div>
        </section>

        {/* ── Lo que les decimos ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>Lo que les decimos a todos los papás de gemelos</h2>
              <p className="body-text">
                La rutina es una herramienta de supervivencia. Siempre que
                puedan, traten de sincronizar: alimentar juntos, cambiar
                juntos, dormir juntos. Cuando los horarios coinciden, el
                descanso aparece. Cuando no coinciden, todo se complica.
                La sincronización no es un lujo. Es lo que los va a
                sostener durante las primeras semanas.
              </p>
              <p className="body-text">
                Y si eso les sirve de algo: si nosotros pudimos con dos,
                ustedes pueden con uno. No lo decimos como comparación.
                Lo decimos porque las primeras semanas son difíciles para
                todos. Y mejoran. Con tiempo, con experiencia y con la
                tranquilidad de saber que no están solos en esto.
              </p>
              <p className="body-text">
                Tenemos más respuestas a preguntas de papás de gemelos en
                nuestra sección de{" "}
                <Link href="/preguntas-frecuentes#gemelos">
                  preguntas frecuentes
                </Link>
                .
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn7.jpg"
                alt="Sesión newborn de gemelos - bebés recién nacidos en bowl con flores, Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="svc-gallery">
          <div className="container">
            <div className="section-header">
              <p className="label">Galería</p>
              <h2 className="heading">
                Así se ven los primeros días con gemelos
              </h2>
            </div>
            <div className="svc-gallery-grid">
              {[
                {
                  src: "/images/newborn1.jpg",
                  alt: "Fotografía newborn gemelos Querétaro - bebés en canasta con flores, estudio Bambuky",
                },
                {
                  src: "/images/newborn2.jpg",
                  alt: "Sesión newborn gemelos Querétaro - bebé envuelto en tela blanca con diadema",
                },
                {
                  src: "/images/newborn3.jpg",
                  alt: "Fotografía gemelos recién nacidos Querétaro - bebé en cama miniatura de madera",
                },
                {
                  src: "/images/newborn5.jpg",
                  alt: "Sesión gemelos newborn Querétaro - pose lateral en traje crema",
                },
                {
                  src: "/images/newborn6.jpg",
                  alt: "Fotografía newborn gemelos Querétaro - bebé con accesorios artesanales",
                },
                {
                  src: "/images/newborn4.jpg",
                  alt: "Sesión recién nacidos gemelos Querétaro - bebé durmiendo en envoltura suave",
                },
              ].map((img) => (
                <div className="svc-gallery-item" key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={900}
                    height={1200}
                    sizes="(max-width: 768px) 92vw, 30vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section className="svc-mid-cta">
          <div className="container">
            <h2 className="heading">
              Escríbenos y platicamos de tus gemelos
            </h2>
            <p className="body-text">
              Si todavía estás embarazada, es buen momento para apartar
              fecha. Si ya nacieron, cuéntanos cuántos días tienen y vemos
              cómo organizarnos.
            </p>
            <a
              className="btn-wa"
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Agendar mi sesión de gemelos
            </a>
            <p className="svc-microcopy">
              Te orientamos según la edad de tus bebés
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ items={GEMELOS_FAQS} id="preguntas-gemelos" />

        {/* ── Related services ── */}
        <RelatedServices
          current="/fotografia-newborn-gemelos-queretaro"
          show={[
            "/fotografia-newborn-queretaro",
            "/48-horas-contigo-queretaro",
            "/fotografia-maternidad-queretaro",
          ]}
        />

        {/* ── Final CTA ── */}
        <SplitCta
          image="/images/newborn5.jpg"
          alt="Recién nacido envuelto y dormido en sesión newborn - Bambuky Querétaro"
          label="Newborn Gemelos · Querétaro"
          title="Dos bebés. Dos historias. Todo el tiempo que necesiten."
          text="Escríbenos y platicamos con calma sobre tus gemelos."
          buttonLabel="Pedir información y precios"
          waMessage={WA_MESSAGE}
          microcopy="Te respondemos por WhatsApp"
        />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
