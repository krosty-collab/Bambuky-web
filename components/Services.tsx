import Image from "next/image";
import { SERVICES, waLink } from "@/lib/site";

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="section-header">
          <p className="label">Nuestras sesiones</p>
          <h2 className="heading">
            Cada etapa de tu familia, capturada para siempre
          </h2>
          <p className="body-text">
            Desde la panza hasta el primer pastel, acompañamos a las familias de
            Querétaro en cada momento irrepetible.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-card-img">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 480px) 92vw, (max-width: 900px) 46vw, 30vw"
                />
              </div>
              <div className="service-card-body">
                <p className="label">{service.category}</p>
                <h3 className="subheading">{service.title}</h3>
                <p className="body-text">{service.description}</p>
                <a
                  className="service-link"
                  href={waLink(service.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar paquetes
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
