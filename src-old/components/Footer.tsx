"use client";
import React from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { StyleToggle } from "./StyleToggle";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center">
      <Separator orientation="horizontal" />

      <div className="m-2 flex flex-col items-center justify-center text-xs">
        <div>
          Created by <Link href="https://www.github.com/teatrey">TeaTrey</Link>
        </div>

        <div>
          This product <span className="text-red-800">isn&apos;t</span>{" "}
          affiliated with or endorsed by Grinding Gear Games in any way.
        </div>
      </div>
      <StyleToggle />
    </div>
  );
};

export default Footer;
