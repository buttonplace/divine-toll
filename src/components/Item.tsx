import { ItemWithPrices } from "@/types/Item";
import React from "react";
import { Image } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { LuArrowRightLeft } from "react-icons/lu";

type Props = {
  item: ItemWithPrices;
};

const Item = ({ item }: Props) => {
  return (
    <Card shadow="md" isPressable className="m-1 bg-background">
      <CardHeader className="bg-primary-800 flex flex-col items-center gap-1">
        <Image
          shadow="lg"
          loading="lazy"
          src={item.icon}
          alt={item.name}
          className="h-12 w-12"
        />
        {/* <Avatar color="primary" radius="full" size="lg" src={item.icon} /> */}
        <div className="flex h-[2.5em] items-center">
          <h4 className="text-small font-semibold leading-tight text-primary">
            {item.name}
          </h4>
        </div>
      </CardHeader>
      <CardBody className="bg-primary-700 flex flex-col items-center justify-center gap-2">
        <span className="flex items-center gap-1">
          <p>{item.currentDivine?.numerator}</p>
          <Image
            loading="lazy"
            src="/divine.png"
            alt="Exalted Orb"
            className="mb-1 h-[2em] w-[2em]"
          />
          <LuArrowRightLeft className="mb-1 mr-1" />
          <p>{item.currentDivine?.denominator}</p>
          <Image
            loading="lazy"
            src={item.icon}
            alt={item.name}
            className="mb-1 h-[2em] w-[2em]"
          />
        </span>
        <span className="flex items-center gap-1">
          <p>{item.currentChaos?.numerator}</p>
          <Image
            loading="lazy"
            src="/chaos.png"
            alt="Exalted Orb"
            className="mb-1 h-[2em] w-[2em]"
          />
          <LuArrowRightLeft className="mb-1 mr-1" />
          <p>{item.currentChaos?.denominator}</p>
          <Image
            loading="lazy"
            src={item.icon}
            alt={item.name}
            className="mb-1 h-[2em] w-[2em]"
          />
        </span>
      </CardBody>
    </Card>
  );
};

export default Item;

// <CardFooter className="justify-center gap-3">
//         <div className="flex items-center gap-1">
//           <p className="text-default-400 text-small m-1 font-semibold">
//             {item.currentChaos?.numerator}
//           </p>
//           {/* <Avatar  radius="full" size="sm" src="/chaos.png" /> */}
//           <Image
//             loading="lazy"
//             src="/chaos.png"
//             alt="Chaos Orb"
//             className="h-10 w-10"
//           />
//         </div>
//         <div className="font-extrabold">:</div>
//         <div className="flex items-center gap-1">
//           <p className="text-default-400 text-small m-1 font-semibold">
//             {item.currentChaos?.denominator}
//           </p>
//           {/* <Avatar  radius="full" size="sm" src={item.icon} /> */}
//           <Image
//             loading="lazy"
//             src={item.icon}
//             alt={item.name}
//             className="h-10 w-10"
//           />
//         </div>
//       </CardFooter>
//       <CardFooter className=" justify-center gap-3">
//         <div className="flex items-center gap-1">
//           <p className="text-default-400 text-small m-1 font-semibold">
//             {item.currentDivine?.numerator}
//           </p>
//           {/* <Avatar  radius="full" size="sm" src="/chaos.png" /> */}
//           <Image
//             loading="lazy"
//             src="/divine.png"
//             alt="Divine Orb"
//             className="h-10 w-10"
//           />
//         </div>
//         <div className="font-extrabold">:</div>
//         <div className="flex items-center gap-1">
//           <p className="text-default-400 text-small m-1 font-semibold">
//             {item.currentDivine?.denominator}
//           </p>
//           {/* <Avatar  radius="full" size="sm" src={item.icon} /> */}
//           <Image
//             loading="lazy"
//             src={item.icon}
//             alt={item.name}
//             className="h-10 w-10"
//           />
//         </div>
//       </CardFooter>
//     </Card>
