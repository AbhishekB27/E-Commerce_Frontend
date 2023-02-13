import React from "react";

const Hamburger = ({ setMenu, menu }) => {
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div
      onClick={handleMenu}
      className={`relative ${menu ? 'translate-y-[-2.5rem] md:translate-y-[-3.2rem]' : 'translate-y-0'} ml-1 transition-all lg:hidden z-50 flex gap-2 flex-col justify-between items-center w-[2.8rem] border-2 border-[#5465ff] dark:border-gray-300 rounded-md p-1 cursor-pointer`}
    >
      <div
        className={`${
          menu ? "origin-top-left rotate-45 w-full translate-x-[20%]" : "w-full"
        } transition-all bg-[#5465ff] dark:bg-gray-300 h-[3px] rounded-md`}
      ></div>
      <div
        className={`${
          menu ? "w-0" : "w-full"
        } transition-all bg-[#5465ff] dark:bg-gray-300 h-[3px] rounded-md`}
      ></div>
      <div
        className={`${
          menu
            ? "origin-bottom-left rotate-[-45deg] w-full translate-x-[20%]"
            : "w-full"
        } transition-all bg-[#5465ff] dark:bg-gray-300 h-[3px] rounded-md`}
      ></div>
    </div>
  );
};

export default Hamburger;
