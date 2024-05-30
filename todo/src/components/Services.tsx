import React from "react";
import { servicesData } from "../utils/headerData";

const Services = () => {
  const data = [
    "CREATIVITY AND INNOVATION",
    "QUALITY CLIENT SATISFICATION",
    "GOAL ORIENTED",
  ];

  return (
    <div
      className="bg-[#F5F9FD] w-full h-auto p-5 sm:p-10 md:p-20 grid place-content-center border-b"
      id="services"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center p-2">
        <div className="md:col-span-2 col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((item) => (
            <div
              className="w-full h-auto flex items-center justify-center flex-col shadow-lg rounded-xl my-4 p-4 hover:rotate-45 transform duration-700 cursor-pointer"
              style={{
                backgroundColor: "#E4EEFA",
                backgroundPosition: "center",
              }}
              key={item.id}
            >
              <div className="bottom-0 text-white m-3">
                <img
                  width="50"
                  height="50"
                  src={item.bgImg}
                  alt="design-icon"
                  className="p-1.5 rounded-full bg-[#CBDFF6]"
                />
                <p className="font-semibold text-2xl text-[#181D36] m-2">
                  {item.title}
                </p>
                <p className="text-[1rem] text-[#181D36]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <div className="group-8-5Fm">
            <div className="hadline-VKV">
              <div className="header-group-SkX">
                <p className="border"></p>
                <p className="text-[#181D36] font-bold">WHAT WE GIVE</p>
                <p className="text-[#181D36] my-3 mx-0 font-bold text-3xl">
                  Better Tech Solutions
                </p>
                <p className="text-[#181D36] my-3 mx-0 font-bold text-3xl">
                  Better Experiences
                </p>
              </div>
            </div>
            <div className="frame-4-kej ">
              {data.map((item) => (
                <div className="flex items-center gap-2 my-3 mx-0">
                  <img
                    className="w-4"
                    alt="/j"
                    src="https://img.icons8.com/?size=100&id=7690&format=png&color=5a0b4d"
                  />
                  <p className="text-[#181D36] font-bold text-xs tracking-wider">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
