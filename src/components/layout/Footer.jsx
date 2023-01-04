import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-blue-500 dark:bg-gray-900 dark:text-gray-300 text-white flex flex-col justify-between items-center px-3 py-4">
      <div className="w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-between items-center">
        <div className="flex justify-center sm:justify-start gap-5 flex-wrap items-center">
          <div className="relative border-[2px] group w-fit  md:border-[3px] border-white dark:border-gray-300 cursor-pointer flex justify-center gap-2 items-center before:content-[''] before:absolute before:h-[95px] before:w-[60%] before:left-[-18px] hover:before:translate-x-[100%] before:transition-all overflow-hidden before:rotate-[-28deg] before:bg-white">
            <div className="flex justify-center  gap-2 relative items-end -z-0 p-1 ring-2 ring-inset ring-blue-500 dark:ring-[#121212]">
              <i className="fa-solid text-blue-500 group-hover:text-white dark:group-hover:text-gray-300 dark:text-[#121212] pl-1 fa-bag-shopping md:text-2xl hover:scale-105 transition-all"></i>
              <span className="text-sm text-blue-500 group-hover:text-white dark:group-hover:text-gray-300 dark:text-[#121212] font-medium md:text-lg tracking-wider lg:font-extrabold">
                AB
              </span>
              <span className="text-sm ml-6 font-medium group-hover:text-[#121212] dark:group-hover:text-[#121212] md:text-lg tracking-wider lg:font-extrabold">
                STORE
              </span>
            </div>
          </div>
          <span className="font-semibold">Online Shopping Destination</span>
        </div>
        <div className="text-xl md:text-3xl space-x-5">
          <i class="fa-brands fa-twitter cursor-pointer relative group"> <span className="absolute group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded top-[-2rem] right-[-1.2rem] opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">Twitter</span> </i>
          <i class="fa-brands fa-instagram cursor-pointer relative group"> <span className="absolute group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded top-[-2rem] right-[-1.8rem] opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">Instagram</span> </i>
          <i class="fa-brands fa-youtube cursor-pointer relative group"> <span className="absolute group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded top-[-1.9rem] right-[-1.1rem] opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">Youtube</span> </i>
          <i class="fa-brands fa-square-facebook cursor-pointer relative group"> <span className="absolute group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded top-[-2rem] right-0 opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[80%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">Facebook</span> </i>        </div>
      </div>
      <div className="text-base md:text-lg text-center border-t-2 w-full m-2">
        © 2022 Flowbase. All rights reserved • Powered By AB_STORE
      </div>
    </footer>
  );
};

export default Footer;
