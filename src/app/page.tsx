import Image from "next/image";
import { useEffect, useState } from "react";
import { GET } from "./api/items/[type]/route";
import { Item, ChaosPrice } from "@prisma/client";
import ItemCard from "./components/ItemCard";
import { prisma } from "./api/db";
import Stash from "./components/Stash";
import { ItemWithPrices } from "./types/Item";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default function Home() {
  //const items: FactionWithOwner[] = await GET();

  return (
    // const = [items, setItems]
    <>
      <Header />
      <Stash />
    </>
  );
}
