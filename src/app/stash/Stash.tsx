"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ItemWithPrices } from "@/types/Item";
// import "server-only";
import Item from "./Item";
import { GET } from "@/app/api/items/[type]/route";
import { NextResponse } from "next/server";
 import Placeholder from "./Placeholder";
 import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
 import {Image} from "@nextui-org/react";

 type Props = {
  type:string
 }

const Stash = ({type}: Props// items,
// query,
// {
  // items: ItemWithPrices[];
  // query: string;
) => {
  const [items, setItems] = useState<ItemWithPrices[]>([]);
  const [width, setWidth] = useState<string>('stash-10');
  const [selected, setSelected] = useState<string>("scarab");


  useEffect(() => {
    async function runItems() {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL! + "/api/items/" + selected,
        { method: "GET" },
      );
      if (!response) {
        console.log("no ites");
        return;
      }
      const {width, items}: {width: number, items: ItemWithPrices[]} = await response.json();
      console.log(width)
      setItems(items);
      setWidth(`stash-${width}`);
    }
    runItems();
  }, [selected]);

  return (
    <div className="flex w-full flex-col items-center">
      <Tabs 
        aria-label="Options"         
        selectedKey={selected}
        onSelectionChange={(key)=>{
setSelected(key as string)
        }}
      >
        <Tab key="scarab"  title={
            <div className="flex items-center space-x-2">
              <Image src="/scarab.png" alt="Scarabs" height={32} width={32}/>
              <span>Scarabs</span>
            </div>
          }/>
        <Tab key="essence"  title={
            <div className="flex items-center space-x-2">
              <Image src="/essence.png" alt="Scarabs" height={32} width={32}/>
              <span>Essences</span>
            </div>
          }/>
<Tab key="currency"  title={
            <div className="flex items-center space-x-2">
              <Image src="/currency.png" alt="Currency" height={32} width={32}/>
              <span>Currency</span>
            </div>
          }/>      </Tabs>
      <div className={width}>
         {items.map((item, index, array) => {
           if (!item) {
             return <Placeholder key={index} />;
           }
           return <Item key={item?.name} item={item} />;
         })}
      </div>
    </div>  
  );


  // return (

    
  
  //     <div className={clas}>
  //       {items.map((item, index, array) => {
  //         if (!item) {
  //           return <Placeholder key={index} />;
  //         }
  //         return <Item key={item?.name} item={item} />;
  //       })}
  //     </div>
  // );
};




export default Stash;
