import React from "react";
import Image from "next/image";

type BarProps = {
  handleClick: Function;
};

const Sidebar = ({ handleClick }: BarProps) => {
  return (
    <div className=" top-0 left-0 h-screen w-24 m-0 flex flex-col items-center bg-stone-800 mt-3 mr-2">
      <SideBarIcon
        link={"scarab"}
        handleClick={handleClick}
        icon={"/scarab.png"}
      />
      <SideBarIcon
        link={"currency"}
        handleClick={handleClick}
        icon={"/currency.png"}
      />
      <SideBarIcon
        link={"essence"}
        handleClick={handleClick}
        icon={"/essence.png"}
      />
      <SideBarIcon
        link={"fossil"}
        handleClick={handleClick}
        icon={"/fossil.png"}
      />
      <SideBarIcon
        link={"fragment"}
        handleClick={handleClick}
        icon={"/fragment.png"}
      />
      <SideBarIcon link={"oil"} handleClick={handleClick} icon={"/oil.png"} />
    </div>
  );
};

type Props = {
  icon: string;
  handleClick: Function;
  link: string;
};

const SideBarIcon = ({ icon, link, handleClick }: Props) => {
  return (
    <div
      onClick={(e) => handleClick(e, link)}
      className="sidebarIcon group flex flex-col "
    >
      <Image
        className="self-center"
        alt="qq"
        src={icon}
        width={56}
        height={56}
      />
      <span className="sidebarTooltip group-hover:scale-100">Text</span>
    </div>
  );
};

export default Sidebar;
