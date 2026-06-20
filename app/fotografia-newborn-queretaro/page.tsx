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
    "Fotografía newborn en Querétaro por Cristian y Reyna · Bambuky. Llevamos 800+ bebés y seguimos contando. Estudio climatizado, certificación en primeros auxilios y toda la paciencia del mundo.",
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
      "Cristian y Reyna llevan 800+ bebés en su estudio climatizado de Querétaro. Fotografía newborn con calma, certificación en primeros auxilios y cero prisa.",
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
        <section className="svc-hero svc-hero--split">
          <div className="container svc-hero-grid">
            <div className="svc-hero-text">
              <Breadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Fotografía Newborn Querétaro" },
                ]}
              />
              <p className="label">Sesión estrella &middot; 5 a 15 días de vida</p>
              <h1>
                Fotografía Newborn en Querétaro: tu bebé nunca volverá a ser
                así de chiquito
              </h1>
              <p className="subheading">
                Son 3 a 4 horas en nuestro estudio climatizado. El bebé manda
                el ritmo, Reyna lo acomoda y lo posa, Cristian hace la magia
                con la cámara. Tú solo siéntate y disfruta.
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
                src="/images/newborn7.jpg"
                alt="Bebé recién nacido durmiendo en sesión newborn - Bambuky Fotografía Querétaro"
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
            <h2>Qué es una sesión de fotografía newborn</h2>
            <p className="body-text">
              Cuando nacieron nuestros gemelos, Thiago y Matheo, entendimos algo
              que ningún curso te enseña: los primeros días se evaporan. Estás
              tan metida en pañales, en lactancia, en sobrevivir, que cuando
              querés mirar con calma, tu bebé ya cambió. Una sesión de
              fotografía newborn es eso: frenar el tiempo unas horas. En
              nuestro estudio de Querétaro preparamos todo para que tú solo
              tengas que llegar con tu bebé y dejarte llevar.
            </p>
            <p className="body-text">
              Usamos envolturas suaves, canastas artesanales, diademas florales
              y fondos que cambiamos según la paleta que tú elijas.
            </p>
          </div>
        </section>

        {/* ── Editorial: 5-15 días (texto izq + img der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>Por qué la sesión newborn se hace entre los 5 y los 15 días</h2>
              <p className="body-text">
                Hay una ventana cortísima en la que tu bebé todavía se siente
                como en el vientre de mamá. Duerme profundo, se deja acomodar
                y conserva esa flexibilidad que nos permite las poses clásicas
                de una sesión newborn: acurrucado, de ladito, con las manitas
                bajo la carita. Después de los 15 días se ponen más alertas,
                más inquietos, y algunas poses ya no se logran igual.
              </p>
              <p className="body-text">
                Por eso te pedimos que nos escribas desde el embarazo.
                Apartamos una fecha tentativa cerca de tu fecha probable de
                parto y la ajustamos cuando nazca. Si ya nació y pasaron los
                15 días, tranquila: adaptamos la sesión a su momento y las
                fotos salen preciosas igual.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn4.jpg"
                alt="Bebé recién nacido durmiendo envuelto en tela suave - sesión newborn Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── Content: seguridad ────────────────── */}
        <section className="svc-content">
          <div className="container">
            <h2>Tu bebé va a estar seguro: esto es lo que hacemos</h2>
            <p className="body-text">
              Vas a poner en nuestras manos al amor de tu vida, y eso no lo
              tomamos a la ligera. Estamos capacitados por médicos neonatólogos
              y certificados en primeros auxilios pediátricos — renovamos cada
              año. El estudio siempre está calentito: usamos calefactores y
              mantas térmicas para mantenerlo entre 26 y 28 grados.
            </p>
            <p className="body-text">
              Nunca dejamos al bebé sin soporte, nunca forzamos una posición.
              Si necesita comer, se alimenta. Si necesita un cambio de pañal,
              paramos. Si solo quiere estar en brazos de mamá, lo acomodamos
              y esperamos. En 800+ bebés nunca tuvimos un incidente. No es un
              eslogan, es un dato.
            </p>
          </div>
        </section>

        {/* ── Editorial: estudio (img izq + texto der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn2.jpg"
                alt="Bebé recién nacido con diadema floral en envoltura blanca - estudio Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
            <div className="svc-editorial-text">
              <h2>Nuestro estudio: pensado para que tu bebé duerma tranquilo</h2>
              <p className="body-text">
                Armamos el estudio desde cero pensando en recién nacidos, no en
                adultos. El área de sesión está climatizada y separada del resto.
                Hay un rincón con sillones para que tú y tu pareja se sienten
                tranquilos y vean cómo trabajamos. También tenemos cambiador
                equipado y todo lo que puedas necesitar.
              </p>
              <p className="body-text">
                Lo que distingue a Bambuky es que creamos un ambiente tranquilo
                para que ustedes como papás se relajen. Si ustedes están
                tranquilos, su bebé lo siente. Un bebé tranquilo duerme
                profundo. Y un bebé que duerme profundo nos deja trabajar las
                mejores poses.
              </p>
            </div>
          </div>
        </section>

        {/* ── Content: sesión + quiénes somos ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Qué esperar el día de la sesión</h2>
            <p className="body-text">
              El día de tu cita, te recibimos con calma. No hay prisa.
              Mientras preparamos el set y la iluminación, recibimos a tu
              bebé con las manos tibias y lo acomodamos hasta que se queda
              dormido. De ahí pasamos por poses de envoltura, canasta,
              naturalistas y los retratos con mamá, papá o hermanitos que
              después te van a hacer llorar cada vez que los veas.
            </p>
            <p className="body-text">
              En las 3 a 4 horas hacemos todas las pausas que hagan falta:
              para comer, cambiar pañal, o simplemente para que el bebé
              descanse en brazos. Cada sesión sale distinta porque cada bebé
              trae su propio temperamento, y eso es lo que nos gusta.
            </p>

            <h2>Quiénes somos</h2>
            <p className="body-text">
              Somos Cristian y Reyna. Cristian viene de Argentina, con una
              carrera en cine y televisión. Reyna es de León, Guanajuato. Nos
              conocimos en Querétaro y en 2015 descubrimos juntos la
              fotografía newborn. Nos capacitamos con fotógrafos y también
              con médicos neonatólogos para entender al bebé recién nacido.
            </p>
            <p className="body-text">
              En 2022 tuvimos la sorpresa de embarazarnos de gemelos. Thiago
              y Matheo llegaron para cambiar nuestras vidas. Entendimos en
              carne propia lo que significa poner a tu bebé de días de nacido
              en manos de alguien más. Llevamos más de 800 bebés y seguimos
              contando.
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
              Escríbenos y platicamos
            </h2>
            <p className="body-text">
              Si todavía estás embarazada, es buen momento para apartar fecha.
              Si ya nació, cuéntanos cuántos días tiene y vemos cómo
              organizarnos.
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
              Mañana ya va a ser otro bebé
            </h2>
            <p className="body-text">
              No exagero: en una semana la carita cambia, los cachetes crecen,
              los dedos se estiran. Si querés que quede registro de cómo es
              hoy, este es el momento.
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
