import Image from "next/image";
import { useEffect, useState } from "react";
import { GET } from "./api/items/route";
import { Item, ChaosPrice } from "@prisma/client";
import ItemCard from "./components/ItemCard";
import { prisma } from "./api/db";
import Stash from "./components/Stash";
import { ItemWithPrices } from "./types/Item";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default async function Home() {
  //const items: FactionWithOwner[] = await GET();

  const items: ItemWithPrices[] = await prisma.item.findMany({
    where: {
      type: "scarab",
    },
    include: {
      currentChaos: true,
      currentDivine: true,
    },
  });
  console.log("Getting items");
  return (
    // const = [items, setItems]
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        {/* {children} */}
        <Stash items={items} />
      </div>
    </>
  );
}
