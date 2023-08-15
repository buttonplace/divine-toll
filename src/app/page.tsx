import Image from 'next/image'
import {useEffect,useState } from 'react';

async function getData() {
  const res = await fetch('https://' + process.env.VERCEL_URL + `/api/items/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

    const data = await getData();
    const info = JSON.stringify(data);


  return(
    
    <div>{data ? info :"qq"}</div>
    
  )
}

