import React, { useState } from "react";
import Hamburger from "./Hamburger";
import ToggleMode from "./ToggleMode";
import ShopBag from "../images/ShopBag.png";
import { Link } from "react-router-dom";

const Header = ({ setTheme, theme }) => {
  const [menu, setMenu] = useState(false);
  const [follow, setFollow] = useState(false);
  const closeMobileMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="flex flex-col gap-1">
      <div className="flex justify-between items-center pb-1 border-b-2 border-[#5465ff]  dark:border-gray-300">
        <div className="relative md:border-[3px] border-[#5465ff] dark:border-gray-300 cursor-pointer flex justify-center gap-2 items-center before:content-[''] before:absolute before:h-[95px] before:w-[60%] before:left-[-18px] overflow-hidden before:rotate-[-28deg] before:bg-gradient-to-l before:from-[#8C5CFF] before:via-[#4C4DFF] before:to-[#0CB6FF] dark:before:bg-gradient-to-l dark:before:to-gray-300 dark:before:from-gray-300 dark:before:text-[#121212]">
          <div className="flex justify-center gap-2 relative items-end z-50 p-1 ring-2 ring-inset ring-white dark:ring-[#121212]">
            <i className="fa-solid text-white dark:text-[#121212] pl-1 fa-bag-shopping md:text-2xl hover:scale-105 transition-all"></i>
            <span className="text-sm text-white dark:text-[#121212] font-medium md:text-lg tracking-wider lg:font-extrabold">
              AB
            </span>
            <span className="text-sm ml-6 font-medium md:text-lg tracking-wider lg:font-extrabold">
              STORE
            </span>
          </div>
        </div>
        <div className="grid grid-cols-[60px_60px_35px_35px] md:grid-cols-[80px_80px_40px_40px] gap-3">
        <button className="bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white dark:bg-gradient-to-l dark:to-gray-300 dark:from-gray-300 dark:text-[#121212] rounded-md font-semibold text-sm md:text-base lg:text-lg">SignUp</button>
        <button className="bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white dark:bg-gradient-to-l dark:to-gray-300 dark:from-gray-300 dark:text-[#121212] rounded-md font-semibold text-sm md:text-base lg:text-lg">LogIn</button>
        <div className={`grid place-items-center pt-[2px] pr-[2px] cursor-pointer relative w-auto h-auto gap-2 rounded-lg bg-[#e2fdff] dark:bg-gray-300 text-[#5465ff] dark:text-[#121212]`}>
          <div className="absolute gri top-[-9px] right-[-9px] border-2 border-white dark:border-[#121212] bg-[#e2fdff] dark:bg-gray-300 text-[#5465ff] dark:text-[#121212] w-[20px] h-[20px] rounded-full text-xs font-extrabold">3</div>
        <i class=" text-base md:text-lg lg:text-2xl fa-solid fa-cart-shopping"></i>
        </div>
        <ToggleMode setTheme={setTheme} theme={theme} />
        </div>
      </div>
      <div className="relative flex justify-between lg:flex-row-reverse">
        <Hamburger setMenu={setMenu} menu={menu} />
        {/* This layout is best for all time */}{" "}
        <ol
          className={`top-[6.2rem] fixed right-0 left-0 lg:w-[50%] z-50 lg:static flex flex-col lg:flex-row justify-around bg-black/50 lg:bg-transparent w-full overflow-hidden transition-all duration-500 ${
            !menu ? "h-[0] opacity-0" : "h-[88vh]"
          } lg:h-auto lg:opacity-100 `}
        >
          <Link to="/">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              HOME
            </li>
          </Link>
          <Link to="/gallery">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              GALLERY
            </li>
          </Link>
          <Link to="/exhibition">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              EXHIBITION
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              ABOUT
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              CONTACT
            </li>
          </Link>
        </ol>
      </div>
    </header>
  );
};

export default Header;
