import React from "react";
import Footer from "../components/Footer";

const Deging = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 min-h-screen">
      <div>
        <div>
          <img
            src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-01.jpg"
            alt="deging"
            className="h-[200px] rounded-2xl"
          />
          <div className="flex-row items-center justify-start my-9">
            <h1 className="text-2xl font-bold my-2">Web Designing</h1>
            <p className="font-sans text-[15px]">
              Web designing is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              ‘Content here, content here’, making it look like readable
              English.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-9">
            <div>
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
                  <h4 class="text-lg font-medium text-black">Best Solutions</h4>
                  <p class="mt-2 text-sm text-gray-600">
                    We focus on the best practices for IT solutions and
                    services.
                  </p>
                </div>
              </div>
            </div>
            <div>
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
                  <h4 class="text-lg font-medium text-black">Best Solutions</h4>
                  <p class="mt-2 text-sm text-gray-600">
                    We focus on the best practices for IT solutions and
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-9 font-sans text-[16px]">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deging;
