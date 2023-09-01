import { ItemWithPrices } from "@/types/Item";
import React from "react";
import { TableItem } from "./columns";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData(type: string): Promise<ItemWithPrices[]> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/items/" + type,
    { method: "GET", next: { revalidate: 2 } },
  );
  if (!response) {
    console.log("no ites");
    return [];
  }
  const { width, items }: { width: number; items: ItemWithPrices[] } =
    await response.json();

  return items;
}

async function getDivine(): Promise<ItemWithPrices> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/divine/",
    { method: "GET", next: { revalidate: 5 } },
  );
  if (!response) {
    // console.log("no ites");
    return {} as ItemWithPrices;
  }

  return await response.json();
}

function relDiff(a: number, b: number) {
  //   console.log(`Profit margin of ${a} over ${b} is ${a - b / b}`);
  //   return a - b / b;

  //   console.log(`Percent difference of ${a} over ${b} is ${(100 * a) / (a + b)}`);
  return (100 * (a - b)) / b;

  //   return 100 * Math.abs((a - b) / ((a + b) / 2));
}

type Props = {
  type: string;
};

const TableView = async ({ type }: Props) => {
  const dResponse = await getDivine();
  const response = await getData("scarab");
  const divine = dResponse as ItemWithPrices;

  const data: TableItem[] = (response as ItemWithPrices[]).map((item) => {
    const chaosRate: number =
      item.currentChaos?.numerator! / item.currentChaos?.denominator!;
    const divineRate: number =
      item.currentDivine?.numerator! / item.currentDivine?.denominator!;

    // console.log(item.name);
    return {
      name: item.name,
      icon: item.icon,
      divineRateString:
        item.currentDivine?.numerator.toString() +
        "/" +
        item.currentDivine?.denominator.toString(),
      divineRateValue: divineRate,
      chaosRateString:
        item.currentChaos?.numerator + "/" + item.currentChaos?.denominator,
      chaosRateValue: chaosRate,
      updatedAt: item.currentDivine?.updatedAt!,
      basedOn: item.currentDivine?.basedOn!,
      arbitrage: relDiff(
        divineRate * divine.currentChaos?.numerator!,
        chaosRate,
      ),
    };
  });

  return <DataTable columns={columns} data={data} />;
};
