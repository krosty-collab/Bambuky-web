# Bambuky · Sitio Web

Sitio one-page para **Bambuky**, estudio de fotografía newborn en Jurica, Querétaro.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (tokens de marca en `tailwind.config.ts` + estilos en `app/globals.css`)
- **next/image** para optimización automática de imágenes
- **next/font** (Cormorant Garamond + Jost desde Google Fonts)
- SEO: metadata, Open Graph, Twitter Cards y Schema `LocalBusiness`

## Requisitos

- Node.js 18.17 o superior

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Imágenes

Todas las fotografías viven en `public/images/`. Si falta alguna, el resto del
sitio sigue funcionando, pero `next/image` mostrará un error 404 para esa foto.
Los nombres esperados están documentados en `lib/site.ts`.

## Estructura

```
app/
  layout.tsx     → fuentes, metadata SEO y Schema JSON-LD
  page.tsx       → ensambla todas las secciones
  globals.css    → tokens de diseño y estilos de cada sección
components/       → Nav, Hero, Intro, Services, Gallery, Why, About,
                   Process, CTA, Footer, WhatsAppFloat, WhatsAppIcon
lib/site.ts       → datos centrales (WhatsApp, redes, servicios, galería)
public/images/    → fotografías y logo
```

## Personalización rápida

- **WhatsApp, redes y datos de contacto:** `lib/site.ts`
- **Servicios y galería:** arrays `SERVICES` y `GALLERY` en `lib/site.ts`
- **Colores y tipografías:** `tailwind.config.ts` y `:root` en `app/globals.css`

## Deploy

Listo para [Vercel](https://vercel.com): importa el repositorio y despliega sin
configuración adicional.
