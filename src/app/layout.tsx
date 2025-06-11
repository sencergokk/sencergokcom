import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import { ThemeProvider } from "@/providers/theme-provider";

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
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-white text-black dark:bg-slate-900 dark:text-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <FloatingWhatsAppButton />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="I1-9ChD8bUn10e7A-Fn-S";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
`,
          }}
        />
      </body>
    </html>
  );
}
