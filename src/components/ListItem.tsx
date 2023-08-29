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

const ListItem = ({ item }: Props) => {
  return (
    <Card shadow="lg" isHoverable isPressable className="bg-default m-1">
      <CardHeader className="border-1 flex items-center gap-2 border-black">
        <Image
          shadow="lg"
          loading="lazy"
          src={item.icon}
          alt={item.name}
          className="h-12 w-12"
        />
        {/* <Avatar color="primary" radius="full" size="lg" src={item.icon} /> */}
        <h4 className="text-small font-semibold leading-none text-primary">
          {item.name}
        </h4>
      </CardHeader>
      <CardBody className="flex items-center justify-center gap-2">
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

export default ListItem;

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
