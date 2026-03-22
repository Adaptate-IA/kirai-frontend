const questions = [
  "¿Cuál de mis campañas tiene mejor retorno esta semana?",
  "¿Debería pausar la campaña de retargeting?",
  "¿Cómo distribuyo $1,000 USD entre Meta y Google?",
  "¿Por qué subió mi costo por lead?",
  "Dame un resumen de esta semana vs la anterior",
  "¿Qué campaña debería escalar primero?",
];

export default function Questions() {
  return (
    <section className="questions">
      <div className="container">
        <p className="section-label">Pregúntale a Kirai</p>
        <h2 className="section-title">
          Lo que le preguntarías a un experto en marketing — pero disponible
          24/7.
        </h2>
        <div className="q-grid">
          {questions.map((q, i) => (
            <div key={i} className="q-card">
              &ldquo;{q}&rdquo;
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
