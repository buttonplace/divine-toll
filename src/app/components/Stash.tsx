import React from "react";
import ItemCard from "./ItemCard";
import { useState } from "react";
import { ItemWithPrices } from "../types/Item";
import "server-only";
import NewItemCard from "./NewItemCard";
import Item from "./Item";
import ItemWithDialog from "./ItemWithDialog";

const Stash = ({
  items,
}: // query,
{
  items: ItemWithPrices[];
  // query: string;
}) => {
  // const [gg, setGg] = useState();

  return (
    <div className="flex h-full w-full flex-col items-center bg-stone-800">
      <div className="grid w-full p-3 pl-0 h-screen grid-cols-4 xl:grid-cols-8 auto-rows-[1fr] box-content">
        {
          // items
          items
            // .filter((item) =>
            //   item.name.toLowerCase().includes(query.toLowerCase())
            // )
            .map((item, index, array) => {
              //if detailed is the first item, make next two small
              //if detailed is the last item, make middle two small
              //if detailed is item 2 or 3, make 1,3 or 2,4 small

              // if (item.name === detailed) {
              //   return (
              //     <DetailedItemCard
              //       onHover={() => setDetailed("")}
              //       key={item?.name}
              //       item={item}
              //     />
              //   );
              // } else if (
              //   //index + 1 < array.length &&
              //   (array[index + 1]?.name === detailed && (index + 1) % 4 == 3) || //next item is detailed and last
              //   (array[index + 2]?.name === detailed && (index + 2) % 4 == 3) || // two items from now is detailed and last, make half
              //   (array[index - 1]?.name === detailed && (index - 1) % 4 == 0) || //previous item is detailed and first
              //   (array[index - 2]?.name === detailed && (index - 2) % 4 == 0) ||
              //   (array[index + 1]?.name === detailed &&
              //     (index % 4 == 0 || index % 4 == 1)) ||
              //   (array[index - 1]?.name === detailed &&
              //     (index % 4 == 2 || index % 4 == 3))
              // ) {
              //   return (
              //     <HalfItemCard
              //       onHover={(name: string | undefined) => setDetailed(name)}
              //       key={item?.name}
              //       item={item}
              //     />
              //   );
              // } else {
              //   // two items ago  is detailed and first, make half
              return (
                <ItemWithDialog
                  // onHover={(name: string | undefined) => setDetailed(name)}
                  key={item?.name}
                  item={item}
                />
              );
            })
          //   }
          // })
        }
      </div>
    </div>
  );
};

export default Stash;
