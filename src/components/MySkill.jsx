import React, { useRef } from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import node from "../img/node.png";
import react from "../img/react.png";
import express from "../img/express.png";
import Prohh from "./Prohh";

const MySkill = () => {
  // Create refs for each image

  return (
    <div className="lg:mt-48">
      <div className="mx-3 justify-center items-center dark:bg-gray-900 my-16">
        <div
          className="text-[34px] text-center font-bold text-sky-400 mx-10 ease-in-out duration-900 hover:shadow-indigo-300"
          data-aos="zoom-in"
        >
          <h1 className="lg:text-[45px] lg:font-serif">My Skills</h1>
          <p className="text-[13px] text-center font-thin mt-4 text-black dark:text-violet-400">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>
        <div className=" grid-cols-1 mx-8 lg:grid-cols-6 gap-8 hidden mt-11 lg:my-20">
          <div
            className="flex flex-col items-center justify-center border border-gray-400 p-4 rounded hover:shadow-blue-500  hover:ease-in-out"
            data-aos="fade-right"
          >
            <img
              src={html}
              alt="HTML"
              className="h-[100px] w-[200px] rounded-full mx-auto"
            />
            <h1 className="text-center mt-3 text-[20px] font-bold text-blue-500">
              98%
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center border border-gray-400 p-4 rounded hover:shadow-blue-500"
            data-aos="fade-left"
          >
            <img
              src={css}
              alt="CSS"
              className="h-[90px] rounded-full mx-auto"
            />
            <h1 className="text-center mt-3 text-[20px] font-bold text-blue-500">
              95%
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center border border-gray-400 p-4 rounded hover:shadow-blue-500  hover:ease-in-out"
            data-aos="fade-right"
          >
            <img
              src={js}
              alt="js"
              className="h-[100px] w-[200px] rounded-full mx-auto"
            />
            <h1 className="text-center mt-3 text-[20px] font-bold text-blue-500">
              90%
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center border border-gray-400 p-4 rounded hover:shadow-blue-500"
            data-aos="fade-left"
          >
            <img
              src={node}
              alt="node"
              className="h-[90px] rounded-full mx-auto"
            />
            <h1 className="text-center mt-3 text-[20px] font-bold text-blue-500">
              80%
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center border border-gray-400 p-4 rounded hover:shadow-blue-500  hover:ease-in-out"
            data-aos="fade-up"
          >
            <img
              src={react}
              alt="react"
              className="h-[100px] w-[200px] rounded-full mx-auto"
            />
            <h1 className="text-center mt-3 text-[20px] font-bold text-blue-500">
              90%
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center border border-gray-400 p-4 rounded hover:shadow-blue-500"
            data-aos="fade-up"
          >
            <img
              src={express}
              alt="express"
              className="h-[90px] rounded-full mx-auto"
            />
            <h1 className="text-center mt-3 text-[20px] font-bold text-blue-500">
              95%
            </h1>
          </div>
        </div>
        <div className="items-center justify-center place-content-center mt-9 hidden">
          <h1 className="text-center font-bold text-xl  bg-violet-400 w-40 h-10 mt-2 rounded-full transition-colors">
            And Other ++
          </h1>
        </div>

        <Prohh />
      </div>
    </div>
  );
};

export default MySkill;
