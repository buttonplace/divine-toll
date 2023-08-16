import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "@/app/api/db";
import { ItemWithPrices, Item } from "@/app/types/Item";

export async function GET(): Promise<ItemWithPrices[] | null> {
  const items: ItemWithPrices[] | null = await prisma.item.findMany({
    where: {
      type: "oil",
    },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
    take: 5,
  });
  return items;
}
