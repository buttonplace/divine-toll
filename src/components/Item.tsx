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

type Props = {
  item: ItemWithPrices;
};

const Item = ({ item }: Props) => {
  const confColor = "bg-success";
  return (
    <Card className="border-card group m-1 flex flex-col items-center border duration-75 hover:cursor-pointer active:scale-105 active:transform active:opacity-20">
      <CardHeader className="flex w-full flex-row justify-around rounded-lg rounded-b-none bg-background ">
        <Image
          loading="lazy"
          src={item.icon}
          alt={item.name}
          height={32}
          width={32}
          className="w-1/3 max-w-[60px] group-hover:drop-shadow-none"
        />
        {/* <Avatar color="primary" radius="full" size="lg" src={item.icon} /> */}
        <div className="flex h-[3em] w-1/2 flex-col items-start justify-center gap-1">
          <h4 className="ml-2 text-small font-semibold leading-none text-default-600">
            {item.name}
          </h4>
        </div>
      </CardHeader>
      <CardFooter className={`w-full justify-center p-0 ${confColor}`}>
        <div className="flex w-2/3 min-w-[100px] items-center justify-center p-0 align-middle">
          <span className="flex flex-1 items-center">
            <p className="">{item.currentChaos?.numerator}</p>
            <Image
              loading="lazy"
              src="/chaos.png"
              alt="Chaos Orb Orb"
              className="w-10"
              height={32}
              width={32}
            />
          </span>
          <p className="m-5">
            <LuArrowRightLeft />
          </p>
          <span className="flex flex-1 items-center">
            <p className="">{item.currentChaos?.denominator}</p>
            <Image
              loading="lazy"
              src={item.icon}
              alt={item.name}
              className="h-10 w-10"
              height={32}
              width={32}
            />
          </span>
        </div>
      </CardFooter>
      <Separator />
      <CardContent className="flex w-2/3 items-center justify-center p-1 align-middle">
        <span className="flex flex-1 items-center justify-around">
          <p className="">{item.currentDivine?.numerator}</p>
          <Image
            loading="lazy"
            src="/divine.png"
            alt="Chaos Orb Orb"
            className="h-10 w-10"
            height={32}
            width={32}
          />
        </span>
        <p className="m-5">
          <LuArrowRightLeft />
        </p>
        <span className="flex flex-1 items-center">
          <p className="">{item.currentDivine?.denominator}</p>
          <Image
            loading="lazy"
            src={item.icon}
            alt={item.name}
            className="h-10 w-10"
            height={32}
            width={32}
          />
        </span>
      </CardContent>
    </Card>
  );
};

export default Item;
