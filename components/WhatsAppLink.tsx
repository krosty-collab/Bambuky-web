"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackWhatsApp } from "@/lib/analytics";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  location: string;
  buttonName?: string;
  section?: string;
  serviceType?: string;
  children: ReactNode;
};

/** Enlace de WhatsApp instrumentado. Todo botón/link de WA del sitio debe usar este componente. */
export default function WhatsAppLink({
  href,
  location,
  buttonName,
  section,
  serviceType,
  children,
  onClick,
  ...rest
}: WhatsAppLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackWhatsApp(location, { buttonName, section: section ?? location, serviceType });
    onClick?.(e);
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
