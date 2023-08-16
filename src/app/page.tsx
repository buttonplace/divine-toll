import Image from "next/image";
import { useEffect, useState } from "react";
import { GET } from "./api/items/route";
import { Item, ChaosPrice } from "@prisma/client";
import ItemCard from "./components/ItemCard";
import { prisma } from "./api/db";
import Stash from "./components/Stash";

export default async function Home() {
  //const items: FactionWithOwner[] = await GET();

  const items = await prisma.item.findMany({
    where: {
      type: "scarab",
    },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });

  return (
    <>
      {/* <div>{items && JSON.stringify(items)}</div>
      <div>item should appear below</div> */}
      <Stash items={items} />
    </>
  );
}
