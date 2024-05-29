import React from "react";
import { headerData } from "../utils/headerData";
import logo from "../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center">
        <img className="object-cover h-20 w-20" src={logo} alt="/logo" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
          {headerData.map((item) => (
            <AnchorLink key={item.id} href={item.url}>
              {item.title}
            </AnchorLink>
          ))}
        </div>
        <button className="text-[#5A0B4D] bg-white py-3 px-6 rounded-xl mb-4 md:mr-4">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
