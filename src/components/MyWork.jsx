import React from "react";
import ecomm from "../img/ecomm.png";
import todo from "../img/todo.png";
import food from "../img/food.jpg";

const MyWork = () => {
  return (
    <div id="Project" className="mt-48 lg:mt-52 mx-1">
      <div className="text-center mx-50 -mt-20 " data-aos="zoom-in">
        <h1 className="text-violet-200-300 text-4xl font-bold lg:text-[45px] lg:font-serif">
          My Recent Works
        </h1>
        <p className="text-black dark:text-gray-100 text-[12px] lg:text-base font-light mt-6">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>
      <div className="py-16 mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-36 gap-x-12 gap-8 gap-y-16">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"data-aos="zoom-in-up">
            <div class="h-[350px] w-[600px]">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                src={ecomm}
                alt="ecomm"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white -mt-9 group-hover:hidden">
                WebAPP
              </h1>
              <div className="flex gap-x-11 mt-10">
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Code
                </button>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Preview
                </button>
              </div>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"data-aos="zoom-in-up">
            <div class="h-[350px] w-[600px]">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                src={todo}
                alt="todo"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white -mt-9 group-hover:hidden">
                WebAPP
              </h1>
              <div className="flex gap-x-11 mt-10">
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Code
                </button>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Preview
                </button>
              </div>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl"data-aos="zoom-in-up">
            <div class="h-[350px] w-[600px]">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                src={food}
                alt="food"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white -mt-9 group-hover:hidden">
                WebAPP
              </h1>
              <div className="flex gap-x-11 mt-10">
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Code
                </button>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Preview
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
