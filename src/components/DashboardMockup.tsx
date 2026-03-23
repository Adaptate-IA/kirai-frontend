"use client";

export default function DashboardMockup() {
  return (
    <>
      <style>{`
        .dm-wrap{background:var(--bg-card,#141414);border-radius:16px;border:1px solid var(--border,#222);overflow:hidden;font-size:13px;color:var(--text,#F0F0F0);width:100%;user-select:none}
        .dm-bar{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid var(--border,#222)}
        .dm-bar-left{display:flex;align-items:center;gap:8px}
        .dm-dot{width:8px;height:8px;border-radius:50%;background:#14B8A6}
        .dm-bar-dots{display:flex;gap:6px}
        .dm-bar-dots span{width:10px;height:10px;border-radius:50%;background:var(--border,#222)}
        .dm-body{padding:20px}
        .dm-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px}
        .dm-title{font-weight:500;font-size:15px;margin-bottom:2px}
        .dm-subtitle{color:var(--text3,#666);font-size:12px}
        .dm-date{padding:4px 12px;border-radius:100px;border:1px solid var(--border,#222);font-size:12px;color:var(--text2,#999)}
        .dm-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px}
        .dm-metric{background:var(--bg-elev,#1A1A1A);border-radius:10px;padding:12px 14px}
        .dm-metric-label{font-size:11px;color:var(--text3,#666);margin-bottom:4px}
        .dm-metric-value{font-size:20px;font-weight:600;letter-spacing:-0.02em}
        .dm-metric-delta{font-size:11px;margin-top:2px}
        .dm-table{border:1px solid var(--border,#222);border-radius:10px;overflow:hidden;margin-bottom:14px}
        .dm-table-head{display:grid;grid-template-columns:2fr 0.8fr 0.8fr 0.8fr 0.8fr;padding:8px 14px;font-size:11px;color:var(--text3,#666);border-bottom:1px solid var(--border,#222)}
        .dm-table-row{display:grid;grid-template-columns:2fr 0.8fr 0.8fr 0.8fr 0.8fr;padding:10px 14px;font-size:12px;align-items:center}
        .dm-table-row-border{border-bottom:1px solid var(--border,#222)}
        .dm-campaign-name{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .dm-status{display:inline-block;padding:2px 8px;border-radius:100px;font-size:10px;font-weight:500}
        .dm-muted{color:var(--text2,#999)}
        .dm-alert{background:#F59E0B12;border:1px solid #F59E0B30;border-radius:10px;padding:12px 16px}
        .dm-alert-head{display:flex;align-items:center;gap:6px;margin-bottom:4px}
        .dm-alert-dot{width:6px;height:6px;border-radius:50%;background:#F59E0B}
        .dm-alert-title{font-size:12px;font-weight:500;color:#F59E0B}
        .dm-alert-text{font-size:12px;color:var(--text2,#999);line-height:1.5}
        .dm-mobile-cards{display:none}
        .dm-mobile-card{background:var(--bg-elev,#1A1A1A);border-radius:10px;padding:12px 14px;margin-bottom:8px}
        .dm-mobile-card-name{font-weight:500;font-size:13px;margin-bottom:6px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .dm-mobile-card-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:12px}
        .dm-mobile-card-stat-label{font-size:10px;color:var(--text3,#666)}
        .dm-mobile-card-stat-value{color:var(--text2,#999)}
        @media(max-width:640px){
          .dm-body{padding:14px}
          .dm-bar{padding:10px 14px}
          .dm-metrics{grid-template-columns:repeat(2,1fr);gap:8px}
          .dm-metric{padding:10px 12px}
          .dm-metric-value{font-size:16px}
          .dm-table-head,.dm-table-row{display:none}
          .dm-table{border:none;margin-bottom:8px}
          .dm-mobile-cards{display:block}
          .dm-title{font-size:14px}
          .dm-date{font-size:11px;padding:3px 10px}
        }
      `}</style>
      <div className="dm-wrap">
        <div className="dm-bar">
          <div className="dm-bar-left">
            <div className="dm-dot" />
            <span style={{ fontWeight: 500, fontSize: 14 }}>Kirai</span>
            <span style={{ color: "var(--text3, #666)", fontSize: 12 }}>Dashboard</span>
          </div>
          <div className="dm-bar-dots"><span /><span /><span /></div>
        </div>

        <div className="dm-body">
          <div className="dm-header">
            <div>
              <div className="dm-title">Resumen de campañas</div>
              <div className="dm-subtitle">Últimos 7 días</div>
            </div>
            <div className="dm-date">Mar 15 – Mar 22</div>
          </div>

          <div className="dm-metrics">
            {[
              { label: "Gasto total", value: "$1,247", delta: "+12%", positive: false },
              { label: "Leads", value: "38", delta: "+24%", positive: true },
              { label: "Costo/lead", value: "$32.82", delta: "-8%", positive: true },
              { label: "ROAS", value: "3.2x", delta: "+0.4", positive: true },
            ].map((m, i) => (
              <div key={i} className="dm-metric">
                <div className="dm-metric-label">{m.label}</div>
                <div className="dm-metric-value">{m.value}</div>
                <div className="dm-metric-delta" style={{ color: m.positive ? "#14B8A6" : "#FF6B6B" }}>{m.delta}</div>
              </div>
            ))}
          </div>

          <div className="dm-table">
            <div className="dm-table-head">
              <span>Campaña</span><span>Estado</span><span>Gasto</span><span>Leads</span><span>CPL</span>
            </div>
            {[
              { name: "Meta — Lead gen servicios", status: "activa", statusColor: "#14B8A6", spend: "$420", leads: "18", cpl: "$23.33" },
              { name: "Google — Agentes IA Chile", status: "activa", statusColor: "#14B8A6", spend: "$380", leads: "12", cpl: "$31.67" },
              { name: "Meta — Retargeting web", status: "revisar", statusColor: "#F59E0B", spend: "$447", leads: "8", cpl: "$55.88" },
            ].map((c, i) => (
              <div key={i} className={`dm-table-row ${i < 2 ? "dm-table-row-border" : ""}`}>
                <span className="dm-campaign-name">{c.name}</span>
                <span><span className="dm-status" style={{ background: c.statusColor + "18", color: c.statusColor }}>{c.status}</span></span>
                <span className="dm-muted">{c.spend}</span>
                <span className="dm-muted">{c.leads}</span>
                <span className="dm-muted">{c.cpl}</span>
              </div>
            ))}

            <div className="dm-mobile-cards">
              {[
                { name: "Meta — Lead gen", status: "activa", statusColor: "#14B8A6", spend: "$420", leads: "18", cpl: "$23.33" },
                { name: "Google — Agentes IA", status: "activa", statusColor: "#14B8A6", spend: "$380", leads: "12", cpl: "$31.67" },
                { name: "Meta — Retargeting", status: "revisar", statusColor: "#F59E0B", spend: "$447", leads: "8", cpl: "$55.88" },
              ].map((c, i) => (
                <div key={i} className="dm-mobile-card">
                  <div className="dm-mobile-card-name">
                    {c.name}
                    <span className="dm-status" style={{ background: c.statusColor + "18", color: c.statusColor }}>{c.status}</span>
                  </div>
                  <div className="dm-mobile-card-stats">
                    <div><div className="dm-mobile-card-stat-label">Gasto</div><div className="dm-mobile-card-stat-value">{c.spend}</div></div>
                    <div><div className="dm-mobile-card-stat-label">Leads</div><div className="dm-mobile-card-stat-value">{c.leads}</div></div>
                    <div><div className="dm-mobile-card-stat-label">CPL</div><div className="dm-mobile-card-stat-value">{c.cpl}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dm-alert">
            <div className="dm-alert-head">
              <div className="dm-alert-dot" />
              <span className="dm-alert-title">Alerta de Kirai</span>
            </div>
            <div className="dm-alert-text">
              La campaña &quot;Retargeting web&quot; tiene un CPL 70% más alto que el promedio. Recomiendo pausarla y reasignar presupuesto a &quot;Lead gen servicios&quot;.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
