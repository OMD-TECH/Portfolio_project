import React, { useState } from "react";
import UI from "./ui";
import Web from "./web";
import Data from "./data";
import Graph from "./graph";
import Copy from "./copy";
import arrow from "./maki-arrow.png";

const Project = () => {
  const [active, setActive] = useState("ui");

  const handleClick = (value: string) => {
    setActive(value);
  };

  return (
    <div className="py-16 px-24 w-full h-auto flex flex-col" id="projects">
      <div className="w-full h-auto">
        <div className="grid grid-cols-2 text-white">
          <div className="mr-32">
            <h1 className="text-white font-bold">MY WORKS</h1>
            <h1 className="font-bold text-3xl">My Recent Projects</h1>
            <p className="text-white">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum.
            </p>
          </div>
          <div className="font-bold flex items-end justify-between gap-2 text-[1rem]">
            <p
              className="cursor-pointer hover:blur-[1px]"
              onClick={() => handleClick("ui")}
            >
              UI/UX
            </p>
            <p
              className="cursor-pointer hover:blur-[1px]"
              onClick={() => handleClick("web")}
            >
              Website Dev.
            </p>
            <p
              className="cursor-pointer hover:blur-[1px]"
              onClick={() => handleClick("data")}
            >
              Data Analysis
            </p>
            <p
              className="cursor-pointer hover:blur-[1px]"
              onClick={() => handleClick("graph")}
            >
              Graphic Design
            </p>
            <p
              className="cursor-pointer hover:blur-[1px]"
              onClick={() => handleClick("copy")}
            >
              Copywriting
            </p>
          </div>
        </div>
        {active === "ui" && <UI active={active} />}
        {active === "web" && <Web active={active} />}
        {active === "data" && <Data active={active} />}
        {active === "graph" && <Graph active={active} />}
        {active === "copy" && <Copy active={active} />}
        <div className="text-[#ea789d] font-bold flex items-center justify-center gap-4">
          <p className="hover:cursor-pointer hover:text-[#f7b6ca] transition-colors duration-300 ease-in-out">
            See All Projects
          </p>
          <img className="w-6" src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Project;
