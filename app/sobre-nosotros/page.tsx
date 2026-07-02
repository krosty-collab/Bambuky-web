import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumb from "@/components/Breadcrumb";
import SplitCta from "@/components/SplitCta";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, BUSINESS_ID, CRISTIAN_ID, REYNA_ID } from "@/lib/seo";

/* ── METADATA ────────────────────────────────── */

const PAGE_URL = `${SITE.url}/sobre-nosotros`;

export const metadata: Metadata = {
  title: "Sobre Nosotros | Bambuky · Cristian y Reyna · Fotografía Newborn Querétaro",
  description:
    "Somos Cristian y Reyna, padres de gemelos y fotógrafos de recién nacidos en Querétaro desde 2015. Más de 830 bebés fotografiados. Conoce nuestra historia, nuestra filosofía y por qué hacemos lo que hacemos.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Bambuky",
    title: "Sobre Nosotros | Bambuky · Cristian y Reyna",
    description:
      "Padres de gemelos, fotógrafos de recién nacidos desde 2015 en Querétaro. Más de 830 bebés. Conoce nuestra historia.",
    locale: "es_MX",
    images: [
      {
        url: "/images/maternidad8.jpg",
        width: 1200,
        height: 630,
        alt: "Cristian y Reyna, fundadores de Bambuky Fotografía en Querétaro",
      },
    ],
  },
};

/* ── JSON-LD ─────────────────────────────────── */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "Sobre Nosotros", url: PAGE_URL },
]);

const personLd = [
  {
    "@context": "https://schema.org",
    "@id": CRISTIAN_ID,
    "@type": "Person",
    name: "Cristian Andrada",
    jobTitle: "Fotógrafo newborn",
    worksFor: { "@id": BUSINESS_ID },
    knowsAbout: [
      "Fotografía newborn",
      "Seguridad neonatal en fotografía",
      "Fotografía de gemelos recién nacidos",
      "Fotografía de prematuros",
    ],
  },
  {
    "@context": "https://schema.org",
    "@id": REYNA_ID,
    "@type": "Person",
    name: "Reyna",
    jobTitle: "Fotógrafa newborn",
    worksFor: { "@id": BUSINESS_ID },
    knowsAbout: [
      "Fotografía newborn",
      "Posado y manejo de recién nacidos",
      "Acompañamiento emocional postparto",
      "Fotografía de gemelos recién nacidos",
    ],
  },
];

/* ── PAGE COMPONENT ──────────────────────────── */

