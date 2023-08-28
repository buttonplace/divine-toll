import { Prisma } from "@prisma/client";
type Item = {
  name: string;
  icon: string;
  quality: number;
  index: number;
  chaosUpdatedAt: Date;
  divineUpdatedAt: Date;
  tradeId: string;
  type: string;
  ChaosPrice: ChaosPrices[];
  DivinePrice: DivinePrices[];
};

type ChaosPrices = {
  averageStack: number;
  confidence: number;
  id: number;
  itemName: string;
  listings: number;
  updatedAt: string;
  value: number;
};

type DivinePrices = {
  averageStack: number;
  averageForSale: number;
  confidence: number;
  denominator: number;
  id: number;
  itemName: string;
  listings: number;
  numerator: number;
  updatedAt: string;
  value: number;
};

type ItemWithPrices = Prisma.ItemGetPayload<{
  include: { currentChaos: true; currentDivine: true };
}>;
