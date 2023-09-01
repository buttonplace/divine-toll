"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ItemWithPrices } from "@/types/Item";
// import "server-only";
import Item from "../../../components/Item";
import { GET } from "@/app/api/items/[type]/route";
import { NextResponse } from "next/server";
import Placeholder from "../../../components/Placeholder";
import Search from "./Search";
import StashGrid from "./StashGrid";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import StashList from "./StashList";

type Props = {
  type: string;
  items: ItemWithPrices[];
  width: number;
};

const Stash = (
  { type, items, width }: Props, // items,
  // query,
  // {
  // items: ItemWithPrices[];
  // query: string;
) => {
  const [query, setQuery] = useState<string>("");
  const [view, setView] = useState<boolean>(false);

  const handleChecked = (e): any => {};

  const stashClass = !query
    ? `stash-${width}`
    : `flex justify-center flex-wrap`;
  return (
    <div className="bg-stash_background mb-10 flex flex-col items-center">
      <div className="grid w-full grid-cols-3 ">
        <div className="spacer"></div>
        <Search setSearch={setQuery} query={query} />
        <Switch
          id="list-view"
          className="ml-auto mr-6"
          onCheckedChange={() => setView(!view)}
        />
        <Label htmlFor="airplane-mode">List View</Label>
      </div>
      {view === true ? (
        <StashList items={items} query={query} />
      ) : (
        <StashGrid query={query} items={items} stashClass={stashClass} />
      )}
    </div>
  );
};

export default Stash;
