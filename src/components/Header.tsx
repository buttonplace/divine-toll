import React from "react";
import Navigation from "./Navigation";
import NavigationTitle from "./NavigationTitle";

const Header = () => {
  return (
    <div className="flex flex-1 justify-between">
      <NavigationTitle />
      <Navigation />
    </div>
  );
};

export default Header;
