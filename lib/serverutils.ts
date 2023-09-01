import { cache } from "react";
import { prisma } from "@/lib/db";
import { Item } from "types";

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

export const getDivine = cache(async (): Promise<number> => {
  console.log("GETITING DIVINE PRICE!x`");
  const item = await prisma.item.findUnique({
    where: { name: "Divine Orb" },
  });
  if (!item) return 220;
  if (
    item.ninjaChaos &&
    item.divineTollChaosNumerator &&
    item.divineTollChaosDenominator
  ) {
    return Math.round(
      (item.ninjaChaos +
        item.divineTollChaosNumerator / item.divineTollChaosDenominator) /
        2,
    );
  }
  if (item.ninjaChaos) {
    return Math.round(item.ninjaChaos);
  }
  if (item.divineTollChaosNumerator && item.divineTollChaosDenominator) {
    return Math.round(
      item.divineTollChaosNumerator / item.divineTollChaosDenominator,
    );
  }
  return 220;
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

export const getData = async (): Promise<Item[]> => {
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
