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
import WhatsAppLink from "@/components/WhatsAppLink";
import GalleryGrid from "@/components/GalleryGrid";
import ServicePageView from "@/components/analytics/ServicePageView";
import { waLink, SITE } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";

/* ── METADATA ────────────────────────────────── */

const PAGE_URL = `${SITE.url}/fotografia-newborn-prematuros-queretaro`;

export const metadata: Metadata = {
  title:
    "Fotografía Newborn de Prematuros en Querétaro | Bambuky · Sin Prisa, a Su Ritmo",
  description:
    "Sesión newborn para bebés prematuros en Querétaro. Trabajamos con la edad corregida y nos adaptamos al ritmo de tu bebé. Cristian y Reyna vivieron la hospitalización neonatal con sus gemelos. Más de 830 recién nacidos fotografiados.",
  alternates: {
    canonical: PAGE_URL,
  },
  keywords: [
    "fotografía newborn prematuros Querétaro",
    "sesión newborn prematuro Querétaro",
    "fotos recién nacido prematuro Querétaro",
    "fotógrafo newborn prematuros Querétaro",
    "sesión fotos bebé prematuro Querétaro",
    "fotografía newborn edad corregida",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Bambuky",
    title:
      "Fotografía Newborn de Prematuros en Querétaro | Bambuky",
    description:
      "Tu bebé llegó antes de tiempo. La sesión puede esperar. Trabajamos con la edad corregida y nos adaptamos a su ritmo. Más de 830 bebés fotografiados en Querétaro.",
    locale: "es_MX",
    images: [
      {
        url: "/images/sesion-prematuro-newborn-queretaro-bambuky-01.webp",
        width: 1200,
        height: 630,
        alt: "Recién nacido dormido y envuelto en manta blanca durante sesión newborn en Bambuky, Querétaro",
      },
    ],
  },
};

/* ── JSON-LD ─────────────────────────────────── */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "Fotografía Newborn", url: `${SITE.url}/fotografia-newborn-queretaro` },
  { name: "Prematuros", url: PAGE_URL },
]);

const serviceLd = serviceSchema({
  name: "Fotografía Newborn de Prematuros · Sesión a Su Ritmo en Querétaro",
  description:
    "Sesión de fotografía newborn adaptada a bebés prematuros. Trabajamos con la edad corregida, sin límite de tiempo. Fotógrafos con experiencia personal en prematurez y más de 830 recién nacidos fotografiados.",
  url: PAGE_URL,
  image: "/images/sesion-prematuro-newborn-queretaro-bambuky-01.webp",
});

const PREMATUROS_FAQS = [
  {
    q: "¿Mi bebé fue prematuro, puedo hacer sesión newborn?",
    a: "Sí. Trabajamos con la edad corregida, no con la cronológica. Nos escribes, nos cuentas cuántas semanas tenía al nacer y cómo está hoy, y encontramos juntos el mejor momento. Si necesita más tiempo, esperamos.",
  },
  {
    q: "¿Qué es la edad corregida y cómo la calculan?",
    a: "Contamos desde la fecha en que tu bebé debía nacer, no desde la fecha en que nació. Por ejemplo, si nació a las 32 semanas y hoy tiene un mes de vida, su edad corregida es aproximadamente como un recién nacido de pocos días. Eso nos ayuda a encontrar el momento ideal para la sesión.",
  },
  {
    q: "¿Necesitan saber su historial médico?",
    a: "No necesitamos historiales ni diagnósticos. No somos médicos y no realizamos evaluaciones médicas ni sustituimos al pediatra. Lo que sí te preguntamos es cómo está tu bebé hoy: si come bien, si duerme, si tiene alguna situación que debamos considerar para la sesión. Si algo nos parece inusual durante la sesión, te lo comentamos y recomendamos que lo consultes con su pediatra.",
  },
  {
    q: "¿Qué pasa si mi bebé todavía no está listo?",
    a: "Esperamos. No hay penalización, no hay fecha límite. Algunos bebés necesitan más semanas para estar en su mejor momento. Preferimos esperar y hacer una sesión tranquila que apurarnos.",
  },
  {
    q: "¿Mis gemelos nacieron prematuros, pueden hacer la sesión?",
    a: "Sí. Somos padres de gemelos y conocemos las dos experiencias desde adentro. La sesión se adapta a la edad corregida de cada bebé. Tenemos una página completa sobre nuestra sesión de gemelos donde te contamos cómo funciona.",
  },
];

const faqLd = faqSchema(PREMATUROS_FAQS);

/* ── PAGE COMPONENT ──────────────────────────── */

const WA_MESSAGE =
  "Hola Bambuky, mi bebé nació prematuro y quisiera información sobre la sesión newborn 🌿";

