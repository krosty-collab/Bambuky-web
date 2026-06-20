const STEPS = [
  {
    num: "01",
    title: "Escríbenos por WhatsApp",
    text: "Cuéntanos la fecha probable de parto y el tipo de sesión. Te respondemos con toda la información y los paquetes disponibles.",
  },
  {
    num: "02",
    title: "Reserva tu fecha",
    text: "Aseguramos tu lugar con un anticipo. Recomendamos reservar desde el 2do trimestre del embarazo, los lugares son limitados.",
  },
  {
    num: "03",
    title: "La sesión en el estudio",
    text: "3-4 horas en nuestro estudio climatizado. Nosotros nos encargamos de todo: props, temperatura, poses y el cuidado de tu bebé.",
  },
  {
    num: "04",
    title: "Recibe tu galería",
    text: "En 3-4 semanas recibes tu galería digital privada en mila-os.com, en alta calidad y lista para descargar y guardar para siempre.",
  },
];

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="container">
        <div className="section-header">
          <p className="label">¿Cómo funciona?</p>
          <h2 className="heading">Tu sesión, paso a paso</h2>
          <p className="body-text">
            Reserva con anticipación durante el embarazo. Los primeros 15 días de
            vida son la ventana ideal para la sesión newborn.
          </p>
        </div>
        <div className="process-steps">
          {STEPS.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
