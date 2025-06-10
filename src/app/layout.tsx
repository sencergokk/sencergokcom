import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Skycer - Dijital Dönüşümünüzün Güvenilir Ortağı",
  description: "Küçük işletmeler ve şahıslar için web sitesi, SEO, teknik destek ve chatbot çözümleri. Modern teknolojiler ile dijital dünyada öne çıkın.",
  keywords: ["web tasarım", "SEO", "teknik destek", "chatbot", "dijital ajans", "web sitesi"],
  authors: [{ name: "Skycer Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Skycer - Dijital Dönüşümünüzün Güvenilir Ortağı",
    description: "Küçük işletmeler ve şahıslar için web sitesi, SEO, teknik destek ve chatbot çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skycer - Dijital Dönüşümünüzün Güvenilir Ortağı",
    description: "Küçük işletmeler ve şahıslar için web sitesi, SEO, teknik destek ve chatbot çözümleri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-slate-900 text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
