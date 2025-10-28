import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import { Italiana } from 'next/font/google';
import { Libre_Caslon_Display } from 'next/font/google';
import Footer from "@/component/Footer";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next"

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

const italiana2 = Libre_Caslon_Display({
  variable: "--font-italiana2",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RK Studio | Photography",
  description: "Photography Studio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${italiana.variable} ${italiana2.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster />
         <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}