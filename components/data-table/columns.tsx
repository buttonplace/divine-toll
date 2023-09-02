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
import Confidence from "@/components/confidence";
import { Icons } from "../icons";
import { useSearchParams } from "next/navigation";

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
import { cn, relativeDifference } from "@/lib/utils";
import Help from "../help";
import { relative } from "path";

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
  divineRate: number;
};

export const columns: ColumnDef<TableItem, any>[] = [
  {
    accessorKey: "name",
    // accessorFn: (item) => item.divineRateValue.toFixed(3),
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
    // accessorFn: (item) => item.divineRateValue.toFixed(3),
    id: "Divine Rate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="flex justify-center"
        title="Bulk Rate"
        helpContent={
          "The bulk Divine rate of the item, derived only from the Divine exchange."
        }
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
          <Confidence
            confidence={Math.max(0, Math.min(99, item.divineConfidence))}
          />
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
    accessorKey: "impliedRateValue",
    id: "Bulk Price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Bulk Price"
        helpContent={"The price implied by the bulk Divine rate of the item."}
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="text-md flex items-center justify-center space-x-1 md:text-lg lg:text-xl">
          <span className="flex h-12 items-center justify-center">
            {(
              (item.divineNumerator * item.divineRate) /
              item.divineDenominator
            ).toFixed(1)}
          </span>
          <div className="flex h-[2em] w-[2em] items-center justify-center">
            <Icons.chaos />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "ninjaRateValue",
    id: "Individual Price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Individual Price"
        helpContent={
          "The current Chaos price of the item, derived from PoENinja and the Chaos exchange."
        }
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
    // accessorFn: (item) => item.divineRateValue.toFixed(3),

    id: "Arbitrage",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Arbitrage"
        helpContent={
          <div>
            {
              "The difference between the Bulk Price and the Individual Price, i.e. how much you'd lose by selling to resellers."
            }
            <Link className="underline" href="/about/information#arbitrage">
              Learn more
            </Link>
          </div>
        }
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      const color =
        item.ninjaArbitrage < 10 && item.ninjaArbitrage > -10
          ? "text-orange-500"
          : item.ninjaArbitrage <= -10
          ? "text-green-500"
          : "text-red-500";
      const pDiff = relativeDifference(
        item.divineRateValue * item.divineRate,
        item.ninjaRateValue,
      ).toFixed(1);
      const divineRate = item.divineRate;
      const cRate = (item.divineRateValue * divineRate).toFixed(1);

      return (
        <div className="text-md flex items-center justify-center space-x-1 md:text-lg lg:text-xl">
          <span className={cn(color, "flex h-12 items-center justify-center")}>
            {item.ninjaArbitrage.toFixed(1)}%
          </span>
          <Help
            content={
              <p className="tracking-wide">
                {item.divineNumerator} / {item.divineDenominator} implies a
                Chaos price of {cRate} which is {pDiff}%{" "}
                {item.ninjaArbitrage > 0 ? "higher" : "lower"} than{" "}
                {item.ninjaRateValue.toFixed(1)}
              </p>
            }
          />
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    id: "Price Age",
    // accessorFn: (item) => item.divineRateValue.toFixed(3),

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Price Age"
        helpContent={"The time since the price was last updated."}
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
    // accessorFn: (item) => item.divineRateValue.toFixed(3),

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="justify-center"
        title="Details"
      />
    ),
    cell: ({ row }) => {
      const item = row.original;
      // console.log(`${encodeURIComponent(item.name)}`);
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Link href={`/details/${encodeURIComponent(item.name)}`}>
                <Button className="h-auto w-[2em]" variant="ghost">
                  <div>
                    <Icons.chevronRight />
                  </div>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Visit the item details page</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
];
