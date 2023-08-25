import React from "react";
import { ItemWithPrices } from "../types/Item";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import NewItemCard from "./NewItemCard";

type Props = {
  item: ItemWithPrices;
};

const DialogItem = ({ item }: Props) => {
  return (
    <DialogHeader>
      <DialogTitle className="flex justify-center">{item.name}</DialogTitle>
      <DialogDescription>
        <NewItemCard item={item} />
      </DialogDescription>
    </DialogHeader>
  );
};

export default DialogItem;
