import Header from "@/components/Header";
import "@/global.css";
import type { Metadata } from "next";
import { Inter, Martel_Sans } from "next/font/google";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

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
    <html className="new" lang="en">
      <body className={martel.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
