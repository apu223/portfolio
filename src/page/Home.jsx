import React from "react";
import Hero from "../components/Hero";
import SocalMedia from "../components/SocalMedia";
import MyExprience from "../components/MyExprience";
import MySkill from "../components/MySkill";
import MyWork from "../components/MyWork";
import Contact from "../components/Contact";
import Service from "../components/Service";
import WorkProcc from "../components/WorkProcc";
import Blog from "../components/Blog";
import About from "../components/About";
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Hero />
      <SocalMedia />
      <MyExprience />
      <Service />
      <About />
      <MySkill />
      <WorkProcc />
      <MyWork />
      <Blog />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
