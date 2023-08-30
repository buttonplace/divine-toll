"use client";

import { Button } from "@/components/ui/button";
import { ItemWithPrices } from "@/types/Item";
import { ColumnDef } from "@tanstack/react-table";
import { ReactElement } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "./DataTableColumnHeader";

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
  chaosRateString: string;
  chaosRateValue: number;
  updatedAt: Date;
  basedOn: string;
  arbitrage: number;
};

export const columns: ColumnDef<TableItem>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        // {row.getValue(descriptor)}
        <div className="flex items-center justify-start gap-1">
          <Image src={item.icon} alt="co" width={32} height={32} />
          <Label className="ml-2">{row.getValue("name")}</Label>
        </div>
      );
    },
  },
  {
    accessorKey: "divineRateValue",
    id: "divineRate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Divine Rate" />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="ml-5 text-left font-medium">
          {item.divineRateString}
        </div>
      );
    },
  },
  {
    accessorKey: "chaosRateValue",
    id: "chaosRate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Chaos Price" />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="ml-5 text-left font-medium">
          {item.chaosRateValue.toFixed(1)}
        </div>
      );
    },
  },
  {
    accessorKey: "arbitrage",
    id: "arbitrage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Arbitrage" />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="ml-5 text-left font-medium">
          {item.arbitrage.toFixed(1)}%
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
