import React, { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "./icons";

type Props = {
  content: ReactElement | string;
};

const Help = ({ content }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="m-1 self-center">
          <Icons.help className="h-[1em] w-[1em]" />
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Help;
