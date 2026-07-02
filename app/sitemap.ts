import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import path from "node:path";

const BASE = "https://www.bambuky.com";

/** Fecha real del último commit que tocó el archivo. Evita mandar "hoy" en cada build. */
function lastModified(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (iso) return new Date(iso);
  } catch {
    // git no disponible en el entorno de build (p. ej. export estático sin historial)
  }
  return new Date();
}

function pageDate(relativePath: string): Date {
  return lastModified(path.join("app", relativePath, "page.tsx"));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: pageDate("."),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/fotografia-newborn-queretaro`,
      lastModified: pageDate("fotografia-newborn-queretaro"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE}/fotografia-maternidad-queretaro`,
      lastModified: pageDate("fotografia-maternidad-queretaro"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/48-horas-contigo-queretaro`,
      lastModified: pageDate("48-horas-contigo-queretaro"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/smash-cake-queretaro`,
      lastModified: pageDate("smash-cake-queretaro"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/sitters-queretaro`,
      lastModified: pageDate("sitters-queretaro"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/fotografia-newborn-gemelos-queretaro`,
      lastModified: pageDate("fotografia-newborn-gemelos-queretaro"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/fotografia-newborn-prematuros-queretaro`,
      lastModified: pageDate("fotografia-newborn-prematuros-queretaro"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/sobre-nosotros`,
      lastModified: pageDate("sobre-nosotros"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/preguntas-frecuentes`,
      lastModified: pageDate("preguntas-frecuentes"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
