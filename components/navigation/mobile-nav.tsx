import * as React from "react";
import Link from "next/link";

import { MainNavItem, NavItem } from "types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import { Icons } from "@/components/icons";
import Image from "next/image";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  //creat an array that contains the NavItems from the nested MainNavItems

  const newItems: NavItem[] = [];

  items.forEach((item) => {
    newItems.push(...item.items);
  });

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {newItems.map((item, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(item.href)}`}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
            >
              <Image
                src={`/images/${item.icon}.png` || `images/medbell.png`}
                alt={item.title || "Item icon"}
                width={24}
                height={24}
                className=""
              />
              {item.title}
            </Link>
          ))}
          <Link
            key={"info"}
            href={`/about/information`}
            className={cn(
              "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
            )}
          >
            <Image
              src={`/images/medbell.png`}
              alt={"Divine Toll Icon"}
              width={24}
              height={24}
              className=""
            />
            More Info
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
