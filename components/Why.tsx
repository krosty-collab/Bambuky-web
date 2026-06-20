import Image from "next/image";

const REASONS = [
  {
    title: "Capacitados por médicos neonatólogos",
    text: "Tenemos todo el cuidado y conocimiento para trabajar con recién nacidos. Nos capacitamos con médicos neonatólogos para entender al bebé y saber cómo actuar en cualquier situación.",
  },
  {
    title: "Somos una pareja experta en lo que hacemos",
    text: "Reyna recibe a tu bebé con las manos tibias y lo va acurrucando. No estás en manos de un desconocido — estás con una familia que tiene gemelos de 3 años.",
  },
  {
    title: "El estudio está pensado para bebés, no para adultos",
    text: "Acondicionamos el estudio para que tu bebé se sienta cómodo. Ruido blanco de fondo, lejos del tráfico. Los papás tienen sillones y están cómodos. El bebé tiene todo lo que necesita para dormir tranquilo.",
  },
  {
    title: "Fotografiamos bebés desde hace once años. Cero incidentes.",
    text: "Lo decimos porque sabemos que es lo primero que necesitas escuchar. Once años, cero incidentes. Esa estadística es lo que más nos importa.",
  },
];

export default function Why() {
  return (
    <section className="why" id="por-que">
      <div className="container why-inner">
        <div className="why-text">
          <p className="label">Cómo cuidamos a tu bebé</p>
          <h2 className="heading">Tu bebé en buenas manos</h2>
          <ul className="why-list">
            {REASONS.map((reason) => (
              <li className="why-item" key={reason.title}>
                <div className="why-icon" aria-hidden="true">
                  ✓
                </div>
                <div className="why-item-text">
                  <strong>{reason.title}</strong>
                  <p>{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="why-image">
          <Image
            src="/images/behind.jpg"
            alt="Cristian y Reyna fotografiando a un recién nacido en el estudio Bambuky, Querétaro"
            fill
            sizes="(max-width: 768px) 0px, 46vw"
          />
        </div>
      </div>
    </section>
  );
}
