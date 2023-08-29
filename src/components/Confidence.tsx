import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { LuSmile, LuFrown, LuMeh } from "react-icons/lu";
import Link from "next/link";

type Props = {
  confidence: number;
};
const Confidence = ({ confidence }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {confidence > 66 && (
            <Badge
              variant="outline"
              className="border-background bg-green-600 p-1 text-background hover:bg-green-300"
            >
              {confidence}

              {/* <LuSmile className="scale-110 text-background" /> */}
            </Badge>
          )}
          {confidence > 33 && confidence <= 66 && (
            <Badge className=" bg-yellow-600 p-1 hover:bg-yellow-300">
              {confidence}

              {/* <LuMeh className="scale-110 text-background" /> */}
            </Badge>
          )}
          {confidence <= 33 && (
            <Badge className=" bg-red-600 p-1 hover:bg-red-300">
              {confidence}
              {/* <LuFrown className="scale-105 text-background" /> */}
            </Badge>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <Link href="/about">
            This confidence is marked low, be careful.{" "}
            <span className="text-primary">Learn More</span>
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Confidence;
