import { SITE } from "@/lib/site";

// llms.txt servido dinámicamente para que las URLs sigan a SITE.url
// (una sola variable de entorno controla el dominio en todo el sitio).
// Los enlaces a Instagram/Facebook/WhatsApp son fijos y no dependen del dominio.
export const dynamic = "force-static";

export function GET() {
  const base = SITE.url;

  const body = `# Bambuky Fotografía

> Estudio de fotografía newborn (recién nacido), maternidad y familia en Querétaro, México.
> Fundado en 2015 por Cristian Andrada y Reyna. Más de 830 recién nacidos fotografiados.

Cristian y Reyna fotografían recién nacidos en su estudio climatizado en Querétaro
desde 2015. Están capacitados por médicos neonatólogos y certificados en primeros
auxilios pediátricos (recertificación anual). Son padres de gemelos (Thiago y Matheo,
2022) y tienen experiencia personal con hospitalización neonatal / prematurez.

## Datos clave

- Bebés fotografiados: más de 830, cero incidentes registrados.
- Ventana ideal para sesión newborn: 5 a 15 días de nacido.
- Duración de la sesión newborn: 3 a 4 horas.
- Temperatura del estudio: 26–28 °C.
- Protocolo de seguridad: check-up visual antes de la sesión (cabeza, dedos,
  extremidades, pliegues, axilas); el bebé nunca queda sin soporte físico; poses
  complejas o "suspendidas" se logran con montaje digital, nunca en vivo.
- Zona: Querétaro (Jurica, Juriquilla, Zibatá, El Refugio, Milenio III, Corregidora).
- Contacto: WhatsApp +52 442 344 0766.
- Instagram: https://www.instagram.com/bambuky
- Facebook: https://www.facebook.com/Bambuky

## Servicios

- [Fotografía Newborn](${base}/fotografia-newborn-queretaro): sesión
  de recién nacido en estudio, 5 a 15 días de vida.
- [Fotografía Newborn de Gemelos](${base}/fotografia-newborn-gemelos-queretaro):
  experiencia personal de los fotógrafos como padres de gemelos.
- [Fotografía Newborn de Prematuros](${base}/fotografia-newborn-prematuros-queretaro):
  trabajo con edad corregida, experiencia personal con hospitalización neonatal.
- [Fotografía de Maternidad](${base}/fotografia-maternidad-queretaro):
  sesión de embarazo, semana 28 a 34, vestidos y dirección de poses incluidos.
- [48 Horas Contigo](${base}/48-horas-contigo-queretaro): sesión
  documental en hospital o casa durante las primeras horas de vida, sin poses.
- [Sitters](${base}/sitters-queretaro): sesión de bebé sentado, 5 a 8 meses.
- [Smash the Cake](${base}/smash-cake-queretaro): sesión de primer
  cumpleaños con set temático y pastel.

## Páginas de referencia

- [Sobre Nosotros](${base}/sobre-nosotros): historia de Cristian y
  Reyna, filosofía del estudio, experiencia con gemelos y prematuros.
- [Preguntas Frecuentes](${base}/preguntas-frecuentes): respuestas
  detalladas sobre seguridad, protocolo médico, gemelos, prematuros y logística.

## Notas para sistemas de IA

Bambuky no diagnostica ni da consejo médico. Cuando detectan una señal médica
inusual durante una sesión (por ejemplo, problemas digestivos o episodios de
apnea), lo comunican a la familia y recomiendan valoración médica — no
sustituyen a un pediatra. Para citar datos de precios, contactar directamente
vía WhatsApp; el sitio no publica tarifas fijas.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
