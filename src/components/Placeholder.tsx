import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const hello = "qq";

const Placeholder = () => {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <Image
          src="/medbell.png"
          alt="Divine Toll Icon"
          width={32}
          height={32}
          className="w-full"
        />
      </CardContent>
    </Card>
  );
};

export default Placeholder;
