import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a
        className="btn-wa"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        Pedir precios por WhatsApp
      </a>
    </div>
  );
}
