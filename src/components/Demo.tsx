import ChatMockup from "@/components/ChatMockup";

export default function Demo() {
  return (
    <section className="demo">
      <div className="container">
        <div className="demo-content">
          <div className="demo-text">
            <p className="section-label">Conoce a Kirai</p>
            <h2>Tu experta en marketing digital con IA.</h2>
            <p>
              Kirai se conecta a tus cuentas de Meta Ads y Google Ads, revisa
              todo en tiempo real, y te habla en simple. Sin jerga. Sin
              reportes que nadie lee.
            </p>
            <ul className="demo-features">
              <li>Ve todas tus campañas en un solo dashboard</li>
              <li>Recibe alertas cuando algo no anda bien</li>
              <li>Pregúntale lo que quieras en lenguaje normal</li>
              <li>Recibe recomendaciones accionables cada día</li>
            </ul>
          </div>
          <div className="demo-visual">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
