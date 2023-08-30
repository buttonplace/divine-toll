import Header from "@/components/Header";
import "@/global.css";
import type { Metadata } from "next";
import { Inter, Martel_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { StyleToggle } from "@/components/StyleToggle";
import { Analytics } from "@vercel/analytics/react";

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
    <html className="light" lang="en">
      <body className={martel.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
