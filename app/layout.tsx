import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VENUS TENT LIGHT AND SOUND - Event Solutions in Ranchi & Ramgarh",
  description: "Make your events unforgettable with VENUS TENT LIGHT AND SOUND! Offering premium tent, lighting, sound, catering, flowers, band, photography, and videography services in Ranchi, Ramgarh, and nearby areas. Tailored solutions for weddings, parties, corporate events, and more. Contact us to plan your perfect celebration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#fb6fad" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
