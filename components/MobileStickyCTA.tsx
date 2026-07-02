import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <WhatsAppLink
        className="btn-wa"
        href={waLink()}
        location="mobile_sticky"
        buttonName="Pedir precios por WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        Pedir precios por WhatsApp
      </WhatsAppLink>
    </div>
  );
}
