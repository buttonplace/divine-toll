"use client"
import React from 'react'
import {Divider} from "@nextui-org/react";
import Link from 'next/link';

const Footer = () => {
    return (
        
        <div className='flex flex-col justify-center'>
        <Divider orientation="horizontal" />

          <div className="flex-col flex m-2 items-center justify-center text-xs">
          <div>Created by <Link href="https://www.github.com/teatrey">TeaTrey</Link></div>

            <div>This product isn't affiliated with or endorsed by Grinding Gear Games in any way.</div>
          </div>
        </div>
      );
}

export default Footer
