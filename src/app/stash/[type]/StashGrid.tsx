import { ItemWithPrices } from "@/types/Item";
import React from "react";
import Item from "@/components/Item";
import Placeholder from "@/components/Placeholder";

type Props = {
  items: ItemWithPrices[];
  stashClass: string;
  query: string;
};

const StashGrid = ({ items, stashClass, query }: Props) => {
  console.log(stashClass);
  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className={stashClass}>
        {items.map((item, index, array) => {
          if (!item) {
            return <Placeholder key={index} />;
          }
          return <Item key={item?.name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default StashGrid;
