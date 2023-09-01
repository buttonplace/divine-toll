import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function relativeDifference(a: number, b: number) {
  //   console.log(`Profit margin of ${a} over ${b} is ${a - b / b}`);
  //   return a - b / b;

  //   console.log(`Percent difference of ${a} over ${b} is ${(100 * a) / (a + b)}`);
  return (100 * (a - b)) / b;

  //   return 100 * Math.abs((a - b) / ((a + b) / 2));
}
