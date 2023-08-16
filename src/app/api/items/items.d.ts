export type FactionWithOwner = Prisma.ItemGetPayload<{
    include: { currentChaos: true }
  }>