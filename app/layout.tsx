import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./app.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = "https://pcdemmovimento.org.br";

export const viewport: Viewport = {
  themeColor: "#122132",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PCD em Movimento | Canoa Havaiana Adaptada e Inclusão Social",
    template: "%s | PCD em Movimento",
  },
  description:
    "Promovendo inclusão social, autonomia e qualidade de vida para pessoas com deficiência através da prática da canoa havaiana adaptada em Niterói, RJ.",
  keywords: [
    "PCD em Movimento",
    "canoa havaiana adaptada",
    "esporte adaptado",
    "inclusão social",
    "pessoa com deficiência",
    "canoa polinésia",
    "acessibilidade no mar",
    "Niterói",
    "Praia de Charitas",
    "voluntariado inclusivo",
    "terapia no mar",
  ],
  authors: [{ name: "PCD em Movimento" }],
  creator: "PCD em Movimento",
  publisher: "PCD em Movimento",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "PCD em Movimento",
    title: "PCD em Movimento | Canoa Havaiana Adaptada e Inclusão Social",
    description:
      "Promovendo inclusão social, autonomia e qualidade de vida para pessoas com deficiência através da prática da canoa havaiana adaptada.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Logotipo e Identidade PCD em Movimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCD em Movimento | Canoa Havaiana Adaptada",
    description:
      "Promovendo inclusão social e autonomia para pessoas com deficiência através da canoa havaiana em Niterói.",
    images: ["/image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/image.png",
    apple: "/image.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${siteUrl}/#organization`,
      "name": "Associação PCD em Movimento",
      "alternateName": "PCD em Movimento",
      "url": siteUrl,
      "logo": `${siteUrl}/image.png`,
      "image": `${siteUrl}/image.png`,
      "description":
        "Organização sem fins lucrativos que promove inclusão social, autonomia e saúde para pessoas com deficiência por meio da canoagem polinésia adaptada.",
      "foundingDate": "2025",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Praia de Charitas, Quiosque 19 (Point do Remador)",
        "addressLocality": "Niterói",
        "addressRegion": "RJ",
        "addressCountry": "BR",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contato@pcdemmovimento.org.br",
        "contactType": "Atendimento e Inscrições",
        "availableLanguage": ["Portuguese"],
      },
      "sameAs": [],
    },
    {
      "@type": "SportsClub",
      "@id": `${siteUrl}/#club`,
      "name": "PCD em Movimento - Canoa Adaptada",
      "parentOrganization": {
        "@id": `${siteUrl}/#organization`,
      },
      "location": {
        "@type": "Place",
        "name": "Praia de Charitas - Point do Remador (Quiosque 19)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Niterói",
          "addressRegion": "RJ",
          "addressCountry": "BR",
        },
      },
      "sport": "Canoagem Polinésia / Canoa Havaiana Adaptada",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <a href="#contato" className="skip-link">
          Pular para o formulário de contato
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
