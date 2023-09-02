import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SiteFooter } from "@/components/site-footer";

export default async function MainPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-back flex items-center justify-center font-serif text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="z-10">Information</span>{" "}
          </h1>
        </div>
      </section>
      <section
        id="information"
        className="container space-y-4 bg-slate-50 py-4 dark:bg-transparent md:py-6 lg:py-8"
      >
        <div
          id="divinetoll"
          className=" justify-aroundspace-y-4 mx-auto  flex max-w-[58rem] flex-col items-center p-4 text-center md:p-6"
        >
          <h2 className="font-serif text-3xl font-light leading-[1.1] sm:text-3xl md:text-6xl">
            Divine Toll
          </h2>
          <div className="mx-auto grid justify-center gap-6 md:max-w-[64rem] md:grid-cols-3">
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                What is it?
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Divine Toll is a price index for Path of Exile. It pulls data
                from the official trade API, analyses it, and stores it in a
                database.
              </h2>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                This data is run through our pricing algorithm which is used to
                recommend a suitable listing price for bulk sale on the Divine
                Orb exchange.{" "}
              </h2>
            </div>
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                Whats the point?
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Most PoE price checkers and price indexes work best for
                individual sales on the Chaos exchange. However, many items in
                Path of Exile can be sold for much more on the Divine exchange.
              </h2>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Because of this, some players will buy items with Chaos pricing
                and resell them on the Divine exchange for a profit.{" "}
              </h2>
            </div>
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                Who is it for?
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Farmers can easily check if they have enough items for a bulk
                sale <span className="font-bold italic underline">without</span>{" "}
                manually checking the trade site. This bypasses trade API rate
                limits that current price checkers are subject to.
              </h2>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Average players can use arbitrage values to check how much value
                they are losing by selling items to bulk resellers. Spoiler:
                it&apos;s <span className="text-red-500">a lot</span>.
              </h2>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Bulk resellers can use arbitrage values to see which items are
                worth dealing in.
              </h2>
            </div>
          </div>
        </div>
        <div
          id="arbitrage"
          className="  justify-aroundspace-y-4 mx-auto  flex max-w-[58rem] flex-col items-center p-4 text-center md:p-6"
        >
          <h2 className="font-serif text-3xl font-light leading-[1.1] sm:text-3xl md:text-6xl">
            Arbitrage
          </h2>
          <div className="mx-auto grid justify-center gap-6 md:max-w-[64rem] md:grid-cols-2">
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                How it&apos;s calculated
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Arbitrage is the percent difference between the widely accepted
                Chaos value for the item versus the recommended bulk sale Divine
                value for the item.{" "}
              </h2>
            </div>
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                What it means
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                A <span className="text-red-600">high arbitrage</span> value
                means that the item can be sold for a significant markup on the
                Divine market. If you own multiple of these items, you should
                consider bulk selling them rather than selling them individually
                or selling them to a bulk buyer.{" "}
              </h2>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                <span className="text-yellow-600">Medium arbitrage</span> and{" "}
                <span className="text-green-600">low arbitrage</span> items may
                not be commonly sold for a markup on the Divine market, or are
                sold at a low markup.
              </h2>
            </div>
          </div>
        </div>
        <div
          id="confidence"
          className="justify-aroundspace-y-4 mx-auto flex max-w-[58rem] flex-col items-center p-4 text-center md:p-6"
        >
          <h2 className="font-serif text-3xl font-light leading-[1.1] sm:text-3xl md:text-6xl">
            Confidence
          </h2>
          <Card className="bg-yellow-600">
            <CardContent className="md:text-md p-1 text-xs sm:text-sm ">
              We are currently working on improving confidence calculations.
              Please also consider the arbitrage value when deciding whether to
              sell an item.
            </CardContent>
          </Card>
          <div className="mx-auto grid justify-center gap-6 md:max-w-[64rem] md:grid-cols-2">
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                How it&apos;s calculated
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Divine rate confidence is calculated using several metrics. Most
                importantly, the number of listings, number of detected
                outliers, variance between listings, and the difference between
                the recommended price and the lowest listing price.{" "}
              </h2>
            </div>
            <div className="flex flex-col items-center justify-start rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                What it means
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                A <span className="text-green-600">high confidence</span> value
                means the rate is stable and based off of consistent listing
                data.
              </h2>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                A <span className="text-red-600">low confidence</span> value
                means Divine Toll is unable to determine a price for the item. A
                recommended price is still listed, but we recommend you visit
                the item data page to see more info, or visit the trade site to
                decide for yourself.
              </h2>
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="justify-aroundspace-y-4 mx-auto flex max-w-[58rem] flex-col items-center p-4 text-center md:p-6"
        >
          <h2 className="font-serif text-3xl font-light leading-[1.1] sm:text-3xl md:text-6xl">
            Contact Me
          </h2>
          <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
            If you have any questions, suggestions, or want to contribute,
            contact me at{" "}
            <a className="underline" href="mailto:teatrey@divinetoll.com">
              teatrey@divinetoll.com
            </a>
          </h2>
          <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
            The Divine Toll database also offers a free API. If you&apos;re
            interested in integrating it into your own app, or have any
            questions about using it, let&apos;s chat.
          </h2>
        </div>
      </section>
    </>
  );
}
