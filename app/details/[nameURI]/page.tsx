import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { prisma } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Item, ItemWithPrices } from "@/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Icons } from "@/components/icons";
import dynamic from "next/dynamic";
const Help = dynamic(() => import("@/components/help"), { ssr: false });

import InfoRow from "@/config/info-row";

type Props = {
  params: { nameURI: string };
};

export default async function MainPage({ params: { nameURI } }: Props) {
  console.log(nameURI);
  const name = decodeURIComponent(`${nameURI}`);
  console.log(name);

  const item: ItemWithPrices | null = await prisma.item.findUnique({
    where: {
      name: name,
    },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });

  if (!item) {
    return (
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src="/images/medbell.png"
            alt="Divine Toll Logo"
            width={128}
            height={128}
            className=" h-auto animate-bounce md:w-32 lg:w-48"
          />
          <h1 className="text-back flex items-center justify-center font-serif text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="z-10">Item Not Found</span>{" "}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-5 md:pt-10 lg:py-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Card className="bg-yellow-600">
            <CardContent className="md:text-md p-1 text-xs sm:text-sm ">
              Note: Price data is being collected and stored, but some
              information, such as price history, is not yet being displayed
              here.
            </CardContent>
          </Card>
          <h1 className="text-back flex items-center justify-center font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="z-10">{item.name}</span>{" "}
          </h1>
          <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
            Last Updated {item.divineUpdatedAt.toUTCString()}
          </h3>
          <Image
            src={item.icon}
            alt="Divine Toll Logo"
            width={256}
            height={256}
            className=" h-auto w-auto"
          />
        </div>
      </section>
      <section
        id="Price Info"
        className="container  bg-slate-50  dark:bg-transparent "
      >
        <div className="justify-aroundspace-y-4 mx-auto flex max-w-[58rem] flex-col items-center text-center">
          <div className="mx-auto grid justify-center gap-6 md:max-w-[64rem] md:grid-cols-2">
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                Listing Information
              </h3>

              <h2 className="md:text-md flex px-4 py-2 text-sm font-medium text-muted-foreground">
                {item.currentDivine ? (
                  <div>
                    <Table>
                      <TableBody>
                        <InfoRow
                          title="Highest Rate"
                          value={`
                            ${item.currentDivine?.highNumerator} /
                            ${item.currentDivine?.highDenominator} 
                          `}
                          help="The most expensive listing considered by our algorithm."
                        />
                        <InfoRow
                          title="Lowest Rate"
                          value={`
                            ${item.currentDivine?.lowNumerator} /
                            ${item.currentDivine?.lowDenominator} 
                          `}
                          help="The least expensive listing considered by our algorithm."
                        />
                        <InfoRow
                          title="Average Sale Quantity"
                          value={`${item.currentDivine?.averagePerSale}`}
                          help="The average number of items per trade."
                        />
                        <InfoRow
                          title="Average Stock"
                          value={
                            item.currentDivine?.averageStock.toString() ||
                            "Unknown"
                          }
                          help="The average number of items owned by sellers."
                        />
                      </TableBody>
                    </Table>
                    <Table>
                      <TableBody>
                        <InfoRow
                          title="Price Samples"
                          value={`
                      ${item.currentDivine.basedOn} 
                    `}
                          help="The first page of listings considered by our algorithm."
                        />
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div>No pricing info to show</div>
                )}
              </h2>
            </div>
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                Calculation Information
              </h3>

              <h2 className="md:text-md flex px-4 py-2 text-sm font-medium text-muted-foreground">
                {item.currentDivine ? (
                  <div>
                    <Table>
                      <TableBody>
                        <InfoRow
                          title="Calculated Rate"
                          value={`
                          ${item.currentDivine.numerator}/${item.currentDivine.denominator}
                          
                          `}
                          help="The recommended price of the item."
                        />
                        <InfoRow
                          title="Variance"
                          value={`
                          ${item.divineTollDivineVariance}
                          
                          `}
                          help="The variation of our recommended price over the past 24 hours."
                        />
                        <InfoRow
                          title="Confidence"
                          value={`
                          ${item.divineTollDivineConfidence}
                          
                          `}
                          help="The confidence of our current recommended price."
                        />
                        <InfoRow
                          title="Listings Used"
                          value={`${item.currentDivine.listingsUsed}`}
                          help="The number of listings considered, not including outliers."
                        />
                        <InfoRow
                          title="Price Origin"
                          value={
                            item.currentDivine?.priceOrigin?.toString() ||
                            "Unknown"
                          }
                          help="The source of the price data."
                        />
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div>No calculation info to show.</div>
                )}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
