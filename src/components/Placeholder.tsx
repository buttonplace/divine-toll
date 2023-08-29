import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const hello = "qq";

const Placeholder = () => {
  return (
    <Card className="flex flex-grow  items-center justify-center border-none">
      <CardContent className="grow">
        <Image
          src="/medbell.png"
          alt="Divine Toll Icon"
          width={32}
          height={32}
          className="w-full opacity-20"
        />
      </CardContent>
    </Card>
  );
};

export default Placeholder;
