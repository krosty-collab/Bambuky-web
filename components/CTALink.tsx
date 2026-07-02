"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackCTA } from "@/lib/analytics";

type CTALinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  buttonName: string;
  section?: string;
  serviceType?: string;
  children: ReactNode;
};

/** Enlace de CTA genérico (no WhatsApp) instrumentado con click_cta. */
export default function CTALink({
  href,
  buttonName,
  section,
  serviceType,
  children,
  onClick,
  ...rest
}: CTALinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackCTA(buttonName, { section, serviceType });
    onClick?.(e);
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
