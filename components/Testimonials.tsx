const TESTIMONIALS = [
  {
    quote:
      "Cristian y Reyna son increíbles. Me dieron mucha confianza desde el primer momento y las fotos de mi bebé quedaron preciosas.",
    name: "Sofía M.",
  },
  {
    quote:
      "El estudio es un lugar mágico. Mi bebé estuvo tranquilo toda la sesión y las imágenes superaron todo lo que imaginé.",
    name: "Daniela R.",
  },
  {
    quote:
      "Llevamos 3 años eligiendo a Bambuky para cada etapa de nuestra familia. No los cambiaríamos por nada.",
    name: "Fernanda G.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="label">Testimonios</p>
          <h2 className="heading">Lo que dicen las mamás</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <blockquote className="testimonial-card" key={t.name}>
              <span className="testimonial-quote" aria-hidden="true">
                &ldquo;
              </span>
              <p className="testimonial-text">{t.quote}</p>
              <cite className="testimonial-name">{t.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
