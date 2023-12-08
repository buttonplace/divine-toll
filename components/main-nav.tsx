"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem, NavItem } from "types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icon, Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { iconRoute } from "@/config/icon-route";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button className="flex items-center space-x-2" onClick={() => signOut()}>
        <span className="font-bold">Logged in as {session?.user?.name}</span>
      </button>
    );
  } else {
    return (
      <button
        className="flex items-center space-x-2"
        onClick={() => signIn("poe")}
      >
        <span className="font-bold">Login</span>
      </button>
    );
  }
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex grow gap-6  md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-serif font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {items &&
          items.map((item, index) => {
            //is the item a list?
            if (item.items.length > 1) {
              return (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex flex-col items-center font-sans text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                      item.items[0].href.startsWith(`/${segment}`)
                        ? "text-foreground"
                        : "text-foreground/60",
                      item.items[0].disabled && "cursor-not-allowed opacity-80",
                    )}
                  >
                    <Image
                      src={`/images/${item.icon}.png` || `images/medbell.png`}
                      alt={item.title || "Item icon"}
                      width={32}
                      height={32}
                      className=""
                    />
                    {item.title}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-2 flex flex-col rounded bg-muted">
                    {item.items.map((subitem: NavItem, index: number) => (
                      <Link
                        key={index}
                        href={`/${encodeURIComponent(subitem.href)}`}
                        className={cn(
                          "flex items-center p-2 font-sans text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                          subitem.href.startsWith(`/${segment}`)
                            ? "text-foreground"
                            : "text-foreground/60",
                          subitem.disabled && "cursor-not-allowed opacity-80",
                        )}
                      >
                        <Image
                          src={
                            `/images/${subitem.icon}.png` ||
                            `images/medbell.png`
                          }
                          alt={subitem.title || "Item icon"}
                          width={32}
                          height={32}
                          className=""
                        />
                        {subitem.title}{" "}
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            } else {
              //its not a list
              return (
                <Link
                  key={index}
                  href={`/${encodeURIComponent(item.items[0].href)}`}
                  className={cn(
                    "flex flex-col  items-center font-sans text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.items[0].href.startsWith(`/${segment}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.items[0].disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  <Image
                    src={
                      `/images/${item.items[0].icon}.png` ||
                      `images/medbell.png`
                    }
                    alt={item.items[0].title || "Item icon"}
                    width={32}
                    height={32}
                    className=""
                  />
                  {item.items[0].title}
                </Link>
              );
              //end not a list
            }
          })}
        <Link
          key={"info"}
          href={`/about/information`}
          className={cn(
            "flex flex-col  items-center font-sans text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm",
          )}
        >
          <Image
            src={`/images/medbell.png`}
            alt={"Divine Toll Icon"}
            width={32}
            height={32}
            className=""
          />
          More Info
        </Link>
      </nav>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
      <div className="ml-auto flex">
        <AuthButton />
      </div>
    </div>
  );
}
