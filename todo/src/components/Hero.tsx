import React from "react";
import hero from "../assets/dedicated-team-abstract-concept-vector-illustration107173-28611-1.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col lg:flex-row justify-between items-start p-5 sm:p-10 md:p-12 gap-10 md:gap-5 border-b"
    >
      <div className="font-bold flex flex-col justify-start items-start gap-6 md:gap-10">
        <p className="text-2xl text-white">Welcome to</p>
        <p className="text-3xl md:text-6xl text-white">OMD</p>
        <p className="text-3xl md:text-6xl text-white">TECHNOLOGIES</p>
        <p className="text-2xl text-white">Technological Service Provider</p>
        <div className="relative text-[#5A0B4D] bg-white py-3 px-6 rounded-xl tracking-wide md:mt-[1rem]">
          Get in Touch
          <span className="absolute top-0 right-0 -m-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white "></span>
          </span>
        </div>
      </div>
      <img
        src={hero}
        alt="hero"
        className="rounded-tr-[2rem] rounded-bl-[2rem] h-auto w-full lg:w-1/2"
      />
    </div>
  );
};

export default Hero;
