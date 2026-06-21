# Auditoría Móvil — Bambuky

**Fecha:** 2026-06-20
**Viewports probados:** 375×812, 390×844, 430×932
**Páginas auditadas:** 10

---

## Resumen ejecutivo

El sitio tiene una base responsive sólida con clamp(), variables CSS y breakpoints en 1024px/768px/480px. Sin embargo, hay **1 bug crítico** (overlap WA + CTA sticky), varios issues de alta prioridad en galería y drawer, y las 10 páginas cargan correctamente sin overflow horizontal.

---

## Estado por página

| Página | Carga | H1 | Overflow | FAQ | Notas |
|--------|-------|-----|----------|-----|-------|
| `/` | OK | OK | No | N/A | WA overlap con sticky CTA |
| `/fotografia-newborn-queretaro` | OK | OK | No | OK (triggers 64px) | Hero img 345px OK |
| `/fotografia-newborn-gemelos-queretaro` | OK | OK | No | OK | — |
| `/fotografia-newborn-prematuros-queretaro` | OK | OK | No | OK | — |
| `/sobre-nosotros` | OK | OK | No | N/A | 2 imágenes lazy (behind.jpg, newborn6.jpg) tardan en cargar |
| `/preguntas-frecuentes` | OK | OK | No | OK (30 FAQ, triggers 86px) | 8 chips, no overflow |
| `/fotografia-maternidad-queretaro` | OK | OK | No | — | — |
| `/48-horas-contigo-queretaro` | OK | OK | No | — | — |
| `/sitters-queretaro` | OK | OK | No | — | — |
| `/smash-cake-queretaro` | OK | OK | No | — | — |

---

## Bugs encontrados

### BUG-01 · WhatsApp float se solapa con CTA sticky (CRÍTICO)

**Severidad:** Crítica
**Reproduce en:** 375px, 390px, 430px — todos los viewports
**Archivo:** `app/globals.css:961-983` y sticky CTA

**Mediciones a 375px:**
- WA float: top 727px → bottom 783px
- Sticky CTA: top 742px → bottom 812px
- **Overlap confirmado de ~41px**

**Impacto:** El botón de WhatsApp queda parcialmente tapado por el CTA sticky en todas las páginas. El usuario no puede tocar el WhatsApp float sin tocar también el CTA, o viceversa.

**Fix propuesto:**
```css
/* En @media (max-width: 768px) */
.wa-float {
  bottom: calc(1.8rem + 70px); /* sube por encima del sticky CTA */
}
```

---

### BUG-02 · Drawer de navegación no usa viewport width (MEDIA)

**Severidad:** Media
**Reproduce en:** Todos los viewports
**Archivo:** `app/globals.css:238`

**Mediciones:**
- 375px → drawer = 318.75px (85vw), OK pero ajustado
- 390px → drawer = 320px (cap de min())
- 430px → drawer = 320px (cap de min())

**Detalle:** El drawer usa `width: min(320px, 85vw)`. A 375px queda con solo 56px de margen derecho. No es un bug funcional, pero el cap de 320px en phones más grandes (390, 430) deja espacio muerto innecesario.

**Fix propuesto:**
```css
.nav-mobile-drawer {
  width: min(340px, 88vw);
}
```

---

### BUG-03 · Galería masonry muestra 2 columnas en phones (BAJA)

**Severidad:** Baja
**Archivo:** `app/globals.css:615-637`

**Detalle:** En 375px, 2 columnas = ~172px por imagen. Funcional pero las imágenes son pequeñas. A 430px se ve bien. Considerar 1 columna en `@media (max-width: 400px)`.

---

### BUG-04 · Hero badges con dividers en mobile (BAJA)

**Severidad:** Baja
**Archivo:** `app/globals.css:366-394`

**Detalle:** Los 3 badges (10+, 800+, 2) con dividers "|" caben en 345px gracias a flex-wrap, pero visualmente quedan apretados. Los dividers de 40px de alto son innecesarios cuando los badges se stackean.

**Fix propuesto:**
```css
@media (max-width: 480px) {
  .hero-divider { display: none; }
  .hero-badges { gap: 1rem; }
}
```

---

## Checklist de resultados

