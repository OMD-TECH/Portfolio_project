import React from "react";
import UI from "../components/Project/ui";
import Web from "../components/Project/web";
import Data from "../components/Project/data";
import Graph from "../components/Project/graph";
import Copy from "../components/Project/copy";

const Projects = () => {
  return (
    <div className="bg-[#5A0B4D]">
      <div className="pt-5">
        <h1 className="text-center font-bold text-4xl pt-5 text-white">
          UI/UX
        </h1>
        <UI active={""} />
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl  pt-8 text-white">
          Web Development
        </h1>
        <Web active={""} />
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl pt-8 text-white">
          Data Analytics
        </h1>
        <Data active={""} />
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl pt-8 text-white">
          Graphics Design
        </h1>
        <Graph active={""} />
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl  pt-8 text-white">
          Copywriting
        </h1>
        <Copy active={""} />
      </div>
    </div>
  );
};

export default Projects;
