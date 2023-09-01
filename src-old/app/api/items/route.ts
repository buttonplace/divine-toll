import { Prisma, PrismaClient } from "@prisma/client";

import { prisma } from "../db";
import { ItemWithPrices, Item } from "@/types/Item";
import "server-only";
import { NextResponse } from "next/server";
import { getAll } from "@/lib/serverutils";

export async function GET(
  request: Request,
): Promise<NextResponse<(ItemWithPrices | undefined)[] | null>> {
  const response = await getAll();
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

  return NextResponse.json(
    // items.sort((a, b) => {
    //   return a.stashIndex! - b.stashIndex!;
    // })
    response,
  );
}
