import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WomenF7 from "./images/WomenF7.png";
import DenimJacket from "./images/DenimJacket.jpg";
import useCountDown from "./useCountDown";
import { Link } from "react-router-dom";
import { filterCategory } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

const Heor3 = () => {
  const ref = useRef(null);
  const dispatch = useDispatch()
  const isInView = useInView(ref, { once: true });
  const { Day, Hours, Minutes, Seconds } = useCountDown("2023-12-31"); // Date Format is "Jan/27/2023" MM/DD/YY OR "2023-01-27" YY/MM/DD
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
          className="flex flex-col lg:w-[70%] lg:flex-row gap-5 relative"
        >
          <div className="flex  flex-col justify-center items-center lg:items-start gap-5 z-10 lg:z-auto">
            <div className="text-sm lg:text-left font-semibold text-blue-600 dark:text-gray-300 text-center w-full">
              Deal Of{" "}
              <span className="text-[#121212] dark:text-gray-300">
                This Month
              </span>
            </div>
            <div className="flex justify-evenly flex-wrap items-center gap-5 dark:text-gray-800">
              <div className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-xs lg:text-sm font-semibold">{Day}</span>
                <span className="text-xs font-sans font-normal md:font-semibold">
                  DAY
                </span>
              </div>
              <div className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-xs lg:text-sm font-semibold">
                  {Hours}
                </span>
                <span className="text-xs font-sans font-normal md:font-semibold">
                  HRS
                </span>
              </div>
              <div className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-xs lg:text-sm font-semibold">
                  {Minutes}
                </span>
                <span className="text-xs font-sans font-normal md:font-semibold">
                  MIN
                </span>
              </div>
              <div className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] rounded-full bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col justify-center items-center">
                <span className="text-xs lg:text-sm font-semibold">
                  {Seconds}
                </span>
                <span className="text-xs font-sans font-normal md:font-semibold">
                  SEC
                </span>
              </div>
            </div>
            <div className="flex flex-col text-center lg:text-left font-semibold">
              <span className="text-sm md:text-lg">New Arrivals</span>
              <span className="text-xs md:text-2xl">Denim Sale</span>
              <p className="font-normal">The denim sale is a great opportunity for shoppers to purchase high-quality denim products at a discounted price. Whether you're in the market for a new pair of jeans, a denim jacket, or any other denim item, this sale has you covered. </p>
            </div>
            <div>
              <Link to='/allProducts/denim'>
              <motion.button
               onClick={() => {
                dispatch(filterCategory({ category: "Denim" }));
              }}
                whileTap={{ scale: 0.8 }}
                className='px-4 py-2 rounded-3xl border overflow-hidden before:content-[""] before:bg-white dark:before:bg-gray-300 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10 text-blue-500 dark:text-gray-800 font-medium font-sans hover:before:w-full before:transition-all  '
              >
                Denim Collection{" "}
                <i class="fa-regular fa-chevron-right translate-y-[0.09rem]"></i>
              </motion.button>
              </Link>{" "}
            </div>
          </div>
         {/* <img className=" w-[16rem] h-[18rem] lg:w-[20rem] lg:h-[22rem]" src={DenimJacket} alt="" /> */}
          <div className="grid place-items-center order-first lg:order-none">
            <div className="transition-all cursor-pointer overflow-hidden w-[16rem] h-[18rem] lg:w-[20rem] lg:h-[22rem] grid place-items-center">
              <img
                className="object-center w-full h-[20rem] transition-all hover:scale-110 object-contain"
                src={DenimJacket}
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
