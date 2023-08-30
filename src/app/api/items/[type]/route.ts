import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../db";
import { ItemWithPrices, Item } from "@/types/Item";
import "server-only";
import { NextResponse } from "next/server";
import { getType } from "@/lib/serverutils";

export async function GET(
  request: Request,
  { params }: { params: { type: string } },
): Promise<
  NextResponse<{ width: number; items: (ItemWithPrices | undefined)[] } | null>
> {
  const response = await getType(params.type);
  // const response: ItemWithPrices[] | null = await prisma.item.findMany({
  //   where: {
  //     type: params.type,
  //   },
  //   include: {
  //     currentChaos: true,
  //     currentDivine: true,
  //   },

  // });

  if (!response) {
    return NextResponse.json(null);
  }
  let count = 0;
  const start = performance.now();
  const sorted = response.sort((a, b) => {
    return a.stashIndex! - b.stashIndex!;
  });
  const items = [];
  for (let i = 0; i < sorted[sorted.length - 1].stashIndex! + 1; i++) {
    if (sorted[count].stashIndex == i) {
      items.push(sorted[count]);
      count += 1;
    } else {
      items.push(undefined);
    }
  }
  console.log(performance.now() - start);
  let width = 0;
  if (params.type == "scarab") {
    width = 8;
  } else if (params.type == "currency") {
    width = 10;
  } else if (params.type == "essence") {
    width = 6;
  } else if (params.type === "fragment" || params.type === "fossil") {
    width = 8;
  } else {
    width = 5;
  }
  return NextResponse.json({ width, items });
}
