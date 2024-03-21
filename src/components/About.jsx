import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import under from "../img/under.png";
import hero from '../img/hero.png'

const About = () => {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 150;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  return (
    <div id="About" className="mt-24 mx-10 lg:mx-auto lg:w-3/4" data-aos="zoom-in-up">
      <h2 className="font-serif -mb-3 text-3xl text-center">
        About <span className="text-blue-700">ME</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-auto items-center justify-center my-20">
        <div className="flex items-start justify-center"data-aos="zoom-in-up">
        <img
            className="rounded-full shadow-2xl h-[250px] lg:h-[300px] hover:scale-110 lg:hover:scale-125 duration-500 hover:shadow-blue-500"
            src={hero}
            alt="hero"
          />
        </div>
        <div className="flex items-center justify-center mt-5 lg:mt-0">
          <div className="">
            <div className="flex items-start justify-start" data-aos="zoom-in-up">
              <p className="font-light mt-6 text-gray-800 justify-start text-[15px] lg:text-[18px] text-center dark:text-gray-200 lg:text-left">
                Hello! I'm Apu Sikder. Web Developer with over 1 years of
                experience. Experienced with all stages of the development cycle
                for dynamic web projects. Having an in-depth knowledge including
                advanced HTML5, CSS3, JavaScript, React, node, express, tailwind
                CSS, framer motion. Strong background in management and
                leadership.
              </p>
            </div>
            <div className=" items-center justify-start  mt-4"data-aos="zoom-in-up">
              <img src={under} alt="under" />
            </div>
            <div className="flex flex-col lg:flex-col mt-2 lg:mt-5 lg:ml-4 items-start justify-start"data-aos="zoom-in-up">
              <p className="flex font-sans items-center justify-start text-gray-600 dark:text-gray-300 my-2">
                <FaLocationDot />
                <span className="mx-4">Dhaka, Bangladesh</span>
              </p>
              <p className="flex font-sans items-center justify-start text-gray-600 dark:text-gray-300 my-2">
                <BsTelephoneOutboundFill />
                <span className="mx-4">01909280740</span>
              </p>
              <p className="flex font-sans items-center justify-start text-gray-600 dark:text-gray-300">
                <MdMarkEmailUnread />
                <span className="mx-4">apusikder750@gmail.com</span>
              </p>
            </div>
            <div className="mt-8 flex items-center justify-center"data-aos="zoom-in-up">
              <button
                className="dark:bg-gray-300 bg-gray-400 my-4 shadow-yellow-300 hover:shadow-blue-500 text-blue-800 shadow-lg dark:shadow-gray-100 h-11 w-[150px] text-lg font-bold rounded-xl hover:scale-110 duration-300 "
                onClick={() => scrollTo("Contact")}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
