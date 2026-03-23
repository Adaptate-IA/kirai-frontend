import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const TITLE = "Kirai — Tu Experta en Marketing Digital con IA | Adaptate IA";
const DESCRIPTION =
  "Conecta tus campañas de Meta y Google Ads. Recibe diagnósticos diarios, alertas y recomendaciones accionables. Kirai es tu experta en marketing digital con IA.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://kirai.cl"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://kirai.cl",
    locale: "es_CL",
    siteName: "Kirai by Adaptate IA",
    images: [{ url: "/og-kirai.png", width: 1200, height: 630, alt: "Kirai — Tu experta en marketing digital con IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-kirai.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);return}}catch(e){}var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light');})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
