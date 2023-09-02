"use client";
import React, { ReactElement, useEffect, useRef } from "react";
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
  let isMobile = useRef(false);
  useEffect(() => {
    isMobile.current =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
  }, []);
  return (
    <Popover>
      <PopoverTrigger className="m-1 self-center opacity-70 hover:opacity-50">
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
