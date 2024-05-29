import React from "react";
import hero from "../assets/dedicated-team-abstract-concept-vector-illustration107173-28611-1.png";
import effect1 from "../assets/effect.png";
import effect2 from "../assets/polygon-1-qvP.png";
import link1 from "../assets/bxl-upwork-xAK.png";
import link2 from "../assets/mdi-github.png";
import link3 from "../assets/ic-baseline-facebook-D35.png";
import link4 from "../assets/mdi-twitter-qJf.png";
import link5 from "../assets/mdi-linkedin-tjH.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20 gap-10 border-b">
      <div className="font-bold flex flex-col justify-start items-start gap-10">
        <p className="text-2xl text-white">Welcome to</p>
        <p className="text-6xl text-white">OMD</p>
        <p className="text-6xl text-white">TECHNOLOGIES</p>
        <p className="text-2xl text-white">Technological Service Provider</p>
        <div className="relative text-[#5A0B4D] bg-white py-3 px-6 rounded-xl tracking-wide mt-[1rem]">
          Get in Touch
          <span className="absolute top-0 right-0 -m-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white "></span>
          </span>
        </div>
      </div>
      <div className="relative">
        <img
          src={hero}
          alt="hero"
          className="rounded-tr-[2rem] rounded-bl-[2rem] w-full md:w-[80%]"
        />
        <img
          alt="eff"
          className="absolute top-0"
          height={100}
          width={100}
          src={effect1}
        />
        <img
          alt="eff"
          className="absolute top-0 right-14"
          height={100}
          width={100}
          src={effect1}
        />
        <img
          alt="eff"
          className="absolute bottom-0"
          height={100}
          width={100}
          src={effect2}
        />
        <div className="absolute top-20 right-14 flex justify-center items-center flex-col gap-5">
          <img alt="eff" className="h-5 w-5" src={link1} />
          <img alt="eff" className="h-5 w-5" src={link2} />
          <img alt="eff" className="h-5 w-5" src={link3} />
          <img alt="eff" className="h-5 w-5" src={link4} />
          <img alt="eff" className="h-5 w-5" src={link5} />
          <p className="mr-[0.2rem] max-w-[2.8rem] font-bold text-[#8088a5] text-nowrap mt-[3rem] -rotate-90">
            Follow Me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
