import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about-inner">
        <div>
          <div className="about-img-single">
            <Image
              src="/images/maternidad8.jpg"
              alt="Cristian y Reyna, sesión de maternidad en Querétaro - Bambuky Fotografía"
              fill
              sizes="(max-width: 768px) 92vw, 46vw"
            />
          </div>
          <p className="about-img-caption">Cristian y Reyna, julio 2022</p>
        </div>
        <div className="about-text">
          <p className="label">Nuestra historia</p>
          <h2 className="heading">Somos Cristian y Reyna</h2>
          <p className="body-text">
            Cristian viene de Argentina, con una carrera en cine y televisión.
            Reyna es de León, Guanajuato. Nos conocimos en Querétaro y en
            2015 descubrimos juntos la fotografía newborn. Quedamos fascinados.
            Así nació Bambuky.
          </p>
          <p className="body-text">
            Nos capacitamos con fotógrafos y también con médicos neonatólogos
            para entender al bebé recién nacido. Recibimos familias de todo
            Querétaro.
          </p>
          <p className="body-text">
            En 2022 tuvimos la sorpresa de embarazarnos de gemelos. Thiago y
            Matheo llegaron para cambiar nuestras vidas. Entendimos en carne
            propia lo que significa poner a tu bebé de días de nacido en manos
            de alguien más. Le ponemos el corazón a cada foto y queremos crear
            una experiencia que nunca olvides.
          </p>
          <div className="about-quote">
            <p>
              &ldquo;Sabemos que pondrás en nuestras manos al amor de tu vida.
              Ten la seguridad de que lo cuidaremos con todo el amor.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
