import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about-inner">
        <div className="about-images">
          <div className="about-img about-img-wide">
            <Image
              src="/images/maternidad8.jpg"
              alt="Sesión de maternidad en Querétaro - mamá embarazada con su hijo mayor, estudio Bambuky"
              fill
              sizes="(max-width: 768px) 92vw, 46vw"
            />
          </div>
          <div className="about-img">
            <Image
              src="/images/newborn1.jpg"
              alt="Fotografía newborn Querétaro - bebé en canasta con flores"
              fill
              sizes="(max-width: 768px) 46vw, 23vw"
              loading="lazy"
            />
          </div>
          <div className="about-img">
            <Image
              src="/images/48hs02.jpg"
              alt="Sesión 48 horas Querétaro - papás con su recién nacido"
              fill
              sizes="(max-width: 768px) 46vw, 23vw"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-text">
          <p className="label">Nuestra historia</p>
          <h2 className="heading">Somos Cristian y Reyna</h2>
          <p className="body-text">
            Cristian Andrada llegó de Buenos Aires, Argentina, en 2011, con una
            carrera en cine y televisión que le da un ojo narrativo único. En
            Querétaro conoció a Reyna, originaria de León, Guanajuato. Juntos
            construyeron Bambuky.
          </p>
          <p className="body-text">
            En agosto de 2015 fotografiamos a Aaron, nuestro primer recién
            nacido. Más de diez años después seguimos viendo crecer a su familia.
            Eso define lo que somos.
          </p>
          <p className="body-text">
            En 2022 llegaron Thiago y Mateo, nuestros gemelos. Convertirnos en
            papás nos transformó: entendimos de manera profunda lo que significa
            confiarle a alguien tu bebé de días de nacido. Esa empatía se refleja
            en cada sesión.
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
