import {
  Bitter,
  Fira_Sans,
  Lato,
  Cinzel_Decorative,
  Cinzel,
  Forum,
  Raleway,
  Alegreya,
  Alegreya_Sans,
  DM_Serif_Display,
} from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";
// import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/session-provider";

import localFont from "next/font/local";
import { Providers } from "@/components/providers";
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Path of Exile",
    "PoE Trade",
    "PoE Sale",
    "Divine Orb",
  ],
  authors: [
    {
      name: "TeaTrey",
      url: "https://www.github.com/TeaTrey",
    },
  ],
  creator: "TeaTrey",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og.jpg`],
  //   creator: "@teatrey",
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

const sans = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  //   weight: ["400"],
});

const serif = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  //   weight: ["100", "300", "400", "700", "900"],
  //   weight: ["400", "500", "600", "700", "800", "900"],
  //weight: ["400", "100", "200", "300", "400", "700", "900"],
  weight: ["400", "700", "900"],
  style: "normal",
  variable: "--font-serif",
});

interface RootLayoutProps {
  children: React.ReactNode;
  // session: any;
}

export default async function RootLayout({
  children, // session,
}: {
  children: React.ReactNode;
  // session: JSX.Element;
}) {
  const session = await getServerSession();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(sans.variable, serif.variable)}
    >
      <head />
      <body className="min-h-screen bg-background font-sans font-semibold antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider session={session}>{children}</SessionProvider>
          {/* <SessionProvider session={session}>{children}</SessionProvider> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
