import { ItemWithPrices } from "@/types/Item";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";

type Props = {
  item: ItemWithPrices;
};

const Item = ({ item }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <Avatar>
            <AvatarImage src={item.icon} alt={item.name} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <div>
            <h4>{item.name}</h4>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p>{item.currentChaos?.numerator}</p>
          <Avatar>
            <AvatarImage src={"/chaos.png"} alt={"Chaos Orb"} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        </div>
        <div>:</div>
        <div>
          <p>{item.currentChaos?.denominator}</p>
          <Avatar>
            <AvatarImage src={item.icon} alt={item.name} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
      <CardContent>
        <div>
          <p>{item.currentDivine?.numerator}</p>
          <Avatar>
            <AvatarImage src={"/divine.png"} alt={"Divine Orb"} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        </div>
        <div>:</div>
        <div>
          <p>{item.currentDivine?.denominator}</p>
          <Avatar>
            <AvatarImage src={item.icon} alt={item.name} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
};

export default Item;
