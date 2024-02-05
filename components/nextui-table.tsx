"use client";
import React, { Key } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { TableItem } from "./data-table/columns";
import Image from "next/image";
import { Icons } from "./icons";
import Confidence from "./confidence";
import { cn, relativeDifference } from "@/lib/utils";
import Help from "./help";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tooltip } from "@nextui-org/react";
type User = {
  id: number;
  name: string;
  role: string;
  team: string;
  status: string;
  age: string;
  avatar: string;
  email: string;
};

const columns = [
  { name: "Item", uid: "name" },
  { name: "Bulk Rate", uid: "rate" },
  { name: "Bulk Price", uid: "price", allowsSorting: true },
  { name: "Individual Price", uid: "individual" },
  { name: "Arbitrage", uid: "arbitrage" },
  { name: "Price Age", uid: "age" },
  { name: "Details", uid: "detail" },
];

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface NextTableProps {
  data: TableItem[];
}

export default function NextTable({ data }: NextTableProps) {
  // const [isLoading, setIsLoading] = React.useState(true);

  // let list = useAsyncList({
  //   async load({ signal }) {
  //     console.log("getting list??!?!");
  //     let res = await fetch("/api/items/" + type, {
  //       signal,
  //     });
  //     console.log("first");
  //     console.log(res);
  //     let json = await res.json();
  //     console.log(json);
  //     setIsLoading(false);

  //     return {
  //       items: json.data,
  //     };
  //   },
  //   async sort({ items, sortDescriptor }) {
  //     return {
  //       items: items.sort((a, b) => {
  //         let first = a[sortDescriptor.column];
  //         let second = b[sortDescriptor.column];
  //         let cmp =
  //           (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

  //         if (sortDescriptor.direction === "descending") {
  //           cmp *= -1;
  //         }

  //         return cmp;
  //       }),
  //     };
  //   },
  // });

  const renderCell = React.useCallback((item: TableItem, columnKey: Key) => {
    // const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          // <div className="md:text-md flex items-center justify-start space-x-1 text-sm lg:text-lg">
          //   <div className="flex h-[2em] w-[2em] items-center justify-center">
          //     <Image src={item.icon} alt={item.name} width={32} height={32} />
          //   </div>
          //   <span className="flex h-12 items-center justify-center">
          //     {item.name}
          //   </span>
          // </div>
          <div className="flex">
            <Image src={item.icon} alt={item.name} height={32} width={32} />
            <span>{item.name}</span>
          </div>
          // <User
          //   avatarProps={{ radius: "full", src: item.icon }}
          //   // description={item.name}
          //   name={item.name}
          // >
          //   {/* {item.name} */}
          // </User>
        );
      case "divineRateValue":
        const confidence = Math.max(
          0,
          Math.min(99, 100 - 2 * (100 - item.divineConfidence)),
        );
        const confidenceColor =
          confidence < 75 && confidence > 50
            ? "warning"
            : confidence >= 75
            ? "success"
            : "danger";
        return (
          // <div>
          //   <Icons.divine />
          //   <span>{item.divineNumerator}</span>
          //   <Icons.arrowRight/>
          //   <span>{item.divineDenominator}</span>
          //   <Image src={item.icon} alt={item.name} width={32} height={32} />
          //   <Tooltip content="hep">
          //     <Chip color={confidenceColor} size="sm" variant="flat">
          //       {Math.max(0, Math.min(99, item.divineConfidence))}
          //     </Chip>
          //   </Tooltip>
          // </div>

          <div className="text-md flex max-w-[15em] items-center justify-between space-x-1 md:text-lg lg:text-xl">
            <span className="flex h-12 items-center justify-center">
              <Icons.divine />
              {item.divineNumerator}
            </span>
            <div className="flex h-auto w-[1.5em] items-center justify-center md:w-[2em]">
              <Icons.divine />
            </div>
            <div className="flex h-[1em] w-[1em] items-center justify-center">
              <Icons.arrowRight />
            </div>
            <span className="flex h-12 items-center justify-center">
              {item.divineDenominator}
            </span>
            <div className="flex h-[2em] w-[2em] items-center justify-center">
              <Image src={item.icon} alt={item.name} width={32} height={32} />
            </div>
            <Tooltip content="hep">
              <Chip color={confidenceColor} size="sm" variant="flat">
                {Math.max(0, Math.min(99, item.divineConfidence))}
              </Chip>
            </Tooltip>

            {/* <Confidence
              
            /> */}
          </div>
        );
      case "price":
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
      case "individual":
        return (
          <div className="text-md flex items-center space-x-1 md:text-lg lg:text-xl">
            <span className="flex h-12 items-center justify-center">
              {item.ninjaRateValue.toFixed(1)}
            </span>
            <div className="flex h-[2em] w-[2em] items-center justify-center">
              <Icons.chaos />
            </div>
          </div>
        );
      case "arbitrage":
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
          <div className="text-md flex items-center space-x-1 md:text-lg lg:text-xl">
            <span
              className={cn(color, "flex h-12 items-center justify-center")}
            >
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
      case "age":
        return (
          <div>old</div>
          // <div className="text-md flex items-center justify-center space-x-1 md:text-lg lg:text-xl">
          //   <span className="flex h-12 items-center justify-center">
          //     old
          //     {
          //       // new Date(new Date().getTime() - item.updatedAt.getTime())
          //       //   .toISOString()
          //       //   .slice(11, 19)
          //       //   .replace(/^0(?:0:0?)?/, "") // HH:MM:SS
          //     }
          //   </span>
          // </div>
        );
      case "detail":
        return (
          <div>hello</div>
          // <TooltipProvider>
          //   <Tooltip>
          //     <TooltipTrigger className="flex justify-center">
          //       <Link href={`/details/${encodeURIComponent(item.name)}`}>
          //         <Button className="h-auto w-[2em]" variant="ghost">
          //           <div>
          //             <Icons.chevronRight />
          //           </div>
          //         </Button>
          //       </Link>
          //     </TooltipTrigger>
          //     <TooltipContent>Visit the item details page</TooltipContent>
          //   </Tooltip>
          // </TooltipProvider>
        );
      // case "status":
      //   return (
      //     <Chip
      //       className="capitalize"
      //       // color={statusColorMap[user.status]}
      //       size="sm"
      //       variant="flat"
      //     >
      //       {user.status}
      //     </Chip>
      //   );
      // case "actions":
      //   return (
      //     <div className="relative flex items-center gap-2">
      //       <Tooltip content="Details">
      //         <span className="text-default-400 cursor-pointer text-lg active:opacity-50"></span>
      //       </Tooltip>
      //       <Tooltip content="Edit user">
      //         <span className="text-default-400 cursor-pointer text-lg active:opacity-50"></span>
      //       </Tooltip>
      //       <Tooltip color="danger" content="Delete user">
      //         <span className="text-danger cursor-pointer text-lg active:opacity-50"></span>
      //       </Tooltip>
      //     </div>
      //   );
      default:
        return null;
    }
  }, []);

  return (
    <Table
      isStriped
      aria-label="Example table with custom cells"
      sortDescriptor={{
        column: "name",
        direction: "ascending",
      }}
      // onSortChange={(items, sortDescriptor) => {
      //   return {
      //     items: items.sort((a, b) => {
      //       let first = a[sortDescriptor.column];
      //       let second = b[sortDescriptor.column];
      //       let cmp =
      //         (parseInt(first) || first) < (parseInt(second) || second)
      //           ? -1
      //           : 1;

      //       if (sortDescriptor.direction === "descending") {
      //         cmp *= -1;
      //       }

      //       return cmp;
      //     }),
      //   };
      // }}
    >
      <TableHeader>
        <TableColumn key="name" allowsSorting>
          Item
        </TableColumn>
        <TableColumn key="divineRateValue" allowsSorting align="center">
          Bulk Rate
        </TableColumn>
        <TableColumn key="divineNumerator" allowsSorting align="center">
          Bulk Price
        </TableColumn>
        <TableColumn key="individual" allowsSorting align="center">
          Individual Price
        </TableColumn>
        <TableColumn key="arbitrage" allowsSorting align="center">
          Arbitrage
        </TableColumn>
        <TableColumn key="age" allowsSorting align="center">
          Price Age
        </TableColumn>
        <TableColumn key="detail" allowsSorting align="end">
          Details
        </TableColumn>
      </TableHeader>
      {/* <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader> */}

      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
