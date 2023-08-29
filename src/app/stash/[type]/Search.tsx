import React from "react";
import {SearchIcon} from "./SearchIcon";
import { Input } from "@/components/ui/input"


type Props = {
    setSearch: Function,
    query: string
}

export default function Search({setSearch, query}:Props) {
  return (
    <Input
    type="search"
    defaultValue=""
    className="max-w-xs"
    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }}
  />

  );
}
