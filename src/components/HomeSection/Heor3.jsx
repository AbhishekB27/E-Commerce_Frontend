import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WomenF7 from "./images/WomenF7.png";
import useCountDown from "./useCountDown";

const Heor3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { Day, Hours, Minutes, Seconds } = useCountDown("2023-01-31"); // Date Format is "Jan/27/2023" MM/DD/YY OR "2023-01-27" YY/MM/DD
  return (
    <div
      ref={ref}
      className="w-full min-h-[560px] grid bg-blue-200 dark:bg-gray-700 gap-5 place-items-center py-3"
    >
      {
        isInView && <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity: 1,scale:1}}
        transition={{duration:0.3}}
          className="flex flex-col lg:flex-row order-first lg:order-none gap-5"
        >
          <div className="flex  flex-col justify-center items-center lg:items-start gap-5">
            <div className="text-xl font-semibold text-blue-600 dark:text-gray-300 text-center lg:text-left w-full">
              Deal Of{" "}
              <span className="text-[#121212] dark:text-gray-300">
                This Month
              </span>
            </div>
            <div className="flex justify-evenly flex-wrap items-center gap-5 dark:text-gray-800">
              <div className=" w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-base lg:text-lg font-semibold">{Day}</span>
                <span className="text-xs font-sans font-medium md:font-semibold">
                  DAYS
                </span>
              </div>
              <div className=" w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-base lg:text-lg font-semibold">
                  {Hours}
                </span>
                <span className="text-xs font-sans font-medium md:font-semibold">
                  HOURS
                </span>
              </div>
              <div className=" w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-base lg:text-lg font-semibold">
                  {Minutes}
                </span>
                <span className="text-xs font-sans font-medium md:font-semibold">
                  MINUTES
                </span>
              </div>
              <div className=" w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-base lg:text-lg font-semibold">
                  {Seconds}
                </span>
                <span className="text-xs font-sans font-medium md:font-semibold">
                  SECONDS
                </span>
              </div>
            </div>
            <div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className='px-4 py-2 rounded-3xl border overflow-hidden before:content-[""] before:bg-white dark:before:bg-gray-300 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10 text-blue-500 dark:text-gray-800 font-medium font-sans hover:before:w-full before:transition-all  '
              >
                New Collection{" "}
                <i class="fa-regular fa-chevron-right translate-y-[0.09rem]"></i>
              </motion.button>{" "}
            </div>
          </div>
          <div className="grid place-items-center">
            <div className="bg-gradient-to-b dark:from-gray-300 from-yellow-400 overflow-hidden to-pink-400 hover:from-yellow-400 hover:to-yellow-400 transition-all cursor-pointer rounded-t-full w-[16rem] h-[18rem] grid place-items-center">
              <img
                className="object-center w-[15rem] h-[15rem] transition-all translate-x-4 hover:scale-110 object-contain"
                src={WomenF7}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      }
      {
        isInView && <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity: 1,scale:1}}
        transition={{duration:0.5}}
         className="w-full"
       >
         <span className="text-[#121212] dark:text-gray-300 text-base md:text-lg font-semibold">
           Subscribe Our{" "}
           <span className="text-blue-600 dark:text-gray-300">Newsletter</span>
         </span>
         <div>
           {" "}
           <span>
             The latest deals and savings, sent to you inbox weekly.
           </span>{" "}
           <div className="flex justify-center items-center gap-2 flex-wrap">
             {" "}
             <input
               className="md:px-3 md:py-2 px-2 py-1 rounded-md outline-none"
               placeholder="******@gmail.com"
               type="text"
               name=""
               id=""
             />{" "}
             <motion.button
               whileTap={{ scale: 0.8 }}
               className="md:px-4 md:py-2 px-2 py-1 bg-blue-600 dark:bg-gray-300 dark:text-gray-800 font-sans font-medium text-white rounded-md"
             >
               Subscribe
             </motion.button>{" "}
           </div>{" "}
         </div>
       </motion.div>
      }
      
    </div>
  );
};

export default Heor3;
