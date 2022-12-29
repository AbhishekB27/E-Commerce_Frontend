import React from "react";
import { motion } from "framer-motion";
import WomenF7 from "./images/WomenF7.png";

const Heor3 = () => {
  return (
    <div className="w-full min-h-[560pxpx] grid bg-blue-200 place-items-center">
      <div className="grid grid-cols-[auto_30rem] w-[60%]">
        <div className="flex  flex-col justify-center items-start gap-5">
          <div className="text-xl font-semibold text-blue-600 text-left w-full">
            Deal Of <span className="text-[#121212]">This Month</span>
          </div>
          <div className="flex justify-evenly items-center gap-5">
            <div className=" w-[6rem] h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
              <span className="text-lg font-semibold">02</span>
              <span className="text-xs font-semibold">DAYS</span>
            </div>
            <div className=" w-[6rem] h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
              <span className="text-lg font-semibold">02</span>
              <span className="text-xs font-semibold">DAYS</span>
            </div>
            <div className=" w-[6rem] h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
              <span className="text-lg font-semibold">02</span>
              <span className="text-xs font-semibold">DAYS</span>
            </div>
            <div className=" w-[6rem] h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
              <span className="text-lg font-semibold">02</span>
              <span className="text-xs font-semibold">DAYS</span>
            </div>
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className='px-4 py-2 rounded-3xl border overflow-hidden before:content-[""] before:bg-white before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10 text-blue-500  font-medium font-sans hover:before:w-full before:transition-all  '
            >
              New Collection{" "}
              <i class="fa-regular fa-chevron-right translate-y-[0.09rem]"></i>
            </motion.button>{" "}
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="bg-gradient-to-t from-yellow-400 to-pink-400 hover:from-yellow-400 hover:to-yellow-400 transition-all cursor-pointer rounded-t-full w-[16rem] h-[18rem] grid place-items-center">
            <img
              className="object-center transition-all hover:scale-110 object-contain"
              src={WomenF7}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heor3;
