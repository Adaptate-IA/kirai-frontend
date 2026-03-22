export default function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <p className="section-label">El problema</p>
        <h2 className="section-title">Si manejas ads, esto te pasa.</h2>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="pain-num">01</div>
            <h3>Reaccionas tarde</h3>
            <p>
              Revisas tus campañas una o dos veces por semana. Para cuando ves
              que algo anda mal, ya perdiste presupuesto que no vuelve.
            </p>
          </div>
          <div className="pain-card">
            <div className="pain-num">02</div>
            <h3>Pagas por datos, no por decisiones</h3>
            <p>
              Tu agencia te manda un PDF con métricas que no entiendes. Sabes
              cuánto gastaste, pero no sabes si fue bien o mal — ni qué hacer
              diferente.
            </p>
          </div>
          <div className="pain-card">
            <div className="pain-num">03</div>
            <h3>Decides a ciegas</h3>
            <p>
              ¿Subir presupuesto? ¿Pausar una campaña? ¿Cambiar la audiencia?
              Sin un experto disponible, terminas adivinando con tu plata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
