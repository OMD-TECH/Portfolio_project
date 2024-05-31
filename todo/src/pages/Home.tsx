import React from "react";

import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Workers from "../components/Workers";
import About from "../components/About";
import Testimonies from "../components/Testimonies";
import Project from "../components/Project/Project";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <div className="bg-[#5A0B4D] scroll-smooth">
      <Hero />
      <Clients />
      <Services />
      <Project />
      <About />
      <Skill />
      <Testimonies />
      <Workers />
      <Contact />
    </div>
  );
};

export default Home;
