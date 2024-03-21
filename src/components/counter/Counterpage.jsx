import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Counterpage = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className="">
        <h1 className="text-center py-10">
        {counter && <span><CountUp start={100} end={1} duration={2} delay={0} />+</span>}
        </h1>
      </div>
    </ScrollTrigger>
  );
};

export default Counterpage;
