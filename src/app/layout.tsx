import Header from "@/components/Header";
import "@/global.css";
import type { Metadata } from "next";
import { Inter, Martel_Sans } from "next/font/google";

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
    <html data-theme="divine" lang="en">
      <body className={martel.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
