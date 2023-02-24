import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import WomenF1 from "./images/WomenF1.png";

const Hero2 = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div ref={ref} className="grid place-items-center">
          {
             isInView && <motion.div
             initial={{opacity:0,scale:0}}
             animate={{opacity: 1,scale:1}}
             transition={{duration:0.5}} className="space-y-5">
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
            </div>
          </motion.div>
          }
        </div>
       <div ref={ref} className="grid place-items-center order-first lg:order-none">
          {
           isInView && <motion.div
           initial={{opacity:0,scale:0}}
           animate={{opacity: 1,scale:1}}
           transition={{duration:0.5}}
            className="text-center md:text-right space-y-5">
              <h1 className="text-xl font-semibold text-center md:text-left text-gray-800 dark:text-gray-300">
                New Collection of <span className="text-blue-600 dark:text-gray-300">AB_Store</span>
              </h1>{" "}
              <p className="text-base font-poppins font-medium">
                Get ready to step up your style game with our latest fashion
                collection. From trendy clothing and accessories to shoes and
                bags, we have everything you need to create on-point outfits for
                every occasion.
              </p>
              <Link to='/allProducts/all'>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className='px-4 py-2 rounded-3xl border overflow-hidden before:content-[""] before:bg-blue-200 dark:before:bg-gray-700 dark:before:bg-gray-700 before:h-full before:w-[50%] relative before:absolute before:top-0 before:left-0 z-10 before:-z-10 dark:text-gray-300  font-medium font-sans hover:before:w-full before:transition-all  '
              >
                New Collection{" "}
                <i class="fa-regular fa-chevron-right translate-y-[0.09rem]"></i>
              </motion.button>
              </Link>
            </motion.div>
          }
        </div>  
      </div>
    </div>
  );
};

export default Hero2;
