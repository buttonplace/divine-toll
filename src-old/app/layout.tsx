import Header from "@/components/Header";
import "@/global.css";
import type { Metadata } from "next";
import { Inter, Martel_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { StyleToggle } from "@/components/StyleToggle";
import { Analytics } from "@vercel/analytics/react";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const martel = Martel_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Divine Toll",
  description: "A pricing index for Path of Exile",
};

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// Font files can be colocated inside of `pages`
// const fontHeading = localFont({
//   src: "../assets/fonts/CalSans-SemiBold.woff2",
//   variable: "--font-heading",
// });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light" lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // fontSans.variable,
          // fontHeading.variable,
          martel,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
