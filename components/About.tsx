import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about-inner">
        <div className="about-img-single">
          <Image
            src="/images/maternidad8.jpg"
            alt="Sesión de maternidad en Querétaro - Bambuky Fotografía"
            fill
            sizes="(max-width: 768px) 92vw, 46vw"
          />
        </div>
        <div className="about-text">
          <p className="label">Nuestra historia</p>
          <h2 className="heading">Somos Cristian y Reyna</h2>
          <p className="body-text">
            Cristian Andrada llegó de Buenos Aires, Argentina, en 2011, con una
            carrera en cine y televisión que le da un ojo narrativo único. En
            Querétaro conoció a Reyna, originaria de León, Guanajuato. Juntos
            construyeron Bambuky, un estudio especializado en fotografía newborn
            y de familia con más de 10 años de experiencia.
          </p>
          <p className="body-text">
            Desde agosto de 2015 hemos fotografiado a más de 800 recién nacidos.
            Estamos certificados en primeros auxilios pediátricos y cada sesión
            se realiza con protocolos estrictos de seguridad. Recibimos familias
            de Juriquilla, Zibatá, El Refugio, Milenio III, Corregidora y toda
            la zona metropolitana de Querétaro.
          </p>
          <p className="body-text">
            En 2022 llegaron Thiago y Mateo, nuestros gemelos. Convertirnos en
            papás nos transformó: entendimos de manera profunda lo que significa
            confiarle a alguien tu bebé de días de nacido. Esa empatía, paciencia
            y cuidado se refleja en cada sesión.
          </p>
          <div className="about-quote">
            <p>
              “Fotografiamos recuerdos, no fotos. Hay una diferencia enorme.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
