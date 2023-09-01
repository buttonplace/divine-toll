import { ItemWithPrices } from "@/types/Item";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Separator } from "./ui/separator";
import { LuArrowRightLeft } from "react-icons/lu";
import Confidence from "./Confidence";
import RateData from "./RateData";

type Props = {
  item: ItemWithPrices;
};

const Item = ({ item }: Props) => {
  const confColor = "bg-card";
  return (
    <Card className="border-card group m-1 flex flex-col items-center border duration-75 hover:cursor-pointer active:scale-105 active:opacity-20">
      <CardHeader className="flex w-full flex-row items-center justify-around rounded-lg rounded-b-none bg-background p-1 ">
        <Image
          loading="lazy"
          src={item.icon}
          alt={item.name}
          height={32}
          width={32}
          className="w-1/3 max-w-[60px] group-hover:drop-shadow-none"
        />
        {/* <Avatar color="primary" radius="full" size="lg" src={item.icon} /> */}
        <div className="flex h-[5em] w-1/2 items-center justify-start text-sm">
          <h4 className="ml-2 overflow-hidden py-2 text-small font-semibold leading-none text-default-600">
            {item.name}
          </h4>
        </div>
      </CardHeader>
      <CardFooter className={`m-2 w-full justify-center p-0 ${confColor}`}>
        <RateData item={item} currency="Chaos" />
        <div className="flex w-1/4 items-center justify-center p-0 align-middle">
          <Confidence confidence={item.currentDivine?.confidence!} />
        </div>
      </CardFooter>
      <Separator />
      <CardFooter className={`m-2 w-full justify-center p-0 ${confColor}`}>
        <RateData item={item} currency="Divine" />
        <div className="flex w-1/4 items-center justify-center p-0 align-middle">
          <Confidence confidence={item.currentDivine?.confidence!} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Item;
