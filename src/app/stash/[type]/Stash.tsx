"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ItemWithPrices } from "@/types/Item";
// import "server-only";
import Item from "../../../components/Item";
import { GET } from "@/app/api/items/[type]/route";
import { NextResponse } from "next/server";
 import Placeholder from "../../../components/Placeholder";
 import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
 import {Image} from "@nextui-org/react";



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

  const stashClass = `stash-${width}`
  return (
    <div className="flex w-full flex-col items-center">
      
      <div className={stashClass}>
         {items.map((item, index, array) => {
           if (!item) {
             return <Placeholder key={index} />;
           }
           return <Item key={item?.name} item={item} />;
         })}
      </div>
    </div>  
  );


//   <Tabs 
//   aria-label="Options"         
//   selectedKey={selected}
//   onSelectionChange={(key)=>{
// setSelected(key as string)
//   }}
// >
//   <Tab key="scarab"  title={
//       <div className="flex items-center space-x-2">
//         <Image src="/scarab.png" alt="Scarabs" height={32} width={32}/>
//         <span>Scarabs</span>
//       </div>
//     }/>
//   <Tab key="essence"  title={
//       <div className="flex items-center space-x-2">
//         <Image src="/essence.png" alt="Scarabs" height={32} width={32}/>
//         <span>Essences</span>
//       </div>
//     }/>
// <Tab key="currency"  title={
//       <div className="flex items-center space-x-2">
//         <Image src="/currency.png" alt="Currency" height={32} width={32}/>
//         <span>Currency</span>
//       </div>
//     }/>      </Tabs>

};




export default Stash;
