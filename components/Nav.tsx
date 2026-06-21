"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/site";

const SESSIONS = [
  { href: "/fotografia-newborn-queretaro", label: "Recién Nacido" },
  { href: "/fotografia-maternidad-queretaro", label: "Maternidad" },
  { href: "/48-horas-contigo-queretaro", label: "48 Horas Contigo" },
  { href: "/sitters-queretaro", label: "Sitters" },
  { href: "/smash-cake-queretaro", label: "Smash the Cake" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!sessionsOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSessionsOpen(false);
      }
    }
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sessionsOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setSessionsOpen(false);
  };

  return (
    <>
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link className="nav-logo" href="/" aria-label="Bambuky inicio" onClick={closeMobile}>
            <Image
              src="/images/logo.png"
              alt="Bambuky Fotografía"
              width={192}
              height={62}
              priority
            />
          </Link>

          {/* ── Desktop nav ── */}
          <ul className="nav-links nav-desktop">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li
              className="nav-dropdown"
              ref={dropdownRef}
            >
              <button
                className="nav-dropdown-trigger"
                onClick={() => setSessionsOpen(!sessionsOpen)}
                aria-expanded={sessionsOpen}
                aria-haspopup="true"
              >
                Sesiones
                <span className="nav-chevron" aria-hidden="true">
                  ▾
                </span>
              </button>
              {sessionsOpen && (
                <ul className="nav-dropdown-menu">
                  {SESSIONS.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setSessionsOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/sobre-nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
            </li>
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

          {/* ── Mobile hamburger ── */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <span className={`hamburger-line${mobileOpen ? " open" : ""}`} />
            <span className={`hamburger-line${mobileOpen ? " open" : ""}`} />
            <span className={`hamburger-line${mobileOpen ? " open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`nav-mobile-overlay${mobileOpen ? " visible" : ""}`}
        onClick={closeMobile}
        aria-hidden={!mobileOpen}
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`nav-mobile-drawer${mobileOpen ? " visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="nav-mobile-links">
          <li>
            <Link href="/" onClick={closeMobile}>
              Inicio
            </Link>
          </li>
          <li>
            <button
              className="nav-mobile-section-trigger"
              onClick={() => setSessionsOpen(!sessionsOpen)}
              aria-expanded={sessionsOpen}
            >
              Sesiones
              <span
                className="nav-chevron"
                aria-hidden="true"
                style={{
                  transform: sessionsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                ▾
              </span>
            </button>
            {sessionsOpen && (
              <ul className="nav-mobile-sub">
                {SESSIONS.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} onClick={closeMobile}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/sobre-nosotros" onClick={closeMobile}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/preguntas-frecuentes" onClick={closeMobile}>
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <a
              className="nav-mobile-cta"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
            >
              Agendar sesión
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
