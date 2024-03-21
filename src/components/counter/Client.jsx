import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Client = () => {
  const [count, setCount] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <div>
        {count && <span><CountUp start={100} end={37} duration={2} delay={0} />+</span>}
      </div>
    </ScrollTrigger>
  );
};

export default Client;
