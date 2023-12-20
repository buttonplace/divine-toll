import { NextResponse } from "next/server";
import { getDivine } from "@/lib/serverutils";
import { TableItem } from "@/components/data-table/columns";
import { Item } from "@/types";
import { prisma } from "@/lib/db";
import { relativeDifference } from "@/lib/utils";

export async function GET(
  request: Request,
  { params }: { params: { type: string } },
) {
  const type = params.type; // 'a', 'b', or 'c'
  console.log(type);

  /*
const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/divine/",
    { method: "GET", next: { revalidate: 120 } },
    */

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
    return new NextResponse();
  } else {
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
        ninjaArbitrage: relativeDifference(
          divineRate * divine,
          item.ninjaChaos,
        ),
        divineVariance: item.divineTollDivineVariance,
        chaosVariance: item.divineTollChaosVariation,
        divineRate: divine,
      };
    });
    return NextResponse.json({ divine, data });
  }
}
