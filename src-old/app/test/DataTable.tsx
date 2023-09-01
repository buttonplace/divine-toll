"use client";
import { ItemWithPrices } from "@/types/Item";
import React from "react";
type Props = {
  items: ItemWithPrices[];
};
const DataTable = async ({ items }: Props) => {
  return (
    <div>
      {items.map((item, index, array) => {
        return <div key={item?.name}>{item?.name}</div>;
      })}
    </div>
  );
};

export default DataTable;
