import React, { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { navbar } from "./Navbar";
import { Link } from "react-router-dom";

const Resmoncive = ({ manu }) => {

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
    <div
      className={`${
        manu ? "left-0" : "-left-full"
      } fixed top-0 z-50 bg-gray-100  dark:bg-gray-800 dark:text-white h-screen w-[70%] lg:w-[75%] lg:hidden rounded-r-xl`}
    >
      <div className="flex items-center justify-start gap-3">
        <div>
          <div className="my-14 mx-1 flex items-center justify-center place-content-center gap-x-5">
            <HiUserCircle className=" h-[100px] w-[150px]" />
            <h2 className="text-[20px] flex-row -ml-9 mt-3">
              H'I APU <p className="text-[15px] flex-row my-3 -mt-[1.8px]">View your profill</p>
            </h2>
          </div>
        </div>
      </div>
      <div>
      <ul className="flex flex-col gap-y-3 ml-[50px] text-xl py-1 font-semibold">
        {navbar.map(({ id, name, link }) => (
          <li key={id}
          onClick={() => scrollTo(link.substring(1))}
          >
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col py-[1200px] ml-14">
      <h2 className="text-blue-700">
        MY LOVE ONLY FOR MANY $$ 
      </h2>
    </div>
    </div>
  );
};

export default Resmoncive;
