import type { Metadata } from "next";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { SMASH_FAQS } from "@/lib/faqs";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import RelatedServices from "@/components/RelatedServices";
import SplitCta from "@/components/SplitCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/* ── METADATA ────────────────────────────────── */

export const metadata: Metadata = {
  title: "Smash Cake en Querétaro | Bambuky · Fotos Primer Cumpleaños",
  description:
    "Sesión smash the cake en Querétaro. Decoración temática personalizada, pastel y mucha diversión para celebrar el primer cumpleaños de tu bebé. Estudio Bambuky.",
  alternates: {
    canonical: `${SITE.url}/smash-cake-queretaro`,
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/smash-cake-queretaro`,
    siteName: "Bambuky",
    title: "Smash Cake en Querétaro | Bambuky · Fotos Primer Cumpleaños",
    description:
      "Celebra el primer año de tu bebé con una sesión smash the cake llena de color, decoración temática y momentos inolvidables. Estudio Bambuky en Querétaro.",
    locale: "es_MX",
    images: [
      {
        url: "/images/smash05.jpg",
        width: 1200,
        height: 630,
        alt: "Smash the Cake Querétaro - sesión primer cumpleaños en estudio Bambuky",
      },
    ],
  },
};

/* ── JSON-LD ─────────────────────────────────── */

const WA_MSG = "Hola Bambuky, quisiera información sobre Smash the Cake \u{1F382}";

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "Smash Cake Querétaro", url: `${SITE.url}/smash-cake-queretaro` },
]);

const serviceLd = serviceSchema({
  name: "Smash the Cake - Fotografía Primer Cumpleaños",
  description:
    "Sesión de fotografía smash the cake para celebrar el primer cumpleaños de tu bebé con decoración temática personalizada, pastel y diversión en estudio Bambuky, Querétaro.",
  url: `${SITE.url}/smash-cake-queretaro`,
  image: "/images/smash05.jpg",
});

const faqLd = faqSchema(SMASH_FAQS);

/* ── PAGE ────────────────────────────────────── */

export default function SmashCakeQueretaro() {
  return (
    <>
      {/* JSON-LD structured data */}
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

      {/* ── Hero split ──────────────────────── */}
      <section className="svc-hero svc-hero--split">
        <div className="container svc-hero-grid">
          <div className="svc-hero-text">
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Smash Cake Querétaro" },
              ]}
            />
            <p className="label">Primer cumpleaños &middot; 1 año</p>
            <h1>
              Smash the Cake en Querétaro: pastel, mugrero y las fotos que
              más vas a presumir
            </h1>
            <p className="subheading">
              Armamos un set personalizado con la temática que te guste,
              ponemos el pastel enfrente de tu bebé y dejamos que pase lo
              que tenga que pasar. Nosotros capturamos cada gesto.
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
              src="/images/smash01.jpg"
              alt="Sesión smash the cake en estudio Bambuky Querétaro - bebé con pastel y decoración temática"
              width={900}
              height={1200}
              sizes="(max-width: 768px) 92vw, 420px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Content: intro ──────────────────── */}
      <section className="svc-content">
        <div className="container">
          <h2>Qué es un smash the cake (y por qué nos encanta hacerlo)</h2>
          <p className="body-text">
            La idea es simple: le ponemos un pastel enfrente a tu bebé y lo
            dejamos ser. Que meta las manos, que lo pruebe, que se lo embarque
            en la cara. Nosotros disparamos la cámara y capturamos cada
            expresión, cada risa, cada gesto de sorpresa. Es la fiesta del
            primer año, pero sin invitados que te estresen y con fotos que de
            verdad te van a encantar.
          </p>
          <p className="body-text">
            Cada sesión es diferente porque cada bebé es diferente. Nos
            cuentas qué colores te gustan, qué tema te late, y armamos un set
            que se sienta tuyo. No hay paquete genérico: si quieres
            dinosaurios con globos dorados, eso hacemos.
          </p>
        </div>
      </section>

      {/* ── Editorial 1: decoración (texto izq + img der) ── */}
      <section className="svc-editorial">
        <div className="container svc-editorial-grid">
          <div className="svc-editorial-text">
            <h2>Decoración temática: el set lo armamos nosotros</h2>
            <p className="body-text">
              El set es lo que hace que las fotos se vean wow. Usamos globos,
              banderines, flores, telas... lo que haga falta según tu tema.
              Safari, bosque encantado, circo, princesas, súper héroes, o algo
              que se te ocurrió a las 2 AM viendo Pinterest: todo vale.
            </p>
            <p className="body-text">
              Cuando llegas al estudio ya está todo montado. Tú solo llegas
              con tu bebé y a pasarla bien. Nos encargamos de cada detalle
              para que no tengas que pensar en nada más que en disfrutar.
            </p>
          </div>
          <div className="svc-editorial-img">
            <Image
              src="/images/smash03.jpg"
              alt="Set temático smash the cake con decoración personalizada en estudio Bambuky"
              width={900}
              height={1200}
              sizes="(max-width: 768px) 92vw, 480px"
            />
          </div>
        </div>
      </section>

      {/* ── Content: el momento del pastel ──── */}
      <section className="svc-content">
        <div className="container">
          <h2>El momento del pastel</h2>
          <p className="body-text">
            Primero hacemos las fotos limpias: tu bebé arregladito con su
            outfit, posando con los globos y la decoración. Estas son las que
            vas a querer para el cuadro de la sala o para mandar como
            invitación.
          </p>
          <p className="body-text">
            Y luego viene lo bueno: acercamos el pastel y que pase lo que
            tenga que pasar. Algunos bebés meten las manos de inmediato. Otros
            lo miran con cara de &ldquo;y esto qué&rdquo; y no lo quieren ni
            tocar. Algunos lloran un poquito y luego se animan. Y hay quienes
            de plano no quieren saber nada del pastel, y eso está
            perfectamente bien. La cara de confusión, el puchero, el llanto
            indignado... todo eso es auténtico, y los papás terminan amando
            esas fotos tanto como las de las carcajadas. No forzamos nada:
            capturamos lo que tu bebé es en ese momento.
          </p>
        </div>
      </section>

      {/* ── Editorial 2: la sesión completa (img izq + texto der) ── */}
      <section className="svc-editorial">
        <div className="container svc-editorial-grid">
          <div className="svc-editorial-img">
            <Image
              src="/images/smash04.jpg"
              alt="Bebé disfrutando su pastel en sesión smash cake - estudio Bambuky Querétaro"
              width={900}
              height={1200}
              sizes="(max-width: 768px) 92vw, 480px"
            />
          </div>
          <div className="svc-editorial-text">
            <h2>Cómo es la sesión de principio a fin</h2>
            <p className="body-text">
              La sesión dura entre hora y media y dos horas. No hay prisa: nos
              tomamos el tiempo para que tu bebé esté cómodo antes de acercar
              el pastel. Empezamos con las fotos formales, seguimos con el
              smash, y cerramos con el baño. Las fotos del baño después del
              mugrero suelen ser de las favoritas: un bebé lleno de betún
              riéndose en una tina es difícil de superar.
            </p>
            <p className="body-text">
              Y no te preocupes por el desastre: la limpieza del bebé y del
              set va incluida. Tu pequeño sale del estudio bañadito y contento.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content: qué traer, familia, entrega ── */}
      <section className="svc-content">
        <div className="container">
          <h2>Qué traer a la sesión</h2>
          <p className="body-text">
            De la decoración y el montaje nos encargamos nosotros. Tú traes
            el pastel (te pasamos recomendaciones de pastelerías que hacen
            pasteles buenos para smash cake), un cambio de ropa para tu bebé,
            y si quieres, su juguete favorito o un peluche que le guste.
            Papás: vengan con ropa cómoda por si se animan a salir en las
            fotos familiares.
          </p>

          <h2>La familia también participa</h2>
          <p className="body-text">
            Si los abuelos quieren foto con el nieto embarrado de pastel,
            bienvenidos. Si el hermano mayor quiere meter mano al betún,
            también. Nos encanta cuando se suma la familia porque esas fotos
            son las que luego ponen en el refri. Muchas familias usan la
            sesión smash cake como una mini fiesta íntima antes del festejón
            grande: llegan, se divierten, y se llevan fotos que no habrían
            logrado con 50 invitados alrededor.
          </p>

          <h2>Entrega de fotografías</h2>
          <p className="body-text">
            Te entregamos las fotos editadas en tu galería digital en
            mila-os.com: las ves, las descargas y las compartes con quien
            quieras. Todo en alta resolución para que imprimas en el tamaño
            que se te antoje.
          </p>
        </div>
      </section>

      {/* ── Galería ──────────────────────────── */}
      <section className="svc-gallery">
        <div className="container">
          <div className="section-header">
            <p className="label">Galería</p>
            <h2 className="heading">Momentos reales de nuestras sesiones</h2>
          </div>
          <div className="svc-gallery-grid">
            {[
              { src: "/images/smash01.jpg", alt: "Smash the Cake Querétaro - niña con pastel rosa y globos en estudio Bambuky" },
              { src: "/images/smash02.jpg", alt: "Smash the Cake niño Querétaro - primer cumpleaños con decoración temática y globos azules" },
              { src: "/images/smash03.jpg", alt: "Smash the Cake Querétaro - niña con decorado de hada y pastel temático" },
              { src: "/images/smash04.jpg", alt: "Smash the Cake gemelos Querétaro - primer año con pasteles blancos en estudio" },
              { src: "/images/smash05.jpg", alt: "Smash the Cake Querétaro - sesión primer cumpleaños con set decorado personalizado" },
            ].map((img) => (
              <div className="svc-gallery-item" key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 46vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA intermedio ───────────────────── */}
      <section className="svc-mid-cta">
        <div className="container">
          <h2 className="heading">
            Ya tienes el tema en mente? Cuéntanos
          </h2>
          <p className="body-text">
            Cada smash the cake que hacemos es distinto. Escríbenos con tu idea
            (aunque sea a medias) y entre todos la armamos.
          </p>
          <a
            className="btn-wa"
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Reservar mi sesión
          </a>
          <p className="svc-microcopy">Sin compromiso, sin spam</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <FAQ items={SMASH_FAQS} id="preguntas-smash" />

      {/* ── Servicios relacionados ───────────── */}
      <RelatedServices
        current="/smash-cake-queretaro"
        show={["/sitters-queretaro", "/fotografia-newborn-queretaro"]}
      />

      {/* ── CTA final ────────────────────────── */}
      <SplitCta
        image="/images/smash05.jpg"
        alt="Sesión smash the cake de primer cumpleaños - Bambuky Querétaro"
        label="Smash the Cake · Querétaro"
        title="El primer cumpleaños solo pasa una vez"
        text="Pastel, mugrero, risas y fotos que te van a encantar. Escríbenos y empezamos a planear la sesión smash the cake de tu bebé."
        buttonLabel="Pedir información y precios"
        waMessage={WA_MSG}
        microcopy="Respondemos en menos de 2 horas por WhatsApp"
      />
    </>
  );
}
