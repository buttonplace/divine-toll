import Image from 'next/image'
import {useEffect,useState } from 'react';
import { GET } from './api/items/route'
import { Item, ChaosPrice } from '@prisma/client';
import { FactionWithOwner } from './api/items/items';


export default async function Home() {
  const items: FactionWithOwner[] = await GET();
  
  return(
    <>
    {items?items.map((item)=>{
      return(
        <li key={item.name}>{item.name} with tradeId {item.tradeId} and price {item.currentChaos?.numerator}</li>
      )
    }) : 'No items'}
    </>
  )
}

