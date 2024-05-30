import React from "react";
import figma from "../assets/logos-figma.png";
import html from "../assets/skill-icons-html.png";
import photoshop from "../assets/skill-icons-photoshop.png";
import file from "../assets/vscode-icons-file-type-excel.png";
import react from "../assets/logos-react.png";
import icon from "../assets/skill-icons-xd.png";
import vector from "../assets/vector.png";

const Skills = () => {
  return (
    <div
      className="p-10 md:p-20 place-items-center w-full h-auto border-b grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0"
      id="resume"
    >
      <div className="auto-group-xd">
        <img className="skill-icons-xd-RMy" src={icon} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex justify-between items-center g-1">
          <img
            width="80rem"
            height="80rem"
            className="logos-figma-W23"
            src={figma}
          />
          <img
            width="80rem"
            height="80rem"
            className="skill-icons-photoshop-SgP"
            src={photoshop}
          />
          <img
            width="80rem"
            height="80rem"
            className="logos-react-cDV"
            src={react}
          />
        </div>
        <div className="auto-group-two">
          <img
            width="80rem"
            height="80rem"
            className="skill-icons-html-dPV"
            src={html}
          />
          <img
            width="80rem"
            height="80rem"
            className="vscode-icons-file-type-excel-NM5"
            src={file}
          />
        </div>
      </div>
      <div className="logos-javascript-fqy">
        <img className="vector-bDq" src={vector} />
      </div>
      <div className="auto-group-rxyy-jaw">
        <div className="hadline-arT">
          <p className="border"></p>
          <div className="header-group-ts9">
            <p className="my-skills-cHM">MY SKILLS</p>
            <p className="language-and-tools-XfD">Language and Tools</p>
          </div>
          <p className="loremmmm">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
