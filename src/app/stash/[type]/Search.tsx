import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";

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
      label="Search"
      isClearable
      radius="sm"
      classNames={{
        label: "text-primary",
        input: [
          "bg-transparent",
          "text-primary-800", //Color of typed text
          "placeholder:text-primary-800/50",
          "max-w-[300px]",
        ],
        innerWrapper: ["bg-transparent", "max-w-[300px]"],
        inputWrapper: [
          "self-center",
          "shadow-xl",
          "bg-primary-800", //color of input
          "hover:bg-primary-700",
          "group-data-[focused=true]:bg-primary-700",
          "!cursor-text",
          "max-w-[300px]",
          "m-5",
        ],
      }}
      placeholder="Type to search..."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      }}
    />
  );
}
