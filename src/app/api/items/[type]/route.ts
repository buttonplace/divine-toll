import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../db";
import { ItemWithPrices, Item } from "../../../../types/Item";
import "server-only";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { type: string } },
): Promise<NextResponse<(ItemWithPrices | undefined)[] | null>> {
  // console.log(request);
  const items: ItemWithPrices[] | null = await prisma.item.findMany({
    where: {
      type: params.type,
    },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });
  if (!items) {
    return NextResponse.json(null);
  }
  let count = 0;
  const sorted = items.sort((a, b) => {
    return a.stashIndex! - b.stashIndex!;
  });
  const reMap = [];
  for (let i = 0; i < sorted[sorted.length - 1].stashIndex!; i++) {
    if (sorted[count].stashIndex == i) {
      reMap.push(sorted[count]);
      count += 1;
    } else {
      reMap.push(undefined);
    }
  }
  return NextResponse.json(
    // items.sort((a, b) => {
    //   return a.stashIndex! - b.stashIndex!;
    // })
    reMap,
  );
}
