import { PrismaPromise, Item } from "@prisma/client";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const itemsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany();
  }),
  getScarabs: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany({
      where: {
        type: "scarab",
      },
      include: {
        currentChaos: true,
        currentDivine: true,
      },
    });
  }),
});
