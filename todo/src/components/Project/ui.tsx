import React, { FC } from "react";
import ui from "./featured-card-bg-U6K.png";

interface Values {
  active: string;
}

const UI: FC<Values> = (props): JSX.Element => {
  return (
    <div className="grid place-content-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pt-20 pb-10">
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={ui}
            alt="ui"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">UI/UX Design</h1>
            <p>A product for an e-commerce application</p>
          </div>
        </div>
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={ui}
            alt="ui"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">UI/UX Design</h1>
            <p>A product for an e-commerce application</p>
          </div>
        </div>
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={ui}
            alt="ui"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">UI/UX Design</h1>
            <p>A product for an e-commerce application</p>
          </div>
        </div>
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={ui}
            alt="ui"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">UI/UX Design</h1>
            <p>A product for an e-commerce application</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
