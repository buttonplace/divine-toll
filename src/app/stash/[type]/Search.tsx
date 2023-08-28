import React from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";

type Props = {
    setSearch: Function,
    query: string
}

export default function Search({setSearch, query}:Props) {
  return (
    <Input
    type="search"
    label="Search"
    defaultValue=""
    className="max-w-xs"
    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }}
  />

  );
}
