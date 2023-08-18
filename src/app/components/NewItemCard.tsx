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
    <Card className="flex h-full flex-col grow items-center justify-between p-1 bg-stone-700 hover:bg-stone-600 border-2 border-stone-950 rounded-sm">
      <CardHeader className=" h-[35%] grow flex items-center p-0 mt-4">
        <CardTitle className="w-[80%] text-lg break-normal overflow-hidden">
          {item.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-3 m-1">
        <Image
          alt="aa"
          src={item.icon}
          width={64}
          height={64}
          className="h-15 w-15 grow-0drop-shadow-3w"
        />
      </CardContent>
      <CardContent className="h-[100px] w-full m-0 font-semibold flex justify-center  p-0 mb-2">
        <div className="flex w-[80] flex-col justify-around items-center mr-3">
          <div className="flex justify-between items-center">
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
          <div className="flex justify-between items-center">
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
        <div className="flex flex-col justify-around items-center">
          <div className="h-[1em] items-center  justify-center flex p-0">
            {/* <Confidence confidence={item.currentDivine?.confidence} /> */}
          </div>
          <div className="h-[1em] items-center  justify-center flex p-0">
            {/* <Confidence confidence={item.currentChaos?.confidence} /> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewItemCard;
