import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="my-14 lg:my-20 mx-4 lg:-ml-[410px] lg:mx-10 flex justify-center items-center w-full">
      <div
        className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:-mt-36"
        data-aos="zoom-in"
      >
        <button className="h-[50px] lg:h-[50px] w-full lg:w-[170px] lg:text-lg rounded-full transition-transform border-2 border-blue-700 bg-transparent-600 text-xl text-blue-500 hover:bg-violet-300 duration-500 hover:scale-110">
          <Link to="#download-cv">Download CV</Link>
        </button>
        <div className="flex space-x-4">
          <div
            className="h-[50px] lg:h-[50px] w-[50px] lg:w-[50px] lg:text-lg rounded-full transition-transform border-2 border-blue-700 bg-transparent-600 text-xl text-blue-500 flex items-center justify-center hover:bg-blue-700"
            data-aos="fade-down-right"
          >
            <Link to="https://www.facebook.com/hiapu121">
              <FaFacebook />
            </Link>
          </div>
          <div
            className="h-[50px] lg:h-[50px] w-[50px] lg:w-[50px] lg:text-lg rounded-full transition-transform border-2 border-blue-700 bg-transparent-600 text-xl text-blue-500 flex items-center justify-center hover:bg-blue-700"
            data-aos="fade-up"
          >
            <Link to="https://www.linkedin.com/in/apu-sikder-7bb436282">
              <FaLinkedin />
            </Link>
          </div>
          <div
            className="h-[50px] lg:h-[50px] w-[50px] lg:w-[50px] lg:text-lg rounded-full transition-transform border-2 border-blue-700 bg-transparent-600 text-xl text-blue-500 flex items-center justify-center hover:bg-blue-700"
            data-aos="fade-down-left"
          >
            <Link to="https://github.com/apu223">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
