import React, { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

const Dark = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const elements = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      elements.classList.add("dark");
      localStorage.setItem("theme","dark");
    } else {
      elements.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme]);
  return (
    <div>
      <div className="-mr-12">
        {theme == "dark" ? (
          <IoMdSunny onClick={() => setTheme("light")} className="text-[30px] lg:text-[30px] items-center" />
        ) : (
          <IoMdMoon  onClick={()=>setTheme("dark")} className="text-[30px] lg:text-[30px]" />
        )}
      </div>
    </div>
  );
};

export default Dark;