### 1. Header / Nav
| Check | 375 | 390 | 430 | Estado |
|-------|-----|-----|-----|--------|
| Logo visible | ✅ | ✅ | ✅ | OK |
| Hamburguesa visible | ✅ | ✅ | ✅ | OK |
| Menú abre/cierra | ✅ | ✅ | ✅ | OK (aria-label cambia) |
| Dropdown sesiones | ✅ | ✅ | ✅ | OK |
| Links navegan | ✅ | ✅ | ✅ | OK |
| Botón Agendar accesible | ✅ | ✅ | ✅ | OK (en menú + sticky CTA) |

### 2. Hero
| Check | 375 | 390 | 430 | Estado |
|-------|-----|-----|-----|--------|
| H1 no se corta | ✅ | ✅ | ✅ | OK |
| Imagen no rompe layout | ✅ | ✅ | ✅ | OK |
| CTA visible | ✅ | ✅ | ✅ | OK (sticky bottom) |
| Sin overflow horizontal | ✅ | ✅ | ✅ | OK |

### 3. Contenido
| Check | 375 | 390 | 430 | Estado |
|-------|-----|-----|-----|--------|
| Textos legibles | ✅ | ✅ | ✅ | OK |
| Secciones no apretadas | ✅ | ✅ | ✅ | OK |
| Imágenes proporcionales | ✅ | ✅ | ✅ | OK |
| Módulos entendibles | ✅ | ✅ | ✅ | OK |

### 4. FAQ
| Check | 375 | 390 | 430 | Estado |
|-------|-----|-----|-----|--------|
| Acordeón abre/cierra | ✅ | ✅ | ✅ | OK |
| Chips no rompen layout | ✅ | ✅ | ✅ | OK (8 chips, flex-wrap) |
| Enlaces internos | ✅ | ✅ | ✅ | OK |
| Touch targets >44px | ✅ | ✅ | ✅ | OK (64-86px medido) |

### 5. Footer
| Check | 375 | 390 | 430 | Estado |
|-------|-----|-----|-----|--------|
| Columnas colapsan | ✅ | ✅ | ✅ | OK (1 columna en mobile) |
| Links tocables | ✅ | ✅ | ✅ | OK |
| Sin texto raro/Mila | ✅ | ✅ | ✅ | OK — confirmado sin "Mila" |

### 6. WhatsApp flotante
| Check | 375 | 390 | 430 | Estado |
|-------|-----|-----|-----|--------|
| No tapa CTAs | ❌ | ❌ | ❌ | **BUG-01** — overlap con sticky CTA |
| No tapa contenido | ✅ | ✅ | ✅ | OK |
| No tapa footer | ✅ | ✅ | ✅ | OK |

### 7. Performance visual
| Check | 375 | 390 | 430 | Estado |
|-------|-----|-----|-----|--------|
| Sin saltos raros | ✅ | ✅ | ✅ | OK |
| Sin elementos fuera | ✅ | ✅ | ✅ | OK |
| Sin scroll horizontal | ✅ | ✅ | ✅ | OK (0 overflow en 10 páginas) |

---

## Fixes propuestos (prioridad)

| # | Fix | Severidad | Esfuerzo |
|---|-----|-----------|----------|
| 1 | Subir WA float por encima del sticky CTA en mobile | Crítico | 5 min |
| 2 | Ampliar drawer width a `min(340px, 88vw)` | Media | 2 min |
| 3 | Ocultar hero-dividers en `<480px` | Baja | 2 min |
| 4 | Galería 1 columna en `<400px` | Baja | 2 min |

---

## Notas adicionales

- **Cache corrupto:** Al inicio de la auditoría, el `.next` cache estaba corrupto (module `./948.js` not found). Se resolvió limpiando `.next/` y reiniciando el dev server.
- **Font warning:** Next.js reporta "Failed to find font override values for font `Bodoni Moda`" — cosmético, no afecta render.
- **Screenshots:** No fue posible tomar screenshots vía preview tool (timeout), la auditoría se hizo con snapshot + eval programático.
- **Imágenes sobre-nosotros:** `behind.jpg` y `newborn6.jpg` existen en disco pero tardan en cargar (lazy loading below the fold). No es un bug.
