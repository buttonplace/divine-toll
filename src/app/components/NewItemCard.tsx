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
    <div className="card bg-base-100 m-1 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src={item.icon}
          width={64}
          height={64}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.currentDivine?.numerator}</p>
      </div>
    </div>
  );
};

export default NewItemCard;
