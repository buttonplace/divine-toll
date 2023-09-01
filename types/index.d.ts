import { Prisma } from "@prisma/client";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";

export type ChaosPrices = {
  averageStack: number;
  confidence: number;
  id: number;
  itemName: string;
  listings: number;
  updatedAt: string;
  value: number;
};

export type DivinePrices = {
  averageStack: number;
  averageForSale: number;
  confidence: number;
  denominator: number;
  id: number;
  itemName: string;
  listings: number;
  numerator: number;
  updatedAt: string;
  value: number;
};

export type ItemWithPrices = Prisma.ItemGetPayload<{
  include: { currentChaos: true; currentDivine: true };
}>;

export type Item = Prisma.ItemGetPayload<{}>;

export type ItemWithHistory = Prisma.ItemGetPayload<{
  include: { dailyPrices: true };
}>;

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon: Image;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type AboutConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
