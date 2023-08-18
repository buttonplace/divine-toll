import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="bg-stone-800">
        <div className="flex justify-around">
          <span className="flex item-center pb-0 pt-6 text-center text-7xl font-semibold drop-shadow-xl tracking-tighter text-stone-950">
            Divine{" "}
            <Image
              height={360}
              width={360}
              className="h-16 w-16 drop-shadow-3w"
              src="/medbell.png"
              alt="Divine Toll Logo"
            />{" "}
            Toll
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
