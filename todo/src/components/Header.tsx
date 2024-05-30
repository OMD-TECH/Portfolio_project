import React, { useState } from "react";
import { headerData } from "../utils/headerData";
import logo from "../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
//import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const onhandleNavbar = () => {
    setNavbar(!navbar);
    if (navbar) {
      setNavbar(false);
      // enablePageScroll();
    } else {
      setNavbar(true);
      // disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!navbar) return;
    // enablePageScroll();
    setNavbar(false);
  };

  return (
    <div className="w-full border-b">
      <div
        className={
          navbar
            ? `flex flex-row md:flex-row justify-between md:justify-between items-center`
            : `flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center`
        }
      >
        <img className="object-cover h-20 w-20" src={logo} alt="/logo" />
        <div
          className={
            navbar
              ? `hidden`
              : `flex flex-col md:flex-row justify-center items-center gap-8 text-white`
          }
        >
          {headerData.map((item) => (
            <AnchorLink key={item.id} href={item.url} onClick={handleClick}>
              {item.title}
            </AnchorLink>
          ))}
        </div>
        <button
          className={
            navbar
              ? `hidden`
              : `text-[#5A0B4D] bg-white py-3 px-6 rounded-xl mb-4 md:mb-0 md:mr-4`
          }
        >
          Resume
        </button>
        {navbar && (
          <button className="mr-4" onClick={onhandleNavbar}>
            OPEN
          </button>
        )}
        {!navbar && (
          <button className="block md:hidden" onClick={onhandleNavbar}>
            CLOSE
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
