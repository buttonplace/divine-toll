import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "@/app/api/db";
import { ItemWithPrices, Item } from "@/app/types/Item";
import "server-only";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
): Promise<NextResponse<ItemWithPrices[] | null>> {
  console.log(request);
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
  // console.log(items);
  return NextResponse.json(
    items.sort((a, b) => {
      return a.stashIndex! - b.stashIndex!;
    })
  );
}
