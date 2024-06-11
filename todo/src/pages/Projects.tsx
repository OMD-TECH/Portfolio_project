import React from "react";
import UI from "../components/Project/ui";
import Web from "../components/Project/web";
import Data from "../components/Project/data";
import Graph from "../components/Project/graph";
import Copy from "../components/Project/copy";

const Projects = () => {
  return (
    <div className="bg-[#5A0B4D]">
      <h1 className="text-center font-bold text-2xl pt-8">UI/UX</h1>
      <UI active={""} />
      <h1 className="text-center font-bold text-2xl">Web Development</h1>
      <Web active={""} />
      <h1 className="text-center font-bold text-2xl">Data Analytics</h1>
      <Data active={""} />
      <h1 className="text-center font-bold text-2xl">Graphics Design</h1>
      <Graph active={""} />
      <h1 className="text-center font-bold text-2xl">Copywriting</h1>
      <Copy active={""} />
    </div>
  );
};

export default Projects;
