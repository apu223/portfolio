import React from "react";

const WorkProcc = () => {
  return (
    <div id="workprocc" className="dark:text-white lg:mt-52 text-center px-8 mt-20 sm:mt-32 md:mt-40">
      <div className="items-center justify-center mt-32">
        <p className="text-center mt-6 max-w-3xl mx-auto font-sans text-black  dark:text-gray-300 text-lg">
          WORK PROCESS
        </p>
        <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
          Our Working Process
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-96 lg:my-20">
        <div className="flex flex-col items-center justify-center 0 p-4 rounded-full mt-10 " data-aos="zoom-in">
          <div className="hover:scale-110 lg:scale-125 duration-300">
            <img
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/process-01.jpg"
              alt="Blog post"
              className="h-[280px] w-[280px] lg:h-[170px] lg:w-[170px] object-cover rounded-full mb-4 hover:shadow-2xl shadow-slate-900"
            />
          </div>
          <h2 className=" font-bold mb-2 text-blue-700 text-2xl lg:text-3xl mt-4">
            Design
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center 0 p-4 rounded-full mt-10" data-aos="zoom-in">
          <div className="hover:scale-110 lg:scale-125 duration-300">
            <img
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/process-02.jpg"
              alt="Blog post"
              className="h-[280px] w-[280px] lg:h-[200px] lg:w-[200px] object-cover rounded-full mb-4 hover:shadow-2xl shadow-slate-900"
            />
          </div>
          <h2 className="font-bold mb-2 text-blue-700 text-2xl lg:text-3xl mt-4">
            Strategy
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center 0 p-4 rounded-full mt-10" data-aos="zoom-in">
          <div className="hover:scale-110 lg:scale-125 duration-300 lg:ease-in-out">
            <img
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/process-03.jpg"
              alt="Blog post"
              className="h-[280px] w-[280px] lg:h-[170px] lg:w-[170px] object-cover rounded-full mb-4 hover:shadow-2xl shadow-slate-900"
            />
          </div>
          <h2 className="font-bold mb-2 text-blue-700 text-2xl lg:text-3xl mt-4">
            Develop
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcc;
