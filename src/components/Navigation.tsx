"use client"
import React from 'react'
import {  Navbar,  DropdownTrigger, DropdownItem, DropdownMenu, NavbarBrand, Button,  NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Dropdown} from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons";
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter()

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={undefined} width={undefined} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={undefined} width={undefined} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={undefined} width={undefined} />,
  };
  return (
    <Navbar>
    <NavbarBrand>
      <Image src="/medbell.png" alt="Divine Toll logo" height={32} width={32}/>
      <p className="font-bold text-inherit">Divine Toll</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/table">Table View</Link>
    </NavbarItem>
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent text-md data-[hover=true]:bg-transparent"
              endContent={icons.chevron}
              radius="sm"
              variant="light"
            >
              Stash View
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="Stash View"
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
          onAction={(key) => router.push("/stash/"+key)}
        >
          <DropdownItem
            key="scarab"
            startContent={<Image src="/scarab.png" alt="scarab" width={32} height={32}/>}
          >
            Scarabs
          </DropdownItem>
          <DropdownItem
            key="currency"
            startContent={<Image src="/currency.png" alt="currency" width={32} height={32}/>}
          >
            Currency
          </DropdownItem>
          <DropdownItem
            key="essence"
            startContent={<Image src="/essence.png" alt="essence" width={32} height={32}/>}
          >
            Essences
          </DropdownItem>
          <DropdownItem
            key="fossil"
            startContent={<Image src="/fossil.png" alt="delve" width={32} height={32}/>}
          >
            Delve
          </DropdownItem>
          <DropdownItem
            key="oil"
            startContent={<Image src="/oil.png" alt="oil" width={32} height={32}/>}
          >
            Oils
          </DropdownItem>
          <DropdownItem
            key="fragment"
            startContent={<Image src="/fragment.png" alt="fragment" width={32} height={32}/>}
          >
            Fragments
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <NavbarItem>
        <Link href="#" aria-current="page" className='text-md'>
          About
        </Link>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  )
}




export default Navigation;
