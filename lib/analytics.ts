/**
 * Helper central de Google Analytics 4.
 * Toda llamada a gtag pasa por aquí — no llamar window.gtag directamente
 * desde componentes.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envía un evento a GA4. No hace nada en SSR ni si gtag no cargó todavía. */
export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined)
  );

  window.gtag("event", eventName, {
    page_path: window.location.pathname,
    page_title: document.title,
    ...cleanParams,
  });
}

/** Click en cualquier botón/enlace de WhatsApp. `location` identifica el bloque: hero, navbar, footer, cta, faq, float, etc. */
export function trackWhatsApp(
  location: string,
  extra: { buttonName?: string; section?: string; serviceType?: string } = {}
): void {
  trackEvent("click_whatsapp", {
    section: location,
    button_name: extra.buttonName,
    service_type: extra.serviceType,
  });
}

/** Click en un enlace telefónico (tel:). */
export function trackPhone(
  location: string,
  extra: { section?: string; serviceType?: string } = {}
): void {
  trackEvent("click_phone", {
    section: location,
    service_type: extra.serviceType,
  });
}

/** Click en un botón de correo (mailto:). */
export function trackEmail(
  location: string,
  extra: { section?: string } = {}
): void {
  trackEvent("click_email", {
    section: location,
    ...extra,
  });
}

/** Click en un CTA que no es de WhatsApp (botones de navegación, outline, etc). */
export function trackCTA(
  buttonName: string,
  extra: { section?: string; serviceType?: string } = {}
): void {
  trackEvent("click_cta", {
    button_name: buttonName,
    section: extra.section,
    service_type: extra.serviceType,
  });
}

/** Apertura de una imagen de galería. */
export function trackGallery(imageName: string, section: string): void {
  trackEvent("gallery_image_open", {
    button_name: imageName,
    section,
  });
}

/** Apertura de una pregunta de FAQ (no se dispara al cerrar). */
export function trackFAQ(question: string, section?: string): void {
  trackEvent("faq_expand", {
    button_name: question,
    section,
  });
}

/** Vista de una página de servicio (newborn, maternidad, sitters, etc). Evento de negocio, distinto del page_view automático de GA4. */
export function trackServicePageView(serviceType: string): void {
  trackEvent("service_page_view", { service_type: serviceType });
}

/**
 * Google Consent Mode v2.
 * `initConsentDefaults` corre antes de que cargue el tag de GA (ver layout.tsx) y deja
 * todo en "granted" para no alterar el comportamiento actual — no hay banner de cookies todavía.
 * `updateConsent` queda lista para que un futuro banner de cookies actualice el estado.
 */
export type ConsentValue = "granted" | "denied";

export function updateConsent(state: {
  analytics?: ConsentValue;
  ads?: ConsentValue;
}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: state.analytics ?? "granted",
    ad_storage: state.ads ?? "granted",
    ad_user_data: state.ads ?? "granted",
    ad_personalization: state.ads ?? "granted",
  });
}
