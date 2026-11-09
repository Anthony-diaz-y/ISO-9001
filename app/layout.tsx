import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISO 9001:2015 · Banco de práctica",
  description:
    "Practica las 100 preguntas del banco de casos ISO 9001:2015: marca la cláusula correcta, recibe feedback inmediato y obtén tu puntaje final.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      lang="es"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
