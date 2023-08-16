"use client"
import React from 'react'
import { useEffect, useState} from 'react'

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

    useEffect(()=>{
      const getItem = async (): Promise<void> => {
          try {
            const response = await fetch(process.env.NEXT_ +'/api/items', {
              method: "GET",
            });
            const data = await response.json()
            console.log("HELLLLO")
            setItem(JSON.stringify(data))
          } catch (err) {
            console.error("first one is bad")
          }
        };
        getItem();
  },[])

  useEffect(()=>{
    const getItem = async (): Promise<void> => {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL +'/api/items', {
            method: "GET",
          });
          const data = await response.json()
          console.log("HELLLLO")
          setItem(JSON.stringify(data))
        } catch (err) {
          console.error("second one is bad")
        }
      };
      getItem();
},[])

useEffect(()=>{
  const getItem = async (): Promise<void> => {
      try {
        const response = await fetch('/api/items', { //This is the one that works for 
          method: "GET",
        });
        const data = await response.json()
        console.log("HELLLLO")
        setItem(JSON.stringify(data))
      } catch (err) {
        console.error("third one is bad")
      }
    };
    getItem();
},[])
    
  




  return (
    <div>{item.length>0?item:'no item'}</div>
  )
}

export default ItemCard