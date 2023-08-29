import { ItemWithPrices } from "@/types/Item";
import React from "react";
import Item from "@/components/Item";
import Placeholder from "@/components/Placeholder";
import { SimpleGrid } from "@mantine/core";

type Props = {
  items: ItemWithPrices[];
  stashClass: string;
};

const StashGrid = ({ items, stashClass }: Props) => {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <SimpleGrid cols={6} spacing="xs" verticalSpacing="xs">
        {items.map((item, index, array) => {
          if (!item) {
            return <Placeholder key={index} />;
          }
          return <Item key={item?.name} item={item} />;
        })}
      </SimpleGrid>
    </div>
  );
};

export default StashGrid;
