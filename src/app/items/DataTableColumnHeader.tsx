import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Car } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center justify-start space-x-2", className)}>
      {column.getIsSorted() === "desc" ? (
        <Button
          variant="ghost"
          onClick={() => column.clearSorting()}
          className="text-center"
        >
          {title}
          <ArrowDownIcon className="ml-2 h-4 w-4" />
        </Button>
      ) : column.getIsSorted() === "asc" ? (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(true)}
          className="text-center"
        >
          {title}
          <ArrowUpIcon className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(false)}
          className="text-center"
        >
          {title}
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
