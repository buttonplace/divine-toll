"use client";
import { Stash, StashItem } from "@/types";
import React, { useEffect, useState } from "react";
import StashSelect from "./stash-select/stash-select";
import StashTable from "./stash-table/stash-table";

const fetchStashes = async (setStashes: Function) => {
  console.log("Trying to fetch stashes");
  const res = await fetch("/api/scanner/stashes", {
    method: "POST",
  });
  const data = await res.json();
  if (data.status === 200) {
    if (!data.stashes) {
      console.log("No stashes found");
      return;
    }

    const fs = data.stashes.filter((v: any) => {
      if (
        v.type !== "CurrencyStash" &&
        v.type !== "DivinationCardStash" &&
        v.type !== "FragmentStash" &&
        // v.type !== "MapStash" &&
        v.type !== "EssenceStash" &&
        v.type !== "DelveStash" &&
        v.type !== "BlightStash" &&
        v.type !== "UltimatumStash"
      ) {
        return false;
      }
      return true;
    });

    const st = fs.map((v: any) => {
      return {
        id: v.id,
        name: v.name,
        type: v.type,
        index: v.index,
        color: "#" + v.metadata.colour,
      };
    });
    setStashes(st);
  }
};

const StashScanner = () => {
  const [stashes, setStashes] = useState<Stash[]>([]);
  const [items, setItems] = useState<StashItem[]>([]);
  const [selectedStashes, setSelectedStashes] = useState<string[]>([]);

  useEffect(() => {
    fetchStashes(setStashes);
  }, []);

  const fetchItems = async (stash: string) => {
    const jStash = JSON.parse(stash);
    const res = await fetch(
      "/api/scanner/stash/",
      //   "https://65f636b0-d71c-4d7d-b074-22f0e034f871.mock.pstmn.io/stash/Affliction/" +
      // jStash.id,
      {
        method: "POST",
        body: JSON.stringify({
          jStash,
        }),
      },
    );

    if (!res.ok) {
      console.log("Error fetching items");
      return;
    }
    const data = await res.json();
    // console.log(data);
    if (!data.items) {
      console.log("No items found");
      return;
    }

    let matches = [];
    if (jStash.type == "FragmentStash") {
      const dtFrags = await fetch("/api/scanner/fragment");
      const dtScarabs = await fetch("/api/scanner/scarab");
      const dtBreach = await fetch("/api/scanner/breach");
      const dtFragsData = await dtFrags.json();
      const dtScarabsData = await dtScarabs.json();
      const dtBreachData = await dtBreach.json();
      matches = [
        ...dtFragsData.data,
        ...dtScarabsData.data,
        ...dtBreachData.data,
      ];
    } else if (jStash.type == "CurrencyStash") {
      const dtCurrency = await fetch("/api/scanner/basic%20currency");
      const dtCurrencyData = await dtCurrency.json();
      const dtExotics = await fetch("/api/scanner/exotic%20currency");
      const dtExoticsData = await dtExotics.json();
      matches = [...dtCurrencyData.data, ...dtExoticsData.data];
    } else if (jStash.type == "EssenceStash") {
      const dtEssences = await fetch("/api/scanner/essence");
      const dtEssencesData = await dtEssences.json();
      matches = [...dtEssencesData.data];
    } else if (jStash.type == "UltimatumStash") {
      const dtCatalysts = await fetch("/api/scanner/catalyst");
      const dtCatalystsData = await dtCatalysts.json();
      matches = [...dtCatalystsData.data];
    } else if (jStash.type == "BlightStash") {
      const dtOils = await fetch("/api/scanner/oil");
      const dtOilsData = await dtOils.json();
      matches = [...dtOilsData.data];
    }

    const fitems = data.items.filter((v: any) => {
      if (matches.some((item) => item.name == v.typeLine)) {
        return true;
      } else {
        return false;
      }
    });

    const items = fitems.map((v: any) => {
      const dtItem = matches.find((item) => item.name == v.typeLine);
      return {
        name: v.typeLine,
        count: v.stackSize,
        id: v.id,
        stashId: jStash.id,
        divineRate: dtItem.divineRateValue,
        divineDenominator: dtItem.divineDenominator,
        percentage: Math.round(
          (parseInt(v.stackSize) / dtItem.divineDenominator) * 100,
        ),
        icon: dtItem.icon,
      };
    });
    setItems((prev) => [...prev, ...items]);
    return items;
  };

  const deleteItems = async (stash: string) => {
    const fItems = items.filter((v) => v.stashId !== JSON.parse(stash).id);
    setItems(fItems);
  };

  const tryq = (stashes: string[]) => {
    setSelectedStashes((prev) => {
      let deleted = prev.filter((item) => stashes.indexOf(item) < 0);
      let added = stashes.filter((item) => prev.indexOf(item) < 0);
      if (deleted.length > 0) {
        console.log("deleted:");
        console.log(deleted);
        for (const stash of deleted) {
          deleteItems(stash);
        }
      }
      if (added.length > 0) {
        console.log("added:");
        console.log(added);
        for (const stash of added) {
          fetchItems(stash);
        }
      }
      return stashes;
    });
  };

  return (
    <div className="flex">
      <div className="flex w-fit flex-col">
        <StashSelect
          stashes={stashes}
          selectedStashes={selectedStashes}
          setSelectedStashes={tryq}
        />
        {/* <Button }>Scan</Button> */}
      </div>
      <StashTable users={items} />
    </div>
  );
};

export default StashScanner;
