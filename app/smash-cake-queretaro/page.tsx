import type { Metadata } from "next";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { SMASH_FAQS } from "@/lib/faqs";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import RelatedServices from "@/components/RelatedServices";
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

      {/* ── Hero ─────────────────────────────── */}
      <section className="svc-hero">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Smash Cake Querétaro" },
            ]}
          />
          <p className="label">Primer cumpleaños</p>
          <h1>
            Smash the Cake en Querétaro
          </h1>
          <p className="subheading">
            El primer año de tu bebé merece una celebración llena de color, pastel
            y carcajadas. Preparamos un set temático personalizado para que este
            momento quede en fotografías que tu familia guardará para siempre.
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
          <h2>Qué es una sesión Smash the Cake</h2>
          <p className="body-text">
            El smash the cake es una tradición fotográfica que nació para celebrar
            el primer cumpleaños de los bebés de una forma única y divertida.
            La idea es sencilla y poderosa: colocar un pastel frente a tu pequeño
            y dejar que explore, toque, pruebe y juegue con total libertad. El
            resultado son imágenes espontáneas, llenas de expresiones genuinas que
            capturan su personalidad en esta etapa irrepetible.
          </p>
          <p className="body-text">
            En Bambuky llevamos más de diez años fotografiando bebés en Querétaro
            y hemos preparado cientos de sesiones smash cake. Sabemos que cada
            familia tiene su estilo, por eso cada set que armamos es diferente.
            Nos encanta escuchar tus ideas y transformarlas en un escenario que
            refleje la personalidad de tu bebé y los colores que más te gustan.
          </p>

          <h2>Decoración temática personalizada</h2>
          <p className="body-text">
            El set es el corazón visual de la sesión. Trabajamos con globos,
            banderines, flores, telas y elementos decorativos que combinamos
            según el tema que elijas: puede ser algo clásico con tonos pastel,
            una temática de safari, bosque encantado, circo, princesas, súper
            héroes, o cualquier concepto que imagines. Familias de Juriquilla,
            Zibatá, El Refugio, Milenio III y Corregidora nos han pedido las
            temáticas más creativas, y siempre logramos que el resultado supere
            sus expectativas. Todo queda listo antes de que llegues al estudio
            para que solo tengas que disfrutar.
          </p>

          <h2>El momento del pastel</h2>
          <p className="body-text">
            La sesión se divide en dos etapas. Primero fotografiamos a tu bebé
            limpio y arreglado junto a la decoración: retratos con su outfit del
            día, poses con globos y detalles del set. Estas fotos son las más
            elegantes y perfectas para imprimir o compartir como invitación.
          </p>
          <p className="body-text">
            Después llega lo mejor: acercamos el pastel y dejamos que la magia
            suceda. Algunos bebés meten las manos de inmediato, otros lo miran
            con curiosidad, algunos lloran un poquito y luego sonríen. No
            importa cuál sea la reacción de tu bebé, las fotos siempre quedan
            increíbles porque capturamos cada gesto auténtico. Si tu bebé
            necesita un empujoncito para animarse, Cristian y Reyna tienen
            técnicas suaves para generar curiosidad sin forzar nada.
          </p>

          <h2>Qué traer a la sesión</h2>
          <p className="body-text">
            Nosotros nos encargamos de toda la decoración y la ambientación del
            set. Tú solo necesitas traer el pastel (te damos recomendaciones de
            pastelerías en Querétaro que hacen pasteles ideales para smash cake),
            un cambio de ropa para tu bebé y, si quieres, algún objeto especial
            como su juguete favorito o un peluche con significado. También te
            pedimos ropa cómoda para los papás por si quieren salir en algunas
            fotos familiares.
          </p>

          <h2>Duración y limpieza</h2>
          <p className="body-text">
            Una sesión smash the cake dura entre una hora y media y dos horas.
            Nos tomamos todo el tiempo necesario para que tu bebé esté cómodo,
            para las fotos previas al pastel y para el momento del smash en sí.
            No te preocupes por el desastre: la limpieza del bebé y del set está
            incluida. Tenemos todo lo necesario para que tu pequeño salga del
            estudio limpio y feliz. Además, esos minutos de limpieza también son
            parte de la sesión: las fotos del baño posterior suelen ser de las
            más tiernas.
          </p>

          <h2>La familia también participa</h2>
          <p className="body-text">
            Nos encanta cuando los papás, hermanos o abuelos quieren sumarse a
            la sesión. Las fotos familiares alrededor del set decorado tienen un
            valor enorme y complementan el álbum de manera especial. Si vienen
            hermanos mayores, los incluimos en las primeras tomas y en el
            momento del pastel para que toda la familia sea parte de la
            celebración. Muchas familias de la zona metropolitana de Querétaro
            aprovechan la sesión smash cake como una mini fiesta íntima antes
            de la celebración grande.
          </p>

          <h2>Nuestra forma de trabajar</h2>
          <p className="body-text">
            Cristian dirige la fotografía con su experiencia de más de una
            década en cine y fotografía de bebés. Reyna acompaña emocionalmente
            a los papás y cuida cada detalle para que la sesión fluya con
            naturalidad. Juntos nos aseguramos de que tu bebé esté seguro,
            cómodo y contento en todo momento. Nuestro estudio en Querétaro
            está climatizado y preparado específicamente para sesiones con
            bebés y niños pequeños.
          </p>

          <h2>Entrega de fotografías</h2>
          <p className="body-text">
            Las fotografías editadas se entregan a través de nuestra galería
            digital en mila-os.com, donde podrás verlas, descargarlas y
            compartirlas con tu familia. La entrega es en alta resolución para
            que puedas imprimir en el tamaño que quieras. Atendemos familias
            de todo Querétaro y su zona metropolitana: Juriquilla, Zibatá,
            El Refugio, Milenio III, Corregidora y más.
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
      <section className="svc-cta">
        <div className="container">
          <h2 className="heading">
            Celebra el primer año de tu bebé con Bambuky
          </h2>
          <p className="body-text">
            Cada smash the cake es único. Escríbenos para contarnos qué tienes
            en mente y te ayudamos a planear cada detalle de la sesión.
          </p>
          <a
            className="btn-wa-dark"
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
      <section className="svc-cta">
        <div className="container">
          <h2 className="heading">
            El primer cumpleaños solo pasa una vez
          </h2>
          <p className="body-text">
            Déjanos crear un recuerdo que tu familia va a atesorar siempre.
            Escríbenos hoy y empecemos a planear la sesión smash the cake
            perfecta para tu bebé.
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
