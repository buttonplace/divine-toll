import React, { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "./icons";
import { useWindowSize } from "@/hooks/use-window-size";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  content: ReactElement | string;
};

const Help = ({ content }: Props) => {
  const isMobile: boolean =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  if (isMobile) {
    //Maybe decide based on mobile? But switching fully to popover for now.
  }
  return (
    <Popover>
      <PopoverTrigger className="m-1 self-center hover:opacity-50">
        <Icons.help className="h-[1em] w-[1em]" />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className="max-w-100px flex justify-center break-normal p-1"
      >
        <div> {content}</div>
      </PopoverContent>
    </Popover>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="m-1 self-center hover:opacity-50">
          <Icons.help className="h-[1em] w-[1em]" />
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Help;
