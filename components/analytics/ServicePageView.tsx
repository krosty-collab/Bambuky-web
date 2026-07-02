"use client";

import { useEffect } from "react";
import { trackServicePageView } from "@/lib/analytics";

/** Dispara service_page_view una vez al montar una página de servicio. */
export default function ServicePageView({ serviceType }: { serviceType: string }) {
  useEffect(() => {
    trackServicePageView(serviceType);
  }, [serviceType]);

  return null;
}
