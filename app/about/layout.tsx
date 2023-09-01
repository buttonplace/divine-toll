import Link from "next/link";

import { aboutConfig } from "@/config/about";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { getDivine } from "@/lib/serverutils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function AboutLayout({ children }: MarketingLayoutProps) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/divine/",
    {
      method: "GET",
      next: { revalidate: 120 },
    },
  ).then((res) => res.json());

  const divine2: number = await getDivine();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={aboutConfig.mainNav} divine={response.divine} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
