import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumb from "@/components/Breadcrumb";
import SplitCta from "@/components/SplitCta";
import WhatsAppLink from "@/components/WhatsAppLink";
import { waLink, SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/seo";
import FAQAccordion from "./FAQAccordion";
import type { ReactNode } from "react";

/* ── METADATA ────────────────────────────────── */

const PAGE_URL = `${SITE.url}/preguntas-frecuentes`;

export const metadata: Metadata = {
  title:
    "Preguntas Frecuentes | Bambuky · Fotografía Newborn Querétaro",
  description:
    "Seguridad newborn, sesiones de gemelos, prematuros, lactancia, postparto y más. Respuestas reales desde la experiencia de Cristian y Reyna con más de 830 recién nacidos fotografiados en Querétaro.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Bambuky",
    title: "Preguntas Frecuentes | Bambuky · Fotografía Newborn Querétaro",
    description:
      "Respuestas reales sobre seguridad, lactancia, gemelos, prematuros y postparto. Más de 830 bebés fotografiados en Querétaro.",
    locale: "es_MX",
    images: [
      {
        url: "/images/newborn6.jpg",
        width: 1200,
        height: 630,
        alt: "Bambuky Fotografía Newborn Querétaro - Preguntas Frecuentes",
      },
    ],
  },
};

/* ── JSON-LD ─────────────────────────────────── */

const breadcrumbLd = breadcrumbSchema([
  { name: "Inicio", url: SITE.url },
  { name: "Preguntas Frecuentes", url: PAGE_URL },
]);

type FaqItem = { q: string; a: string };

