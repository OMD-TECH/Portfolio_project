import React from "react";
import employee from "../assets/clarity-employee-group-solid.png";
import work from "../assets/ic-baseline-work-history.png";
import completed from "../assets/fluent-mdl2-completed-solid.png";

const Clients = () => {
  const items = [
    {
      id: 1,
      top: "20 happy",
      bottom: "clients",
      icon: employee,
    },
    {
      id: 2,
      top: "5 years",
      bottom: "of experience",
      icon: work,
    },
    {
      id: 3,
      top: "20 projects",
      bottom: "completed",
      icon: completed,
    },
  ];
  return (
    <div className="py-10 md:py-20 px-5 sm:px-10 md:px-32 border-b">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 font-bold text-white text-2xl place-items-start">
        <div className="flex justify-center items-center gap-3">
          <div className="">
            <p className="">CLIENT</p>
            <p className="">BENEFITS</p>
          </div>
        </div>
        {items.map((item) => (
          <div key={item.id} className="flex justify-center items-center gap-3">
            <img className="h-8 w-8 animate-pulse" src={item.icon} />
            <div className="">
              <p className="">{item.top.toUpperCase()}</p>
              <p className="">{item.bottom.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Clients;
