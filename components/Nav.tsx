"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/site";

const LINKS = [
  { href: "#servicios", label: "Sesiones" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "¿Cómo funciona?" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="nav-logo" href="#inicio" aria-label="Bambuky inicio">
          <Image
            src="/images/logo.png"
            alt="Bambuky Fotografía"
            width={160}
            height={52}
            priority
          />
        </Link>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a
              className="nav-cta"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar sesión
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
