import Image from "next/image";

const STATS = [
  { value: "800+", label: "Bebés fotografiados" },
  { value: "10+", label: "Años de experiencia" },
  { value: "2015", label: "Desde Querétaro" },
];

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="container intro-inner">
        <div className="intro-text">
          <p className="label">Estudio Bambuky · Jurica, Querétaro</p>
          <h2 className="heading">
            Tu bebé merece el estudio más seguro de Querétaro
          </h2>
          <p className="body-text">
            En Bambuky la seguridad de tu recién nacido no es una frase — es
            nuestra prioridad absoluta. Estamos certificados en primeros auxilios
            pediátricos y cada sesión se realiza con protocolos estrictos de
            cuidado.
          </p>
          <p className="body-text">
            Nuestro estudio en Jurica ofrece un ambiente campestre, tranquilo y
            con temperatura controlada, diseñado para que tu bebé esté cómodo y
            relajado durante toda la sesión.
          </p>
          <div className="stat-row">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="intro-image">
          <Image
            src="/images/newborn6.jpg"
            alt="Fotografía recién nacido Querétaro - bebé envuelto durmiendo en el estudio Bambuky de Jurica"
            fill
            sizes="(max-width: 768px) 92vw, 46vw"
          />
          <div className="intro-image-badge">
            “Cada sesión es un recuerdo para toda la vida”
          </div>
        </div>
      </div>
    </section>
  );
}
