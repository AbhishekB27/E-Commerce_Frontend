import React from "react";

const themeMode = ({ setTheme, theme }) => {
  const handletheme = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={`flex relative justify-center w-auto h-auto items-center gap-2 rounded-lg px-[4px] py-[3px] bg-[#e2fdff] dark:bg-gray-300 text-[#5465ff] dark:text-[#121212]`}
    >
      <button
        id="toggle"
        onClick={handletheme}
        className='outline-none w-[30px] h-full'
      >
        {" "}
        {
          theme ?  <i className={`text-base md:text-lg lg:text-2xl fa-light fa-brightness`}></i> : <i class="fa-solid fa-brightness text-base md:text-lg lg:text-2xl"></i>
        }
        {" "}
      </button>
      <label
        className={`absolute cursor-pointer font-medium text-xs ${
          theme ? "translate-x-[-55%]" : "translate-x-[55%]"
        } transition-all duration-500 flex flex-col`}
        htmlFor="toggle"
      >
      </label>
    </div>
  );
};

export default themeMode;
