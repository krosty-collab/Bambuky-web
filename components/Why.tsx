import Image from "next/image";

const REASONS = [
  {
    title: "Certificados en primeros auxilios pediátricos",
    text: "Más de 10 años trabajando con recién nacidos. Sabemos detectar y actuar ante cualquier situación; hemos atendido apneas y detectado condiciones de salud en sesión. Tu bebé siempre está en manos expertas.",
  },
  {
    title: "Somos un equipo de pareja",
    text: "Cristian dirige la fotografía y Reyna cuida al bebé y acompaña emocionalmente a los papás. No estás en manos de un desconocido, sino de una familia que entiende lo que sientes.",
  },
  {
    title: "Estudio climatizado en Jurica",
    text: "Temperatura controlada para el confort del bebé, flash de estudio profesional y un ambiente campestre y tranquilo, sin el ruido ni el tráfico de la ciudad.",
  },
  {
    title: "800+ bebés, 100% de familias felices",
    text: "Desde 2015 hemos fotografiado más de 800 recién nacidos en Querétaro. Cero incidentes, cada sesión un éxito y cada familia con sus recuerdos guardados para siempre.",
  },
];

export default function Why() {
  return (
    <section className="why" id="por-que">
      <div className="container why-inner">
        <div className="why-text">
          <p className="label">Por qué elegirnos</p>
          <h2 className="heading">La seguridad de tu bebé, primero. Siempre.</h2>
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
            alt="Cristian y Reyna fotografiando a un recién nacido en el estudio Bambuky de Jurica, Querétaro"
            fill
            sizes="(max-width: 768px) 0px, 46vw"
          />
        </div>
      </div>
    </section>
  );
}
