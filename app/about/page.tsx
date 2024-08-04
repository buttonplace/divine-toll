import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import DivineRate from "@/components/divine-rate";

export default async function MainPage() {
  return (
    <>
      <section className="space-y-3 pb-4 pt-3 md:pb-6 md:pt-5 lg:py-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src="/images/medbell.png"
            alt="Divine Toll Logo"
            width={128}
            height={128}
            className=" h-auto w-auto"
          />
          <h1 className="text-back flex items-center justify-center font-serif text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="z-10">Divine Toll</span>{" "}
          </h1>
          <h1 className="text-back flex items-center justify-center font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="z-10 -mt-4 text-indigo-400">Settlers</span>{" "}
          </h1>
          <p className="max-w-[42rem] font-sans font-light leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A price index for the Path of Exile Divine Orb exchange.
          </p>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="justify-aroundspace-y-4 mx-auto flex max-w-[58rem] flex-col items-center text-center">
          <h2 className="font-serif text-3xl font-light leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <div className="mx-auto grid justify-center gap-6 md:max-w-[64rem] md:grid-cols-2">
            <div className="flex flex-col items-center justify-between rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                Pricing data, built from the bulk exchange
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Divine Toll pulls pricing data from the official Divine Orb bulk
                exchange and uses that data to calculate the market value of
                over 700 commonly traded items.{" "}
              </h2>
              <div className="px-4 py-2">
                <Link
                  href="/scarab"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-1/2 min-w-[13em]",
                  )}
                >
                  View some items
                </Link>{" "}
              </div>
            </div>
            <div className="flex flex-col items-center justify-between rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                See the difference between the Chaos and Divine exchange
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Avoid losing currency to bulk resellers by easily seeing the
                current price difference between the Chaos and Divine Orb market
                for every item in our database.{" "}
              </h2>
              <div className="px-4 py-2">
                <Link
                  href="/about/information#divinetoll"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-1/2 min-w-[13em]",
                  )}
                >
                  Learn More{" "}
                </Link>{" "}
              </div>
            </div>
            <div className="flex flex-col items-center justify-between rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                Hourly price history
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Divine Toll pulls pricing data from the official Divine Orb bulk
                exchange and uses that data to calculate the market value of
                over 700 of commonly traded items.{" "}
              </h2>
              <div className="px-4 py-2">
                <h5 className="text-xs font-light text-muted-foreground/90">
                  Price history has been tracked since the start of Ancestor,
                  but history display is still in development.
                </h5>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between rounded-md">
              <h3 className="px-2 py-4 font-sans text-xl font-light sm:text-xl md:text-2xl">
                Stash view, so you can list faster
              </h3>
              <h2 className="md:text-md px-4 py-2 text-sm font-medium text-muted-foreground">
                Avoid rate-limits from the official trade API and price your
                stash faster using our experimental stash view.
              </h2>
              <div className="px-4 py-2">
                <h5 className="text-xs font-light text-muted-foreground/90">
                  Stash view is still in development, but you can still use list
                  view to bypass the API! List view sorts by stash position by
                  default.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
