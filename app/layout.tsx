import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sitcom-world-map.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "מפת סיטקומים עולמית | Global Sitcom Map",
    template: "%s | Global Sitcom Map",
  },
  description:
    "מפה אינטראקטיבית של ערים שבהן מתרחשים סיטקומים מפורסמים מרחבי העולם. חפש, סנן וגלה — גם בתלת-מימד! An interactive world map of cities where famous sitcoms are set.",
  keywords: [
    "sitcom map", "sitcoms", "world map", "TV shows", "interactive map",
    "מפת סיטקומים", "סיטקומים", "מפה אינטראקטיבית", "סדרות טלוויזיה",
    "Friends", "Seinfeld", "The Office", "globe", "TV locations",
  ],
  authors: [{ name: "Sitcom Map" }],
  creator: "Sitcom Map",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Global Sitcom Map",
    title: "🎬 Global Sitcom Map — מפת סיטקומים עולמית",
    description:
      "Explore an interactive world map of cities where famous sitcoms are set. Filter by country, search by show, and spin the 3D globe.",
    locale: "he_IL",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "🎬 Global Sitcom Map",
    description:
      "Interactive world map of cities where famous sitcoms are set. Filter, search, and explore in 3D.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
