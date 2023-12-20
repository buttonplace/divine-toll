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
const NoSSR = dynamic(() => import("@/components/data-table/data-table"), {
  ssr: false,
});

import NextTable from "@/components/nextui-table";
import NewTable from "@/components/new-table/table";

type Props = {
  params: { typeURI: string };
};
export default async function TypePage({ params: { typeURI } }: Props) {
  const type = decodeURIComponent(`${typeURI}`);
  // console.log(type);
  const divine = await getDivine();
  const items: Item[] = await prisma.item.findMany({
    where: {
      type: type,
      ignored: false,
    },
    orderBy: {
      stashIndex: "asc",
    },
  });

  if (!items || items.length === 0) {
    return (
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src="/images/medbell.png"
            alt="Divine Toll Logo"
            width={128}
            height={128}
            className=" h-auto animate-bounce md:w-32 lg:w-48"
          />
          <h1 className="text-back flex items-center justify-center font-serif text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="z-10">No Items Found</span>{" "}
          </h1>
        </div>
      </section>
    );
  }
  const data: TableItem[] = items.map((item, index) => {
    const chaosRate: number =
      item.divineTollChaosNumerator / item.divineTollChaosDenominator;
    const divineRate: number =
      item.divineTollDivineNumerator / item.divineTollDivineDenominator;

    return {
      id: index,
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
      arbitrage: relativeDifference(divineRate * divine, chaosRate),
      ninjaArbitrage: relativeDifference(divineRate * divine, item.ninjaChaos),
      divineVariance: item.divineTollDivineVariance,
      chaosVariance: item.divineTollChaosVariation,
      divineRate: divine,
    };
  });

  return (
    <div>
      <div className="flex flex-col  items-center justify-center pt-5">
        <div className="flex items-center justify-center">
          {(
            <Image
              src={`/images/${type}.png`}
              alt={type}
              width={64}
              height={64}
            />
          ) || null}
        </div>
        <h1 className="flex items-center justify-center font-serif text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          {type}
        </h1>
        <DivineRate rate={divine} />
        {type === "essence" && (
          <Card className="bg-yellow-600">
            <CardContent className="md:text-md p-1 text-xs sm:text-sm ">
              Low tier essences are rarely traded and are therefore incredibly
              volatile. They are ignored on this page.
            </CardContent>
          </Card>
        )}
        {type === "oil" && (
          <Card className="bg-yellow-600">
            <CardContent className="md:text-md p-1 text-xs sm:text-sm ">
              Low tier oils are rarely traded and are therefore incredibly
              volatile. They are ignored on this page.
            </CardContent>
          </Card>
        )}
        {type === "incubator" && (
          <Card className="bg-yellow-600">
            <CardContent className="md:text-md p-1 text-xs sm:text-sm ">
              Cheap incubators are rarely traded and are therefore incredibly
              volatile. They are ignored on this page.
            </CardContent>
          </Card>
        )}
      </div>
      {/* <NextTable type={type} /> */}
      <NewTable />
      {/* <NextTable data={data} /> */}

      {/* {data.length > 0 ? (
        <DataTable data={data} columns={columns} />
      ) : (
        // <DataTable data={data} columns={columns} />
        <div>No items found.</div>
      )} */}
    </div>
  );
}
