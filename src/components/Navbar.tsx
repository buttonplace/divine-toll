"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 z-10">
      <div className="flex-1 items-center">
        <Link href="/" className="btn btn-ghost text-xl normal-case">
          <Image
            src="/medbell.png"
            alt="Divine Toll Logo"
            width={32}
            height={32}
            className="pb-1"
          />
          Divine Toll
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Stash View</summary>
              <ul className="z-10 bg-primary p-2">
                <li>
                  <Link href="/stash/scarab">Scarab</Link>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Table View</summary>
              <ul className="z-10 bg-primary p-2">
                <li>
                  <Link href="/table/scarab">Scarab</Link>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <summary>
              <Link href="/about">About</Link>
            </summary>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
