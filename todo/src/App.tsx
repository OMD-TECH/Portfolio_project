import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Workers from "./components/Workers";
import About from "./components/About";
import Testimonies from "./components/Testimonies";
import Project from "./components/Project/Project";

const App: React.FC = () => {
  return (
    <div className="bg-[#5A0B4D] scroll-smooth">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Project />
      <About />
      <Skills />
      <Testimonies />
      <Workers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
