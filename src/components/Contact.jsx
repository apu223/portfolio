import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="bg-white dark:bg-gray-900 mt-36">
      <div
        className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
        data-aos="zoom-in-down"
      >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form
          action="https://formspree.io/f/xnqeblar"
          method="POST"
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="Frist name"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Frist name
            </label>
            <input
              type="text"
              name="name"
              id="subject"
              className="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Frist name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Last name"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Last name
            </label>
            <input
              type="text"
              name="Last name"
              id="subject"
              className="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Last name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Your email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="py-3 px-5  font-medium text-center text-xl text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-800 mx-auto h-16 w-[500px]"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
