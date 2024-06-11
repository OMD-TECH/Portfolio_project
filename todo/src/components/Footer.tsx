import React from "react";
import logo from "../assets/omd.png";
import linkedin from "../assets/mdi-linkedin.png";
import twitter from "../assets/mdi-twitter.png";
import fb from "../assets/ic-baseline-facebook.png";
import github from "../assets/mdi-github-pmd.png";
import upwork from "../assets/bxl-upwork.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#5A0B4D] sm:p-5 p-2.5 md:p-10 w-full h-auto flex items-center justify-between flex-col gap-5 md:gap-0 md:flex-row">
      <img className="object-cover h-24 w-24" src={logo} alt="i" />
      <div className="flex items-center justify-center flex-col md:flex-row gap-4">
        <p className="text-white text-nowrap font-bold">Follow Us</p>
        <div className="flex items-center justify-between gap-4">
          <Link to="" target="_blank">
            <img className="w-8" alt="i" src={linkedin} />
          </Link>
          <Link
            to="https://x.com/omd_tech?t=nRuAS2GNFx0_5THQIKx7wg&s=09"
            target="_blank"
          >
            <img className="w-8" alt="i" src={twitter} />
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100095420350226"
            target="_blank"
          >
            <img className="w-8" alt="i" src={fb} />
          </Link>
          <Link to="https://github.com/OMD-TECH" target="_blank">
            <img className="w-8" alt="i" src={github} />
          </Link>
          <Link to="" target="_blank">
            <img className="w-8" alt="i" src={upwork} />
          </Link>
        </div>
      </div>
      <button className="text-[#5A0B4D] bg-white py-3 px-6 rounded-xl md:mr-4">
        Admin Sign In
      </button>
    </div>
  );
};

export default Footer;
