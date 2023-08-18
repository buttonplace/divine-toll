import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className=" top-0 left-0 h-screen w-24 m-0 flex flex-col items-center bg-stone-800 mt-3 mr-2">
      <SideBarIcon icon={"/scarab.png"} />
      <SideBarIcon icon={"/currency.png"} />
      <SideBarIcon icon={"/essence.png"} />
      <SideBarIcon icon={"/fossil.png"} />
      <SideBarIcon icon={"/fragment.png"} />
      <SideBarIcon icon={"/oil.png"} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return (
    <div className="sidebarIcon group flex flex-col ">
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
