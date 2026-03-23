"use client";

import { scrollToWaitlist } from "@/lib/scroll";
import DashboardMockup from "@/components/DashboardMockup";

export default function Hero() {
  return (
    <section className="hero" id="main-content">
      <div className="container">
        <div className="hero-badge">Solo 50 lugares con 50% off</div>
        <h1>
          Deja de adivinar con tus ads.{" "}
          <em>Kirai te dice qué cambiar, cada día.</em>
        </h1>
        <p className="hero-sub">
          Conecta Meta y Google Ads en 2 minutos. Kirai analiza tus campañas
          todos los días y te dice exactamente qué hacer — sin jerga, sin PDFs,
          sin reuniones.
        </p>
        <form
          className="hero-form"
          onSubmit={(e) => { e.preventDefault(); scrollToWaitlist(); }}
          aria-label="Formulario de acceso anticipado"
        >
          <label htmlFor="hero-email" className="sr-only">
            Tu email
          </label>
          <input
            id="hero-email"
            type="email"
            placeholder="Tu email"
            autoComplete="email"
            required
          />
          <button type="submit">Quiero acceso anticipado</button>
        </form>
        <p className="hero-micro">
          Sin tarjeta de crédito · Sin permanencia · Cancela cuando quieras
        </p>
        <div className="hero-mockup">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
