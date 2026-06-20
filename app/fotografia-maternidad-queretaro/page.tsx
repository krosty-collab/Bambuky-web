import type { Metadata } from "next";
import Image from "next/image";
import { waLink } from "@/lib/site";
import { SITE } from "@/lib/site";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { MATERNIDAD_FAQS } from "@/lib/faqs";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedServices from "@/components/RelatedServices";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Bambuky",
    title: "Fotografía de Maternidad en Querétaro | Bambuky",
    description:
      "Sesión de fotografía de maternidad en estudio profesional en Querétaro. Vestidos, dirección de poses y una experiencia inolvidable entre la semana 28 y 34.",
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

export default function FotografiaMaternidadQueretaro() {
  const breadcrumbItems = [
    { name: "Inicio", url: SITE.url },
    { name: "Fotografía de Maternidad Querétaro", url: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Fotografía de Maternidad en Querétaro",
              description:
                "Sesión de fotografía de maternidad en estudio profesional. Vestidos incluidos, dirección artística y acompañamiento emocional. Ideal entre la semana 28 y 34 del embarazo.",
              url: PAGE_URL,
              image: "/images/maternidad3.jpg",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(MATERNIDAD_FAQS)),
        }}
      />

      <Nav />

      <main>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Fotografía de Maternidad Querétaro" },
          ]}
        />

        {/* Hero */}
        <section className="svc-hero">
          <div className="container">
            <p className="label">Maternidad · Semana 28–34</p>
            <h1 className="display">
              Fotografía de Maternidad en Querétaro
            </h1>
            <p className="subheading">
              El embarazo es una de las etapas más hermosas y efímeras de tu
              vida. Nuestras sesiones capturan la fuerza, la ternura y la
              conexión que sientes con tu bebé antes de conocerlo.
            </p>
            <a
              className="btn-wa"
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir información y precios
            </a>
          </div>
        </section>

        {/* Imagen principal */}
        <section className="svc-content">
          <div className="container">
            <div className="svc-feature-img">
              <Image
                src="/images/maternidad3.jpg"
                alt="Sesión de fotografía de maternidad en Querétaro - mamá embarazada en estudio Bambuky"
                width={900}
                height={1200}
                priority
                sizes="(max-width: 768px) 92vw, 55vw"
              />
            </div>

            {/* Contenido SEO */}
            <div className="svc-text">
              <div className="section-header">
                <h2 className="heading">
                  Una sesión pensada para ti y para tu bebé
                </h2>
              </div>

              <p className="body-text">
                En Bambuky sabemos que cada embarazo es único. Por eso, cada
                sesión de maternidad en nuestro estudio de Querétaro se diseña
                de forma personalizada: desde la selección de vestidos y telas
                hasta la iluminación y las poses que mejor resaltan tu silueta.
                Queremos que te sientas hermosa, cómoda y acompañada en todo
                momento.
              </p>

              <p className="body-text">
                Cristian y Reyna trabajan juntos en cada sesión. Cristian
                dirige la fotografía con su experiencia en cine y televisión,
                cuidando cada detalle de la luz y la composición. Reyna te
                acompaña emocionalmente, te ayuda con los cambios de vestuario
                y se asegura de que la experiencia sea relajada y bonita de
                principio a fin. Juntos, llevan más de 10 años fotografiando
                familias en Querétaro.
              </p>

              <h3 className="subheading">
                La semana ideal: entre la 28 y la 34
              </h3>

              <p className="body-text">
                Recomendamos agendar tu sesión de maternidad entre la semana 28
                y la 34 del embarazo. En este periodo la pancita tiene un
                tamaño hermoso y, por lo general, la mamá todavía se siente
                con energía y comodidad para posar. Sin embargo, cada cuerpo
                es diferente y siempre nos adaptamos a tus tiempos. Si estás
                fuera de esas semanas, escríbenos y encontraremos la mejor
                solución para ti.
              </p>

              <h3 className="subheading">
                Vestidos, telas y dirección artística incluidos
              </h3>

              <p className="body-text">
                No necesitas preocuparte por la ropa. En nuestro estudio
                contamos con una selección cuidada de vestidos de maternidad,
                tops, telas y accesorios que se renuevan constantemente. Todos
                los elementos están pensados para realzar tu figura y crear
                imágenes elegantes y atemporales. También puedes traer prendas
                propias o algún objeto con significado especial: los zapatos
                del bebé, un ultrasonido, una carta.
              </p>

              <p className="body-text">
                Cristian dirige cada pose con suavidad y precisión. No tienes
                que saber posar, solo dejarte guiar. Te indicamos cómo colocar
                las manos, la mirada, la postura, para que cada imagen
                transmita naturalidad y emoción. Muchas mamás nos dicen que
                fue la primera vez que se sintieron realmente bonitas frente a
                una cámara.
              </p>

              <h3 className="subheading">
                Tu pareja y tu familia también son parte
              </h3>

              <p className="body-text">
                Nos encanta incluir a la pareja y a los hermanos mayores en la
                sesión. Los momentos en familia durante el embarazo tienen una
                magia particular: la espera compartida, las manos sobre la
                pancita, las miradas llenas de ilusión. Estas fotos se
                convierten en un tesoro familiar que van a querer ver una y
                otra vez.
              </p>

              <h3 className="subheading">
                Un estudio preparado para que disfrutes
              </h3>

              <p className="body-text">
                Nuestro estudio en Querétaro está climatizado y equipado para
                que tu sesión sea una experiencia placentera. La temperatura
                es cálida y agradable, la música suave, y el ritmo lo marcas
                tú. Si necesitas descansar, tomar agua o un snack, nos
                detenemos. No hay prisas. Recibimos familias de Juriquilla,
                Zibatá, El Refugio, Corregidora, Milenio III y toda la zona
                metropolitana de Querétaro.
              </p>

              <h3 className="subheading">
                Más que fotos: una experiencia que mereces vivir
              </h3>

              <p className="body-text">
                Una sesión de maternidad no se trata solo de obtener imágenes
                bonitas. Es un momento para pausar, para conectar con tu
                cuerpo y con la vida que crece dentro de ti. Muchas mamás en
                Querétaro nos cuentan que la sesión fue un punto de inflexión
                emocional en su embarazo: una tarde para sentirse celebradas,
                cuidadas y absolutamente hermosas.
              </p>

              <p className="body-text">
                Si estás buscando un estudio de fotografía de maternidad en
                Querétaro que combine calidad artística con trato humano y
                cálido, nos encantaría conocerte. Escríbenos por WhatsApp para
                platicar sobre tu sesión, revisar fechas disponibles y
                encontrar el paquete ideal para ti.
              </p>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="svc-gallery">
          <div className="container">
            <div className="section-header">
              <p className="label">Galería</p>
              <h2 className="heading">Sesiones de maternidad en Querétaro</h2>
            </div>
            <div className="svc-gallery-grid">
              <Image
                src="/images/maternidad2.jpg"
                alt="Fotografía embarazo Querétaro - sesión de maternidad en estudio"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 30vw"
              />
              <Image
                src="/images/maternidad5.jpg"
                alt="Fotografía maternidad Querétaro - pareja esperando bebé"
                width={900}
                height={1250}
                sizes="(max-width: 768px) 92vw, 30vw"
              />
              <Image
                src="/images/maternidad6.jpg"
                alt="Maternidad en pareja Querétaro - sesión de embarazo"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 30vw"
              />
              <Image
                src="/images/maternidad7.jpg"
                alt="Sesión de embarazo en pareja Querétaro - estudio Bambuky"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 30vw"
              />
              <Image
                src="/images/maternidad8.jpg"
                alt="Fotografía de maternidad en estudio Querétaro - Bambuky"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 30vw"
              />
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="svc-cta">
          <div className="container">
            <p className="display">
              Tu embarazo merece ser recordado para siempre
            </p>
            <p className="body-text">
              Escríbenos hoy para reservar tu sesión de maternidad en
              Querétaro. Te contamos todo sobre paquetes, fechas disponibles y
              cómo prepararte para el día.
            </p>
            <a
              className="btn-wa"
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Pedir información y precios
            </a>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={MATERNIDAD_FAQS} id="preguntas-maternidad" />

        {/* Servicios relacionados */}
        <RelatedServices
          current="/fotografia-maternidad-queretaro"
          show={[
            "/fotografia-newborn-queretaro",
            "/48-horas-contigo-queretaro",
          ]}
        />

        {/* CTA final */}
        <section className="svc-cta">
          <div className="container">
            <p className="display">
              Agenda tu sesión de maternidad
            </p>
            <p className="body-text">
              Reserva tu fecha, elige tu estilo y vive una experiencia que
              vas a atesorar siempre. Estamos a un mensaje de distancia.
            </p>
            <a
              className="btn-wa"
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Reservar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
