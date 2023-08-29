import { cache } from "react";
import { prisma } from "@/app/api/db";

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
