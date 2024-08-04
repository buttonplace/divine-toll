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
            <span className="z-10 text-red-800">STOP!</span>{" "}
          </h1>
          <p className="max-w-[42rem] font-sans font-light leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Divine Toll is currently in the process of collecting data for the
            new Settlers league. Please check back later! We will be back in a
            couple of days.
          </p>
          <p className="max-w-[42rem] font-sans font-light leading-normal text-muted-foreground sm:text-sm sm:leading-8">
            If you want to explore the site, and you understand{" "}
            <span className="font-bold text-red-800">NONE</span> of the data is
            up to date, you can click{" "}
            <Link href="/about" className="italic underline">
              here
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
