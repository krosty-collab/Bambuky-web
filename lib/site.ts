/**
 * Datos centrales del sitio Bambuky.
 * Un único lugar para teléfono, mensajes de WhatsApp, redes y catálogo.
 */

export const SITE = {
  name: "Bambuky",
  legalName: "Bambuky Fotografía",
  url: "https://www.bambuky.com",
  tagline: "Los primeros días pasan volando",
  locality: "Querétaro",
  region: "Querétaro",
  country: "MX",
  email: "hola@bambuky.com",
  gallery: "https://mila-os.com",
} as const;

/**
 * Zona pública del estudio. Única fuente de verdad — debe coincidir con Google Business Profile.
 * Deliberadamente sin streetAddress ni postalCode: no se publica la dirección exacta todavía.
 * Direcciones viejas de directorios (Brasil 123, Av. Cimatario 305) son datos obsoletos —
 * no reutilizar hasta que Cristian confirme lo contrario.
 */
export const ADDRESS = {
  neighborhood: "Jurica",
  locality: "Querétaro",
  region: "Querétaro",
  country: "MX",
  /** Línea legible para mostrar en pantalla (footer, etc.). */
  display: "Estudio de fotografía newborn en Jurica, Querétaro · WhatsApp 442 344 0766",
} as const;

export const WHATSAPP_NUMBER = "524423440766";
export const WHATSAPP_DISPLAY = "442 344 0766";

/** Número de bebés fotografiados. Única fuente de verdad — no hardcodear "800" o "830" en otro lado. */
export const BABIES_COUNT = 830;
export const BABIES_COUNT_TEXT = `${BABIES_COUNT}+`;

/** Mensaje por defecto pre-cargado en el chat de WhatsApp. */
export const DEFAULT_WA_MESSAGE =
  "Hola Bambuky, estoy esperando bebé y quisiera información sobre sus sesiones y paquetes 🌿";

