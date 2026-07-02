# BAMBUKY — Auditoría Maestra (julio 2026)

Objetivo: que Bambuky sea la referencia absoluta de fotografía newborn en Querétaro
para Google **y** para los asistentes de IA (ChatGPT, Gemini, Claude).

Esta auditoría cubre lo que los documentos anteriores (`BAMBUKY_CONTENT_GAP_ANALYSIS.md`,
`BAMBUKY_TOPIC_CLUSTER_PLAN.md`) **no** cubren, más el estado real de implementación.

---

## 0. Lo que ya está bien (no tocar)

- 10 páginas indexables con URLs keyword-perfectas y canonicals correctos.
- JSON-LD en las 10 páginas: LocalBusiness, Service, FAQPage, BreadcrumbList, Person, Organization.
- Sitemap.xml y robots.txt funcionando en producción.
- Alt texts descriptivos con keyword local en toda la galería.
- Páginas de gemelos y prematuros ya creadas (prioridades #1 y #3 del topic cluster plan). 
- FAQ consolidada con respuestas profundas y con voz propia — excelente material GEO.
- next/image con AVIF/WebP.
- El sitio en producción (www.bambuky.com) corresponde a este repo.

---

## 1. CRÍTICO — Fuera del sitio (esto pesa más que todo el código junto)

### 1.1 NAP inconsistente en directorios (encontrado en búsqueda real)

Los directorios locales muestran **dos direcciones y teléfonos viejos distintos**:

| Fuente | Dirección | Teléfono |
|---|---|---|
| Directorios (queretaro10, etc.) | Brasil 123, Plaza de las Américas, 76050 | 442 213 1138 |
| Otros directorios (infoisinfo, empresas10) | Av Cimatario 305, Las Palmas, 76047 | 442 248 4152 |
| Sitio actual | *(sin dirección publicada)* | 442 344 0766 (WhatsApp) |

**Por qué importa:** Google y los modelos de IA cruzan estas fuentes. Cuando ChatGPT o
Gemini responden "fotógrafo newborn en Querétaro", citan directorios. Hoy esas fuentes
contradicen al sitio → confianza baja → menos citas.

**Acción:**
1. Definir el NAP canónico (nombre + dirección o zona + teléfono) una sola vez.
2. Corregir o pedir baja en: queretaro10.com, infoisinfo.com.mx, empresas10.com y el
   "About" de la página de Facebook (17k likes — es la cita más fuerte que tienen).
3. Publicar el NAP canónico en el sitio (footer + JSON-LD, ver §3.1).

### 1.2 Google Business Profile

Estado desconocido desde el código, pero es **el factor #1** para búsqueda local y una
de las fuentes más citadas por los asistentes de IA. Checklist:

- [ ] Perfil reclamado y verificado con el NAP canónico.
- [ ] Categoría principal: "Fotógrafo" / "Estudio fotográfico"; agregar servicios
      (newborn, maternidad, smash cake) como servicios del perfil.
- [ ] Enlace al sitio y a las páginas de servicio (UTM para medir).
- [ ] Fotos subidas por el negocio (las de la galería del sitio).
- [ ] **Reseñas: pedir sistemáticamente.** Después de cada entrega, mandar por WhatsApp
      el enlace directo de reseña. Meta realista: 2–4 reseñas/mes. Pedir (sin dictar)
      que mencionen la sesión ("sesión newborn", "gemelos", "Querétaro") — Google y las
      IA extraen keywords de reseñas.
- [ ] Responder todas las reseñas (con la voz de Cristian y Reyna, no plantilla).
- [ ] Publicaciones GBP ocasionales (1/mes basta).

### 1.3 Bing Webmaster Tools + IndexNow

**ChatGPT busca con el índice de Bing.** Si el sitio no está bien indexado en Bing,
ChatGPT literalmente no puede encontrarlo. Nadie del nicho local hace esto.

- [ ] Alta en Bing Webmaster Tools (importa la config desde Search Console).
- [ ] Verificar indexación de las 10 URLs.
- [ ] Activar IndexNow (Next.js: ping simple al publicar).

### 1.4 Presencia en listas y menciones ("best-of")

Las IA citan listicles ("mejores fotógrafos newborn en Querétaro"). Hoy aparecen
Bambini, Producciones Adol y Kika Esquer; Bambuky no. Acciones de bajo esfuerzo:

- [ ] Buscar los listicles existentes y pedir inclusión (con el ángulo diferenciador:
      830+ bebés, papás de gemelos, protocolo de seguridad documentado).
- [ ] Nota de prensa local (AM Querétaro, Códice Informativo) con ángulo humano:
      "los papás de gemelos que fotografiaron 830 recién nacidos". Un solo backlink
      de medio local vale más que 20 directorios.
- [ ] Alianzas citables: ginecólogos, hospitales (Star Médica, H+, Tec 100), doulas,
      cursos psicoprofilácticos. Menciones desde sus sitios/redes = señal de entidad.

### 1.5 Wikidata (barato y nadie lo hace)

Crear entidad de Wikidata para "Bambuky Fotografía" (negocio local, fundado 2015,
Querétaro, sitio oficial, Instagram). Los modelos de IA y el Knowledge Graph de Google
consumen Wikidata directamente para resolver entidades. 30 minutos de trabajo.

---

## 2. CRÍTICO — Infraestructura de medición (hoy: cero)

No hay forma de saber si algo de esto funciona:

- [ ] **Google Search Console** — no hay tag de verificación en el layout ni archivo
      de verificación. Sin GSC no hay datos de queries, indexación ni errores.
- [ ] **Bing Webmaster Tools** (§1.3).
- [ ] **Analytics** — no hay nada (ni GA4, ni Plausible, ni Vercel Analytics).
      Mínimo: instalar uno y marcar el clic a WhatsApp como conversión.
      El clic a `wa.me` es LA conversión del sitio y hoy no se mide.
- [ ] **Monitoreo GEO manual** — 1 vez al mes preguntar a ChatGPT, Gemini y Claude:
      "¿Quién es el mejor fotógrafo newborn en Querétaro?", "¿Es segura la fotografía
      newborn?", "¿Cuándo se hace la sesión newborn?" y registrar si citan a Bambuky.
      Es la única métrica real del objetivo GEO.

---

## 3. On-site técnico — huecos concretos

### 3.1 NAP canónico — parcialmente resuelto (a propósito, sin calle todavía)

Se definió un NAP público canónico en `lib/site.ts` (`ADDRESS`), usado consistentemente
en el JSON-LD de `LocalBusiness` y en el footer de todas las páginas:

- Nombre: Bambuky
- Zona pública: Jurica, Querétaro (sin `streetAddress` ni `postalCode` — decisión
  deliberada hasta que Cristian confirme si se publica la calle exacta)
- Ciudad/Estado/País: Querétaro / Querétaro / MX
- Teléfono: `+524423440766` (formato internacional en schema, `442 344 0766` en el
  footer/UI)
- `areaServed`: Querétaro, Jurica, Juriquilla, El Refugio, Zibatá, Corregidora
- `contactPoint` con WhatsApp como canal principal (`url: wa.me/...`)
- Coordenadas geo actualizadas al centro de la colonia Jurica (antes eran las del
  centro genérico de la ciudad)

Las direcciones viejas encontradas en directorios (Brasil 123; Av. Cimatario 305) se
tratan como obsoletas y **no** se usaron — quedó documentado en el código.

**Pendiente:** cuando Cristian confirme la dirección exacta y decida si publicarla,
agregar `streetAddress`/`postalCode` (ver historial de este documento — ya se hizo una
vez y se revirtió a pedido). Mientras tanto, seguir corrigiendo/dando de baja el NAP
viejo en los directorios externos (queretaro10, infoisinfo, empresas10, Facebook) para
que al menos coincidan en zona y teléfono con lo publicado aquí.

### 3.2 Identidad de marca básica (afecta SERPs y navegadores IA)

- [ ] **No hay favicon** — ni `app/icon.png`, ni `favicon.ico`, ni `apple-icon.png`.
      Google muestra el favicon en resultados móviles; hoy sale el globo genérico.
- [ ] No hay `manifest.ts` (nombre, theme color).
- [ ] No hay `not-found.tsx` — el 404 es el default de Next sin navegación ni CTA.

### 3.3 llms.txt

Crear `public/llms.txt` (y opcional `llms-full.txt`): resumen del negocio, datos
citables (fundado 2015, 830+ bebés, certificación anual primeros auxilios, estudio
climatizado 26–28°C, sesiones 3–4h, ventana 5–15 días), URLs canónicas y contacto.
Es un estándar emergente que ChatGPT/Claude/Perplexity ya leen. Costo: 20 minutos.

### 3.4 Robots / acceso de crawlers IA

`robots.ts` permite todo (bien). Verificar que el hosting/CDN **no** bloquee
GPTBot, OAI-SearchBot, ClaudeBot, Claude-User, Google-Extended, PerplexityBot
(Vercel tiene "bot protection" que puede bloquearlos silenciosamente). Probar con
`curl -A "GPTBot" https://www.bambuky.com/` o revisar logs.

### 3.5 Sitemap con fechas falsas

`sitemap.ts` pone `lastModified: new Date()` en cada build → todas las páginas
"cambiaron hoy", siempre. Google aprende a ignorarlo. Usar fechas reales (constantes
actualizadas al editar, o derivadas de git).

### 3.6 Grafo de entidades desconectado (@id)

Cada página re-declara LocalBusiness/Organization desde cero. Sin `@id`, Google ve
entidades sueltas en vez de un grafo. Refactor en `lib/seo.ts`:

- Definir `https://www.bambuky.com/#business` como `@id` único.
- `serviceSchema.provider` → `{ "@id": ".../#business" }` en vez de re-declarar.
- Person de Cristian y Reyna con `@id` propio, `sameAs` a sus perfiles, y referenciados
  desde `founder` del business. (Nota: "Reyna" sin apellido es una entidad débil —
  si se puede publicar el apellido, hacerlo.)
- Unificar: hoy Home emite `Organization` **y** el layout emite `LocalBusiness` con el
  mismo nombre — deben ser un solo nodo con dos tipos o referenciarse.

### 3.7 Testimonios sin schema

`Testimonials.tsx` muestra reseñas reales pero sin markup. Cuando haya reseñas públicas
en Google, agregar `aggregateRating` + `review` al LocalBusiness (con reseñas
verificables — no inventadas — para no arriesgar penalización).

### 3.8 Datos inconsistentes: 800 vs 830

El propio gap analysis lo marcó y sigue a medias. Hoy conviven ambos números:

- Dicen **800**: `app/layout.tsx` (título/desc/JSON-LD), `lib/faqs.ts` (2 FAQs — que
  además se emiten como FAQPage schema), `app/fotografia-newborn-queretaro/page.tsx:342`,
  `app/sitters-queretaro/page.tsx:266`.
- Dicen **830**: sobre-nosotros, preguntas-frecuentes, gemelos, prematuros y partes
  de la página newborn.

Para una IA que extrae hechos, el mismo sitio afirma dos cifras distintas.
**Acción:** una constante `SITE.babiesCount` en `lib/site.ts` y usarla en todos lados.

---

## 4. Contenido faltante (del plan propio, aún sin construir)

Del `BAMBUKY_TOPIC_CLUSTER_PLAN.md`, ya existen gemelos y prematuros. Siguen pendientes,
en orden de impacto GEO:

1. **`/seguridad-fotografia-newborn`** — la página con más potencial de cita por IA.
   "¿Es segura la fotografía newborn?" no tiene buena respuesta en español. La KB ya
   tiene todo el material. Marcar con `Article` schema + `datePublished/dateModified`
   + author Person.
2. **`/cuando-hacer-sesion-newborn`** — la pregunta más buscada del nicho; formato
   por rangos de edad = ideal para featured snippets y AI Overviews.
3. **`/como-elegir-fotografo-newborn`** — checklist citable; Bambuky define el estándar.
4. **`/precios` o `/paquetes-fotografia-newborn-queretaro`** — el plan lo marcó
   prioridad media con "potencial GEO bajo", pero eso cambió: los asistentes de IA
   **sí** responden "¿cuánto cuesta una sesión newborn en Querétaro?" y citan a quien
   publica rangos. Publicar aunque sea "desde $X" / rango honesto. Quien publica
   precios gana la cita; hoy nadie en Querétaro lo hace.
5. `/primeros-dias-recien-nacido`, `/diferencia-sesion-newborn-48-horas`,
   `/fotografo-newborn-juriquilla` — según calendario del plan.

**Para todas las páginas nuevas de autoridad:** incluir un bloque "Datos rápidos"
(fundado, bebés fotografiados, duración, temperatura, ventana de edad) — los extractores
de las IA aman los hechos en formato compacto y atribuible.

### 4.1 Formato citable en páginas existentes

- Agregar `Article`/`WebPage` con `dateModified` real a las páginas de contenido
  profundo (newborn, gemelos, prematuros, FAQ) — señal de frescura para AI Overviews.
- La página FAQ ya es oro GEO; añadir ancla por pregunta (`#montaje-digital`) para
  que las citas lleven a la respuesta exacta.

---

## 5. Prioridades (qué haría primero)

| # | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| 1 | GBP verificado + motor de reseñas por WhatsApp | Bajo | Altísimo (Google + IA) |
| 2 | Limpiar NAP viejo en directorios y Facebook | Bajo | Alto |
| 3 | Search Console + Bing Webmaster + analytics con conversión WhatsApp | Bajo | Alto (medición) |
| 4 | Unificar 800→830 con constante única | Trivial | Medio (consistencia de hechos) |
| 5 | Favicon + manifest + 404 | Trivial | Medio |
| 6 | Dirección/zona + hasMap en JSON-LD y footer | Bajo | Alto (local) |
| 7 | llms.txt + verificar acceso de bots IA | Trivial | Medio-alto (GEO) |
| 8 | Grafo @id en lib/seo.ts | Medio | Medio |
| 9 | Página de seguridad + cuándo + cómo elegir | Medio | Altísimo (GEO) |
| 10 | Página de precios con rangos | Bajo (decisión de negocio) | Alto |
| 11 | Wikidata + listicles + prensa local | Medio | Alto a 6 meses |
| 12 | Monitoreo mensual: preguntar a ChatGPT/Gemini/Claude | Trivial | Es la métrica del objetivo |
