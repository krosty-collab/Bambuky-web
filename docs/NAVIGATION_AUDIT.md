# BAMBUKY — Auditoría de Navegación

Auditoría completa de header, footer, breadcrumbs, related services y enlaces internos.

**Inventario actual: 10 páginas**
- `/` — Home
- `/fotografia-newborn-queretaro` — Newborn
- `/fotografia-maternidad-queretaro` — Maternidad
- `/48-horas-contigo-queretaro` — 48 Horas Contigo
- `/sitters-queretaro` — Sitters
- `/smash-cake-queretaro` — Smash Cake
- `/fotografia-newborn-gemelos-queretaro` — Gemelos
- `/fotografia-newborn-prematuros-queretaro` — Prematuros
- `/sobre-nosotros` — Sobre Nosotros
- `/preguntas-frecuentes` — Preguntas Frecuentes

---

## Fase 1 — Problemas detectados

### Header / Nav principal

| Problema | Severidad | Detalle |
|---|---|---|
| **3 de 4 enlaces son anchors que no funcionan fuera de Home** | Crítico | "Sesiones" (#servicios), "Galería" (#galeria), "¿Cómo funciona?" (#proceso) apuntan a secciones de la Home. Desde cualquier otra página, hacen scroll al top sin efecto visible. |
| **Logo apunta a #inicio** | Alto | Desde páginas internas, `href="#inicio"` no navega a Home. Debería ser `/`. |
| **No existe menú móvil** | Crítico | En viewport < 768px, `.nav-links { display: none }`. El usuario móvil solo ve el logo (que no lleva a Home) y el WhatsApp flotante. No hay hamburguesa ni forma de navegar. |
| **No existe dropdown de Sesiones** | Alto | Las 7 páginas de servicio no son descubribles desde el nav. Solo se llega a ellas desde Home (cards) o desde Related Services en otras páginas. |
| **Gemelos y Prematuros no aparecen en el nav** | Alto | Son páginas nuevas sin entrada en ningún menú. Solo accesibles por Related Services o enlaces inline. |

### Footer

| Problema | Severidad | Detalle |
|---|---|---|
| **Columna "Sesiones" incompleta** | Medio | Faltan: Gemelos, Prematuros. |
| **Referencia a "mila-os.com"** | Medio | "Galería de clientes · mila-os.com" — marca externa que no pertenece a Bambuky. Confuso para el usuario. |
| **Enlace "Querétaro" apunta a /#nosotros** | Bajo | Anchor de Home. Desde páginas internas, navega a Home y scrollea al About. Funciona pero es confuso: el texto "Querétaro" no comunica qué hay ahí. |
| **Sin enlace a Gemelos ni Prematuros** | Medio | Páginas nuevas no descubribles desde footer. |

### Breadcrumbs

| Página | Breadcrumb actual | Estado |
|---|---|---|
| Newborn | Inicio > Fotografía Newborn Querétaro | OK |
| Maternidad | Inicio > Fotografía de Maternidad Querétaro | OK |
| 48 Horas | Inicio > 48 Horas Contigo Querétaro | OK |
| Sitters | Inicio > Sesión Sitter Querétaro | OK |
| Smash Cake | Inicio > Smash Cake Querétaro | OK |
| Gemelos | Inicio > Fotografía Newborn > Gemelos | OK (3 niveles) |
| Prematuros | Inicio > Fotografía Newborn > Prematuros | OK (3 niveles) |
| Sobre Nosotros | Inicio > Sobre Nosotros | OK |
| Preguntas Frecuentes | Inicio > Preguntas Frecuentes | OK |
| Home | No tiene breadcrumb | OK (correcto) |

**Breadcrumbs funcionan correctamente.** Los enlaces a "Inicio" usan `/` y navegan bien.

### Related Services

| Página | Muestra | Estado |
|---|---|---|
| Newborn | 48 Horas, Maternidad, Sitters | Faltan Gemelos, Prematuros |
| Maternidad | Newborn, 48 Horas | OK |
| 48 Horas | Newborn, Maternidad | OK |
| Sitters | Smash Cake, Newborn | OK |
| Smash Cake | Sitters, Newborn | OK |
| Gemelos | Newborn, 48 Horas, Maternidad | OK |
| Prematuros | Newborn, Gemelos, 48 Horas | OK |
| Sobre Nosotros | No tiene | OK (no es servicio) |
| FAQ | No tiene | OK (no es servicio) |

**Oportunidad:** La página de Newborn debería incluir Gemelos y Prematuros en sus Related Services (actualmente no los menciona).

### Páginas huérfanas o difíciles de descubrir

| Página | Accesible desde | Problema |
|---|---|---|
| **Gemelos** | Related Services de Prematuros, enlace inline desde FAQ | No aparece en Nav, ni Footer, ni Home cards |
| **Prematuros** | Related Services de Gemelos, enlace inline desde FAQ | No aparece en Nav, ni Footer, ni Home cards |
| **Preguntas Frecuentes** | Footer | No aparece en Nav |
| **Sobre Nosotros** | Nav ("Nosotros"), Footer | OK |

### Experiencia del usuario que entra desde Google a una página interna

**Escenario: usuario llega a `/fotografia-newborn-prematuros-queretaro` desde Google.**

1. Ve el hero con contenido relevante. OK.
2. Intenta explorar más el sitio → Mira el nav.
3. "Sesiones" → clic → no pasa nada (anchor #servicios no existe en esta página).
4. "Galería" → clic → no pasa nada.
5. "¿Cómo funciona?" → clic → no pasa nada.
6. "Nosotros" → funciona (enlace real a /sobre-nosotros).
7. Logo → clic → no pasa nada (anchor #inicio).
8. **En móvil:** no hay navegación visible. Solo el logo (roto) y el WhatsApp flotante.

**Conclusión:** 4 de 5 elementos del nav están rotos fuera de Home. En móvil no existe navegación.

### Referencia a "mila-os.com"

- **Footer:** "Galería de clientes · mila-os.com" — enlace externo a plataforma de entrega de fotos.
- **Smash Cake page:** mención inline "te entregamos las fotos en mila-os.com."
- **lib/site.ts:** `gallery: "https://mila-os.com"`.

No es un error funcional. Es una marca externa (plataforma de galería) que puede confundir al usuario. Recomendación: cambiar el copy a "Galería privada de clientes" sin mencionar el nombre de la plataforma, o mantenerlo pero sin darle prominencia en el footer.

---

## Fase 2 — Propuesta de navegación

### Estructura propuesta

```
┌─────────────────────────────────────────────────┐
│ [Logo → /]                                       │
│                                                   │
│ Sesiones ▾    Nosotros    Preguntas    Agendar   │
│                frecuentes  sesión (WA) │
│ ┌──────────────────┐                              │
│ │ Recién Nacido     │                              │
│ │ Gemelos           │                              │
│ │ Prematuros        │                              │
│ │ Maternidad        │                              │
│ │ 48 Horas Contigo  │                              │
│ │ Sitters           │                              │
│ │ Smash the Cake    │                              │
│ └──────────────────┘                              │
└─────────────────────────────────────────────────┘
```

### Desktop

| Elemento | Comportamiento |
|---|---|
| **Logo** | Enlaza a `/` siempre |
| **Sesiones** | Dropdown con 7 servicios al hover/clic |
| **Nosotros** | Enlace directo a `/sobre-nosotros` |
| **Preguntas frecuentes** | Enlace directo a `/preguntas-frecuentes` |
| **Agendar sesión** | Botón WA (externo) |

### Móvil

| Elemento | Comportamiento |
|---|---|
| **Logo** | Enlaza a `/` |
| **Hamburguesa** | Abre menú lateral/overlay |
| **Menú abierto** | Lista: Sesiones (colapsable con 7 hijos), Nosotros, Preguntas frecuentes, Agendar sesión (WA) |

### Footer actualizado

```
┌────────────────────────────────────────────────────┐
│ [Logo]                                              │
│ Estudio de fotografía newborn en Querétaro.         │
│ Desde 2015.                                         │
│ IG  FB  WA                                          │
│                                                      │
│ SESIONES              INFORMACIÓN                    │
│ Recién Nacido         Sobre Nosotros                │
│ Gemelos               Preguntas frecuentes          │
│ Prematuros            WhatsApp: 442 344 0766        │
│ Maternidad            @bambuky                      │
│ 48 Horas Contigo      Querétaro, México             │
│ Sitters                                              │
│ Smash the Cake                                       │
│                                                      │
│ © 2026 Bambuky Fotografía · Querétaro, México       │
└────────────────────────────────────────────────────┘
```

**Cambios vs. actual:**
- Columna Sesiones: +2 (Gemelos, Prematuros)
- Columna Contacto → "Información": reorganizada
- Eliminada referencia a "mila-os.com" del footer (mantener en páginas de servicio donde se menciona la entrega)
- Eliminado enlace confuso "Querétaro" → /#nosotros

### Breadcrumbs

Sin cambios. Funcionan correctamente.

### Regla de navegación

Toda página debe ser accesible en **máximo 2 clics** desde cualquier otra página:

| Página | Clic 1 | Clic 2 |
|---|---|---|
| Home | Logo | — |
| Newborn | Sesiones > Recién Nacido | — |
| Gemelos | Sesiones > Gemelos | — |
| Prematuros | Sesiones > Prematuros | — |
| Maternidad | Sesiones > Maternidad | — |
| 48 Horas | Sesiones > 48 Horas Contigo | — |
| Sitters | Sesiones > Sitters | — |
| Smash Cake | Sesiones > Smash the Cake | — |
| Sobre Nosotros | Nosotros | — |
| FAQ | Preguntas frecuentes | — |

**Todas las páginas: 1 clic desde cualquier parte del sitio.**

---

## Fase 3 — Cambios a implementar (pendiente aprobación)

1. **Nav.tsx:** Reemplazar LINKS de anchors por rutas reales con dropdown para Sesiones.
2. **Nav.tsx:** Logo → `href="/"`.
3. **Nav.tsx:** Agregar menú hamburguesa para móvil.
4. **Footer.tsx:** Agregar Gemelos y Prematuros a columna Sesiones.
5. **Footer.tsx:** Eliminar "Galería de clientes · mila-os.com" del footer.
6. **Footer.tsx:** Eliminar enlace "Querétaro" → /#nosotros.
7. **Footer.tsx:** Agregar "Preguntas frecuentes" si no está (ya está).
8. **Newborn page:** Agregar Gemelos y Prematuros a Related Services.
9. **globals.css:** Estilos para dropdown y menú móvil hamburguesa.

### Riesgos

- **Home:** Los anchors #servicios, #galeria, #proceso deben seguir funcionando dentro de Home con smooth scroll. La nueva navegación debe detectar si estamos en Home (usar anchors) o en otra página (usar rutas absolutas como `/#servicios`).
- **Menú móvil:** No existe actualmente. Hay que diseñarlo desde cero. Se necesitan estilos y lógica de apertura/cierre.
