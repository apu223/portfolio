import React, { useState } from "react";
import webapp from "../img/webapp.png";
import web from "../img/web.webp";
import webd from "../img/webd.jpg";
import { MdOutlineWeb } from "react-icons/md";
import { TbDeviceImacCode } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { Link } from "react-router-dom";

const Service = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [issHovered, setIsHoveredd] = useState(false);
  const [isHovereds, setIsHovereds] = useState(false);
  return (
    <div id="Services" className="mt-14 mx-2 lg:mx-[140px]">
      <div className="items-center text-center px-8 sm:mt-32 md:mt-40 justify-center mt-24 lg:mt-44 dark:text-white">
        <p className="mt-6 max-w-3xl mx-auto text-lg my-4">WHAT WE DO</p>
        <h3 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
          Services That Help You Grow.
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 my-12 gap-y-9 lg:mx-36 gap-x-12 lg:mt-20">
        <div data-aos="zoom-in-up">
          <div
            className={`relative flex items-center justify-center h-[80px] w-[80px] rounded-full -mb-10 mx-10 z-20 ${
              isHovered ? "bg-blue-700" : "bg-red-600"
            }`}
          >
            <MdOutlineWeb className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[45px] text-white z-10" />
          </div>
          <div
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="h-[350px] w-[600px] relative">
              <img
                className="h-full w-full object-cover transition-transform rounded-xl duration-700 group-hover:scale-125"
                src={web}
                alt="web"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-700 group-hover:translate-y-0">
              <h1 className="max-w-lg mb-6  tracking-tight text-center sm:text-3xl  sm:leading-none text-white dark:text-white text-3xl font-extrabold">
                Web Designing
              </h1>
              <p className="-mt-3 max-w-3xl mx-auto text-lg my-4 text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                Service Icon Web Designing We offer planning and assembling
                services for you from startups to the final creation or closing
                creation.
              </p>
              <Link
                to="/Deging"
                className="rounded-full bg-red-900 py-2 font-sans px-3.5 text-sm capitalize text-white shadow shadow-black/60 hover:scale-100"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div
            className={`relative flex items-center justify-center h-[80px] w-[80px] rounded-full -mb-10 mx-10 z-20 ${
              issHovered ? "bg-blue-700" : "bg-red-600"
            }`}
          >
            <IoCodeSlash className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[45px] text-white z-10" />
          </div>
          <div
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"
            onMouseEnter={() => setIsHoveredd(true)}
            onMouseLeave={() => setIsHoveredd(false)}
          >
            <div className="h-[350px] w-[600px] relative">
              <img
                className="h-full w-full object-cover transition-transform rounded-xl duration-700 group-hover:scale-125"
                src={webapp}
                alt="webapp"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-700 group-hover:translate-y-0">
              <h1 className="max-w-lg mb-6  tracking-tight text-center sm:text-3xl  sm:leading-none text-white dark:text-white text-3xl font-extrabold">
                Web Development
              </h1>
              <p className="-mt-3 max-w-3xl mx-auto text-lg my-4 text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                Service Icon Web Designing We offer planning and assembling
                services for you from startups to the final creation or closing
                creation.
              </p>
              <Link
                to="/Apps"
                className="rounded-full bg-red-900 py-2 font-sans px-3.5 text-sm capitalize text-white shadow shadow-black/60 hover:scale-100"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div
            className={`relative flex items-center justify-center h-[80px] w-[80px] rounded-full -mb-10 mx-10 z-20 ${
              isHovereds ? "bg-blue-700" : "bg-red-600"
            }`}
          >
            <TbDeviceImacCode className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[45px] text-white z-10" />
          </div>
          <div
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"
            onMouseEnter={() => setIsHovereds(true)}
            onMouseLeave={() => setIsHovereds(false)}
          >
            <div className="h-[350px] w-[600px] relative">
              <img
                className="h-full w-full object-cover transition-transform rounded-xl duration-700 group-hover:scale-125"
                src={webd}
                alt="webd"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-700 group-hover:translate-y-0">
              <h1 className="max-w-lg mb-6  tracking-tight text-center sm:text-3xl  sm:leading-none text-white dark:text-white text-3xl font-extrabold">
                Web APP
              </h1>
              <p className="-mt-3 max-w-3xl mx-auto text-lg my-4 text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                Service Icon Web Designing We offer planning and assembling
                services for you from startups to the final creation or closing
                creation.
              </p>
              <Link
                to="/web"
                className="rounded-full bg-red-900 py-2 font-sans px-3.5 text-sm capitalize text-white shadow shadow-black/60 hover:scale-100"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
