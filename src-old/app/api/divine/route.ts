import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../db";
import { ItemWithPrices, Item } from "@/types/Item";
import "server-only";
import { NextResponse } from "next/server";
import { getType, getItem } from "@/lib/serverutils";

export async function GET(
  request: Request,
  { params }: { params: { type: string } },
): Promise<NextResponse<ItemWithPrices | null>> {
  const response = await getItem("Divine Orb");
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

  return NextResponse.json(response);
}
