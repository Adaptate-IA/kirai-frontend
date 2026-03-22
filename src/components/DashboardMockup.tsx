"use client";

export default function DashboardMockup() {
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
      {/* Top bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        borderBottom: "1px solid var(--border, #222)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#14B8A6",
          }} />
          <span style={{ fontWeight: 500, fontSize: 14 }}>Kirai</span>
          <span style={{ color: "var(--text3, #666)", fontSize: 12 }}>Dashboard</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--border, #222)" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--border, #222)" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--border, #222)" }} />
        </div>
      </div>

      <div style={{ padding: 20 }}>
        {/* Period */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}>
          <div>
            <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 2 }}>Resumen de campañas</div>
            <div style={{ color: "var(--text3, #666)", fontSize: 12 }}>Últimos 7 días</div>
          </div>
          <div style={{
            padding: "4px 12px",
            borderRadius: 100,
            border: "1px solid var(--border, #222)",
            fontSize: 12,
            color: "var(--text2, #999)",
          }}>
            Mar 15 – Mar 22
          </div>
        </div>

        {/* Metrics */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10,
          marginBottom: 16,
        }}>
          {[
            { label: "Gasto total", value: "$1,247", delta: "+12%", positive: false },
            { label: "Leads", value: "38", delta: "+24%", positive: true },
            { label: "Costo/lead", value: "$32.82", delta: "-8%", positive: true },
            { label: "ROAS", value: "3.2x", delta: "+0.4", positive: true },
          ].map((m, i) => (
            <div key={i} style={{
              background: "var(--bg-elev, #1A1A1A)",
              borderRadius: 10,
              padding: "12px 14px",
            }}>
              <div style={{ fontSize: 11, color: "var(--text3, #666)", marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>{m.value}</div>
              <div style={{
                fontSize: 11,
                color: m.positive ? "#14B8A6" : "#FF6B6B",
                marginTop: 2,
              }}>
                {m.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Campaign table */}
        <div style={{
          border: "1px solid var(--border, #222)",
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 14,
        }}>
          {/* Header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 0.8fr 0.8fr 0.8fr 0.8fr",
            padding: "8px 14px",
            fontSize: 11,
            color: "var(--text3, #666)",
            borderBottom: "1px solid var(--border, #222)",
          }}>
            <span>Campaña</span>
            <span>Estado</span>
            <span>Gasto</span>
            <span>Leads</span>
            <span>CPL</span>
          </div>
          {/* Rows */}
          {[
            { name: "Meta — Lead gen servicios", status: "activa", statusColor: "#14B8A6", spend: "$420", leads: "18", cpl: "$23.33" },
            { name: "Google — Agentes IA Chile", status: "activa", statusColor: "#14B8A6", spend: "$380", leads: "12", cpl: "$31.67" },
            { name: "Meta — Retargeting web", status: "revisar", statusColor: "#F59E0B", spend: "$447", leads: "8", cpl: "$55.88" },
          ].map((c, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "2fr 0.8fr 0.8fr 0.8fr 0.8fr",
              padding: "10px 14px",
              fontSize: 12,
              borderBottom: i < 2 ? "1px solid var(--border, #222)" : "none",
              alignItems: "center",
            }}>
              <span style={{ fontWeight: 500 }}>{c.name}</span>
              <span>
                <span style={{
                  display: "inline-block",
                  padding: "2px 8px",
                  borderRadius: 100,
                  fontSize: 10,
                  fontWeight: 500,
                  background: c.statusColor + "18",
                  color: c.statusColor,
                }}>
                  {c.status}
                </span>
              </span>
              <span style={{ color: "var(--text2, #999)" }}>{c.spend}</span>
              <span style={{ color: "var(--text2, #999)" }}>{c.leads}</span>
              <span style={{ color: "var(--text2, #999)" }}>{c.cpl}</span>
            </div>
          ))}
        </div>

        {/* Kirai Alert */}
        <div style={{
          background: "#F59E0B12",
          border: "1px solid #F59E0B30",
          borderRadius: 10,
          padding: "12px 16px",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 4,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#F59E0B",
            }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "#F59E0B" }}>Alerta de Kirai</span>
          </div>
          <div style={{ fontSize: 12, color: "var(--text2, #999)", lineHeight: 1.5 }}>
            La campaña &quot;Retargeting web&quot; tiene un CPL 70% más alto que el promedio. Recomiendo pausarla y reasignar presupuesto a &quot;Lead gen servicios&quot;.
          </div>
        </div>
      </div>
    </div>
  );
}
