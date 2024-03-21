import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { RiMenu2Fill, RiMenu3Line } from "react-icons/ri";
import Resmoncive from "./Resmoncive";
import Dark from "./Dark";
import OutsideClickHandler from "react-outside-click-handler";

// Array containing navigation links
export const navbar = [
  {
    id: "1",
    name: "Home",
    link: "#Home",
  },
  {
    id: "2",
    name: "Services",
    link: "#Services",
  },
  {
    id: "3",
    name: "About",
    link: "#About",
  },
  {
    id: "4",
    name: "Project",
    link: "#Project",
  },
  {
    id: "5",
    name: "Contact",
    link: "#Contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      setColor(window.scrollY >= 90);
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutsideClick = () => {
    setMenuOpen(false);
  };

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop =200;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        color
          ? "sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
          : ""
      } w-full bg-gray-5  dark:bg-gray-900 dark:text-white lg:h-[75px] h-[65px] sticky top-0  z-20`}
    >
      <div className="flex mx-2 justify-between items-center -mt-10 lg:mx-72 lg:-my-20">
        {/* Logo and site name */}
        <div
          className="items-center justify-center text-center flex -mt-1"
          
          // onClick={() => scrollTo("/")}
        >
          <Link className="items-center flex" to="/">
            <img
              className="h-[68px] w-[75px] lg:h-[80px] lg:w-[80px]"
              src={logo}
              alt="logo"
            />
            <h2 className="text-[23px] -ml-3 font-bold flex lg:font-extrabold lg:text-[30px] lg:-mt-2">
              I'M APU
            </h2>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden lg:block items-center justify-center">
          <div className="flex gap-x-8 items-center">
            <ul className="flex gap-x-10 text-xl font-medium">
              {navbar.map(({ id, name, link }) => (
                <li
                  key={id}
                  onClick={() => scrollTo(link.substring(1))}
                  className="hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer"
                >
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
            <Dark />
          </div>
        </div>
        
        {/* Menu icon for smaller screens */}
        <div className="text-6xl flex gap-9 items-center mt-1 justify-center lg:hidden">
          <Dark />
          {menuOpen ? (
            <RiMenu3Line className="h-9 items-center" onClick={toggleMenu} />
          ) : (
            <RiMenu2Fill className="h-9 items-center" onClick={toggleMenu} />
          )}
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <Resmoncive manu={menuOpen} />
      </OutsideClickHandler>
    </div>
  );
};

export default Navbar;
