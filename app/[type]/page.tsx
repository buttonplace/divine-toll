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
const NoSSR = dynamic(() => import("@/components/data-table/data-table"), {
  ssr: false,
});

type Props = {
  params: { type: string };
};
export default async function TypePage({ params: { type } }: Props) {
  const items: Item[] = await prisma.item.findMany({
    where: {
      type: type,
    },
    orderBy: {
      stashIndex: "asc",
    },
  });
  const data: TableItem[] = items.map((item) => {
    const chaosRate: number =
      item.divineTollChaosNumerator / item.divineTollChaosDenominator;
    const divineRate: number =
      item.divineTollDivineNumerator / item.divineTollDivineDenominator;

    return {
      name: item.name,
      icon: item.icon,
      divineRateString: `${item.divineTollDivineNumerator} / ${item.divineTollDivineDenominator}`,
      divineRateValue: divineRate,
      divineConfidence: item.divineTollDivineConfidence,
      chaosRateString: `${item.divineTollChaosNumerator} / ${item.divineTollChaosDenominator}`,
      chaosRateValue: chaosRate,
      divineNumerator: item.divineTollDivineNumerator,
      divineDenominator: item.divineTollDivineDenominator,
      chaosNumerator: item.divineTollChaosNumerator,
      chaosDenominator: item.divineTollChaosDenominator,
      ninjaRateValue: item.ninjaChaos,
      chaosConfidence: item.divineTollChaosConfidence,
      updatedAt: item.divineUpdatedAt,
      arbitrage: relativeDifference(divineRate * 222, chaosRate),
      ninjaArbitrage: relativeDifference(divineRate * 222, item.ninjaChaos),
      divineVariance: item.divineTollDivineVariance,
      chaosVariance: item.divineTollChaosVariation,
    };
  });
  return (
    <div>
      <div className="flex flex-col pt-5">
        <div className="flex items-center justify-center">
          <Image
            src={`/images/${type}.png`}
            alt={type}
            width={64}
            height={64}
          />
        </div>
        <h1 className="flex items-center justify-center font-serif text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          {type}
        </h1>
      </div>
      {data.length > 0 ? (
        <DataTable data={data} columns={columns} />
      ) : (
        // <DataTable data={data} columns={columns} />
        <div>No items found.</div>
      )}
    </div>
  );
}
