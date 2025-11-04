import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_META } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  keywords: SITE_META.keywords,
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    url: SITE_META.url,
    siteName: "CapilArt",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}