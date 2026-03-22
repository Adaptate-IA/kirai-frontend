"use client";

import { scrollToWaitlist } from "@/lib/scroll";

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <p className="section-label">Planes</p>
        <h2 className="section-title">
          Una agencia cobra $800+/mes. Kirai, $49.
        </h2>
        <div className="pricing-grid">
          {/* Starter */}
          <div className="price-card">
            <div className="price-name">Starter</div>
            <div className="price-amount">
              $49 <span>USD/mes</span>
            </div>
            <div className="price-original">Después $99/mes</div>
            <ul className="price-list">
              <li>Hasta $2,000 de gasto mensual en ads</li>
              <li>1 cuenta de Meta Ads + 1 de Google Ads</li>
              <li>Diagnóstico diario</li>
              <li>Chat con Kirai ilimitado</li>
              <li>Dashboard centralizado</li>
            </ul>
            <button className="price-cta secondary" onClick={scrollToWaitlist}>
              Reservar mi lugar
            </button>
          </div>

          {/* Pro */}
          <div className="price-card featured">
            <div className="price-badge">Más popular</div>
            <div className="price-name">Pro</div>
            <div className="price-amount">
              $149 <span>USD/mes</span>
            </div>
            <div className="price-original">Después $249/mes</div>
            <ul className="price-list">
              <li>Gasto ilimitado en ads</li>
              <li>Múltiples cuentas de Meta y Google</li>
              <li>Alertas en tiempo real</li>
              <li>Recomendaciones avanzadas de presupuesto</li>
              <li>Reportes semanales automáticos</li>
              <li>Soporte prioritario</li>
            </ul>
            <button className="price-cta primary" onClick={scrollToWaitlist}>
              Reservar mi lugar
            </button>
          </div>
        </div>
        <p className="pricing-note">
          Precio de lanzamiento para los primeros 50 usuarios — bloqueado de
          por vida. Sin contratos. Cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}
