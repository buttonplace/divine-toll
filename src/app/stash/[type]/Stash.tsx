"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ItemWithPrices } from "@/types/Item";
// import "server-only";
import Item from "../../../components/Item";
import { GET } from "@/app/api/items/[type]/route";
import { NextResponse } from "next/server";
 import Placeholder from "../../../components/Placeholder";
 import Search from "./Search";



 type Props = {
  type:string,
  items: ItemWithPrices[],
  width: number
 }

const Stash = ({type,items,width}: Props// items,
// query,
// {
  // items: ItemWithPrices[];
  // query: string;
) => {
  const [query, setQuery] = useState<string>("");

  const stashClass = `stash-${width}`
  return (
    <div className="flex w-full flex-col items-center p-8">
      <Search setSearch={setQuery} query={query}/>
      <div className={stashClass}>
         {
         !query?(
          items.map((item, index, array) => {
           if (!item) {
             return <Placeholder key={index} />;
           }
           return <Item key={item?.name} item={item} />;
         })):
         items.filter((item)=>{
          if (!item){
            return false;
          } 
          return item.name.toLowerCase().includes(query.toLowerCase())
         }).map((item, index, array) => {
          return <Item key={item?.name} item={item} />;
        })
        }
      </div>
    </div>  
  );

};




export default Stash;
