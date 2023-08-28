import { cache } from 'react'
import { ItemWithPrices } from '@/types/Item';
import { prisma } from '@/app/api/db';

export const revalidate = 60 // revalidate the data at most every hour

export const getItem = cache(async (type: string) => {
    //console.log("getting items!")
  const response: ItemWithPrices[] | null = await prisma.item.findMany({
    where: {
      type: type,
    },
    include: {
      currentChaos: true,
      currentDivine: true,
    },

  });
  return response
})

export const getAll = cache(async () => {
    console.log("Getting ALL Items")
  const response: ItemWithPrices[] | null = await prisma.item.findMany({
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });
  return response
})