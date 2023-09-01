import { cache } from "react";
import { prisma } from "@/app/api/db";
import { ItemWithPrices } from "@/types/Item";

export const revalidate = 3600; // revalidate the data at most every hour

export const getAll = cache(async () => {
  const item = await prisma.item.findMany({
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });
  return item;
});

export const getItem = cache(async (name: string) => {
  const item = await prisma.item.findUnique({
    where: { name: name },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });
  return item;
});

export const getType = cache(async (type: string) => {
  const item = await prisma.item.findMany({
    where: { type: type },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });
  return item;
});

export const getData = async (): Promise<ItemWithPrices[]> => {
  await new Promise((r) => setTimeout(r, 5000));
  return await prisma.item.findMany({
    where: {
      type: "scarab",
    },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });
};
