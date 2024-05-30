import React from "react";
import check from "../assets/mingcute-check-fill-D5q.png";
import college from "../assets/college-project-concept-illustration114360-13751-1.png";
import effect1 from "../assets/effect.png";
import effect2 from "../assets/polygon-1-qvP.png";

const About = () => {
  return (
    <div
      className="w-full h-auto bg-white text-[#181D36] p-5 sm:p-10 md:p-24"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center my-8 mx-auto">
        <div className="w-full">
          <div className="h2-copy">
            <div>
              <p className="border"></p>
              <p className="text-[#181D36] font-bold">ABOUT US</p>
            </div>
            <p className="text-[#181D36]">
              Welcome to our vibrant community of creative minds! We are a
              diverse group of professionals including graphic designers,
              website developers, data analysts, copywriters, video editors,
              UI/UX designers etc. Together, we collaborate to bring your
              visions to life, crafting engaging and innovative solutions that
              captivate audiences and drive results. Join us on this exciting
              journey of creativity and collaboration.
            </p>
            <div className="frame-4-7L3">
              <div className="text-[#181D36]">
                <div className="frame">
                  <img
                    className="mingcute-check-fill"
                    src="https://img.icons8.com/?size=100&id=7690&format=png&color=5a0b4d"
                  />
                  <p className="problem-solving">Problem Solving</p>
                </div>
                <div className="frame">
                  <img
                    className="mingcute-check-fill"
                    src="https://img.icons8.com/?size=100&id=7690&format=png&color=5a0b4d"
                  />
                  <p className="creative">Creative </p>
                </div>
                <div className="frame">
                  <img
                    className="mingcute-check-fill"
                    src="https://img.icons8.com/?size=100&id=7690&format=png&color=5a0b4d"
                  />
                  <p className="high-quality">High Quality</p>
                </div>
                <div className="frame">
                  <img
                    className="mingcute-check-fill"
                    src="https://img.icons8.com/?size=100&id=7690&format=png&color=5a0b4d"
                  />
                  <p className="highly-motivated">Highly Motivated</p>
                </div>
              </div>
            </div>
            <div className="bg-[#5A0B4D] text-white font-bold grid place-content-center p-3 w-[180px] rounded-xl cursor-pointer">
              Download CV
            </div>
          </div>
        </div>
        <div className="grid place-content-center relative">
          <img className="h-auto w-full z-20" src={college} />
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
      </div>
    </div>
  );
};

export default About;
