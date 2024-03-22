import React from "react";

const Blog = () => {
  return (
    <div className="items-center justify-center mx-9 lg:mx-60 lg:mt-[30px]">
      <div className="flex flex-col items-center justify-center text-center px-8 mt-20 sm:mt-32 md:mt-40">
        <p className="mt-0 font-sans max-w-3xl mx-auto text-lg my-4">|| Blog Post</p>
        <h1 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
          Latest Tips & Tricks
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-y-8 mt-6 lg:grid-cols-3 lg:gap-x-24 lg:my-14">
        {/* Sample blog post */}
        <div
          className="flex flex-col items-center justify-center bg-violet-300 dark:bg-gray-100 p-4 rounded-lg mt-10 hover:scale-110 duration-300"
          data-aos="zoom-in-up"
        >
          <img
            src="https://htmldemo.net/lendex/lendex/assets/images/blog/blog-feed-img-1.jpg"
            alt="Blog post"
            className="h-64 w-full object-cover rounded-lg mb-4"
          />
          <h2 className=" font-semibold mb-2 text-blue-700 text-xl">
            Business - 07 feb
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Read More
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-violet-300 dark:bg-gray-100 p-4 rounded-lg mt-8 hover:scale-110 duration-300"
          data-aos="zoom-in-up"
        >
          <img
            src="https://htmldemo.net/lendex/lendex/assets/images/blog/blog-feed-img-2.jpg"
            alt="Blog post"
            className="h-64 w-full object-cover rounded-lg mb-4"
          />
          <h2 className=" font-semibold mb-2 text-blue-700 text-xl">
            Business
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Read More
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-violet-300 dark:bg-gray-100 p-4 rounded-lg mt-8 hover:scale-110 duration-300"
          data-aos="zoom-in-up"
        >
          <img
            src="https://htmldemo.net/lendex/lendex/assets/images/blog/blog-feed-img-3.jpg"
            alt="Blog post"
            className="h-64 w-full object-cover rounded-lg mb-4 "
          />
          <h2 className=" font-semibold mb-2 text-blue-700 text-xl text-center">
            Five Latest Developments In Web Agency
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Read More
          </button>
        </div>
        {/* Additional blog posts go here */}
      </div>
    </div>
  );
};

export default Blog;
