import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MatrixRain from "@/components/MatrixRain";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Protocol Support",
  description:
    "The Protocol Support team manages Ethereum protocol governance, AllCoreDevs coordination, and helps contributors navigate the ethereum/pm repository.",
  keywords: [
    "Ethereum",
    "Protocol Support",
    "EIP",
    "AllCoreDevs",
    "governance",
  ],
  openGraph: {
    title: "Protocol Support",
    description:
      "Your gateway to Ethereum protocol governance and development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} antialiased min-h-screen`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ps-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else{document.documentElement.setAttribute("data-theme",window.matchMedia("(prefers-color-scheme:light)").matches?"light":"dark")}}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`,
          }}
        />
        <div className="scanlines" aria-hidden="true" />
        <MatrixRain />
        {children}
      </body>
    </html>
  );
}
