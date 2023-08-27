import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { ItemWithPrices } from "../types/Item";
import DialogItem from "./DialogItem";

import NewItemCard from "./NewItemCard";

type Props = {
  item: ItemWithPrices;
};

const ItemWithDialog = ({ item }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="m-1 flex grow outline-none">
        <NewItemCard item={item} />
      </DialogTrigger>
      <DialogContent className="border-black outline-none">
        <DialogItem item={item} />
      </DialogContent>
    </Dialog>
  );
};

export default ItemWithDialog;
