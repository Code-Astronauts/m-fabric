import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Landing Starter | M-Fabric",
  description: "Шаблон лендинга — M-Fabric",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-surface-950 text-surface-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
