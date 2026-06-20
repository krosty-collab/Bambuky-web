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
import { NEWBORN_FAQS } from "@/lib/faqs";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";

/* ── METADATA ────────────────────────────────── */

export const metadata: Metadata = {
  title: "Fotografía Newborn en Querétaro | Bambuky · Sesión Recién Nacido",
  description:
    "Sesión de fotografía newborn en Querétaro con más de 10 años de experiencia y 800+ bebés fotografiados. Estudio climatizado, certificación en primeros auxilios. Cristian y Reyna, Bambuky.",
  alternates: {
    canonical: `${SITE.url}/fotografia-newborn-queretaro`,
  },
  keywords: [
    "fotografía newborn Querétaro",
    "fotógrafo recién nacido Querétaro",
    "sesión newborn Querétaro",
    "fotografía recién nacido Querétaro",
    "estudio newborn Querétaro",
    "fotógrafo newborn Juriquilla",
    "sesión recién nacido Zibatá",
    "newborn photography Querétaro",
    "fotografía bebé recién nacido Querétaro",
    "fotógrafo bebés Querétaro",
  ],
  openGraph: {
    title: "Fotografía Newborn en Querétaro | Bambuky · Sesión Recién Nacido",
    description:
      "10+ años y 800+ bebés fotografiados. Sesión newborn profesional en estudio climatizado en Querétaro. Cristian y Reyna, Bambuky.",
    url: `${SITE.url}/fotografia-newborn-queretaro`,
    images: [
      {
        url: "/images/newborn1.jpg",
        width: 1200,
        height: 630,
        alt: "Fotografía newborn en Querétaro - bebé recién nacido en sesión de estudio Bambuky",
      },
    ],
  },
};

/* ── JSON-LD DATA ────────────────────────────── */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  {
    name: "Fotografía Newborn Querétaro",
    url: `${SITE.url}/fotografia-newborn-queretaro`,
  },
]);

const serviceLd = serviceSchema({
  name: "Fotografía Newborn · Sesión Recién Nacido en Querétaro",
  description:
    "Sesión profesional de fotografía newborn en estudio climatizado en Querétaro. Entre 3 y 4 horas de duración, con poses elaboradas y momentos naturalistas. Ideal entre los 5 y 15 días de nacido.",
  url: `${SITE.url}/fotografia-newborn-queretaro`,
  image: "/images/newborn1.jpg",
});

const faqLd = faqSchema(NEWBORN_FAQS);

/* ── PAGE COMPONENT ──────────────────────────── */

const WA_MESSAGE =
  "Hola Bambuky, quisiera información sobre la sesión newborn 👶";

