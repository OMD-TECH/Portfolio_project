import React from "react";
import ph from "../assets/ph-phone-fill.png";
import contact from "../assets/get-touch-concept-illustration114360-2586-1.png";
import effect1 from "../assets/effect.png";
import effect2 from "../assets/polygon-1-qvP.png";
import email from "../assets/dashicons-email-alt.png";

const Contact = () => {
  return (
    <div className="w-full h-auto bg-white p-5 sm:p-10 md:p-20" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="grid place-content-center relative">
          <img className="h-auto w-full z-20" src={contact} />
          <img
            className="w-[20%] absolute top-0 left-0 ml-[-40px] mt-[-70px] z-30"
            src={effect1}
          />
          <img
            className="w-[20%] absolute bottom-0 left-0 mb-[-40px] ml-[-50px] z-30"
            src={effect1}
          />
          <img
            className="w-[20%] absolute top-0 right-0 -mt-[40px] -mr-[50px] z-10"
            src={effect2}
          />
        </div>
        <div className="flex flex-col g-4">
          <div className="text-[#181D36] font-bold">
            <p>CONTACT ME</p>
            <p className="text-2xl">Drop A Message</p>
          </div>
          <p className="text-[#181D36] my-2">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum.
          </p>
          <div>
            <div className="flex gap-4 items-center justify-start">
              <img
                className="w-4 h-4"
                src="https://img.icons8.com/?size=100&id=7690&format=png&color=5a0b4d"
              />
              <p className="text-[#181D36]">Phone number</p>
            </div>
            <div className="flex gap-4 items-center justify-start">
              <img
                className="w-4 h-4"
                src="https://img.icons8.com/?size=100&id=7690&format=png&color=5a0b4d"
              />
              <p className="text-[#181D36]">example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
