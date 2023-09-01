import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ItemWithPrices } from "@/types/Item";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

