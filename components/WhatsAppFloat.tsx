import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

export default function WhatsAppFloat() {
  return (
    <WhatsAppLink
      className="wa-float"
      href={waLink()}
      location="float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </WhatsAppLink>
  );
}
