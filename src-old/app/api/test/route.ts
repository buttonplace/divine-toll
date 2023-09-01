import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../db";
import { ItemWithPrices, Item } from "@/types/Item";
import "server-only";
import { NextResponse } from "next/server";
import { getAll } from "@/lib/serverutils";

export async function GET(request: Request): Promise<NextResponse<string>> {
  //   const response = await getAll();
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  // const response: ItemWithPrices[] | null = await prisma.item.findMany({
  //   where: {
  //     type: params.type,
  //   },
  //   include: {
  //     currentChaos: true,
  //     currentDivine: true,
  //   },

  // });
  await sleep(2000);
  return NextResponse.json(
    // items.sort((a, b) => {
    //   return a.stashIndex! - b.stashIndex!;
    // })
    "hello from server",
  );
}
