"use client";


// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header';
import Footer from "./components/footer";
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
// import { useRouter } from "next/router";
// import Head from 'next/head';
import { Head } from "next/document";
import Script from "next/script";
// import Hotjar from '@hotjar/browser';
// const siteId = 3917682;
// const hotjarVersion = 6;


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "The Accountant AI",
//   // description: "Generated by create next app",
// };

const metadata = {
  title: "The Accountant AI",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {


  useEffect(() => {
    hotjar.initialize(3917682, 6);
  }, []);
  // Hotjar.init(3917682, 6);

  return (
    <html lang="en">
      <Head>
        <Script
         strategy="lazyOnload"
         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
         />
        <Script id="ga-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </Head>
      <body className="bg-white {inter.className}">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
