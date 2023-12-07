"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "@/public/styles/index.css";
import "@/public/styles/default.css";
import "@/public/styles/unicode.css";
import { i18n, languages, locale } from '@/lib/i18n/i18n'
import { usePathname, useSearchParams } from 'next/navigation'
const inter = Inter({ subsets: ["latin"] });
import StyledComponentsRegistry from '@/lib/AntdRegistry';


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()


  return (
    <html suppressHydrationWarning lang={locale(pathname)}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="privacy-policy" content="/privacy.html" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
