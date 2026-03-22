export default function Steps() {
  return (
    <section className="steps">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="section-label">Cómo funciona</p>
        <h2
          className="section-title"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          Empieza en 2 minutos.
        </h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Conecta</h3>
            <p>
              Vincula tus cuentas de Meta Ads y Google Ads con un clic. Kirai
              solo lee datos — nunca toca tus campañas.
            </p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Kirai analiza</h3>
            <p>
              Revisa tus campañas, detecta problemas, identifica oportunidades
              y compara con el rendimiento anterior.
            </p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Tú actúas</h3>
            <p>
              Cada mañana recibes un diagnóstico con recomendaciones claras.
              Pregúntale lo que quieras y decide con información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
