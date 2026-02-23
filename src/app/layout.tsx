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
  metadataBase: new URL("https://ps.ethereum.foundation"),
  title: {
    default: "Protocol Support — Ethereum Foundation",
    template: "%s | Protocol Support",
  },
  description:
    "Coordinating Ethereum protocol development. We facilitate AllCoreDevs calls, track network upgrades, and support core contributors building Ethereum.",
  keywords: [
    "Ethereum",
    "Protocol Support",
    "Ethereum Foundation",
    "EIP",
    "AllCoreDevs",
    "Forkcast",
    "protocol governance",
    "core development",
    "network upgrades",
  ],
  openGraph: {
    title: "Protocol Support — Ethereum Foundation",
    description:
      "Coordinating Ethereum protocol development. We facilitate AllCoreDevs calls, track network upgrades, and support core contributors building Ethereum.",
    type: "website",
    siteName: "Protocol Support",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Protocol Support — Ethereum Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@efprotocol",
    title: "Protocol Support — Ethereum Foundation",
    description:
      "Coordinating Ethereum protocol development. We facilitate AllCoreDevs calls, track network upgrades, and support core contributors building Ethereum.",
    images: ["/og-image.png"],
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
