"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image.js";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./qq.jsx";
import { Icon, Icons } from "@/components/icons";
import { useState } from "react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export function MainNavNew() {
  const icons = {
    delve: <Icons.delve />,
    chevron: (
      <ChevronDown fill="currentColor" size={16} height={16} width={16} />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    flash: (
      <Flash
        className="text-primary"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    server: (
      <Server
        className="text-success"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    user: (
      <TagUser
        className="text-danger"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    {
      title: "Currency",
      href: "javascript:;",
      icon: icons.delve,
      subs: [
        {
          title: "Exotic Currency",
          href: "javascript:;",
          icon: icons.delve,
        },
      ],
    },
    {
      title: "Home",
      href: "/",
      icon: "/images/medbell.png",
    },
    {
      title: "Home",
      href: "/",
      icon: "/images/delve.png",
    },
    {
      title: "Home",
      href: "/",
      icon: "/images/medbell.png",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Icons.logo />
            <p className="p-2 font-serif font-bold text-inherit">Divine Toll</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link className="text-large font-bold" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Icons.currency />
            Currency
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link href="javascript:;">
                <Icons.currency />
                Currency
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              startContent={icons.scale}
              href="/items/delve"
            >
              {/* <Link href="/items/delve">Text</Link> */}
            </DropdownItem>
            <DropdownItem key="usage_metrics" startContent={icons.delve}>
              Usage Metrics
            </DropdownItem>
            <DropdownItem key="production_ready" startContent={icons.flash}>
              Production Ready
            </DropdownItem>
            <DropdownItem key="99_uptime" startContent={icons.server}>
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              //   description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
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
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
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
       */}
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
                href={item.href}
                size="lg"
              >
                <Image
                  src={item.icon}
                  height={32}
                  width={32}
                  alt={item.title}
                />
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
