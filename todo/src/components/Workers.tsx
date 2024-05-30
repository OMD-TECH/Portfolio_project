import React, { useState } from "react";
import { workersData } from "../utils/headerData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Workers = () => {
  let [currentId, setCurrentId] = useState(0);

  if (currentId === 4) {
    setCurrentId(0);
  }
  if (currentId === -1) {
    setCurrentId(3);
  }

  const handleCurrentId = () => {
    setCurrentId(currentId++);
  };
  const handleCurrentIdNeg = () => {
    setCurrentId(currentId--);
  };

  let currentObject = workersData[currentId];

  return (
    <div
      className="h-auto w-full p-5 sm:p-10 md:p-24 flex justify-center items-center border-t flex-col relative"
      id="workers"
    >
      <h1 className="font-bold text-white text-3xl my-16">Workers</h1>
      <div className="flex justify-center items-center">
        {currentObject && (
          <div
            key={currentObject.id}
            className="bg-white flex flex-col justify-center items-center rounded-xl relative w-full md:w-3/4 p-10 md:p-16 xl:p-20"
          >
            <img
              src={currentObject.avatar}
              alt="/avatar"
              className="rounded-full p-3 h-40 w-40 object-cover"
            />
            <p className="pt-6 md:pt-0">{currentObject.desc}</p>
            <h3 className="font-bold my-4 md:my-8">{currentObject.name}</h3>
            <p>{currentObject.skill}</p>
          </div>
        )}
      </div>

      <div
        className="rounded-full p-5 font-bold bg-white text-white absolute right-10 top-[30%] md:top-[50%] cursor-pointer"
        onClick={handleCurrentId}
      >
        <FaArrowRight
          size={35}
          color="#5A0B4D"
          className="cursor-pointer"
          onClick={handleCurrentId}
        />
      </div>
      <div
        className="rounded-full p-5 font-bold bg-white text-white absolute left-10 top-[30%] md:top-[50%] cursor-pointer"
        onClick={handleCurrentIdNeg}
      >
        <FaArrowLeft
          size={35}
          color="#5A0B4D"
          className="cursor-pointer"
          onClick={handleCurrentIdNeg}
        />
      </div>
    </div>
  );
};

export default Workers;
