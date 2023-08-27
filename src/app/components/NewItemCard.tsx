import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Image from "next/image";
import Confidence from "./Confidence";
import { FaBeer } from "react-icons/fa";
import { Item } from "@prisma/client";
import { ItemWithPrices } from "../types/Item";

type Props = {
  item: ItemWithPrices;
};

const NewItemCard = ({ item }: Props) => {
  return (
    <Card className="flex h-full grow flex-col items-center justify-between rounded-sm border-2 border-stone-950 bg-stone-700 p-1 hover:bg-stone-600">
      <CardHeader className=" mt-4 flex h-[35%] grow items-center p-0">
        <CardTitle className="w-[80%] overflow-hidden break-normal text-lg">
          {item.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="m-1 flex flex-col items-center justify-center p-3">
        <Image
          alt="aa"
          src={item.icon}
          width={64}
          height={64}
          className="h-15 w-15 grow-0 drop-shadow-3w"
        />
      </CardContent>
      <CardContent className="m-0 mb-2 flex h-[100px] w-full justify-center  p-0 font-semibold">
        <div className="mr-3 flex w-[80] flex-col items-center justify-around">
          <div className="flex items-center justify-between">
            <Image
              alt="chaos orb"
              src={"/chaos.png"}
              width={32}
              height={32}
              className="m-1"
            />
            <span>{item.currentChaos?.numerator}</span> :{" "}
            <span>{item.currentChaos?.denominator}</span>
            <Image
              alt="item"
              src={item.icon}
              width={32}
              height={32}
              className="m-1"
            />{" "}
          </div>
          <div className="flex  items-center justify-between border-2 border-stone-950 border-opacity-75">
            <Image
              alt="divine orb"
              src={"/divine.png"}
              width={32}
              height={32}
              className="m-1"
            />
            <span>{item.currentDivine?.numerator}</span> :{" "}
            <span>{item.currentDivine?.denominator}</span>
            <Image
              alt="item"
              src={item.icon}
              width={32}
              height={32}
              className="m-1"
            />{" "}
          </div>
        </div>
        <div className="flexflex-col items-center justify-around border">
          <div className="flex h-[1em] items-center justify-center p-0">
            {/* <Confidence confidence={item.currentDivine?.confidence} /> */}
          </div>
          <div className="flex h-[1em] items-center justify-center p-0">
            {/* <Confidence confidence={item.currentChaos?.confidence} /> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewItemCard;
