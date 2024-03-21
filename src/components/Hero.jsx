import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../img/hero.png";
import Autowriting from "./Autowriting";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 75, // animation duration
      once: false, // whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div id="Home" className="mt-14 lg:mx-72">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-0">
        <div className="flex flex-col justify-center">
          <div className="bg-gray-50 dark:bg-gray-900 dark:text-white flex flex-col items-center lg:items-start lg:gap-y-4">
            <h2
              className="font-bold text-[27px] lg:text-4xl lg:text-left"
              data-aos="fade-down"
            >
              Hello, It's <span className="text-violet-300">Me</span>
            </h2>
            <h1
              className="font-extrabold mt-2 text-[35px] text-center lg:text-5xl lg:text-left lg:mt-0"
              data-aos="fade-right"
            >
              APU <span className="text-violet-500">SIKDER</span>
            </h1>
            <p
              className="font-extrabold mt-4 text-[25px] text-center lg:text-2xl lg:text-left lg:mt-0 flex flex-1"
              
            >
              And I'M A- {" "}
              <span className="text-blue-600"> <Autowriting/></span>
            </p>
            
          </div>
        </div>
        <div
          className="flex justify-center items-center mt-20"
          data-aos="zoom-in"
        >
          <img
            className="rounded-full shadow-lg shadow-blue-500 h-[300px] lg:h-[400px] hover:scale-110 lg:hover:scale-125 duration-500 hover:shadow-yellow-300"
            src={hero}
            alt="hero"
          />
        </div>
        <div className=" text-sm font-light mx-10 text-black dark:text-slate-100 mt-16 text-center lg:text-xl lg:-mt-32 lg:-ml-9" data-aos="fade-up">
          I break down complex user experinece problems to create integritiy
          focussed solutions that connect billions zdfgfgfdgdfof people
        </div>
      </div>
    </div>
  );
};

export default Hero;
