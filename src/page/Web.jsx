import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Footer from "../components/Footer";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Web = () => {
  return (
    <div className="text-black dark:text-gray-300 ">
      <div className="grid grid-cols-1 lg:grid-cols-2  my-16 h-[100px]">
        <div className="order-2 bg-gray-300 h-[350px] rounded-2xl mx-4">
          <div className="mx-4">
            <h2 className="items-center justify-start my-6 text-2xl font-extrabold">
              Main Services
            </h2>
            <div className="gap-y-9">
              <div className="flex flex-col bg-white h-14 place-content-center rounded-2xl justify hover:bg-black hover:text-white duration-500 my-5">
                <div className="flex items-center">
                  <p className="flex items-center mx-7 font-bold text-lg w-full justify-between">
                    <span className="dark:text-black">Web Designing</span>
                    <FaAngleRight className="ml-1" />
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white h-14 place-content-center rounded-2xl justify hover:bg-black hover:text-white duration-500">
                <div className="flex items-center">
                  <p className="flex items-center mx-7 font-bold text-lg w-full justify-between">
                    <span className="dark:text-black">Web Designing</span>
                    <FaAngleRight className="ml-1" />
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white h-14 place-content-center rounded-2xl justify hover:bg-black hover:text-white duration-500 my-5">
                <div className="flex items-center">
                  <p className="flex items-center mx-7 font-bold text-lg w-full justify-between">
                    <span className="dark:text-black">Web Designing</span>
                    <FaAngleRight className="ml-1" />
                  </p>
                </div>
              </div>
            </div>
            <div className="my-28 rounded-2xl bg-gray-600">
              <div>
                <img
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/contact-img.jpg"
                  alt="dgfdgfd"
                  className="rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center z-20 text-5xl -mt-9 ">
                <div className="bg-red-600 rounded-full p-3">
                  <TfiHeadphoneAlt className="text-white h-12 w-12" />
                </div>
              </div>
              <div className="flex-row items-center justify-center mt-6">
                <h1 className="text-center font-bold text-2xl">
                  How Can We Help?
                </h1>
                <h1 className="text-center font-semibold text-lg">
                  How Can We Help?
                </h1>
                <h1 className="text-center font-semibold text-lg">
                  How Can We Help?
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div>
            {" "}
            <div>
              <div className="flex items-center justify-center text-3xl font-bold">
                <h2>Web Designing</h2>
              </div>
              <div className="my-10">
                <img
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-01.jpg"
                  alt="Deging"
                  className="w-[454px] h-[250px] rounded-xl"
                />
              </div>
              <div className="flex-row items-center justify-start">
                <h2 className=" text-2xl font-bold">Web Designing</h2>
                <p className="text-[15px] font-sans mt-5">
                  Web designing is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using ‘Content here, content here’, making it look like
                  readable English.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 my-9 gap-y-14">
                <div class="flex items-center bg-gray-300 rounded-xl">
                  <div class="flex-shrink-0">
                    <img
                      class="object-cover w-32 h-32 rounded-xl"
                      decoding="async"
                      src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-2.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="flex-grow-1 p-4">
                    <h4 class="text-lg font-medium text-black">
                      Best Solutions
                    </h4>
                    <p class="mt-2 text-sm text-gray-600">
                      We focus on the best practices for IT solutions and
                      services.
                    </p>
                  </div>
                </div>
                <div class="flex items-center bg-gray-300 rounded-xl">
                  <div class="flex-shrink-0">
                    <img
                      class="object-cover w-32 h-32 rounded-xl"
                      decoding="async"
                      src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="flex-grow-1 p-4">
                    <h4 class="text-lg font-medium text-black">
                      Data Analysys
                    </h4>
                    <p class="mt-2 text-sm text-gray-600">
                      We focus on the best practices for it solutions and
                      services.
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don’t
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn’t
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-2xl -mt-7 mb-4 text-black dark:text-gray-200">
                    Our work benefits
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don’t
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn’t
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-y-3">
                    <div>
                      <div className="flex items-center justify-start">
                        <p className="ms-3 text-base fw-bold flex items-center justify-start">
                          <IoCheckmark className="text-3xl" />
                          <span className="ml-3">
                            Marketing options and rates
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center justify-start">
                        <p className="ms-3 text-base fw-bold flex items-center justify-start">
                          <IoCheckmark className="text-3xl" />
                          <span className="ml-3">
                            Marketing options and rates
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="-mt-2">
                      <div>
                        <div className="flex items-center justify-start">
                          <p className="ms-3 text-base fw-bold flex items-center justify-start">
                            <IoCheckmark className="text-3xl" />
                            <span className="ml-3">
                              Marketing options and rates
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center justify-start">
                          <p className="ms-3 text-base fw-bold flex items-center justify-start">
                            <IoCheckmark className="text-3xl" />
                            <span className="ml-3">
                              Marketing options and rates
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-medium">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don’t look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn’t anything embarrassing hidden in the middle of
                        text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static mt-[400px] bottom-0 left-0 right-0 z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Web;
