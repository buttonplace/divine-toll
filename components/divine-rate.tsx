import { getDivine } from "@/lib/serverutils";
import React, { ReactElement } from "react";
import { Icons } from "./icons";

type Props = {
  rate?: number;
};

const DivineRate = async ({ rate }: Props) => {
  let divineRate = rate;
  if (!divineRate) {
    divineRate = await getDivine();
  }
  //   const divineRate = await fetch(
  //     process.env.NEXT_PUBLIC_API_URL! + "/api/divine/",
  //     {
  //       method: "GET",
  //       next: { revalidate: 120 },
  //     },
  //   )
  //     .then((res) => res.json())
  //     .then((res) => res.divine);
  return (
    <div className="text-md flex max-w-[15em] items-center justify-between space-x-1 md:text-lg lg:text-xl">
      <div className="flex h-auto w-[1.5em] items-center justify-center md:w-[2em]">
        <Icons.divine />
      </div>
      <span className="flex h-12 items-center justify-center">1</span>
      <div className="flex h-[1em] w-[1em] items-center justify-center">
        <Icons.arrowRight />
      </div>
      <span className="flex h-12 items-center justify-center">
        {divineRate}
      </span>
      <div className="flex h-[2em] w-[2em] items-center justify-center">
        <Icons.chaos />
      </div>
    </div>
  );
};

export default DivineRate;
