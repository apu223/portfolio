import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../img/hero.png";
import Autowriting from "./Autowriting";

const Hero = () => {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 150;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 75, // animation duration
      once: false, // whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div id="Home" className="mt-14 mx-10 lg:mx-72">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-0">
        <div className="flex flex-col justify-center">
          <div className="max-w-lg mb-6  tracking-tight text-center sm:text-3xl  sm:leading-none text-black dark:text-white text-3xl font-extrabold">
            <h2
              className="text-gradient my-4 lg:text-3xl lg:text-left"
              data-aos="fade-down"
            >
              Hello, It's{" "}
              <span className="text-violet-300 text-gradient">Me</span>
            </h2>
            <h2
              className="text-gradient my-4 lg:text-3xl lg:text-left"
              data-aos="fade-down"
            >
              APU
              <span className="text-blue-500 text-gradient"> Sikder</span>
            </h2>
            <p className="flex text-[22px] sm:text-3xl lg:items-center justify-center lg:text-center lg:justify-start max-w-xl md:mx-auto sm:text-center lg:max-w-2xl place-items-center">
              And I'M A-{" "}
              <span className="text-blue-600">
                {" "}
                <Autowriting />
              </span>
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
        <div
          className=" max-w-3xl mx-auto text-lg my-4 font-light text-black text-center dark:text-slate-100 mt-16 lg:text-xl lg:-mt-32 lg:ml-0 lg:justify-start lg:items-start"
          data-aos="fade-up"
        >
          I break down complex user experience problems to create
          integrity-focused solutions that connect billions of people
        </div>
      </div>
    </div>
  );
};

export default Hero;