export default function FotografiaNewbornQueretaro() {
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
        <section className="svc-hero">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Fotografía Newborn Querétaro" },
              ]}
            />
            <p className="label">Sesión estrella &middot; 5 a 15 días de vida</p>
            <h1>
              Fotografía Newborn en Querétaro: los primeros días duran para
              siempre
            </h1>
            <p className="subheading">
              Una sesión de 3 a 4 horas en nuestro estudio climatizado, donde
              cada pose y cada detalle se cuidan con la misma delicadeza con la
              que sostienes a tu bebé por primera vez.
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
        </section>

        {/* ── Content ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Qué es una sesión de fotografía newborn</h2>
            <p className="body-text">
              Una sesión newborn es una experiencia fotográfica diseñada
              exclusivamente para capturar los primeros días de vida de tu bebé.
              A diferencia de una foto casual con el teléfono, aquí cada imagen
              se planifica con iluminación profesional, atrezo cuidado y, sobre
              todo, con la seguridad que un recién nacido necesita. En Bambuky
              realizamos estas sesiones en nuestro estudio de Querétaro, un
              espacio pensado para que tanto el bebé como los papás se sientan
              cómodos y tranquilos durante las 3 a 4 horas que dura la sesión.
            </p>
            <p className="body-text">
              Trabajamos con envolturas suaves, canastas artesanales, diademas
              florales y fondos que cambiamos según la paleta de colores que
              cada familia elige. El resultado es una colección de imágenes que
              reflejan la ternura, la fragilidad y la belleza de esos días que
              pasan más rápido de lo que imaginas.
            </p>

            <h2>La edad ideal: entre los 5 y los 15 días de nacido</h2>
            <p className="body-text">
              Existe una ventana muy especial en las primeras dos semanas de
              vida. Durante estos días, tu bebé conserva la flexibilidad
              natural del vientre materno y duerme con una profundidad que nos
              permite acomodarlo en poses elaboradas sin que se despierte.
              Después de los 15 días, los bebés se vuelven más alertas y
              pueden resistir ciertas posiciones, lo que limita el repertorio
              de poses clásicas de una sesión newborn.
            </p>
            <p className="body-text">
              Por eso recomendamos agendar tu sesión desde el segundo trimestre
              del embarazo. Reservamos una fecha tentativa alrededor de tu
              fecha probable de parto y la confirmamos una vez que nace tu
              bebé. Si ya nació y tiene más de 15 días, no te preocupes:
              adaptamos la sesión a su etapa y logramos imágenes igualmente
              hermosas. Familias de Juriquilla, Zibatá, El Refugio,
              Corregidora y todo Querétaro nos eligen precisamente por esa
              flexibilidad.
            </p>

            <h2>Seguridad ante todo: certificación en primeros auxilios</h2>
            <p className="body-text">
              Sabemos que confiar a tu recién nacido a alguien que no sea su
              pediatra requiere mucha confianza. En Bambuky esa confianza la
              respaldamos con hechos. Cristian y Reyna están certificados en
              primeros auxilios pediátricos y renuevan esa certificación cada
              año. Nuestro estudio mantiene una temperatura controlada entre
              26 y 28 grados, el nivel óptimo para que un recién nacido se
              sienta tan seguro como en el vientre de mamá. Utilizamos
              calefactores de cerámica silenciosos, mantas térmicas y un
              monitor de temperatura ambiental que revisamos durante toda la
              sesión.
            </p>
            <p className="body-text">
              Cada pose que realizamos sigue protocolos estrictos de
              seguridad. Nunca dejamos al bebé sin soporte, nunca forzamos una
              posición y siempre respetamos los tiempos del recién nacido: si
              necesita comer, se alimenta; si necesita un cambio de pañal, lo
              cambiamos; si necesita estar en brazos de mamá, lo acurrucamos.
              En más de 10 años y más de 800 bebés fotografiados, nunca hemos
              tenido un incidente. Esa es nuestra mayor estadística.
            </p>

            <h2>Nuestro estudio en Querétaro: un refugio para tu bebé</h2>
            <p className="body-text">
              El estudio Bambuky fue diseñado desde cero para sesiones con
              recién nacidos. Cuenta con un área climatizada exclusiva para la
              sesión, una zona de descanso para los papás con sillones cómodos
              y bebidas calientes, y un cambiador equipado con todo lo
              necesario. La iluminación combina luz natural filtrada con
              flashes de estudio de muy baja intensidad, lo que permite
              trabajar sin incomodar los ojos sensibles del bebé.
            </p>
            <p className="body-text">
              Familias que viajan desde Milenio III, El Refugio o el centro
              de Querétaro nos comentan que el estudio se siente como un
              pequeño oasis. Ese ambiente relajado se refleja directamente en
              las fotos: un bebé que se siente seguro duerme mejor, y un bebé
              que duerme bien permite las poses más bellas.
            </p>

            <h2>Qué esperar el día de la sesión</h2>
            <p className="body-text">
              El día de tu cita, te recibimos con calma. No hay prisa. Mientras
              Cristian prepara el set y calibra la iluminación, Reyna recibe al
              bebé con las manos tibias y lo va acurrucando hasta que alcanza
              un sueño profundo. A partir de ahí, la sesión fluye entre poses
              de envoltura, poses en canasta, poses naturalistas y los
              retratos familiares que tanto valor tendrán con el paso de los
              años.
            </p>
            <p className="body-text">
              Durante las 3 a 4 horas hacemos pausas para alimentar al bebé,
              cambiar pañales y simplemente dejarlo descansar. No forzamos los
              tiempos. Cada sesión es diferente porque cada bebé es diferente,
              y eso es precisamente lo que la hace única. Al terminar,
              seleccionamos juntos las mejores imágenes y las entregamos
              editadas profesionalmente a través de nuestra galería digital
              en mila-os.com, donde puedes verlas, descargarlas y compartirlas
              con tu familia.
            </p>

            <h2>Cristian y Reyna: más de 10 años capturando primeros días</h2>
            <p className="body-text">
              Detrás de Bambuky están Cristian Andrada y Reyna, un equipo de
              pareja que lleva más de una década dedicado a la fotografía de
              recién nacidos en Querétaro. Cristian aporta su formación en cine
              y televisión: cada sesión la dirige como si contara una historia,
              cuidando la composición, la luz y la emoción de cada cuadro.
              Reyna es el alma de la sesión: ella recibe al bebé, lo calma, lo
              acomoda y acompaña a los papás en cada momento.
            </p>
            <p className="body-text">
              Juntos han fotografiado a más de 800 bebés. Han visto llegar a
              familias primerizas con nervios y salir con lágrimas de emoción
              al ver las primeras fotos en la pantalla. Han trabajado con
              gemelos, prematuros que alcanzaron su peso ideal y bebés que
              decidieron no dormir en toda la sesión. Cada experiencia les ha
              enseñado a adaptarse con paciencia, creatividad y cariño.
              Familias de Juriquilla, Zibatá, Corregidora, El Marqués y todo
              el estado de Querétaro confían en ellos para este momento tan
              importante.
            </p>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="svc-gallery">
          <div className="container">
            <div className="section-header">
              <p className="label">Galería Newborn</p>
              <h2 className="heading">
                Así se ven los primeros días de vida
              </h2>
            </div>
            <div className="svc-gallery-grid">
              <div className="svc-gallery-item">
                <Image
                  src="/images/newborn1.jpg"
                  alt="Fotografía newborn Querétaro - bebé en canasta con flores rosas, estudio Bambuky"
                  width={900}
                  height={1200}
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/newborn2.jpg"
                  alt="Sesión newborn Querétaro - bebé envuelto en tela blanca con diadema floral"
                  width={900}
                  height={1200}
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/newborn3.jpg"
                  alt="Fotografía recién nacido Querétaro - bebé en cama miniatura de madera"
                  width={900}
                  height={1150}
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/newborn4.jpg"
                  alt="Sesión recién nacido Querétaro - bebé durmiendo en envoltura suave"
                  width={900}
                  height={1200}
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/newborn5.jpg"
                  alt="Fotografía newborn profesional Querétaro - pose lateral en traje crema"
                  width={900}
                  height={1150}
                />
              </div>
              <div className="svc-gallery-item">
                <Image
                  src="/images/newborn6.jpg"
                  alt="Estudio fotografía newborn Querétaro - bebé con accesorios artesanales"
                  width={900}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section className="svc-cta">
          <div className="container">
            <h2 className="heading">
              Reserva la sesión de tu bebé
            </h2>
            <p className="body-text">
              Te recomendamos agendar desde el embarazo para asegurar tu fecha.
              Escríbenos y te orientamos según la edad de tu bebé.
            </p>
            <a
              className="btn-wa-dark"
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Agendar mi sesión newborn
            </a>
            <p className="svc-microcopy">
              Te orientamos según la edad de tu bebé
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ items={NEWBORN_FAQS} id="preguntas-newborn" />

        {/* ── Related services ── */}
        <RelatedServices
          current="/fotografia-newborn-queretaro"
          show={[
            "/48-horas-contigo-queretaro",
            "/fotografia-maternidad-queretaro",
            "/sitters-queretaro",
          ]}
        />

        {/* ── Final CTA ── */}
        <section className="svc-cta">
          <div className="container">
            <h2 className="heading">
              Los primeros días no se repiten
            </h2>
            <p className="body-text">
              Cada día que pasa, tu bebé cambia. Permítenos capturar este
              momento tal como es ahora, para que lo guardes para siempre.
            </p>
            <a
              className="btn-wa-dark"
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir información y precios
            </a>
            <p className="svc-microcopy">
              Te respondemos por WhatsApp
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
