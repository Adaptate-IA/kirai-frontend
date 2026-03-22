"use client";

import { scrollToWaitlist } from "@/lib/scroll";

function toggleTheme() {
  const h = document.documentElement;
  const next = h.getAttribute("data-theme") === "dark" ? "light" : "dark";
  h.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch {}
}

export default function Navbar() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <nav aria-label="Navegación principal">
        <div className="nav-inner">
          <a href="#" className="logo">
            ADAPTATE<span>.IA</span>
          </a>
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Cambiar tema de color"
            >
              <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
              <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
            <button className="nav-cta" onClick={scrollToWaitlist}>
              Quiero acceso anticipado
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
