import { ItemWithPrices } from "@/types/Item";
import React from "react";
import { Image } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

const Placeholder = () => {
  return (
    <Card
      isBlurred
      isDisabled
      className="bg-anything m-1 flex items-center justify-center"
    >
      <Image
        loading="lazy"
        src="/medbell.png"
        alt="Divine Toll Icon"
        className="w-full"
      />
    </Card>
  );
};

export default Placeholder;
