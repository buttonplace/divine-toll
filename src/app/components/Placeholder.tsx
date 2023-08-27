import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import ItemCard from "./ItemCard";

const Placeholder = () => {
  return (
    <div className="m-1 flex items-center justify-center border">
      {/* <Card className="flex h-full flex-col grow items-center justify-between p-1 bg-stone-700 hover:bg-stone-600 border-2 border-stone-950 rounded-sm"> */}
      <Image
        alt="aa"
        src={"/medbell.png"}
        width={64}
        height={64}
        className="h-15 w-15 grow-0 opacity-50 drop-shadow-3w"
      />
      {/* </Card> */}
    </div>
  );
};

export default Placeholder;
