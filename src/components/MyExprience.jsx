import React from "react";
import Counterpage from "./counter/Counterpage";
import Project from "./counter/Project";
import Client from "./counter/Client";

const MyExperience = () => {
  return (
    <div className="mx-6 lg:mx-72 items-center justify-center text-center lg:bg-violet-100 lg:rounded-3xl  lg:mt-30 dark:lg:shadow-orange-50 dark:lg:bg-slate-700 lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 py-4 gap-y-8 lg:-mt-2 text-center">
        <div
          className="flex flex-col items-center justify-center lg:flex-row"
          data-aos="zoom-in-up"
        >
          <h1 className="text-4xl flex-row -mb-4 lg:flex font-bold lg:text-[64px] text-black dark:text-gray-50 ">
            <Counterpage />
          </h1>
          <p className="text-lg -mt-2 -mr-1 font-sans lg:text-[16px] lg:mt-4 lg:ml-5">
            Years of <br />
            <span className="-ml-3 text-black dark:text-yellow-200">
              {" "}
              Experience
            </span>
          </p>
        </div>
        <div
          className="flex flex-col mt-10 items-center justify-center lg:flex-row lg:-mt-2"
          data-aos="zoom-in-up"
        >
          <h1 className="text-4xl lg:flex  font-bold lg:text-[64px] text-black dark:text-gray-50 ">
            <Project />
          </h1>
          <p className="text-lg mt-2 -mr-1 font-sans lg:text-[16px] lg:mt-4 lg:ml-5 ">
            Project <br />
            <span className=" text-black dark:text-yellow-200"> Completed</span>
          </p>
        </div>
        <div
          className="flex flex-col mt-7 items-center justify-center lg:flex-row lg:-mt-2"
          data-aos="zoom-in-up"
        >
          <h1 className="text-4xl sm:flex-row lg:flex lg:flex-row font-bold lg:text-[64px] text-black dark:text-gray-50">
            <Client />
          </h1>
          <p className="text-lg font-sans lg:text-[16px] lg:mt-4 lg:ml-10">
            Happy <br />
            <span className=" text-black dark:text-yellow-200"> Clients</span>
          </p>
        </div>
        <div
          className="flex flex-col -mt-4 items-center justify-center lg:flex-row"
          data-aos="zoom-in-up"
        >
          <h1 className="text-4xl lg:flex -mt- font-bold lg:text-[64px] text-black dark:text-gray-50">
            <Counterpage />
          </h1>
          <p className="text-lg -mt-8 -mr-1 font-sans lg:text-[16px] lg:mt-4 lg:ml-10">
            Years of <br />
            <span className="-ml-3 text-black dark:text-yellow-200">
              {" "}
              Experience
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
