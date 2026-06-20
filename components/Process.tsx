const STEPS = [
  {
    num: "01",
    title: "Escríbenos por WhatsApp",
    text: "Cuéntanos cuándo nace tu bebé (o cuándo nació) y qué sesión te interesa. Te respondemos rápido y sin compromiso.",
  },
  {
    num: "02",
    title: "Reserva tu fecha",
    text: "Con un anticipo apartamos tu lugar. Si estás embarazada, lo ideal es reservar desde el segundo trimestre — así no andas con las prisas después.",
  },
  {
    num: "03",
    title: "La sesión",
    text: "Tú solo trae al bebé. Nosotros tenemos todo: ropa, accesorios, temperatura controlada y paciencia infinita. Si necesita comer o dormir, esperamos.",
  },
  {
    num: "04",
    title: "Tu galería privada",
    text: "En 3-4 semanas recibes tus fotos en una galería digital. Las descargas en alta calidad y las compartes con quien quieras.",
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
            Es más fácil de lo que parece. Te contamos cómo funciona desde
            que nos escribes hasta que recibes tus fotos.
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
