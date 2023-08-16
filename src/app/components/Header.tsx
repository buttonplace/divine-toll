import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="bg-stone-800 text-blue-600">
        <div className="flex justify-around">
          {/* <span className="flex items-center bg-stone-700 pb-2 pt-5 text-center text-5xl font-extrabold text-stone-950"> */}
          <span className="flex item-center pb-2 pt-5 text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
            Divine{" "}
            <Image
              height={360}
              width={360}
              className="h-16 w-16 animate-pulse duration-500"
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
