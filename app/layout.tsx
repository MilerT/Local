import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070d0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Antisa · Local de eventos en Arequipa",
  description:
    "Alquila Antisa para un cumpleaños, una boda, una reunión o un evento de empresa. Jardín, pabellón techado, cocina y baños en un solo local de Arequipa. Pide la fecha en el portal.",
  alternates: {
    canonical: "https://antisa.site/",
  },
  icons: {
    icon: "/assets/favicon-antisa.png",
    apple: "/assets/logo-antisa.png",
  },
  openGraph: {
    locale: "es_PE",
    type: "website",
    siteName: "Antisa",
    title: "Antisa · Un jardín y un techo para tu celebración",
    description:
      "Cumpleaños, bodas, reuniones y eventos de empresa en Arequipa. Jardín, pabellón, cocina y baños. La fecha se pide en el portal de clientes.",
    url: "https://antisa.site",
    images: [
      {
        url: "https://antisa.site/local/portada.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
