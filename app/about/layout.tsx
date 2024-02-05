import Link from "next/link";

import { aboutConfig } from "@/config/about";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav-old";
import { SiteFooter } from "@/components/site-footer";
import { getDivine } from "@/lib/serverutils";
import MainNavNew from "@/components/navigation/main-nav";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function AboutLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 flex-col items-center justify-between py-6">
          <MainNav items={aboutConfig.mainNav} />
          <MainNavNew items={aboutConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
