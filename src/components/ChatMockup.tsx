"use client";

export default function ChatMockup() {
  return (
    <div style={{
      background: "var(--bg-card, #141414)",
      borderRadius: 16,
      border: "1px solid var(--border, #222)",
      overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 13,
      color: "var(--text, #F0F0F0)",
      width: "100%",
      userSelect: "none",
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 20px",
        borderBottom: "1px solid var(--border, #222)",
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg, #14B8A6, #0D9488)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, fontWeight: 600, color: "#fff",
        }}>K</div>
        <div>
          <div style={{ fontWeight: 500, fontSize: 14 }}>Kirai</div>
          <div style={{ fontSize: 11, color: "#14B8A6", display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#14B8A6" }} />
            En línea
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        
        {/* User message */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            background: "#14B8A6",
            color: "#0A0A0A",
            padding: "10px 16px",
            borderRadius: "16px 16px 4px 16px",
            maxWidth: "80%",
            fontSize: 13,
            fontWeight: 450,
            lineHeight: 1.5,
          }}>
            ¿Cómo van mis campañas esta semana?
          </div>
        </div>

        {/* Kirai response */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{
            background: "var(--bg-elev, #1A1A1A)",
            padding: "14px 16px",
            borderRadius: "16px 16px 16px 4px",
            maxWidth: "88%",
            lineHeight: 1.6,
          }}>
            <div style={{ marginBottom: 10, color: "var(--text, #F0F0F0)" }}>
              Esta semana llevas <b style={{ color: "#14B8A6" }}>38 leads</b> con un gasto de <b>$1,247 USD</b>. Tu costo por lead bajó un 8% respecto a la semana pasada.
            </div>

            {/* Mini metrics */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
              marginBottom: 12,
            }}>
              {[
                { label: "Mejor campaña", value: "Lead gen", sub: "$23/lead" },
                { label: "Peor campaña", value: "Retargeting", sub: "$55/lead" },
                { label: "ROAS general", value: "3.2x", sub: "+0.4 vs prev." },
              ].map((m, i) => (
                <div key={i} style={{
                  background: "var(--bg-card, #141414)",
                  borderRadius: 8,
                  padding: "8px 10px",
                  border: "1px solid var(--border, #222)",
                }}>
                  <div style={{ fontSize: 10, color: "var(--text3, #666)", marginBottom: 2 }}>{m.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{m.value}</div>
                  <div style={{ fontSize: 10, color: "#14B8A6" }}>{m.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ color: "var(--text2, #999)", fontSize: 12 }}>
              ⚠️ Te recomiendo pausar &quot;Retargeting web&quot; y mover ese presupuesto a &quot;Lead gen servicios&quot; — tiene el mejor CPL y margen para escalar.
            </div>
          </div>
        </div>

        {/* User follow-up */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            background: "#14B8A6",
            color: "#0A0A0A",
            padding: "10px 16px",
            borderRadius: "16px 16px 4px 16px",
            maxWidth: "80%",
            fontSize: 13,
            fontWeight: 450,
            lineHeight: 1.5,
          }}>
            ¿Cuánto debería subir el presupuesto de Lead gen?
          </div>
        </div>

        {/* Kirai typing */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{
            background: "var(--bg-elev, #1A1A1A)",
            padding: "12px 18px",
            borderRadius: "16px 16px 16px 4px",
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#14B8A6", opacity: 0.9,
              animation: "pulse 1.4s ease-in-out infinite",
            }} />
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#14B8A6", opacity: 0.6,
              animation: "pulse 1.4s ease-in-out 0.2s infinite",
            }} />
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#14B8A6", opacity: 0.3,
              animation: "pulse 1.4s ease-in-out 0.4s infinite",
            }} />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={{
        padding: "12px 20px",
        borderTop: "1px solid var(--border, #222)",
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}>
        <div style={{
          flex: 1,
          padding: "10px 14px",
          borderRadius: 100,
          background: "var(--bg-elev, #1A1A1A)",
          border: "1px solid var(--border, #222)",
          fontSize: 13,
          color: "var(--text3, #666)",
        }}>
          Pregúntale a Kirai...
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#14B8A6",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
