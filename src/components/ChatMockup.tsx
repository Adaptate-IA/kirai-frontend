"use client";

export default function ChatMockup() {
  return (
    <>
      <style>{`
        .cm-wrap{background:var(--bg-card,#141414);border-radius:16px;border:1px solid var(--border,#222);overflow:hidden;font-size:13px;color:var(--text,#F0F0F0);width:100%;user-select:none}
        .cm-header{display:flex;align-items:center;gap:10px;padding:14px 20px;border-bottom:1px solid var(--border,#222)}
        .cm-avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#14B8A6,#0D9488);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:#fff;flex-shrink:0}
        .cm-online{font-size:11px;color:#14B8A6;display:flex;align-items:center;gap:4px}
        .cm-online-dot{width:5px;height:5px;border-radius:50%;background:#14B8A6}
        .cm-messages{padding:20px;display:flex;flex-direction:column;gap:12px}
        .cm-msg-right{display:flex;justify-content:flex-end}
        .cm-msg-left{display:flex;justify-content:flex-start}
        .cm-bubble-user{background:#14B8A6;color:#0A0A0A;padding:10px 16px;border-radius:16px 16px 4px 16px;max-width:80%;font-size:13px;font-weight:450;line-height:1.5}
        .cm-bubble-ai{background:var(--bg-elev,#1A1A1A);padding:14px 16px;border-radius:16px 16px 16px 4px;max-width:88%;line-height:1.6}
        .cm-bubble-ai-text{margin-bottom:10px;color:var(--text,#F0F0F0)}
        .cm-bubble-ai-text b{color:#14B8A6}
        .cm-mini-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px}
        .cm-mini-card{background:var(--bg-card,#141414);border-radius:8px;padding:8px 10px;border:1px solid var(--border,#222)}
        .cm-mini-label{font-size:10px;color:var(--text3,#666);margin-bottom:2px}
        .cm-mini-value{font-size:13px;font-weight:500}
        .cm-mini-sub{font-size:10px;color:#14B8A6}
        .cm-warning{color:var(--text2,#999);font-size:12px}
        .cm-typing{background:var(--bg-elev,#1A1A1A);padding:12px 18px;border-radius:16px 16px 16px 4px;display:flex;gap:4px;align-items:center}
        .cm-typing-dot{width:6px;height:6px;border-radius:50%;background:#14B8A6}
        .cm-typing-dot:nth-child(1){animation:cm-pulse 1.4s ease-in-out infinite;opacity:0.9}
        .cm-typing-dot:nth-child(2){animation:cm-pulse 1.4s ease-in-out 0.2s infinite;opacity:0.6}
        .cm-typing-dot:nth-child(3){animation:cm-pulse 1.4s ease-in-out 0.4s infinite;opacity:0.3}
        @keyframes cm-pulse{0%,100%{opacity:0.3;transform:scale(0.8)}50%{opacity:1;transform:scale(1)}}
        .cm-input-bar{padding:12px 20px;border-top:1px solid var(--border,#222);display:flex;gap:10px;align-items:center}
        .cm-input{flex:1;padding:10px 14px;border-radius:100px;background:var(--bg-elev,#1A1A1A);border:1px solid var(--border,#222);font-size:13px;color:var(--text3,#666)}
        .cm-send{width:36px;height:36px;border-radius:50%;background:#14B8A6;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        @media(max-width:640px){
          .cm-messages{padding:14px}
          .cm-header{padding:12px 14px}
          .cm-input-bar{padding:10px 14px}
          .cm-bubble-user{max-width:88%;font-size:12px;padding:8px 14px}
          .cm-bubble-ai{max-width:95%;padding:12px 14px}
          .cm-bubble-ai-text{font-size:12px}
          .cm-mini-metrics{grid-template-columns:1fr;gap:6px}
          .cm-mini-card{display:flex;align-items:center;justify-content:space-between;padding:8px 12px}
          .cm-mini-label{margin-bottom:0}
          .cm-mini-right{display:flex;align-items:center;gap:8px}
          .cm-warning{font-size:11px}
          .cm-input{font-size:12px;padding:8px 12px}
          .cm-send{width:32px;height:32px}
        }
      `}</style>
      <div className="cm-wrap">
        <div className="cm-header">
          <div className="cm-avatar">K</div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Kirai</div>
            <div className="cm-online">
              <div className="cm-online-dot" />
              En línea
            </div>
          </div>
        </div>

        <div className="cm-messages">
          <div className="cm-msg-right">
            <div className="cm-bubble-user">¿Cómo van mis campañas esta semana?</div>
          </div>

          <div className="cm-msg-left">
            <div className="cm-bubble-ai">
              <div className="cm-bubble-ai-text">
                Esta semana llevas <b>38 leads</b> con un gasto de <b style={{ color: "var(--text, #F0F0F0)" }}>$1,247 USD</b>. Tu costo por lead bajó un 8% respecto a la semana pasada.
              </div>

              <div className="cm-mini-metrics">
                {[
                  { label: "Mejor campaña", value: "Lead gen", sub: "$23/lead" },
                  { label: "Peor campaña", value: "Retargeting", sub: "$55/lead" },
                  { label: "ROAS general", value: "3.2x", sub: "+0.4 vs prev." },
                ].map((m, i) => (
                  <div key={i} className="cm-mini-card">
                    <div>
                      <div className="cm-mini-label">{m.label}</div>
                      <div className="cm-mini-value">{m.value}</div>
                    </div>
                    <div className="cm-mini-right">
                      <div className="cm-mini-sub">{m.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cm-warning">
                ⚠️ Te recomiendo pausar &quot;Retargeting web&quot; y mover ese presupuesto a &quot;Lead gen servicios&quot; — tiene el mejor CPL y margen para escalar.
              </div>
            </div>
          </div>

          <div className="cm-msg-right">
            <div className="cm-bubble-user">¿Cuánto debería subir el presupuesto de Lead gen?</div>
          </div>

          <div className="cm-msg-left">
            <div className="cm-typing">
              <div className="cm-typing-dot" />
              <div className="cm-typing-dot" />
              <div className="cm-typing-dot" />
            </div>
          </div>
        </div>

        <div className="cm-input-bar">
          <div className="cm-input">Pregúntale a Kirai...</div>
          <div className="cm-send">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
