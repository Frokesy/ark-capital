import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import NavigationTransition from "@/components/motion/NavigationTransition";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://ark-capital-black.vercel.app"),
  ),
  title: {
    default: "Ark Capital",
    template: "%s | Ark Capital",
  },
  description: "Explore Ark Capital and discover the latest company news, insights, and updates.",
  applicationName: "Ark Capital",
  openGraph: {
    type: "website",
    siteName: "Ark Capital",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ark Capital" }],
    title: "Ark Capital",
    description: "Explore Ark Capital and discover the latest company news, insights, and updates.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "Ark Capital",
    description: "Explore Ark Capital and discover the latest company news, insights, and updates.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-screen antialiased"><NavigationTransition>{children}</NavigationTransition></body>
    </html>
  );
}
