import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import NewItemCard from "./NewItemCard";
import PopUpItemCard from "./PopUpItemCard";
import { ItemWithPrices } from "../types/Item";
import "server-only";

type Props = {
  item: ItemWithPrices;
};
const Item = ({ item }: Props) => {
  function findConfidence() {}
  return (
    <Popover>
      <PopoverTrigger className="m-1">
        <NewItemCard item={item} />
      </PopoverTrigger>
      <PopoverContent>
        <PopUpItemCard item={item} />
      </PopoverContent>
    </Popover>
  );
};

export default Item;
