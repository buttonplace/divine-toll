// import { DataTable } from "@/components/data-table/data-table";
import { ItemWithPrices } from "@/types";
import { prisma } from "@/lib/db";
import React from "react";
import { TableItem, columns } from "@/components/data-table/columns";
import { relativeDifference } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { Item } from "types";

import dynamic from "next/dynamic";
import { ColumnDef, Table } from "@tanstack/react-table";
import DataTable from "@/components/data-table/data-table";
import DivineRate from "@/components/divine-rate";
import { getDivine } from "@/lib/serverutils";
import { iconRoute } from "@/config/icon-route";
import { Card, CardContent } from "@/components/ui/card";
import { getServerSession } from "next-auth";
const NoSSR = dynamic(() => import("@/components/data-table/data-table"), {
  ssr: false,
});

type Props = {
  params: { typeURI: string };
};
export default async function TypePage({ params: { typeURI } }: Props) {
  // const type = decodeURIComponent(`${typeURI}`);
  // // console.log(type);
  // const divine = await getDivine();
  // const items: Item[] = await prisma.item.findMany({
  //   where: {
  //     type: type,
  //     ignored: false,
  //   },
  //   orderBy: {
  //     stashIndex: "asc",
  //   },
  // });
  const session = await getServerSession();
  return (
    <div>
      getServerSession Result
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>Not signed in</div>
      )}
    </div>
  );
}
