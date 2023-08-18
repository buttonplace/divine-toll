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
      <DialogTrigger className="mb-1 mr-1 flex grow">
        <NewItemCard item={item} />
      </DialogTrigger>
      <DialogContent>
        <DialogItem item={item} />
      </DialogContent>
    </Dialog>
  );
};

export default ItemWithDialog;
