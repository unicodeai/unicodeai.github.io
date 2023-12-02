"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/public/styles/index.css";
import "@/public//styles/default.css";
import { i18n, languages, locale } from '@/i18n/i18n'
import { usePathname, useSearchParams } from 'next/navigation'
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  // i18n.locale('en')
  // console.log("layout",locale())

  return (
    <html suppressHydrationWarning lang={locale()}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
