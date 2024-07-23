import React, { useState } from "react";
import UI from "./ui";
import Web from "./web";
import Data from "./data";
import Graph from "./graph";
import Copy from "./copy";
import arrow from "./maki-arrow.png";
import { Link } from "react-router-dom";

const Project = () => {
  const [active, setActive] = useState("ui");

  const goToPage = () => {
    window.location.href = "/projects";
  };

  const handleClick = (value: string) => {
    setActive(value);
  };

  return (
    <div
      className="py-16 px-5 sm:px-10 md:px-24 w-full h-auto flex flex-col"
      id="projects"
    >
      <div className="w-full h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white">
          <div className="mr-0 mb-8 lg:mb-0 lg:mr-28">
            <h1 className="text-white font-bold">MY WORKS</h1>
            <h1 className="font-bold text-3xl">My Recent Projects</h1>
            <p className="text-white">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum.
            </p>
          </div>
          <div className="hidden font-bold  md:flex items-end justify-between gap-2 text-[1rem] item-container">
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("ui")}
            >
              UI/UX
            </p>
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("web")}
            >
              Website Dev.
            </p>
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("data")}
            >
              Data Analysis
            </p>
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("graph")}
            >
              Graphic Design
            </p>
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("copy")}
            >
              Copywriting
            </p>
          </div>
          <div className="font-bold flex md:hidden items-end justify-between gap-2 text-[1rem] item-container ">
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("ui")}
            >
              UI/UX
            </p>
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("web")}
            >
              Website Dev.
            </p>
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("data")}
            >
              Data Analysis
            </p>
            <p
              className="cursor-pointer items"
              onClick={() => handleClick("graph")}
            >
              Graphic Design
            </p>
            <p
              className="cursor-pointer items"
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
        <Link
          to="/projects"
          className="text-white font-bold flex items-center justify-center gap-4"
          onClick={goToPage}
        >
          <p className="hover:cursor-pointer hover:text-[#f7b6ca] transition-colors duration-300 ease-in-out">
            See All Projects
          </p>
          <img className="w-6" src={arrow} />
        </Link>
      </div>
    </div>
  );
};

export default Project;
