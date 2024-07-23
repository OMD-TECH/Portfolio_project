import React, { useState } from "react";
import { headerData } from "../utils/headerData";
import logo from "../assets/omd.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
//import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const onhandleNavbar = () => {
    setNavbar(!navbar);
  };

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="w-full border-b bg-[#5A0B4D]">
      <div className={`hidden md:flex justify-between items-center`}>
        <img className="object-cover h-24 w-24" src={logo} alt="/logo" />
        <div className={`flex justify-center items-center gap-8 text-white`}>
          {headerData.map((item) => (
            <AnchorLink
              className="nav-link"
              key={item.id}
              href={item.url}
              onClick={handleClick}
            >
              {item.title}
            </AnchorLink>
          ))}
        </div>
        <button
          className={`text-[#5A0B4D] bg-white py-3 px-6 rounded-xl mb-4 md:mb-0 md:mr-4`}
        >
          Resume
        </button>
      </div>
      <div
        className={
          navbar
            ? `md:hidden flex justify-between items-center`
            : "md:hidden flex justify-between flex-col items-center transform ease-in-out duration-500 h-screen"
        }
      >
        <img className="object-cover h-24 w-24" src={logo} alt="/logo" />
        <div
          className={
            !navbar
              ? `flex flex-col justify-center items-center gap-8 text-white`
              : "hidden"
          }
        >
          {headerData.map((item) => (
            <AnchorLink
              key={item.id}
              className="nav-link"
              href={item.url}
              onClick={handleClick}
            >
              {item.title}
            </AnchorLink>
          ))}
          <button
            className={`text-[#5A0B4D] bg-white py-3 px-6 rounded-xl mb-4 md:mb-0 md:mr-4`}
          >
            Resume
          </button>
        </div>
        {navbar ? (
          <FaBars
            color="white"
            size={35}
            className="mr-4 cursor-pointer"
            onClick={onhandleNavbar}
          />
        ) : (
          <AiOutlineClose
            size={35}
            color="white"
            className="mb-4 cursor-pointer"
            onClick={onhandleNavbar}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
