import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Project = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div>
        {counter && <span><CountUp start={0} end={50} duration={2} delay={0} />+</span>}
      </div>
    </ScrollTrigger>
  );
};

export default Project;