export default function FotografiaNewbornPrematurosQueretaro() {
  return (
    <>
      <ServicePageView serviceType="newborn-prematuros" />
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
                  { label: "Prematuros" },
                ]}
              />
              <p className="label">
                Prematuros &middot; Tu bebé marca los tiempos
              </p>
              <h1>
                Fotografía Newborn de Prematuros en Querétaro: tu bebé
                llegó antes, la sesión puede esperar
              </h1>
              <p className="subheading">
                Vivimos la hospitalización neonatal con nuestros gemelos.
                Sabemos lo que se siente esperar el alta, ir al hospital
                cada día y vivir los primeros días con incertidumbre. Si
                tu bebé nació antes de tiempo, entendemos tu historia. Y
                la sesión se adapta a ella.
              </p>
              <WhatsAppLink
                className="btn-wa"
                href={waLink(WA_MESSAGE)}
                location="hero"
                buttonName="Pedir información y precios"
                serviceType="newborn-prematuros"
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
                src="/images/sesion-prematuro-newborn-queretaro-bambuky-01.webp"
                alt="Recién nacida dormida y sonriente, envuelta en manta blanca durante sesión newborn en Bambuky, Querétaro"
                width={1200}
                height={1600}
                sizes="(max-width: 768px) 92vw, 420px"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Experiencia personal ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>
                Sabemos lo que se siente regresar a casa sin tu bebé
              </h2>
              <p className="body-text">
                Cuando nacieron nuestros gemelos, Thiago y Matheo, vivimos
                la hospitalización neonatal. Las visitas constantes al
                hospital, la incertidumbre de cuándo iban a darnos el
                alta, la sensación de separación. Son días que se sienten
                largos y que cambian todo lo que imaginaste durante el
                embarazo.
              </p>
              <p className="body-text">
                Esa experiencia cambió por completo la forma en la que
                recibimos a las familias que llegan con una historia
                parecida. No es lo mismo decir &ldquo;entendemos&rdquo;
                que haberlo vivido. Cuando una mamá nos cuenta lo que
                pasó, no tenemos que imaginarlo. Lo reconocemos.
              </p>
              <p className="body-text">
                Podés leer más sobre{" "}
                <Link href="/sobre-nosotros">nuestra historia aquí</Link>.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/behind.jpg"
                alt="Cristian y Reyna, fotógrafos newborn y padres de gemelos - estudio Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── La sesión se adapta ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Una sesión que se adapta a la historia de tu bebé</h2>
            <p className="body-text">
              La sesión newborn de un bebé que nació antes de tiempo no es
              igual a la de un bebé de término. Algunos llegan al estudio
              ya con semanas de adaptación y están perfectamente listos.
              Otros necesitan más calma, más cuidado, más tiempo. No hay
              una fórmula porque cada bebé trae su propia historia.
            </p>
            <p className="body-text">
              Lo que sí hay es la certeza de que la sesión se ajusta al
              bebé, nunca al revés. Si necesita más pausas, las hacemos.
              Si necesita estar más tiempo en brazos de mamá, esperamos.
              Si ese día no es el día, reprogramamos sin ningún problema.
              Nuestra{" "}
              <Link href="/fotografia-newborn-queretaro">
                sesión newborn
              </Link>{" "}
              siempre funciona así, y con un prematuro esa filosofía se
              vuelve todavía más importante.
            </p>
          </div>
        </section>

        {/* ── Edad corregida ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn4.jpg"
                alt="Recién nacido durmiendo tranquilo, envuelto en tela suave, durante sesión newborn en Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
            <div className="svc-editorial-text">
              <h2>
                ¿Cuándo hacer la sesión? Trabajamos con la edad corregida
              </h2>
              <p className="body-text">
                Contamos desde la fecha en que tu bebé debía haber nacido,
                no desde la fecha en que nació. Si nació a las 34 semanas
                y hoy tiene tres semanas de vida, su edad corregida es
                como si tuviera pocos días. Eso nos ayuda a encontrar el
                momento en que el bebé está en la mejor etapa para la
                sesión.
              </p>
              <p className="body-text">
                Lo que nos importa no es la fecha en el calendario. Es
                cómo está tu bebé. Nos escribes, nos cuentas su historia,
                y juntos vemos cuándo es el mejor momento. Si necesita más
                tiempo, esperamos. No hay prisa.
              </p>
            </div>
          </div>
        </section>

        {/* ── Qué hacemos diferente ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Qué hacemos diferente con un bebé que llegó antes</h2>
            <p className="body-text">
              El check-up visual que hacemos antes de cada sesión toma
              mayor importancia. Observamos con más atención cómo está el
              bebé, cómo responde, qué señales nos da. Las pausas pueden
              ser más frecuentes. Los tiempos pueden ser distintos. No
              somos médicos y no realizamos evaluaciones médicas. Lo que
              hacemos es observar con cuidado y, si algo nos parece
              inusual, te lo decimos para que lo consultes con su
              pediatra.
            </p>
            <p className="body-text">
              También prestamos atención a los papás. Muchas familias
              llegan con una carga emocional distinta a la de una
              maternidad convencional. La sesión no es solo para el
              bebé. Es un momento para toda la familia. Tenemos más
              respuestas a preguntas específicas en nuestra sección de{" "}
              <Link href="/preguntas-frecuentes#prematuros">
                preguntas frecuentes sobre prematuros
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── Gemelos prematuros ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>Si tus gemelos también llegaron antes de tiempo</h2>
              <p className="body-text">
                Muchos gemelos nacen prematuros. Es una realidad que
                conocemos desde adentro. Si ese es tu caso, entendemos
                las dos experiencias: la de tener dos bebés al mismo
                tiempo y la de haber transitado un camino que no fue el
                que imaginaste.
              </p>
              <p className="body-text">
                Tenemos una{" "}
                <Link href="/fotografia-newborn-gemelos-queretaro">
                  sesión especialmente pensada para gemelos
                </Link>{" "}
                donde contamos cómo nos organizamos, qué tiempos
                manejamos y por qué nuestra experiencia como padres cambia
                la forma en la que trabajamos.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn7.jpg"
                alt="Recién nacido dormido en bowl artesanal con flores lilas, durante sesión newborn en Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── Cada bebé tiene su tiempo ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Cada bebé tiene su propio tiempo</h2>
            <p className="body-text">
              El momento ideal para la sesión no lo decide un calendario.
              Lo decide tu bebé. Algunos están listos a las pocas semanas
              de llegar a casa. Otros necesitan más tiempo para ganar
              peso, para adaptarse, para estar tranquilos fuera del
              hospital. Los dos caminos son válidos y los dos terminan en
              el mismo lugar: una sesión hecha a su medida, a su ritmo,
              sin apuro.
            </p>
            <p className="body-text">
              Cuando tu bebé esté listo, nosotros también. Y cuando
              llegue ese día, vamos a recibirlos con la misma calma y
              el mismo cuidado que le damos a cada familia que cruza la
              puerta del estudio.
            </p>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="svc-gallery">
          <div className="container">
            <div className="section-header">
              <p className="label">Galería</p>
              <h2 className="heading">
                A su ritmo, a su tiempo
              </h2>
            </div>
            <GalleryGrid section="newborn-prematuros">
              {[
                {
                  src: "/images/sesion-prematuro-newborn-queretaro-bambuky-01.webp",
                  alt: "Recién nacida dormida y sonriente, envuelta en manta blanca durante sesión newborn en Bambuky, Querétaro",
                },
                {
                  src: "/images/newborn2.jpg",
                  alt: "Recién nacido con diadema floral, envuelto en tela blanca, sesión newborn en Bambuky Querétaro",
                },
                {
                  src: "/images/newborn3.jpg",
                  alt: "Recién nacido dormido en cama miniatura de madera, sesión newborn en Bambuky Querétaro",
                },
                {
                  src: "/images/newborn5.jpg",
                  alt: "Recién nacido en pose lateral con traje crema, sesión newborn en Bambuky Querétaro",
                },
                {
                  src: "/images/newborn1.jpg",
                  alt: "Recién nacido dormido en canasta con flores rosas, sesión newborn en Bambuky Querétaro",
                },
                {
                  src: "/images/newborn4.jpg",
                  alt: "Recién nacido durmiendo envuelto en tela suave, sesión newborn en Bambuky Querétaro",
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
            </GalleryGrid>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section className="svc-mid-cta">
          <div className="container">
            <h2 className="heading">
              Cuéntanos la historia de tu bebé
            </h2>
            <p className="body-text">
              Nos escribes por WhatsApp, nos cuentas cuándo nació, cuántas
              semanas tenía, y vemos juntos cuál es el mejor momento. Sin
              prisa, sin compromiso.
            </p>
            <WhatsAppLink
              className="btn-wa"
              href={waLink(WA_MESSAGE)}
              location="cta_mid"
              buttonName="Escríbenos por WhatsApp"
              serviceType="newborn-prematuros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Escríbenos por WhatsApp
            </WhatsAppLink>
            <p className="svc-microcopy">
              Te respondemos hoy mismo
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ items={PREMATUROS_FAQS} id="preguntas-prematuros" />

        {/* ── Related services ── */}
        <RelatedServices
          current="/fotografia-newborn-prematuros-queretaro"
          show={[
            "/fotografia-newborn-queretaro",
            "/fotografia-newborn-gemelos-queretaro",
            "/48-horas-contigo-queretaro",
          ]}
        />

        {/* ── Final CTA ── */}
        <SplitCta
          image="/images/sesion-prematuro-newborn-queretaro-bambuky-01.webp"
          alt="Recién nacida dormida y sonriente, envuelta en manta blanca durante sesión newborn en Bambuky, Querétaro"
          label="Newborn Prematuros · Querétaro"
          title="No hay prisa. Cuando tu bebé esté listo, nosotros también."
          text="Escríbenos y platicamos. Cada bebé tiene su tiempo."
          buttonLabel="Pedir información y precios"
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
