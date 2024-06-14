import React, { FC } from "react";
import web from "./featured-card-bg-p9D.png";

interface Values {
  active: string;
}

const Web: FC<Values> = (props): JSX.Element => {
  return (
    <div className="grid place-content-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pt-20 pb-10">
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={web}
            alt="web"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">Web Development</h1>
            <p>An ecommerce website for buying and selling products online.</p>
          </div>
        </div>
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={web}
            alt="web"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">Web Development</h1>
            <p>An ecommerce website for buying and selling products online.</p>
          </div>
        </div>
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={web}
            alt="web"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">Web Development</h1>
            <p>An ecommerce website for buying and selling products online.</p>
          </div>
        </div>
        <div className="h-[400px] w-[300px] sm:w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in card">
          <img
            src={web}
            alt="web"
            className="rounded-t-2xl h-[60%] w-full object-cover"
          />
          <div className="p-8">
            <h1 className="font-bold text-2xl">Web Development</h1>
            <p>An ecommerce website for buying and selling products online.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
