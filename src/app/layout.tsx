import "./globals.css";
import type { Metadata } from "next";
import { Inter, Martel_Sans } from "next/font/google";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Stash from "./components/Stash";
import Navbar from "./components/Navbar";

const martel = Martel_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Divine Toll",
  description: "A pricing index for Path of Exile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={martel.className}>{children}</body>
    </html>
  );
}
