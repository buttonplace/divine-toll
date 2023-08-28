"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ItemWithPrices } from "../types/Item";
// import "server-only";
import NewItemCard from "./NewItemCard";
import { GET } from "../api/items/[type]/route";
import { NextResponse } from "next/server";
import Placeholder from "./Placeholder";

const Stash = ({}: // items,
// query,
{
  // items: ItemWithPrices[];
  // query: string;
}) => {
  const [items, setItems] = useState<ItemWithPrices[]>([]);

  useEffect(() => {
    async function runItems() {
      const items = await fetch(
        process.env.NEXT_PUBLIC_API_URL! + "/api/items/scarab",
        { method: "GET" },
      );
      if (!items) {
        console.log("no ites");
        return;
      }
      const jsonitem: ItemWithPrices[] = await items.json();

      setItems(jsonitem);
    }
    runItems();
  }, []);

  function handleClick(e: Event, type: string): void {
    async function runItems() {
      const items = await fetch(
        process.env.NEXT_PUBLIC_API_URL! + "/api/items/" + type,
        { method: "GET" },
      );
      if (!items) {
        return;
      }
      const jsonitem: ItemWithPrices[] = await items.json();
      setItems(jsonitem);
    }
    runItems();
    return;
  }

  // const [gg, setGg] = useState();

  return (
    <div className="flex h-full w-full flex-col items-center bg-transparent">
      <div className="box-content grid h-screen w-full auto-rows-[1fr] grid-cols-4 p-3 pl-0 xl:grid-cols-10">
        {items.map((item, index, array) => {
          if (!item) {
            return <Placeholder key={index} />;
          }
          return <NewItemCard key={item?.name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Stash;
