import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Placeholder = () => {
  return (
    <Card className="m-1 flex flex-grow border-none bg-background shadow-none ">
      <CardContent className="flex grow items-center justify-center ">
        <Image
          src="/assets/medbell.png"
          alt="Divine Toll Icon"
          width={32}
          height={32}
          className=" w-1/3 opacity-20"
        />
      </CardContent>
    </Card>
  );
};

export default Placeholder;
