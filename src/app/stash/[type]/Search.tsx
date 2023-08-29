import React from "react";
import { SearchIcon } from "./SearchIcon";
import { Input } from "@/components/ui/input";

type Props = {
  setSearch: Function;
  query: string;
};

export default function Search({ setSearch, query }: Props) {
  return (
    // <Input
    //   key="primary"
    //   color="primary"
    //   type="email"
    //   label="Email"
    //   placeholder="Enter your email"
    //   defaultValue="junior@nextui.org"
    //   className="border-9 max-w-[400px] p-4 text-background"
    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    //   setSearch(e.target.value);
    // }}
    // />

    <Input
      type="search"
      placeholder="search"
      className="max-w-xs"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      }}
    />
  );
}

// // base: Input wrapper, it handles alignment, placement, and general appearance.
// label: Label of the input, it is the one that is displayed above, inside or left of the input.
// mainWrapper: Wraps the inputWrapper when position is outside / outside-left.
// inputWrapper: Wraps the label (when it is inside) and the innerWrapper.
// innerWrapper: Wraps the input, the startContent and the endContent.
// input: The input element.
// clearButton: The clear button, it is at the end of the input.
// helperWrapper: Wraps the description and the errorMessage.
// description: The description of the input.
// errorMessage: The error message of the input.
