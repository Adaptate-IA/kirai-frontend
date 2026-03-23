"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success";

export default function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("waitlist-email") as HTMLInputElement).value;
    const name = (form.elements.namedItem("waitlist-name") as HTMLInputElement).value;
    const budget = (form.elements.namedItem("waitlist-budget") as HTMLSelectElement).value;

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, budget }),
    });

    setStatus(res.ok ? "success" : "idle");
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="container">
        <div className="waitlist-box">
          <h2>Reserva tu lugar antes de que se llenen los 50 cupos.</h2>
          <p>
            Registrate hoy y bloquea el precio de lanzamiento para siempre.
            Si Kirai no cumple lo que promete, te devolvemos el primer mes
            completo — sin preguntas.
          </p>

          {status === "success" ? (
            <div className="waitlist-success" role="status" aria-live="polite">
              <p>
                <strong>¡Listo! Estás en la lista.</strong> Te avisaremos
                cuando Kirai esté disponible.
              </p>
            </div>
          ) : (
            <form
              className="waitlist-form"
              onSubmit={handleSubmit}
              aria-label="Formulario de lista de espera"
            >
              <label htmlFor="waitlist-name" className="sr-only">
                Tu nombre
              </label>
              <input
                id="waitlist-name"
                type="text"
                placeholder="Tu nombre"
                autoComplete="name"
                disabled={status === "loading"}
              />

              <label htmlFor="waitlist-email" className="sr-only">
                Tu email *
              </label>
              <input
                id="waitlist-email"
                type="email"
                placeholder="Tu email *"
                autoComplete="email"
                required
                disabled={status === "loading"}
              />

              <label htmlFor="waitlist-budget" className="sr-only">
                ¿Cuánto gastas al mes en ads?
              </label>
              <select
                id="waitlist-budget"
                defaultValue=""
                disabled={status === "loading"}
              >
                <option value="" disabled>
                  ¿Cuánto gastas al mes en ads?
                </option>
                <option value="<500">Menos de $500 USD</option>
                <option value="500-2000">$500 - $2,000 USD</option>
                <option value="2000-5000">$2,000 - $5,000 USD</option>
                <option value="5000+">Más de $5,000 USD</option>
              </select>

              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Reservando…" : "Reservar mi lugar →"}
              </button>
            </form>
          )}

          <p className="waitlist-counter" aria-live="polite">
            <strong>12 personas</strong> ya están en la lista
          </p>
          {/* <a href="https://wa.me/569XXXXXXXX" className="waitlist-whatsapp" target="_blank" rel="noopener noreferrer">
            ¿Prefieres hablar? Escríbenos por WhatsApp →
          </a> */}
        </div>
      </div>
    </section>
  );
}