/** Genera un enlace wa.me con un mensaje pre-cargado. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL = {
  instagram: "https://www.instagram.com/bambuky",
  facebook: "https://www.facebook.com/Bambuky",
} as const;

export type Service = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  waMessage: string;
};

export const SERVICES: Service[] = [
  {
    id: "newborn",
    category: "Sesión estrella",
    title: "Newborn · Recién Nacido",
    description:
      "Entre los 5 y 15 días tu bebé todavía duerme como en el vientre de mamá. Nos tomamos 3-4 horas, sin prisa, para fotografiarlo con todo el cuidado del mundo. Capacitados para hacer la sesión lo mejor posible.",
    image: "/images/newborn1.jpg",
    alt: "Fotografía newborn Querétaro - bebé en canasta con flores rosas, estudio Bambuky",
    waMessage: "Hola Bambuky, quisiera información sobre la sesión newborn 👶",
  },
  {
    id: "maternidad",
    category: "Semana 28–32",
    title: "Maternidad",
    description:
      "Muchas mamás nos dicen que fue la primera vez que se sintieron realmente bonitas durante el embarazo. Tenemos vestidos, telas y toda la dirección de poses. Tú solo ven.",
    image: "/images/maternidad3.jpg",
    alt: "Fotografía maternidad Querétaro - sesión de embarazo en estudio Bambuky",
    waMessage: "Hola Bambuky, quisiera información sobre la sesión de maternidad 🌿",
  },
  {
    id: "48-horas",
    category: "En el hospital",
    title: "48 Horas Contigo",
    description:
      "Vamos al hospital o a tu casa en las primeras horas. Sin poses, sin escenarios. Solo lo que realmente pasa: el primer abrazo, los deditos, la abuela llorando.",
    image: "/images/48hs01.jpg",
    alt: "Fotografía 48 horas hospital Querétaro - recién nacido con su familia",
    waMessage: "Hola Bambuky, quisiera información sobre la sesión 48 horas 🏥",
  },
  {
    id: "sitters",
    category: "6 a 8 meses",
    title: "Sitters",
    description:
      "Ya se sienta solo, agarra todo, sonríe con intención. Entre los 6 y 8 meses la personalidad explota y cada gesto es nuevo. Es la sesión más divertida que hacemos.",
    image: "/images/sitters04.jpg",
    alt: "Sesión Sitters bebé 6-8 meses Querétaro - bebé sentado en estudio Bambuky",
    waMessage: "Hola Bambuky, quisiera información sobre la sesión Sitters 👶",
  },
  {
    id: "smash-the-cake",
    category: "Primer año",
    title: "Smash the Cake",
    description:
      "Armamos un set temático a tu gusto, ponemos el pastel enfrente y dejamos que pase lo que tenga que pasar. Unos meten las manos, algunos no lo quieren tocar, pero las fotos siempre quedan increíbles.",
    image: "/images/smash05.jpg",
    alt: "Smash the Cake Querétaro - fotografía primer año del bebé, estudio Bambuky",
    waMessage: "Hola Bambuky, quisiera información sobre Smash the Cake 🎂",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

/** Mezcla de servicios para el masonry. Dimensiones aproximadas para preservar el aspecto. */
export const GALLERY: GalleryItem[] = [
  { src: "/images/newborn2.jpg", alt: "Sesión newborn Querétaro - bebé envuelto en blanco con diadema floral", w: 900, h: 1200 },
  { src: "/images/smash01.jpg", alt: "Smash the Cake Querétaro - niña con pastel rosa y globos", w: 900, h: 1300 },
  { src: "/images/sitters04.jpg", alt: "Sesión Sitters Querétaro - bebé sentado de 7 meses", w: 900, h: 1100 },
  { src: "/images/maternidad5.jpg", alt: "Fotografía maternidad Querétaro - pareja esperando bebé", w: 900, h: 1250 },
  { src: "/images/newborn5.jpg", alt: "Fotografía recién nacido Querétaro - pose lateral en traje crema", w: 900, h: 1150 },
  { src: "/images/smash02.jpg", alt: "Smash the Cake niño Querétaro - primer cumpleaños con globos azules", w: 900, h: 1300 },
  { src: "/images/maternidad6.jpg", alt: "Maternidad en pareja Querétaro - sesión de embarazo", w: 900, h: 1200 },
  { src: "/images/newborn7.jpg", alt: "Bebé recién nacido fotografía newborn Querétaro - bowl con flores lilas", w: 900, h: 1100 },
  { src: "/images/smash04.jpg", alt: "Smash the Cake gemelos Querétaro - primer año con pasteles blancos", w: 1200, h: 800 },
  { src: "/images/maternidad7.jpg", alt: "Sesión de embarazo en pareja Querétaro - estudio Bambuky", w: 900, h: 1200 },
  { src: "/images/sitters03.jpg", alt: "Sesión bebé Sitters Querétaro - niño con gorrito de oso", w: 900, h: 1250 },
  { src: "/images/48hs02.jpg", alt: "Sesión 48 horas Querétaro - papás con su bebé recién nacido", w: 900, h: 1150 },
  { src: "/images/smash03.jpg", alt: "Smash the Cake Querétaro - niña hada con decorado temático", w: 900, h: 1300 },
  { src: "/images/maternidad2.jpg", alt: "Fotografía embarazo Querétaro - sesión de maternidad en estudio", w: 900, h: 1200 },
  { src: "/images/newborn3.jpg", alt: "Fotografía newborn Querétaro - bebé en cama miniatura", w: 900, h: 1150 },
  { src: "/images/48hs03.jpg", alt: "Sesión 48 horas hospital Querétaro - familia completa mirando al bebé", w: 1200, h: 800 },
  { src: "/images/sitters05.jpg", alt: "Sesión Sitters Querétaro - bebé sentado con osito de peluche", w: 900, h: 1250 },
];