const ALL_FAQS: FaqItem[] = [
  {
    q: "¿Qué hacen para garantizar la seguridad de mi bebé durante la sesión?",
    a: "Antes de tomar la primera foto hacemos un check-up visual del bebé. Revisamos cabeza, dedos, extremidades, pliegues y axilas para conocer su estado antes de empezar. Si algo nos parece inusual, lo comentamos contigo y recomendamos valoración médica antes de continuar. Durante toda la sesión nuestros ojos siempre están sobre el bebé y nuestras manos siempre están cerca. Estamos capacitados por médicos neonatólogos y renovamos la certificación en primeros auxilios pediátricos cada año.",
  },
  {
    q: "¿Es verdad que algunas poses newborn son peligrosas?",
    a: "Existen poses populares en la industria donde el bebé parece suspendido o sostenido de formas complejas. En Bambuky, cuando hacemos esas imágenes, se construyen con montaje digital. El bebé siempre está sostenido físicamente en todo momento. Si una pose implica el menor riesgo, no la hacemos. Así de simple.",
  },
  {
    q: "¿Han tenido algún incidente en una sesión?",
    a: "En más de 830 recién nacidos fotografiados nunca hemos tenido un incidente con un bebé. Lo que sí nos ha pasado es detectar durante la sesión situaciones que después requirieron atención médica: problemas digestivos importantes, episodios de apnea, irritaciones severas. No somos médicos y no diagnosticamos nada, pero cuando algo no se ve bien, lo decimos. Creemos que esa es parte de la responsabilidad de trabajar con recién nacidos.",
  },
  {
    q: "¿Qué pasa si mi bebé llora durante toda la sesión?",
    a: "El llanto por sí solo no nos preocupa. Lo que sí observamos son señales más específicas: irritabilidad persistente, incomodidad evidente, dificultad para relajarse. Cuando eso pasa, la prioridad deja de ser la fotografía. Si el bebé necesita pausar, pausamos. Si necesita reprogramar, reprogramamos. La decisión siempre favorece al recién nacido.",
  },
  {
    q: "¿Cómo sé si un fotógrafo newborn es seguro?",
    a: "Hay preguntas que vale la pena hacer antes de elegir: ¿cómo resuelve las poses complejas? ¿Usa montaje digital o las hace en vivo? ¿Tiene formación en manejo de recién nacidos? ¿Qué hace si el bebé no coopera? ¿Ha tenido algún incidente? Las respuestas a esas preguntas te dicen mucho más que una galería de fotos bonitas.",
  },
  {
    q: "¿Cómo logran que un recién nacido duerma durante la sesión?",
    a: "Con la experiencia de más de 830 bebés aprendimos que prácticamente todos los recién nacidos sanos quieren dormir. Cuando uno no logra hacerlo, normalmente hay una causa identificable: hambre, cólicos, incomodidad, sobreestimulación. La pregunta no es \"¿por qué no duerme?\" sino \"¿qué necesita para poder dormir?\". Observamos sus reflejos, interpretamos sus señales y nos adaptamos. No es una técnica secreta. Es observación acumulada durante once años.",
  },
  {
    q: "¿Qué pasa si mi bebé no quiere estar en las poses?",
    a: "No existen bebés que se portan mal. Cuando un recién nacido parece incómodo o no logra quedarse en una pose, no está portándose mal. Está comunicando algo. Puede ser hambre, sueño, sobreestimulación o simplemente necesidad de estar en brazos de mamá. Nuestro trabajo no es controlar al bebé. Es entender qué necesita. Adaptamos la sesión a él, no al revés.",
  },
  {
    q: "¿En qué se fijan cuando reciben a mi bebé?",
    a: "Nos fijamos en todo. En su estado general, en cómo está durmiendo, en cómo reacciona al cambio de temperatura, en cómo se ve su piel. Pero también nos fijamos en ti. En si llegaste cansada, en si necesitas hablar, en si necesitas silencio. La sesión empieza antes de la primera foto. Cuando entendemos cómo llega la familia, podemos crear un ambiente donde todos se sientan tranquilos. Y un bebé tranquilo es un bebé que nos deja trabajar.",
  },
  {
    q: "¿Ustedes van a mi casa o solo trabajan en estudio?",
    a: "La sesión newborn la hacemos en nuestro estudio en Querétaro, donde controlamos temperatura, luz e higiene. Si lo que buscas es fotografía en tu casa o en el hospital durante las primeras horas, tenemos la sesión 48 Horas Contigo, que es completamente documental: vamos a donde estés, sin poses, sin escenarios, solo capturando lo que realmente pasa.",
  },
  {
    q: "¿Qué pasa si llegamos tarde?",
    a: "Llegar con un recién nacido a cualquier lado es una hazaña. Lo sabemos porque nos pasa a nosotros también. Si llegas tarde, no te preocupes. No hay penalización, no hay cara de reproche. Te recibimos igual de tranquilos, acomodamos los tiempos y hacemos la sesión completa. Preferimos que llegues tarde y relajada a que llegues puntual y estresada. Tu bebé siente la diferencia.",
  },
  {
    q: "Es nuestro primer bebé y no tenemos idea de nada. ¿Eso es un problema?",
    a: "Al contrario. La mayoría de las familias que recibimos son primerizas y casi todas llegan con la misma preocupación. No es \"¿van a salir bonitas las fotos?\" sino \"¿lo estoy haciendo bien?\". Después de recibir a más de 830 familias podemos decirte algo: quien se preocupa constantemente por hacerlo bien suele estar haciendo mucho más de lo que cree. Hay una diferencia enorme entre equivocarse y no preocuparse. La preocupación suele ser señal de compromiso.",
  },
  {
    q: "¿Necesitamos preparar algo especial antes de la sesión?",
    a: "Nada especial. Trae al bebé alimentado o con biberón para alimentarlo aquí, pañales extra y algo para ti: agua, un snack. Nosotros tenemos todo lo demás. Lo único que te pedimos es que vengas sin prisa. Si llegas apurada, tu bebé lo siente. Si llegas tranquila, el bebé también lo percibe. Nos ha pasado muchas veces: los papás se sientan, se relajan, y a los diez minutos el bebé ya está dormido.",
  },
  {
    q: "Siento que no estoy siendo suficiente como mamá. ¿Es normal?",
    a: "Es una de las cosas que más vemos. Muchas mamás llegan sintiéndose sobrepasadas. No porque no amen a su bebé. No porque no sean buenas madres. Sino porque la cantidad de cambios que ocurren en los primeros días es enorme. Todo es nuevo al mismo tiempo: alimentar, interpretar el llanto, dormir en fragmentos, adaptar la rutina completa. La experiencia nos ha mostrado que la mayoría de las madres están haciendo un trabajo mucho mejor del que creen. Simplemente están atravesando una etapa extremadamente exigente.",
  },
  {
    q: "¿Qué pasa si necesito amamantar durante la sesión?",
    a: "Paramos y alimentas a tu bebé con toda la calma del mundo. No hay reloj. Muchas sesiones incluyen dos o tres pausas para comer y eso es completamente normal. La alimentación del bebé siempre es prioridad.",
  },
  {
    q: "Mi bebé llora mucho y no sé si tiene hambre o algo más. ¿Cómo lo diferencian ustedes?",
    a: "Después de 830 bebés aprendimos a observar reflejos específicos: la búsqueda oral, el movimiento de boca, la orientación hacia estímulos cercanos. Esas señales nos dicen más que el llanto por sí solo. Muchos bebés lloran no porque tengan hambre sino porque extrañan la sensación del vientre, necesitan contacto, están sobreestimulados o simplemente necesitan descansar. Entender esa diferencia reduce mucho la ansiedad de los papás.",
  },
  {
    q: "Me siento culpable porque la lactancia no me está saliendo como esperaba. ¿Eso es frecuente?",
    a: "Muy frecuente. Muchas mamás llegan pensando que la lactancia será algo natural e inmediato, y la realidad suele incluir dolor, dudas, cansancio y frustración. Lo que hemos visto en años de recibir familias es que estas dificultades son mucho más comunes de lo que parece. La lactancia es un aprendizaje compartido: el bebé también está aprendiendo algo completamente nuevo. Y en la mayoría de los casos, con tiempo y paciencia, las cosas mejoran.",
  },
  {
    q: "¿Juzgan si doy fórmula en vez de leche materna?",
    a: "No. Lo más importante es que el bebé coma. La alimentación de un recién nacido no debería convertirse en una fuente de culpa para nadie. Cada familia tiene circunstancias distintas. Nosotros no opinamos sobre el método. Nos importa que el bebé esté bien alimentado y que tú estés tranquila.",
  },
  {
    q: "¿Hacen sesiones newborn de gemelos?",
    a: "Sí, y es algo que entendemos desde adentro. Somos padres de gemelos: Thiago y Matheo. Sabemos lo que significa tener dos necesidades al mismo tiempo, dos despertares, dos alimentaciones, dos ritmos distintos. Esa experiencia cambia la forma en la que planificamos la sesión, los tiempos que manejamos y la paciencia que le ponemos. No es lo mismo fotografiar gemelos si nunca tuviste que criar dos bebés al mismo tiempo.",
  },
  {
    q: "¿La sesión de gemelos dura más?",
    a: "Normalmente sí. Trabajamos con el ritmo de los dos bebés, y a veces uno coopera y el otro no, o los dos necesitan comer al mismo tiempo, o uno duerme y el otro no. No nos ponemos un límite de tiempo rígido. Lo que sí recomendamos es que vengan con ayuda: otra persona además de mamá y papá que pueda sostener a un bebé mientras trabajamos con el otro.",
  },
  {
    q: "¿Qué consejo le dan a los padres de gemelos?",
    a: "La frase que más repetimos es: la rutina es una herramienta de supervivencia. Siempre que sea posible, traten de sincronizar: alimentar juntos, cambiar juntos, dormir juntos. La sincronización reduce enormemente la carga. Y si eso les sirve de algo: si nosotros pudimos con dos, ustedes pueden con uno. No como comparación. Como una forma de decirles que las primeras semanas son difíciles para todos. Y mejoran.",
  },
  {
    q: "Mi bebé nació prematuro. ¿Puedo hacer sesión newborn?",
    a: "Sí. Lo que ajustamos es el timing. En bebés prematuros trabajamos con la edad corregida, no con la edad cronológica. Nos escribes, nos cuentas la historia de tu bebé y vemos juntos cuál es el mejor momento. Si necesita más tiempo, esperamos. No hay prisa.",
  },
  {
    q: "¿Entienden lo que vivimos con un bebé en el hospital?",
    a: "Sí, lo vivimos en carne propia. Sabemos lo que se siente regresar a casa sin tu bebé. Sabemos lo que es ir al hospital todos los días sin saber cuándo van a darte de alta a tus hijos. La incertidumbre médica, las visitas constantes, el miedo, la sensación de separación. Los procesos emocionales de una familia con un prematuro son completamente distintos a los de una maternidad convencional. No lo leímos en un libro. Lo vivimos.",
  },
  {
    q: "¿La sesión de un prematuro es diferente?",
    a: "Depende del bebé. Algunos prematuros llegan al estudio ya con semanas de adaptación y están perfectamente listos. Otros necesitan más cuidado, más calma, más tiempo. Lo importante es que cada bebé tiene su historia y nosotros nos adaptamos a ella. Si tu bebé estuvo en neonatos, si tuvo complicaciones, si tu experiencia no fue la que imaginaste durante el embarazo, entendemos lo que sentís. Y eso cambia la forma en la que hacemos la sesión.",
  },
  {
    q: "Llego a todos lados hecha un desastre. ¿Importa cómo me veo para la sesión?",
    a: "No importa. En serio. Muchas mamás llegan sin haber tenido tiempo para sí mismas en días. Vemos el cansancio, la falta de tiempo para prepararse, la sensación de estar resolviendo demasiadas cosas a la vez. Todo eso es parte de la etapa y no necesitas llegar arreglada. Lo que sí notamos es que cuando una mamá se siente cuidada y acompañada durante la sesión, se relaja. Y cuando se relaja, sale natural en las fotos.",
  },
  {
    q: "¿Es normal llorar durante la sesión?",
    a: "Pasa más seguido de lo que imaginas. Las primeras semanas traen una sensibilidad emocional que muchas mamás no esperaban. Una conversación, un gesto, alguien que te diga algo bonito, y las lágrimas llegan. No es que algo esté mal. Es que estás atravesando una de las etapas más intensas de tu vida y a veces el cuerpo necesita soltar. Si te pasa, no te preocupes. Estás en un espacio seguro.",
  },
  {
    q: "Siento que no estoy disfrutando la maternidad como debería. ¿Les pasa a otras mamás?",
    a: "Sí. Y es mucho más común de lo que se dice. Muchas mamás llegan con la idea de que deberían estar felices todo el tiempo, y cuando la realidad incluye cansancio, frustración, dolor y dudas, sienten que algo está mal con ellas. Lo que hemos visto durante años es que la maternidad no se mide por la perfección. Se mide por la presencia y el esfuerzo diario. Las dudas, el cansancio y la incertidumbre forman parte normal del proceso. Todo mejora. No porque se vuelva fácil de un día para otro, sino porque cada semana trae más experiencia y más confianza.",
  },
  {
    q: "¿Quiénes son Cristian y Reyna?",
    a: "Cristian viene de Argentina con una carrera en cine y televisión. Reyna es de León, Guanajuato. Se conocieron en Querétaro y en 2015 descubrieron juntos la fotografía newborn. Se capacitaron con fotógrafos y con médicos neonatólogos. En 2022 tuvieron gemelos: Thiago y Matheo. Vivieron hospitalización neonatal. Esa experiencia cambió la forma en la que reciben a cada familia. Llevan más de 830 bebés fotografiados.",
  },
  {
    q: "¿Cuál es la filosofía de Bambuky?",
    a: "La fotografía es consecuencia. No creemos que una sesión newborn se trate únicamente de fotos. Las fotos son importantes, pero lo que una familia realmente recuerda es cómo se sintió ese día. Nuestra prioridad nunca es una pose. Nuestra prioridad es que el bebé esté bien. Cuando está tranquilo, seguro y cómodo, las fotografías suceden solas.",
  },
  {
    q: "¿En qué se diferencia Bambuky de otros estudios?",
    a: "No hacemos comparaciones. Lo que sí podemos decir es qué hacemos nosotros: check-up visual del bebé antes de cada sesión, montaje digital para poses complejas, once años de experiencia con más de 830 recién nacidos, capacitación con médicos neonatólogos, experiencia personal como padres de gemelos y con hospitalización neonatal. La sesión no es solo para el bebé. Es para la familia completa.",
  },
  {
    q: "¿Por qué dicen que la sesión es más que fotos?",
    a: "Porque lo vemos cada semana. Muchas familias no llegan pensando en las fotografías. Llegan atravesando el cansancio, las dudas y la intensidad de los primeros días. La sesión termina siendo una pausa. Un momento para respirar, para hablar, para compartir experiencias, para sentirse acompañados. Algunos papás necesitan hablar de lactancia. Otros necesitan hablar de fútbol. Otros necesitan escuchar que lo están haciendo bien. Nosotros no dirigimos la conversación. Encontramos lo que esa familia necesita en ese momento.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ── SECTION DATA ────────────────────────────── */

type Section = {
  id: string;
  label: string;
  title: string;
  items: { q: string; answer: ReactNode }[];
};

const SECTIONS: Section[] = [
  {
    id: "seguridad",
    label: "Seguridad",
    title: "Seguridad",
    items: [
      {
        q: "¿Qué hacen para garantizar la seguridad de mi bebé durante la sesión?",
        answer: (
          <>
            Antes de tomar la primera foto hacemos un check-up visual del bebé.
            Revisamos cabeza, dedos, extremidades, pliegues y axilas para conocer
            su estado antes de empezar. Si algo nos parece inusual, lo comentamos
            contigo y recomendamos valoración médica antes de continuar. Durante
            toda la sesión nuestros ojos siempre están sobre el bebé y nuestras
            manos siempre están cerca. Estamos capacitados por médicos
            neonatólogos y renovamos la certificación en primeros auxilios
            pediátricos cada año. Podés leer más sobre cómo trabajamos en
            nuestra{" "}
            <Link href="/fotografia-newborn-queretaro">
              página de fotografía newborn
            </Link>
            .
          </>
        ),
      },
      {
        q: "¿Es verdad que algunas poses newborn son peligrosas?",
        answer: (
          <>
            Existen poses populares en la industria donde el bebé parece
            suspendido o sostenido de formas complejas. En Bambuky, cuando
            hacemos esas imágenes, se construyen con montaje digital. El bebé
            siempre está sostenido físicamente en todo momento. Si una pose
            implica el menor riesgo, no la hacemos. Así de simple.
          </>
        ),
      },
      {
        q: "¿Han tenido algún incidente en una sesión?",
        answer: (
          <>
            En más de 830 recién nacidos fotografiados nunca hemos tenido un
            incidente con un bebé. Lo que sí nos ha pasado es detectar durante la
            sesión situaciones que después requirieron atención médica: problemas
            digestivos importantes, episodios de apnea, irritaciones severas. No
            somos médicos y no diagnosticamos nada, pero cuando algo no se ve
            bien, lo decimos. Creemos que esa es parte de la responsabilidad de
            trabajar con recién nacidos.
          </>
        ),
      },
      {
        q: "¿Qué pasa si mi bebé llora durante toda la sesión?",
        answer: (
          <>
            El llanto por sí solo no nos preocupa. Lo que sí observamos son
            señales más específicas: irritabilidad persistente, incomodidad
            evidente, dificultad para relajarse. Cuando eso pasa, la prioridad
            deja de ser la fotografía. Si el bebé necesita pausar, pausamos. Si
            necesita reprogramar, reprogramamos. La decisión siempre favorece al
            recién nacido.
          </>
        ),
      },
      {
        q: "¿Cómo sé si un fotógrafo newborn es seguro?",
        answer: (
          <>
            Hay preguntas que vale la pena hacer antes de elegir: ¿cómo resuelve
            las poses complejas? ¿Usa montaje digital o las hace en vivo? ¿Tiene
            formación en manejo de recién nacidos? ¿Qué hace si el bebé no
            coopera? ¿Ha tenido algún incidente? Las respuestas a esas preguntas
            te dicen mucho más que una galería de fotos bonitas.
          </>
        ),
      },
    ],
  },
  {
    id: "sesion-newborn",
    label: "Sesión Newborn",
    title: "Sesión Newborn",
    items: [
      {
        q: "¿Cómo logran que un recién nacido duerma durante la sesión?",
        answer: (
          <>
            Con la experiencia de más de 830 bebés aprendimos que prácticamente
            todos los recién nacidos sanos quieren dormir. Cuando uno no logra
            hacerlo, normalmente hay una causa identificable: hambre, cólicos,
            incomodidad, sobreestimulación. La pregunta no es &ldquo;¿por qué no
            duerme?&rdquo; sino &ldquo;¿qué necesita para poder
            dormir?&rdquo;. Observamos sus reflejos, interpretamos sus señales y
            nos adaptamos. No es una técnica secreta. Es observación acumulada
            durante once años.
          </>
        ),
      },
      {
        q: "¿Qué pasa si mi bebé no quiere estar en las poses?",
        answer: (
          <>
            No existen bebés que se portan mal. Cuando un recién nacido parece
            incómodo o no logra quedarse en una pose, no está portándose mal.
            Está comunicando algo. Puede ser hambre, sueño, sobreestimulación o
            simplemente necesidad de estar en brazos de mamá. Nuestro trabajo no
            es controlar al bebé. Es entender qué necesita. Adaptamos la sesión
            a él, no al revés.
          </>
        ),
      },
      {
        q: "¿En qué se fijan cuando reciben a mi bebé?",
        answer: (
          <>
            Nos fijamos en todo. En su estado general, en cómo está durmiendo, en
            cómo reacciona al cambio de temperatura, en cómo se ve su piel. Pero
            también nos fijamos en ti. En si llegaste cansada, en si necesitas
            hablar, en si necesitas silencio. La sesión empieza antes de la
            primera foto. Cuando entendemos cómo llega la familia, podemos crear
            un ambiente donde todos se sientan tranquilos. Y un bebé tranquilo es
            un bebé que nos deja trabajar.
          </>
        ),
      },
      {
        q: "¿Ustedes van a mi casa o solo trabajan en estudio?",
        answer: (
          <>
            La sesión newborn la hacemos en nuestro estudio en Querétaro, donde
            controlamos temperatura, luz e higiene. Si lo que buscas es
            fotografía en tu casa o en el hospital durante las primeras horas,
            tenemos la sesión{" "}
            <Link href="/48-horas-contigo-queretaro">48 Horas Contigo</Link>,
            que es completamente documental: vamos a donde estés, sin poses, sin
            escenarios, solo capturando lo que realmente pasa.
          </>
        ),
      },
      {
        q: "¿Qué pasa si llegamos tarde?",
        answer: (
          <>
            Llegar con un recién nacido a cualquier lado es una hazaña. Lo
            sabemos porque nos pasa a nosotros también. Si llegas tarde, no te
            preocupes. No hay penalización, no hay cara de reproche. Te recibimos
            igual de tranquilos, acomodamos los tiempos y hacemos la sesión
            completa. Preferimos que llegues tarde y relajada a que llegues
            puntual y estresada. Tu bebé siente la diferencia.
          </>
        ),
      },
    ],
  },
  {
    id: "padres-primerizos",
    label: "Padres Primerizos",
    title: "Padres Primerizos",
    items: [
      {
        q: "Es nuestro primer bebé y no tenemos idea de nada. ¿Eso es un problema?",
        answer: (
          <>
            Al contrario. La mayoría de las familias que recibimos son primerizas
            y casi todas llegan con la misma preocupación. No es &ldquo;¿van a
            salir bonitas las fotos?&rdquo; sino &ldquo;¿lo estoy haciendo
            bien?&rdquo;. Después de recibir a más de 830 familias podemos
            decirte algo: quien se preocupa constantemente por hacerlo bien suele
            estar haciendo mucho más de lo que cree. Hay una diferencia enorme
            entre equivocarse y no preocuparse. La preocupación suele ser señal
            de compromiso.
          </>
        ),
      },
      {
        q: "¿Necesitamos preparar algo especial antes de la sesión?",
        answer: (
          <>
            Nada especial. Trae al bebé alimentado o con biberón para alimentarlo
            aquí, pañales extra y algo para ti: agua, un snack. Nosotros tenemos
            todo lo demás. Lo único que te pedimos es que vengas sin prisa. Si
            llegas apurada, tu bebé lo siente. Si llegas tranquila, el bebé
            también lo percibe. Nos ha pasado muchas veces: los papás se sientan,
            se relajan, y a los diez minutos el bebé ya está dormido.
          </>
        ),
      },
      {
        q: "Siento que no estoy siendo suficiente como mamá. ¿Es normal?",
        answer: (
          <>
            Es una de las cosas que más vemos. Muchas mamás llegan sintiéndose
            sobrepasadas. No porque no amen a su bebé. No porque no sean buenas
            madres. Sino porque la cantidad de cambios que ocurren en los primeros
            días es enorme. Todo es nuevo al mismo tiempo: alimentar, interpretar
            el llanto, dormir en fragmentos, adaptar la rutina completa. La
            experiencia nos ha mostrado que la mayoría de las madres están
            haciendo un trabajo mucho mejor del que creen. Simplemente están
            atravesando una etapa extremadamente exigente.
          </>
        ),
      },
    ],
  },
  {
    id: "lactancia-y-alimentacion",
    label: "Lactancia y Alimentación",
    title: "Lactancia y Alimentación",
    items: [
      {
        q: "¿Qué pasa si necesito amamantar durante la sesión?",
        answer: (
          <>
            Paramos y alimentas a tu bebé con toda la calma del mundo. No hay
            reloj. Muchas sesiones incluyen dos o tres pausas para comer y eso es
            completamente normal. La alimentación del bebé siempre es prioridad.
          </>
        ),
      },
      {
        q: "Mi bebé llora mucho y no sé si tiene hambre o algo más. ¿Cómo lo diferencian ustedes?",
        answer: (
          <>
            Después de 830 bebés aprendimos a observar reflejos específicos: la
            búsqueda oral, el movimiento de boca, la orientación hacia estímulos
            cercanos. Esas señales nos dicen más que el llanto por sí solo.
            Muchos bebés lloran no porque tengan hambre sino porque extrañan la
            sensación del vientre, necesitan contacto, están sobreestimulados o
            simplemente necesitan descansar. Entender esa diferencia reduce mucho
            la ansiedad de los papás.
          </>
        ),
      },
      {
        q: "Me siento culpable porque la lactancia no me está saliendo como esperaba. ¿Eso es frecuente?",
        answer: (
          <>
            Muy frecuente. Muchas mamás llegan pensando que la lactancia será algo
            natural e inmediato, y la realidad suele incluir dolor, dudas,
            cansancio y frustración. Lo que hemos visto en años de recibir
            familias es que estas dificultades son mucho más comunes de lo que
            parece. La lactancia es un aprendizaje compartido: el bebé también
            está aprendiendo algo completamente nuevo. Y en la mayoría de los
            casos, con tiempo y paciencia, las cosas mejoran.
          </>
        ),
      },
      {
        q: "¿Juzgan si doy fórmula en vez de leche materna?",
        answer: (
          <>
            No. Lo más importante es que el bebé coma. La alimentación de un
            recién nacido no debería convertirse en una fuente de culpa para
            nadie. Cada familia tiene circunstancias distintas. Nosotros no
            opinamos sobre el método. Nos importa que el bebé esté bien
            alimentado y que tú estés tranquila.
          </>
        ),
      },
    ],
  },
  {
    id: "gemelos",
    label: "Gemelos",
    title: "Gemelos",
    items: [
      {
        q: "¿Hacen sesiones newborn de gemelos?",
        answer: (
          <>
            Sí, y es algo que entendemos desde adentro. Somos padres de gemelos:
            Thiago y Matheo. Sabemos lo que significa tener dos necesidades al
            mismo tiempo, dos despertares, dos alimentaciones, dos ritmos
            distintos. Esa experiencia cambia la forma en la que planificamos la
            sesión, los tiempos que manejamos y la paciencia que le ponemos. No
            es lo mismo fotografiar gemelos si nunca tuviste que criar dos bebés
            al mismo tiempo. Podés conocer más de{" "}
            <Link href="/sobre-nosotros">nuestra historia aquí</Link>.
          </>
        ),
      },
      {
        q: "¿La sesión de gemelos dura más?",
        answer: (
          <>
            Normalmente sí. Trabajamos con el ritmo de los dos bebés, y a veces
            uno coopera y el otro no, o los dos necesitan comer al mismo tiempo,
            o uno duerme y el otro no. No nos ponemos un límite de tiempo rígido.
            Lo que sí recomendamos es que vengan con ayuda: otra persona además de
            mamá y papá que pueda sostener a un bebé mientras trabajamos con el
            otro.
          </>
        ),
      },
      {
        q: "¿Qué consejo le dan a los padres de gemelos?",
        answer: (
          <>
            La frase que más repetimos es: la rutina es una herramienta de
            supervivencia. Siempre que sea posible, traten de sincronizar:
            alimentar juntos, cambiar juntos, dormir juntos. La sincronización
            reduce enormemente la carga. Y si eso les sirve de algo: si nosotros
            pudimos con dos, ustedes pueden con uno. No como comparación. Como
            una forma de decirles que las primeras semanas son difíciles para
            todos. Y mejoran.
          </>
        ),
      },
    ],
  },
  {
    id: "prematuros",
    label: "Prematuros",
    title: "Prematuros",
    items: [
      {
        q: "Mi bebé nació prematuro. ¿Puedo hacer sesión newborn?",
        answer: (
          <>
            Sí. Lo que ajustamos es el timing. En bebés prematuros trabajamos con
            la edad corregida, no con la edad cronológica. Nos escribes, nos
            cuentas la historia de tu bebé y vemos juntos cuál es el mejor
            momento. Si necesita más tiempo, esperamos. No hay prisa.
          </>
        ),
      },
      {
        q: "¿Entienden lo que vivimos con un bebé en el hospital?",
        answer: (
          <>
            Sí, lo vivimos en carne propia. Sabemos lo que se siente regresar a
            casa sin tu bebé. Sabemos lo que es ir al hospital todos los días sin
            saber cuándo van a darte de alta a tus hijos. La incertidumbre
            médica, las visitas constantes, el miedo, la sensación de separación.
            Los procesos emocionales de una familia con un prematuro son
            completamente distintos a los de una maternidad convencional. No lo
            leímos en un libro. Lo vivimos. Podés leer más en{" "}
            <Link href="/sobre-nosotros">nuestra historia</Link>.
          </>
        ),
      },
      {
        q: "¿La sesión de un prematuro es diferente?",
        answer: (
          <>
            Depende del bebé. Algunos prematuros llegan al estudio ya con semanas
            de adaptación y están perfectamente listos. Otros necesitan más
            cuidado, más calma, más tiempo. Lo importante es que cada bebé tiene
            su historia y nosotros nos adaptamos a ella. Si tu bebé estuvo en
            neonatos, si tuvo complicaciones, si tu experiencia no fue la que
            imaginaste durante el embarazo, entendemos lo que sentís. Y eso
            cambia la forma en la que hacemos la sesión.
          </>
        ),
      },
    ],
  },
  {
    id: "mama-postparto",
    label: "Mamá Postparto",
    title: "Mamá Postparto",
    items: [
      {
        q: "Llego a todos lados hecha un desastre. ¿Importa cómo me veo para la sesión?",
        answer: (
          <>
            No importa. En serio. Muchas mamás llegan sin haber tenido tiempo
            para sí mismas en días. Vemos el cansancio, la falta de tiempo para
            prepararse, la sensación de estar resolviendo demasiadas cosas a la
            vez. Todo eso es parte de la etapa y no necesitas llegar arreglada. Lo
            que sí notamos es que cuando una mamá se siente cuidada y acompañada
            durante la sesión, se relaja. Y cuando se relaja, sale natural en las
            fotos.
          </>
        ),
      },
      {
        q: "¿Es normal llorar durante la sesión?",
        answer: (
          <>
            Pasa más seguido de lo que imaginas. Las primeras semanas traen una
            sensibilidad emocional que muchas mamás no esperaban. Una
            conversación, un gesto, alguien que te diga algo bonito, y las
            lágrimas llegan. No es que algo esté mal. Es que estás atravesando
            una de las etapas más intensas de tu vida y a veces el cuerpo
            necesita soltar. Si te pasa, no te preocupes. Estás en un espacio
            seguro.
          </>
        ),
      },
      {
        q: "Siento que no estoy disfrutando la maternidad como debería. ¿Les pasa a otras mamás?",
        answer: (
          <>
            Sí. Y es mucho más común de lo que se dice. Muchas mamás llegan con
            la idea de que deberían estar felices todo el tiempo, y cuando la
            realidad incluye cansancio, frustración, dolor y dudas, sienten que
            algo está mal con ellas. Lo que hemos visto durante años es que la
            maternidad no se mide por la perfección. Se mide por la presencia y
            el esfuerzo diario. Las dudas, el cansancio y la incertidumbre forman
            parte normal del proceso. Todo mejora. No porque se vuelva fácil de
            un día para otro, sino porque cada semana trae más experiencia y más
            confianza.
          </>
        ),
      },
    ],
  },
  {
    id: "sobre-bambuky",
    label: "Sobre Bambuky",
    title: "Sobre Bambuky",
    items: [
      {
        q: "¿Quiénes son Cristian y Reyna?",
        answer: (
          <>
            Cristian viene de Argentina con una carrera en cine y televisión.
            Reyna es de León, Guanajuato. Se conocieron en Querétaro y en 2015
            descubrieron juntos la fotografía newborn. Se capacitaron con
            fotógrafos y con médicos neonatólogos. En 2022 tuvieron gemelos:
            Thiago y Matheo. Vivieron hospitalización neonatal. Esa experiencia
            cambió la forma en la que reciben a cada familia. Llevan más de 830
            bebés fotografiados.{" "}
            <Link href="/sobre-nosotros">Conoce nuestra historia completa</Link>.
          </>
        ),
      },
      {
        q: "¿Cuál es la filosofía de Bambuky?",
        answer: (
          <>
            La fotografía es consecuencia. No creemos que una sesión newborn se
            trate únicamente de fotos. Las fotos son importantes, pero lo que una
            familia realmente recuerda es cómo se sintió ese día. Nuestra
            prioridad nunca es una pose. Nuestra prioridad es que el bebé esté
            bien. Cuando está tranquilo, seguro y cómodo, las fotografías suceden
            solas.
          </>
        ),
      },
      {
        q: "¿En qué se diferencia Bambuky de otros estudios?",
        answer: (
          <>
            No hacemos comparaciones. Lo que sí podemos decir es qué hacemos
            nosotros: check-up visual del bebé antes de cada sesión, montaje
            digital para poses complejas, once años de experiencia con más de 830
            recién nacidos, capacitación con médicos neonatólogos, experiencia
            personal como padres de gemelos y con hospitalización neonatal. La
            sesión no es solo para el bebé. Es para la familia completa.
          </>
        ),
      },
      {
        q: "¿Por qué dicen que la sesión es más que fotos?",
        answer: (
          <>
            Porque lo vemos cada semana. Muchas familias no llegan pensando en
            las fotografías. Llegan atravesando el cansancio, las dudas y la
            intensidad de los primeros días. La sesión termina siendo una pausa.
            Un momento para respirar, para hablar, para compartir experiencias,
            para sentirse acompañados. Algunos papás necesitan hablar de
            lactancia. Otros necesitan hablar de fútbol. Otros necesitan escuchar
            que lo están haciendo bien. Nosotros no dirigimos la conversación.
            Encontramos lo que esa familia necesita en ese momento.
          </>
        ),
      },
    ],
  },
];

/* ── PAGE COMPONENT ──────────────────────────── */

const WA_MESSAGE =
  "Hola Bambuky, tengo una duda sobre sus sesiones 🌿";

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="svc-hero svc-hero--center">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Preguntas Frecuentes" },
              ]}
            />
            <p className="label">Preguntas frecuentes</p>
            <h1>
              Todo lo que nos preguntan los papás (y lo que a veces
              no se atreven a preguntar)
            </h1>
            <p className="subheading">
              Respuestas desde la experiencia de once años y más de 830
              recién nacidos. Si no encontrás tu duda aquí,{" "}
              <WhatsAppLink
                href={waLink(WA_MESSAGE)}
                location="faq_hero"
                buttonName="escríbenos por WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                escríbenos por WhatsApp
              </WhatsAppLink>
              .
            </p>

            {/* ── Jump links ── */}
            <nav className="faq-jump-links" aria-label="Categorías">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="faq-jump-chip">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ── FAQ sections ── */}
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="faq-section"
          >
            <div className="container">
              <div className="section-header">
                <h2 className="heading">{section.title}</h2>
              </div>
              <FAQAccordion items={section.items} sectionId={section.id} />
            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <SplitCta
          image="/images/newborn7.jpg"
          alt="Recién nacido dormido en sesión newborn - Bambuky Querétaro"
          label="Bambuky · Querétaro"
          title="¿Tu duda no está aquí?"
          text="Escríbenos por WhatsApp. Te respondemos hoy mismo, sin compromiso, sin presión. Solo dos papás que entienden lo que estás viviendo."
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
