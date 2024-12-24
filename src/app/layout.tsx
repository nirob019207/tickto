

import type { Metadata } from "next";
import "./globals.css";

import { Inter, Montserrat, Press_Start_2P } from 'next/font/google';
import { Outfit } from "next/font/google"; // Import Outfit font
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Tikito",
  description:
    "Share your journey, save on stays, and find your perfect travel companion your adventure starts now",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Adjust the weights as needed
  variable: "--font-outfit",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Adjust the weights as needed
  variable: "--font-inter",
});
const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${outfit.variable} ${pressStart2P.variable}`}>          {
            children
          }
      </body>
    </html>
  );
}
