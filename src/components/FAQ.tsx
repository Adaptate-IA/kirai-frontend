"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Mis datos de campañas están seguros?",
    a: "Sí. Kirai se conecta con acceso de solo lectura — nunca puede modificar, pausar o crear campañas. Tus credenciales van directamente a Meta y Google mediante OAuth, no las almacenamos.",
  },
  {
    q: "¿Funciona con cualquier presupuesto de ads?",
    a: "Sí. Si estás invirtiendo desde $100 USD al mes en Meta o Google Ads, Kirai puede analizar tus campañas y darte recomendaciones. Mientras más datos tenga, mejores serán las sugerencias.",
  },
  {
    q: "¿Kirai puede hacer cambios directamente en mis campañas?",
    a: "En esta primera versión, Kirai solo recomienda. Tú decides si ejecutar los cambios. Queremos que siempre tengas el control de tus campañas.",
  },
  {
    q: "¿Cuándo estará disponible?",
    a: "Estamos aceptando a los primeros 50 usuarios para el lanzamiento. Si te registras hoy, te avisaremos por email con acceso anticipado y el precio de lanzamiento bloqueado.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="container">
        <p className="section-label">Preguntas frecuentes</p>
        <h2 className="section-title">Lo que necesitas saber.</h2>
        <div className="faq-list" role="list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const answerId = `faq-answer-${i}`;
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? " open" : ""}`}
                role="listitem"
              >
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.q}
                </button>
                <div
                  id={answerId}
                  className="faq-a"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
