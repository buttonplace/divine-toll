"use client"
import React from 'react'
import { useEffect, useState} from 'react'
import Image from 'next/image'

const ItemCard = () => {
  console.log("API IS:" + process.env.NEXT_PUBLIC_API_URL)
    const [item, setItem]  = useState("");
    useEffect(()=>{
        const getItem = async (): Promise<void> => {
            try {
              const response = await fetch(process.env.NEXT_PUBLIC_API_URL +'/api/items', {
                method: "GET",
              });
              const data = await response.json()
              console.log("HELLLLO")
              setItem(JSON.stringify(data))
            } catch (err) {
              console.error("zeroth one is bad")
            }
          };
          getItem();
    },[])


  return (
    <div>{item.length>0?item:<Image width={50} height={50} src='/medbell.png' alt='The Divine Toll logo.'/>}</div>
  )
}

export default ItemCard