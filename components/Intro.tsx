import Image from "next/image";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="container intro-inner">
        <div className="intro-text">
          <p className="label">Estudio Bambuky · Querétaro</p>
          <h2 className="heading">
            Sabemos lo que se siente poner a tu bebé en manos de alguien más
          </h2>
          <p className="body-text">
            Cuando nacieron nuestros gemelos, Thiago y Matheo, lo entendimos
            en carne propia. Por eso cada sesión la hacemos con el mismo
            cuidado que tendríamos con nuestros propios hijos. Estamos
            capacitados por médicos neonatólogos y el estudio está
            acondicionado para recibir a tu familia.
          </p>
          <p className="body-text">
            El estudio es tranquilo, lejos del ruido de la ciudad. Hay
            sillones para los papás y todo el tiempo del mundo. No hay prisa.
          </p>
        </div>
        <div className="intro-image">
          <Image
            src="/images/newborn6.jpg"
            alt="Fotografía recién nacido Querétaro - bebé envuelto durmiendo en el estudio Bambuky"
            fill
            sizes="(max-width: 768px) 92vw, 46vw"
          />
          <div className="intro-image-badge">
            &ldquo;Sabemos que pondrás en nuestras manos al amor de tu vida.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
