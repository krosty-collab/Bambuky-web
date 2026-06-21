import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
              tomamos a la ligera. Antes de tomar la primera foto hacemos un
              check-up visual del bebé: revisamos cabeza, dedos, extremidades,
              pliegues, axilas. La intención es conocer su estado y documentar
              cualquier situación previa a la sesión. Si algo nos parece
              inusual, lo comentamos contigo y recomendamos valoración médica
              antes de continuar.
            </p>
            <p className="body-text">
              Estamos capacitados por médicos neonatólogos y certificados en
              primeros auxilios pediátricos — renovamos cada año. El estudio
              siempre está entre 26 y 28 grados. Nuestras manos siempre están
              cerca del bebé y nuestros ojos siempre están sobre él. Higiene
              de protocolo: manos sanitizadas, espacio limpio, materiales
              revisados antes de cada sesión.
            </p>
          </div>
        </section>

        {/* ── Editorial: montaje y poses (texto izq + img der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>Poses complejas: montaje digital, nunca riesgo real</h2>
              <p className="body-text">
                Esas fotos donde un bebé parece suspendido, colgado o sostenido
                de formas imposibles existen en la industria. En Bambuky, cuando
                las hacemos, se construyen con montaje digital. El bebé siempre
                está sostenido físicamente. Nunca dejamos al bebé sin soporte,
                nunca forzamos una posición. Si una pose implica el menor
                riesgo, no la hacemos. Siempre gana el bebé.
              </p>
              <p className="body-text">
                En más de 830 bebés nunca tuvimos un incidente. En varias
                ocasiones sí detectamos durante la sesión situaciones que
                después requirieron atención médica: problemas digestivos
                importantes, episodios de apnea, irritaciones severas. No
                somos médicos, pero cuando algo no se ve bien, lo decimos.
                Esa es parte de la responsabilidad de trabajar con recién
                nacidos.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn2.jpg"
                alt="Bebé recién nacido con diadema floral en envoltura blanca - estudio Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── Content: lectura del bebé ────────────────── */}
        <section className="svc-content">
          <div className="container">
            <h2>Entendemos a tu bebé: la foto es consecuencia</h2>
            <p className="body-text">
              No existen bebés que se portan mal. Cuando un recién nacido
              parece incómodo o no logra dormir, no está portándose mal. Está
              comunicando algo: hambre, sueño, sobreestimulación, necesidad
              de contacto. Nuestro trabajo no es controlar al bebé. Es
              entender qué necesita. Después de 830 bebés aprendimos a
              leer esas señales antes de que llegue el llanto.
            </p>
            <p className="body-text">
              Cuando el bebé está tranquilo, seguro y cómodo, las fotografías
              suceden solas. Por eso nuestra prioridad nunca es una pose.
              Nuestra prioridad es que tu bebé esté bien. La imagen es el
              resultado. Nunca el objetivo por encima del bienestar.
            </p>
          </div>
        </section>

        {/* ── Editorial: estudio (img izq + texto der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn4.jpg"
                alt="Bebé recién nacido durmiendo envuelto en tela suave - sesión newborn Bambuky Querétaro"
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
                Si ustedes como papás están tranquilos, su bebé lo siente.
                Un bebé tranquilo duerme profundo. Y un bebé que duerme
                profundo nos deja trabajar las mejores poses. Por eso
                también leemos a la familia: cuando una mamá cruza la puerta,
                sabemos si llega cansada, si necesita hablar o si necesita
                silencio. Cada sesión se adapta a lo que ustedes necesitan
                ese día.
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

        {/* ── Gemelos y Prematuros ── */}
        <section className="svc-content">
          <div className="container">
            <div className="newborn-callouts">
              <div className="newborn-callout">
                <h3>¿Son gemelos?</h3>
                <p className="body-text">
                  Somos papás de gemelos. Sabemos lo que significa tener
                  dos necesidades al mismo tiempo. La sesión se planifica
                  distinto y necesita su propio ritmo.
                </p>
                <Link
                  href="/fotografia-newborn-gemelos-queretaro"
                  className="callout-link"
                >
                  Ver información para familias con gemelos →
                </Link>
              </div>
              <div className="newborn-callout">
                <h3>¿Tu bebé nació prematuro?</h3>
                <p className="body-text">
                  Trabajamos con la edad corregida y nos adaptamos al
                  ritmo de tu bebé. Vivimos la prematurez en carne propia
                  y entendemos el proceso.
                </p>
                <Link
                  href="/fotografia-newborn-prematuros-queretaro"
                  className="callout-link"
                >
                  Ver información para familias con prematuros →
                </Link>
              </div>
            </div>
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
            "/fotografia-newborn-gemelos-queretaro",
            "/fotografia-newborn-prematuros-queretaro",
            "/48-horas-contigo-queretaro",
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
