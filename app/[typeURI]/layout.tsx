import Link from "next/link";

import { aboutConfig } from "@/config/about";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav-old";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";
import { MainNavNew } from "@/components/main-nav";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function AboutLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={aboutConfig.mainNav} />
        </div>
        <div className="flex h-20 items-center justify-between py-6">
          <MainNavNew />
        </div>
      </header>
      <Separator className="" orientation="horizontal" />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
