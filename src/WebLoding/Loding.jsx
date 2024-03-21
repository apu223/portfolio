import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <PuffLoader color="#36d7b7" size={70} />
      <span className="text-sm mt-4 text-gray-400">HEY APU</span>
    </div>
  );
};

export default Loader;
