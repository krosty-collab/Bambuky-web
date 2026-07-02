"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackPhone } from "@/lib/analytics";

type PhoneLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  phone: string;
  location: string;
  serviceType?: string;
  children: ReactNode;
};

/** Enlace tel: instrumentado. Usar para cualquier número de teléfono clicable del sitio. */
export default function PhoneLink({
  phone,
  location,
  serviceType,
  children,
  onClick,
  ...rest
}: PhoneLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackPhone(location, { section: location, serviceType });
    onClick?.(e);
  }

  return (
    <a href={`tel:${phone}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
