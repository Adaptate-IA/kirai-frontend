export const metadata = {
  title: "Términos de Uso | Kirai by Adaptate IA",
};

export default function Terminos() {
  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "120px 24px 80px" }}>
      <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "2rem", marginBottom: "8px" }}>
        Términos de Uso
      </h1>
      <p style={{ color: "var(--text3)", fontSize: "14px", marginBottom: "40px" }}>
        Última actualización: marzo 2026
      </p>

      <h2>1. Sobre este sitio</h2>
      <p>
        Este sitio es una landing page de validación para Kirai, un producto en
        desarrollo de Adaptate IA. Al registrarte en la lista de espera, estás
        expresando interés en el producto, no contratando ningún servicio.
      </p>

      <h2>2. Lista de espera</h2>
      <p>
        El registro en la lista de espera no garantiza acceso al producto ni
        implica ningún cobro. Te contactaremos cuando Kirai esté disponible con
        los detalles de acceso y precio.
      </p>

      <h2>3. Precios</h2>
      <p>
        Los precios mostrados en este sitio son referenciales y corresponden al
        precio de lanzamiento previsto. Podrían ajustarse antes del lanzamiento
        oficial.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Todo el contenido de este sitio — textos, diseño y código — es
        propiedad de Adaptate IA. No está permitida su reproducción sin
        autorización.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Para consultas:{" "}
        <a href="mailto:contacto@adaptate-ia.com">contacto@adaptate-ia.com</a>
      </p>
    </main>
  );
}
