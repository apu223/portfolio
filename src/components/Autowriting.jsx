import React from "react";
import { TypeAnimation } from "react-type-animation";

const Autowriting = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000, // wait 2s before replacing "Frontend Developer" with "Backend Developer"
          "Backend Developer",
          2000, // wait 2s before replacing "Backend Developer" with "FullStack Developer"
          "FullStack Developer",
          2000, // wait 2s before replacing "FullStack Developer" with "UI UX Designer"
          "UI UX Designer",
          2000, // wait 2s before repeating the sequence
        ]}
        wrapper="span"
        speed={20}
        className="max-w-lg  text-[23px] sm:text-3xl md:mx-auto sm:text-center lg:max-w-2xl"
        repeat={Infinity}
      />
    </div>
  );
};

export default Autowriting;
