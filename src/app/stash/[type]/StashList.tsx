import { ItemWithPrices } from "@/types/Item";
import ListItem from "@/components/ListItem";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  items: ItemWithPrices[];
  query: string;
};

const columns = [
  {
    key: "name",
    label: "Item",
  },
  {
    key: "divine",
    label: "Divine Rate",
  },
  {
    key: "chaos",
    label: "Chaos Rate",
  },
];

const StashList = ({ items, query }: Props) => {
  return (
    <div></div>

    // <Table>
    //   <TableCaption>Scarabs</TableCaption>
    //   <TableHeader>
    //     <TableRow>
    //       <TableHead className="w-[100px]">Invoice</TableHead>
    //       <TableHead>Status</TableHead>
    //       <TableHead>Method</TableHead>
    //       <TableHead className="text-right">Amount</TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     <TableRow>
    //       <TableCell className="font-medium">INV001</TableCell>
    //       <TableCell>Paid</TableCell>
    //       <TableCell>Credit Card</TableCell>
    //       <TableCell className="text-right">$250.00</TableCell>
    //     </TableRow>
    //   </TableBody>
    // </Table>
  );
};
