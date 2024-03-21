import React from "react";
import Html from "./mySkill/Html";
import Css from "./mySkill/Css";
import JavaScript from "./mySkill/JavaScript";
import Node from "./mySkill/Node";
import Express from "./mySkill/Express";
import Tailwiend from "./mySkill/Tailwiend";
import Reacsst from "./mySkill/Reacsst";
import Rounded from "./Rounded";

const Prohh = () => {
  return (
    <div className="mx-3 grid grid-cols-1 lg:grid-cols-2 lg:mx-48">
      <div>
        <div className="mt-7" data-aos="zoom-in-up">
          <h2 className="mx-3 font-semibold text-black dark:text-gray-300 mb-1">
            Html
          </h2>
          <Html />
        </div>
        <div className="mt-4" data-aos="zoom-in-up">
          <h2 className="mx-3 font-semibold text-black dark:text-gray-300 mb-1">
            Css
          </h2>
          <Css />
        </div>
        <div className="mt-4" data-aos="zoom-in-up">
          <h2 className="mx-3 font-semibold text-black dark:text-gray-300 mb-1">
            JavaScript
          </h2>
          <JavaScript />
        </div>
        <div className="mt-4" data-aos="zoom-in-up">
          <h2 className="mx-3 font-semibold text-black dark:text-gray-300 mb-1">
            Node
          </h2>
          <Node />
        </div>
        <div className="mt-4" data-aos="zoom-in-up">
          <h2 className="mx-3 font-semibold text-black dark:text-gray-300 mb-1">
            Express
          </h2>
          <Express />
        </div>
        <div className="mt-4" data-aos="zoom-in-up">
          <h2 className="mx-3 font-semibold text-black dark:text-gray-300 mb-1">
            Tailwiend
          </h2>
          <Tailwiend />
        </div>
        <div className="mt-4" data-aos="zoom-in-up">
          <h2 className="mx-3 font-semibold text-black dark:text-gray-300 mb-1">
            React
          </h2>
          <Reacsst />
        </div>
      </div>
      <div className="mt-20 ml-36 hover:scale-110 duration-300 hidden lg:block ">
        <img
          src="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02-850x412.jpg"
          alt="fgf"
          className="h-[350px] w-[600px] rounded-full shadow-xl hover:shadow-blue-600"
        />
      </div>
    </div>
  );
};

export default Prohh;
