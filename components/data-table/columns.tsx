"use client";

import { Button } from "@/components/ui/button";
import { ItemWithPrices } from "types";
import { ColumnDef } from "@tanstack/react-table";
import { ReactElement } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Confidence from "@/components/Confidence";
import { Icons } from "../icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export type TableItem = {
  name: string;
  icon: string;
  divineRateString: string;
  divineRateValue: number;
  divineConfidence: number;
  chaosRateString: string;
  chaosRateValue: number;
  chaosConfidence: number;
  ninjaRateValue: number;
  updatedAt: Date;
  arbitrage: number;
  ninjaArbitrage: number;
  chaosVariance: number;
  divineVariance: number;
  divineNumerator: number;
  divineDenominator: number;
  chaosNumerator: number;
  chaosDenominator: number;
};

export const columns: ColumnDef<TableItem>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-start"
        title="Item"
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        // {row.getValue(descriptor)}
        <div className="md:text-md flex items-center justify-start space-x-1 text-sm lg:text-lg">
          <div className="flex h-[2em] w-[2em] items-center justify-center">
            <Image src={item.icon} alt={item.name} width={32} height={32} />
          </div>
          <span className="flex h-12 items-center justify-center">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "divineRateValue",
    id: "Divine Rate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Rate"
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="text-md flex max-w-[15em] items-center justify-between space-x-1 md:text-lg lg:text-xl">
          <div className="flex h-auto w-[1.5em] items-center justify-center md:w-[2em]">
            <Icons.divine />
          </div>
          <span className="flex h-12 items-center justify-center">
            {item.divineNumerator}
          </span>
          <div className="flex h-[1em] w-[1em] items-center justify-center">
            <Icons.arrowRight />
          </div>
          <span className="flex h-12 items-center justify-center">
            {item.divineDenominator}
          </span>
          <div className="flex h-[2em] w-[2em] items-center justify-center">
            <Image src={item.icon} alt={item.name} width={32} height={32} />
          </div>
          <Confidence confidence={Math.min(99, item.divineConfidence)} />
        </div>
        // ); // <Icons.divine />
        // <h2 text-lg>{item.divineNumerator} </h2>
        // <Icons.arrowRight />
        // <h2 text-lg>{item.divineDenominator} </h2>
        // <Confidence confidence={Math.min(99, item.divineConfidence)} />
        // //
        //  </div>
      );
    },
  },
  {
    accessorKey: "ninjaRateValue",
    id: "Chaos Price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Price"
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="text-md flex items-center justify-center space-x-1 md:text-lg lg:text-xl">
          <span className="flex h-12 items-center justify-center">
            {item.ninjaRateValue.toFixed(1)}
          </span>
          <div className="flex h-[2em] w-[2em] items-center justify-center">
            <Icons.chaos />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "ninjaArbitrage",
    id: "Arbitrage",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Arbitrage"
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      const color =
        item.ninjaArbitrage > 25 || item.ninjaArbitrage < -25
          ? "text-red-500"
          : "text-green-500";
      ``;
      return (
        <div className="text-md flex items-center justify-center space-x-1 md:text-lg lg:text-xl">
          <span className={cn(color, "flex h-12 items-center justify-center")}>
            {item.ninjaArbitrage.toFixed(1)}%
          </span>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-[1em] w-[1em] items-center justify-center opacity-20">
                  <Icons.help />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="tracking-wide">
                  The implied chaos rate of{"     "}
                  <span>
                    {(
                      (item.divineNumerator / item.divineDenominator) *
                      222
                    ).toFixed(3)}{" "}
                  </span>
                  is {item.ninjaArbitrage.toFixed(1)}%{" "}
                  {item.ninjaArbitrage > 0 ? "higher" : "lower"} than the
                  PoENinja price of {item.ninjaRateValue.toFixed(1)}.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    id: "Price Age",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Price Age"
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="text-md flex items-center justify-center space-x-1 md:text-lg lg:text-xl">
          <span className="flex h-12 items-center justify-center">
            {
              new Date(new Date().getTime() - item.updatedAt.getTime())
                .toISOString()
                .slice(11, 19)
                .replace(/^0(?:0:0?)?/, "") // HH:MM:SS
            }
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Details"
      />
    ),
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/about">
                <Button className="h-auto w-[2em]" variant="ghost">
                  <div>
                    <Icons.chevronRight />
                  </div>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Hello</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
];