const WA_MESSAGE =
  "Hola Bambuky, quiero conocerlos y platicar sobre una sesión 🌿";

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {personLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="svc-hero svc-hero--split">
          <div className="container svc-hero-grid">
            <div className="svc-hero-text">
              <Breadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Sobre Nosotros" },
                ]}
              />
              <p className="label">Nuestra historia</p>
              <h1>
                Somos Cristian y Reyna. Padres de gemelos, fotógrafos de
                recién nacidos.
              </h1>
              <p className="subheading">
                Llevamos desde 2015 recibiendo familias en nuestro estudio de
                Querétaro. Más de 830 bebés han pasado por nuestras
                manos. Ninguna foto vale más que la seguridad de uno
                solo.
              </p>
            </div>
            <div className="svc-hero-img">
              <Image
                src="/images/maternidad8.jpg"
                alt="Cristian y Reyna, fundadores de Bambuky Fotografía Newborn en Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 420px"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Cómo empezó todo ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Cómo empezó Bambuky</h2>
            <p className="body-text">
              Cristian viene de Argentina, con una carrera en cine y televisión.
              Reyna es de León, Guanajuato. Nos conocimos en Querétaro y en
              2015 descubrimos juntos la fotografía newborn. Nos enamoramos de
              lo que significaba: recibir a una familia en uno de los momentos
              más intensos de su vida y ayudarla a frenar el tiempo unas horas.
            </p>
            <p className="body-text">
              Desde el principio supimos que no bastaba con saber de fotografía.
              Nos capacitamos con médicos neonatólogos para entender al recién
              nacido: cómo sostenerlo, cómo leer sus señales, qué es normal y
              qué no lo es. Renovamos la certificación en primeros auxilios
              pediátricos cada año. No porque nos lo pidan, sino porque nos da
              tranquilidad a nosotros.
            </p>
          </div>
        </section>

        {/* ── Gemelos: editorial (texto izq + img der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-text">
              <h2>En 2022 nos tocó a nosotros</h2>
              <p className="body-text">
                Nos enteramos de que esperábamos gemelos. Thiago y Matheo
                llegaron para ponernos del otro lado: el de los papás que
                ponen a sus hijos de días de nacido en manos de alguien más.
                Entendimos en carne propia el miedo, el cansancio, las dudas,
                y también la felicidad de tener a tus hijos contigo por
                primera vez.
              </p>
              <p className="body-text">
                Vivimos la hospitalización neonatal. Sabemos lo que se siente
                regresar a casa sin tu bebé. Sabemos lo que es ir al hospital
                cada día sin saber cuándo van a darte de alta a tus hijos. Esa
                experiencia cambió la forma en la que recibimos a cada familia
                que llega al estudio. Especialmente a las que vienen con
                historias parecidas.
              </p>
            </div>
            <div className="svc-editorial-img">
              <Image
                src="/images/behind.jpg"
                alt="Cristian y Reyna trabajando en una sesión newborn en su estudio de Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
          </div>
        </section>

        {/* ── Lo que aprendimos ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Lo que 830 bebés nos enseñaron</h2>
            <p className="body-text">
              Cada bebé que pasa por el estudio nos deja algo. Aprendimos a
              leer lo que un recién nacido necesita antes de que llore:
              si tiene hambre, si tiene sueño, si está sobreestimulado, si
              simplemente necesita estar en brazos de mamá. No es magia. Es
              observación acumulada durante once años.
            </p>
            <p className="body-text">
              También aprendimos a leer a la familia. Cuando una mamá cruza
              la puerta, sabemos si llega cansada, si llega con miedo, si
              necesita hablar o si necesita silencio. Muchas veces la
              pregunta que más se repite no es &ldquo;¿va a salir bonita la
              foto?&rdquo; sino &ldquo;¿lo estoy haciendo bien?&rdquo;.
              Y la respuesta, casi siempre, es sí.
            </p>
            <p className="body-text">
              En varias ocasiones hemos detectado durante la sesión situaciones
              que después requirieron atención médica: problemas digestivos
              importantes, episodios de apnea, irritaciones severas. No somos
              médicos y no diagnosticamos nada. Pero cuando algo no se ve bien,
              lo decimos. Esa es parte de la responsabilidad de trabajar con
              recién nacidos.
            </p>
          </div>
        </section>

        {/* ── Filosofía: editorial (img izq + texto der) ── */}
        <section className="svc-editorial">
          <div className="container svc-editorial-grid">
            <div className="svc-editorial-img">
              <Image
                src="/images/newborn6.jpg"
                alt="Recién nacido durmiendo tranquilo durante sesión newborn - estudio Bambuky Querétaro"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 92vw, 480px"
              />
            </div>
            <div className="svc-editorial-text">
              <h2>Nuestra filosofía: la foto es consecuencia</h2>
              <p className="body-text">
                No creemos que una sesión newborn se trate únicamente de
                fotografías. Las fotos son importantes, pero lo que una familia
                realmente recuerda es cómo se sintió ese día. Por eso nuestra
                prioridad nunca es una pose. Nuestra prioridad es que el bebé
                esté bien. Cuando un bebé está tranquilo, seguro y cómodo,
                las fotografías suceden solas.
              </p>
              <p className="body-text">
                No existen bebés que se portan mal. Cuando un bebé parece
                incómodo o no logra dormir, no está portándose mal. Está
                comunicando algo. Nuestro trabajo no es controlar al bebé.
                Es entender qué necesita.
              </p>
              <p className="body-text">
                Si una pose implica el menor riesgo, no la hacemos. Las
                imágenes donde un bebé parece suspendido o sostenido de formas
                complejas se construyen con montaje digital. El bebé siempre
                está sostenido. Siempre gana el bebé.
              </p>
            </div>
          </div>
        </section>

        {/* ── Qué hacemos antes de la primera foto ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Qué hacemos antes de tomar la primera foto</h2>
            <p className="body-text">
              Antes de empezar cualquier sesión hacemos un check-up visual del
              bebé. Revisamos cabeza, dedos, extremidades, pliegues, axilas.
              La intención es conocer el estado del bebé y documentar cualquier
              situación previa a la sesión. Si algo nos parece inusual,
              lo comentamos con los papás y recomendamos valoración médica
              antes de continuar.
            </p>
            <p className="body-text">
              La sesión se adapta al bebé, no al revés. Si necesita comer,
              come. Si necesita un cambio de pañal, paramos. Si necesita estar
              en brazos de mamá, esperamos. Nuestras manos siempre están
              cerca y nuestros ojos siempre están sobre el recién nacido.
              La higiene es protocolo básico: manos sanitizadas, espacio
              limpio, materiales revisados.
            </p>
          </div>
        </section>

        {/* ── Gemelos y prematuros ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Gemelos y prematuros: lo entendemos desde adentro</h2>
            <p className="body-text">
              La experiencia con gemelos y prematuros no viene solo de nuestro
              trabajo. Viene de nuestra vida. Sabemos que la dificultad de
              tener gemelos no es tener dos bebés: es que existen dos
              necesidades al mismo tiempo. Dos despertares, dos
              alimentaciones, dos ritmos diferentes. Y sabemos que cuando los
              horarios no coinciden, el descanso de los papás se vuelve
              algo casi imposible.
            </p>
            <p className="body-text">
              Una de las frases que más repetimos a los papás que llegan
              con un solo bebé es: si nosotros pudimos con dos, ustedes
              pueden con uno. No como una comparación. Como una forma de
              decirles que las primeras semanas son difíciles para todos.
              Y que mejoran.
            </p>
            <p className="body-text">
              Si tu bebé fue prematuro, si pasó por hospitalización
              neonatal, si tu historia no fue la que imaginaste durante el
              embarazo, entendemos lo que sentís. No de oídas. De haberlo
              vivido. Y eso cambia la forma en la que hacemos la sesión.
            </p>
          </div>
        </section>

        {/* ── Lo que nos gustaría que supieran ── */}
        <section className="svc-content">
          <div className="container">
            <h2>Lo que nos gustaría que supieran los papás nuevos</h2>
            <p className="body-text">
              Después de recibir a más de 830 familias, hay algo que
              aparece una y otra vez: la mayoría de los papás no llegan
              preocupados por las fotos. Llegan preocupados por si están
              siendo buenos padres. Y la verdad es que quien se preocupa
              constantemente por hacerlo bien suele estar haciendo mucho
              más de lo que cree.
            </p>
            <p className="body-text">
              La lactancia suele ser más difícil de lo que imaginaron. El
              cansancio es más grande de lo que esperaban. Las dudas no
              paran. Y todo eso es completamente normal. No es señal de
              que algo esté mal. Es señal de que están aprendiendo algo
              nuevo, los dos: el bebé y ustedes.
            </p>
            <p className="body-text">
              Todo mejora. No porque se vuelva fácil de un día para otro,
              sino porque cada semana trae más experiencia, más confianza
              y más herramientas. La mayoría de las preocupaciones de hoy
              son temporales. Y la mayoría de los papás están haciendo un
              trabajo mucho mejor del que creen.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <SplitCta
          image="/images/bambuky-detras-de-camaras-estudio-queretaro-01.webp"
          alt="Reyna acomodando con cuidado a gemelos recién nacidos durante una sesión newborn en el estudio Bambuky, Querétaro"
          label="Cristian y Reyna"
          title="Lo estás haciendo bien"
          text="Si querés conocernos, escríbenos. Te contamos cómo funciona todo y resolvemos cualquier duda. Sin compromiso, sin presión. Solo dos papás que entienden lo que estás viviendo."
          buttonLabel="Escríbenos por WhatsApp"
          waMessage={WA_MESSAGE}
          microcopy="Te respondemos hoy mismo"
          location="cta_final"
        />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
