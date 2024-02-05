"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/dropdown";

import { Icons } from "../icons";
import {
  ChevronDown,
  Lock,
  Activity,
  Lightbulb,
  Server,
  User,
  Scale,
} from "lucide-react";
import { MainNavItem, NavItem } from "@/types";

type MainNavProps = {
  items: MainNavItem[];
};

export default function MainNavNew({ items }: MainNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: (
      <ChevronDown fill="currentColor" size={16} height={32} width={32} />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={32}
        width={32}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={32}
        width={32}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={32}
        width={32}
      />
    ),
    flash: (
      <Lightbulb
        className="text-primary"
        fill="currentColor"
        size={30}
        height={32}
        width={32}
      />
    ),
    server: (
      <Server
        className="text-success"
        fill="currentColor"
        size={30}
        height={32}
        width={32}
      />
    ),
    user: (
      <User
        className="text-danger"
        fill="currentColor"
        size={30}
        height={32}
        width={32}
      />
    ),
  };

  return (
    <Navbar
      className="font-light"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Icons.logo />
          <p className="font-bold text-inherit">Divine Toll</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {items &&
          items.map((item, index) => {
            if (item.items.length > 1) {
              return (
                <Dropdown key="hello">
                  <NavbarItem>
                    <DropdownTrigger>
                      {/* <span>{item.title}</span> */}
                      <Link className="flex flex-col" href="javascript:;">
                        <Image
                          src={
                            `/images/${item.icon}.png` || `images/medbell.png`
                          }
                          alt={item.title!}
                          width={32}
                          height={32}
                        />
                        {item.title}{" "}
                      </Link>
                      {/* <Button>{item.title}</Button> */}
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu>
                    {item.items.map((subitem: NavItem, index: number) => {
                      return (
                        <DropdownItem key={index}>
                          <Link href={subitem.href}>{subitem.title}</Link>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              );
            } else {
              return (
                <NavbarItem key="ope">
                  <Image
                    src={
                      `/images/${item.items[0].icon}.png` ||
                      `images/medbell.png`
                    }
                    alt={item.items[0].title!}
                    width={32}
                    height={32}
                  />
                  <Link href={item.items[0].href}>{item.title}</Link>
                </NavbarItem>
              );
            }
          })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === items.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
