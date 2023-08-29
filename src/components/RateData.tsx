import React from "react";
import Image from "next/image";
import { LuArrowRightLeft } from "react-icons/lu";
import { ItemWithPrices } from "@/types/Item";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { TbArrowsExchange } from "react-icons/tb";

type Props = {
  item: ItemWithPrices;
  currency: string;
};

const RateData = ({ item, currency }: Props) => {
  const markUp: number = 0;
  return (
    <div className="justify-centersp-0 ml-2 flex w-2/3 items-center align-middle">
      <span className="flex flex-1 items-center">
        {currency == "Chaos" && (
          <p className="ml-auto">{item.currentChaos?.numerator}</p>
        )}
        {currency == "Divine" && (
          <p className="ml-auto">{item.currentDivine?.numerator}</p>
        )}
        <Image
          loading="lazy"
          src={`/assets/${currency}.png`}
          alt={`${currency} Orb`}
          className="w-10"
          height={32}
          width={32}
        />
      </span>
      <p className="m-1">
        <Arrow />
      </p>
      <span className="flex flex-1 items-center">
        <Image
          loading="lazy"
          src={item.icon}
          alt={item.name}
          className="w-10"
          height={32}
          width={32}
        />
        {currency == "Chaos" && (
          <p className="mr-auto">{item.currentChaos?.denominator}</p>
        )}
        {currency == "Divine" && (
          <p className="mr-auto">{item.currentDivine?.denominator}</p>
        )}
      </span>
    </div>
  );
};

export default RateData;

const Arrow = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <TbArrowsExchange className="scale-125 font-extrabold text-red-800" />
      </TooltipTrigger>
      <TooltipContent>
        <h3>This exchange rate is bad!</h3>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
