"use client";
import React from "react";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full flex-col justify-center bg-primary-600">
      <Divider orientation="horizontal" />

      <div className="m-2 flex flex-col items-center justify-center text-xs">
        <div>
          Created by <Link href="https://www.github.com/teatrey">TeaTrey</Link>
        </div>

        <div>
          This product isn't affiliated with or endorsed by Grinding Gear Games
          in any way.
        </div>
      </div>
    </div>
  );
};

export default Footer;
