import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

import { Badge } from "@/app/components/ui/badge";

import { FiTrendingUp, FiTrendingDown, FiMeh, FiFrown } from "react-icons/fi";

import { BiError } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

type AppProps = {
  confidence: number | undefined;
};

const Confidence = ({ confidence }: AppProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger></TooltipTrigger>
        <TooltipContent></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Confidence;
