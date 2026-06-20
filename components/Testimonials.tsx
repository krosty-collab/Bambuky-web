const TESTIMONIALS = [
  {
    quote:
      "Llegué con los nervios de mamá primeriza y Reyna me tranquilizó en dos minutos. Mi bebé durmió toda la sesión y yo terminé llorando de la emoción cuando vi las primeras fotos en la pantalla.",
    name: "Sofía M.",
  },
  {
    quote:
      "Les llevé a mi hijo con 8 días de nacido y lo trataron como si fuera suyo. Cristian me explicó cada pose antes de hacerla. Eso para mí fue todo.",
    name: "Daniela R.",
  },
  {
    quote:
      "Hicimos la newborn, la sitter y el smash cake. Cuando ves las tres juntas, se te hace un nudo en la garganta. No los cambiaríamos por nada.",
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
