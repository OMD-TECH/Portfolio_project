import React from "react";
import { workersData } from "../utils/headerData";

const Workers = () => {
  return (
    <div
      className="h-auto w-full p-10 md:p-24 flex justify-center items-center border-t flex-col"
      id="workers"
    >
      <h1 className="font-bold text-white text-3xl mb-20">Workers</h1>
      <div className="flex justify-center items-center">
        {workersData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl relative w-3/4 p-10 md:p-20"
          >
            <p className="pt-4 md:pt-0">{item.desc}</p>
            <h3 className="font-bold my-4 md:my-8">{item.name}</h3>
            <p>{item.skill}</p>
            <img
              src={item.avatar}
              alt="/avatar"
              className="absolute top-[-25%] right-[25%] md:-top-[25%] md:-right-20 rounded-full p-3 h-40 w-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workers;
