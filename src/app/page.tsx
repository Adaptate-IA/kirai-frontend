import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Demo from "@/components/Demo";
import Steps from "@/components/Steps";
import Questions from "@/components/Questions";
import Pricing from "@/components/Pricing";
import Founder from "@/components/Founder";
import Darwin from "@/components/Darwin";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://adaptate-ia.com/#org",
      name: "Adaptate IA",
      url: "https://adaptate-ia.com",
      description:
        "Agentes de IA para negocios que se adaptan. Creadores de Kirai, experta en marketing digital con IA.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Kirai",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Agente de IA que conecta Meta Ads y Google Ads, analiza campañas diariamente y entrega recomendaciones accionables.",
      offers: [
        { "@type": "Offer", price: "49", priceCurrency: "USD", name: "Starter" },
        { "@type": "Offer", price: "149", priceCurrency: "USD", name: "Pro" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Mis datos de campañas están seguros con Kirai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Kirai se conecta con acceso de solo lectura — nunca puede modificar, pausar o crear campañas. Las credenciales van directamente a Meta y Google mediante OAuth y no se almacenan en los servidores de Kirai.",
          },
        },
        {
          "@type": "Question",
          name: "¿Kirai funciona con cualquier presupuesto de ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Si inviertes desde $100 USD al mes en Meta o Google Ads, Kirai puede analizar tus campañas y darte recomendaciones. Mientras más datos tenga, mejores serán las sugerencias.",
          },
        },
        {
          "@type": "Question",
          name: "¿Kirai puede hacer cambios directamente en mis campañas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En la primera versión, Kirai solo recomienda. El usuario decide si ejecutar los cambios, manteniendo siempre el control total sobre sus campañas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuándo estará disponible Kirai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kirai está aceptando a los primeros 50 usuarios para el lanzamiento. Los que se registren hoy recibirán acceso anticipado y precio de lanzamiento bloqueado.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Problem />
      <Demo />
      <Steps />
      <Questions />
      <Pricing />
      <Founder />
      <Darwin />
      <Waitlist />
      <FAQ />
      <Footer />
    </>
  );
}
