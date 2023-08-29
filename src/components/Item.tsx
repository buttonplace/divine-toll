import { ItemWithPrices } from "@/types/Item";
import React from "react";
import { Image } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

type Props = {
  item: ItemWithPrices;
};

const Item = ({ item }: Props) => {
  return (
    <Card shadow="lg" isHoverable isPressable className="m-1 bg-primary">
      <CardHeader className="justify-center">
        <div className="flex flex-col items-center gap-5">
          <Image
            loading="lazy"
            src={item.icon}
            alt={item.name}
            className="h-10 w-10"
          />
          {/* <Avatar color="primary" radius="full" size="lg" src={item.icon} /> */}
          <div className="flex flex-col items-start justify-center  gap-1">
            <h4 className="ml-2 text-small font-semibold leading-none text-default-600">
              {item.name}
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="justify-center gap-3">
        <div className="flex items-center gap-1">
          <p className="m-1 text-small font-semibold text-default-400">
            {item.currentChaos?.numerator}
          </p>
          {/* <Avatar  radius="full" size="sm" src="/chaos.png" /> */}
          <Image
            loading="lazy"
            src="/chaos.png"
            alt="Chaos Orb"
            className="h-10 w-10"
          />
        </div>
        <div className="font-extrabold">:</div>
        <div className="flex items-center gap-1">
          <p className="m-1 text-small font-semibold text-default-400">
            {item.currentChaos?.denominator}
          </p>
          {/* <Avatar  radius="full" size="sm" src={item.icon} /> */}
          <Image
            loading="lazy"
            src={item.icon}
            alt={item.name}
            className="h-10 w-10"
          />
        </div>
      </CardFooter>
      <CardFooter className=" justify-center gap-3">
        <div className="flex items-center gap-1">
          <p className="m-1 text-small font-semibold text-default-400">
            {item.currentDivine?.numerator}
          </p>
          {/* <Avatar  radius="full" size="sm" src="/chaos.png" /> */}
          <Image
            loading="lazy"
            src="/divine.png"
            alt="Divine Orb"
            className="h-10 w-10"
          />
        </div>
        <div className="font-extrabold">:</div>
        <div className="flex items-center gap-1">
          <p className="m-1 text-small font-semibold text-default-400">
            {item.currentDivine?.denominator}
          </p>
          {/* <Avatar  radius="full" size="sm" src={item.icon} /> */}
          <Image
            loading="lazy"
            src={item.icon}
            alt={item.name}
            className="h-10 w-10"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Item;
