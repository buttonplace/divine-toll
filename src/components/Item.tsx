import { ItemWithPrices } from "@/types/Item";
import React from "react";
import {Image} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";

type Props = {
  item: ItemWithPrices;
};

const Item = ({ item }: Props) => {

  return (
    <Card shadow="lg" isHoverable isPressable className="m-1">
      <CardHeader className="justify-center">
        <div className="flex flex-col items-center gap-5">
        <Image loading="lazy" src={item.icon} alt={item.name} className="w-10 h-10"/>
          {/* <Avatar color="primary" radius="full" size="lg" src={item.icon} /> */}
          <div className="flex flex-col gap-1 items-start  justify-center">
            <h4 className="ml-2 text-small font-semibold leading-none text-default-600">{item.name}</h4>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="gap-3 justify-center">
        <div className="flex items-center gap-1">
          <p className="m-1 font-semibold text-default-400 text-small">{item.currentChaos?.numerator}</p>
          {/* <Avatar  radius="full" size="sm" src="/chaos.png" /> */}
          <Image loading="lazy" src="/chaos.png" alt="Chaos Orb" className="w-10 h-10"/>

        </div>
        <div className="font-extrabold">
          :
        </div>
        <div className="flex items-center gap-1">
          <p className="m-1 font-semibold text-default-400 text-small">{item.currentChaos?.denominator}</p>
          {/* <Avatar  radius="full" size="sm" src={item.icon} /> */}
          <Image loading="lazy" src={item.icon} alt={item.name} className="w-10 h-10"/>

        </div>
      </CardFooter>
      <CardFooter className=" justify-center gap-3">
        <div className="flex items-center gap-1">
          <p className="m-1 font-semibold text-default-400 text-small">{item.currentDivine?.numerator}</p>
          {/* <Avatar  radius="full" size="sm" src="/chaos.png" /> */}
          <Image loading="lazy" src="/divine.png" alt="Divine Orb" className="w-10 h-10"/>

        </div>
        <div className="font-extrabold">
          :
        </div>
        <div className="flex items-center gap-1">
          <p className="m-1 font-semibold text-default-400 text-small">{item.currentDivine?.denominator}</p>
          {/* <Avatar  radius="full" size="sm" src={item.icon} /> */}
          <Image loading="lazy" src={item.icon} alt={item.name} className="w-10 h-10"/>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Item;