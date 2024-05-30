import React from "react";
import fill from "../assets/ph-flow-arrow-fill.png";

const Testimonies = () => {
  return (
    <div className="w-full h-auto py-10 md:py-20 px-10 md:px-16 grid place-items-center borber-b border-white">
      <div className="flex items-start justify-between flex-col md:flex-row gap-16">
        <div className="grid place-content-center">
          <div className="relative my-8 h-[370px] w-[550px]">
            <div className="absolute top-0 left-0 h-[370px] w-[550px] bg-white rotate-12 opacity-40 rounded-3xl"></div>
            <div className="absolute top-0 left-0 transform-none h-[370px] w-[550px] p-10 bg-white rounded-3xl text-[#5A0B4D]">
              <p className="">
                “lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem em ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum.lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum.lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum.lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem”
              </p>
              <h1 className="font-bold text-3xl my-2 mx-auto">Johnny Adnan</h1>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col justify-start p-2 items-start">
          <div className="font-bold ">
            <p className="border"></p>
            <p className="text-[1rem]">TRUSTED BY CLIENTS</p>
            <p className="text-2xl">What My Clients Say</p>
          </div>
          <img className="ph-flow-arrow-fill-wy9" src={fill} />
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
