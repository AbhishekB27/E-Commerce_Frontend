import { motion } from "framer-motion";
import React from "react";
import WomenF1 from "./images/WomenF1.png";
import WomenF2 from "./images/WomenF2.png";
import WomenF3 from "./images/WomenF3.png";
import WomenF4 from "./images/WomenF4.png";
import WomenF5 from "./images/WomenF5.png";
import WomenF6 from "./images/WomenF6.png";

const Hero2 = () => {
  return (
    <div className="w-full min-h-[560pxpx] flex flex-col justify-center gap-6 items-center">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full">
        <div className="relative p-6 bg-green-200 dark:bg-gray-300 row-auto sm:row-span-2 lg:row-auto flex flex-col justify-center items-start">
          {" "}
          <span className="md:text-lg text-sm font-bold text-slate-800">
            Free Shipping
          </span>
          <span className="text-left font-semibold md:text-sm text-xs text-slate-500">
            "Enjoy free shipping on all of your orders, no matter the size or
            destination.Happy shopping!"
          </span>{" "}
          <i class="absolute top-[-1rem] left-6 rounded w-[3rem] h-[2.5rem] grid place-items-center text-xl text-white bg-green-500 dark:bg-gray-700 fa-solid fa-paper-plane"></i>
        </div>
        <div className="relative p-6 bg-yellow-200 dark:bg-gray-300 flex flex-col justify-center items-start">
          {" "}
          <span className="md:text-lg text-sm font-bold text-slate-800">
            14 Days Easy Return
          </span>
          <span className="text-left font-semibold md:text-sm text-xs text-slate-500">
            "We want you to be completely satisfied with your purchase, which is
            why we offer an easy return process."
          </span>{" "}
          <i class="absolute top-[-1rem] left-6 rounded w-[3rem] h-[2.5rem] grid place-items-center text-xl text-white bg-yellow-500 dark:bg-gray-700 fa-solid fa-house-person-return"></i>
        </div>
        <div className="relative p-6 bg-blue-200 dark:bg-gray-300 flex flex-col justify-center items-start">
          {" "}
          <span className="md:text-lg text-sm font-bold text-slate-800">
            24/7 Customer Support
          </span>
          <span className="text-left font-semibold md:text-sm text-xs text-slate-500">
            "We are here to help you every step of the way, which is why we
            offer 24/7 customer support."
          </span>{" "}
          <i class="absolute top-[-1rem] left-6 rounded w-[3rem] h-[2.5rem] grid place-items-center text-xl text-white bg-blue-500 dark:bg-gray-700 fa-solid fa-headphones-simple"></i>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-rows-4 md:grid-flow-row w-[90%]">
        <div className="md:row-auto lg:row-span-2 grid place-items-center">
          <div className="space-y-5">
            <div className="rounded-t-full bg-gradient-to-b dark:from-gray-300 from-slate-50 to-red-600 hover:from-red-600 cursor-pointer overflow-hidden hover:to-red-600 grid place-items-center">
              <img
                className="object-contain transition-all hover:scale-110 w-[16rem] h-[18rem] lg:h-[25rem]"
                src={WomenF1}
                alt=""
              />
            </div>
            <div className="grid gap-3 place-items-center">
              {" "}
              <span className="font-semibold">
                Women's Hot Collection
              </span>{" "}
              <motion.button
                whileTap={{ scale: 0.8 }}
                className='px-4 py-2 w-[65%] rounded-3xl border overflow-hidden before:content-[""] before:bg-blue-200 dark:before:bg-gray-700 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10  font-medium font-sans hover:before:w-full before:transition-all'
              >
                Explore New{" "}
                <i class="fa-regular fa-chevron-right translate-y-[0.12rem]"></i>{" "}
              </motion.button>{" "}
            </div>
          </div>
        </div>
        <div className=" grid place-items-center order-first lg:order-none md:col-span-2 lg:col-auto">
          <div className="text-center md:text-right space-y-5">
            <h1 className="text-xl font-semibold text-center md:text-left text-gray-800 dark:text-gray-300">
              New Collection of <span className="text-blue-600 dark:text-gray-300">AB_Store</span>
            </h1>{" "}
            <p className="text-gray-300">
              Get ready to step up your style game with our latest fashion
              collection. From trendy clothing and accessories to shoes and
              bags, we have everything you need to create on-point outfits for
              every occasion.
            </p>{" "}
            <motion.button
              whileTap={{ scale: 0.8 }}
              className='px-4 py-2 rounded-3xl border overflow-hidden before:content-[""] before:bg-blue-200 dark:before:bg-gray-700 dark:before:bg-gray-700 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10 dark:text-gray-300  font-medium font-sans hover:before:w-full before:transition-all  '
            >
              New Collection{" "}
              <i class="fa-regular fa-chevron-right translate-y-[0.09rem]"></i>
            </motion.button>{" "}
          </div>
        </div>
        <div className="md:row-auto lg:row-span-2 grid place-items-center">
          <div className="space-y-5">
            <div className="bg-gradient-to-b dark:from-gray-300 from-black to-fuchsia-600 hover:from-fuchsia-600 cursor-pointer overflow-hidden hover:to-fuchsia-600 rounded-t-full grid place-items-center">
              <img
                className="object-contain transition-all hover:scale-110 w-[16rem] h-[18rem] lg:h-[25rem]"
                src={WomenF6}
                alt=""
              />
            </div>
            <div className="grid gap-3 place-items-center">
              {" "}
              <span className="font-semibold">
                Women's Sunglasses Collection
              </span>{" "}
              <motion.button
                whileTap={{ scale: 0.8 }}
                className='px-4 py-2 w-[65%] rounded-3xl border overflow-hidden before:content-[""] before:bg-blue-200 dark:before:bg-gray-700 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10  font-medium font-sans hover:before:w-full before:transition-all'
              >
                Explore New{" "}
                <i class="fa-regular fa-chevron-right translate-y-[0.12rem]"></i>{" "}
              </motion.button>{" "}
            </div>
          </div>
        </div>
        <div className="md:row-auto lg:row-span-2 grid place-items-center">
          <div className="space-y-5">
            <div className="bg-gradient-to-b dark:from-gray-300 from-yellow-300 to-cyan-400 hover:from-cyan-300 cursor-pointer overflow-hidden hover:to-cyan-400 rounded-t-full grid place-items-center">
              <img
                className="object-contain hover:scale-110 transition-all w-[16rem] h-[18rem] lg:h-[25rem]"
                src={WomenF3}
                alt=""
              />
            </div>
            <div className="grid gap-3 place-items-center">
              {" "}
              <span className="font-semibold">
                Women's Shoe Collection
              </span>{" "}
              <motion.button
                whileTap={{ scale: 0.8 }}
                className='px-4 py-2 w-[65%] rounded-3xl border overflow-hidden before:content-[""] before:bg-blue-200 dark:before:bg-gray-700 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10  font-medium font-sans hover:before:w-full before:transition-all'
              >
                Explore New{" "}
                <i class="fa-regular fa-chevron-right translate-y-[0.12rem]"></i>{" "}
              </motion.button>{" "}
            </div>
          </div>
        </div>
        <div className=" grid place-items-center">
          <div className="space-y-5">
            <div className="bg-[#FFB5C3,#D99AA5] bg-gradient-to-b dark:from-gray-300 from-[#D99AA5] to-[#FFB5C3] overflow-hidden hover:from-[#FFB5C3] hover:to-[#FFB5C3] transition-all cursor-pointer rounded-t-full w-[16rem] h-[18rem] grid place-items-center">
              <img
                className="object-center transition-all hover:scale-110 object-contain"
                src={WomenF4}
                alt=""
              />
            </div>
            <div className="grid gap-3 place-items-center">
              {" "}
              <span className="font-semibold">
                Women's Makeup
              </span>{" "}
              <motion.button
                whileTap={{ scale: 0.8 }}
                className='px-4 py-2 w-[65%] rounded-3xl border overflow-hidden before:content-[""] before:bg-blue-200 dark:before:bg-gray-700 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10  font-medium font-sans hover:before:w-full before:transition-all'
              >
                Explore New{" "}
                <i class="fa-regular fa-chevron-right translate-y-[0.12rem]"></i>{" "}
              </motion.button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
