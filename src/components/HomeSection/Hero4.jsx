import { motion } from "framer-motion";
import React from "react";
import Image1 from "./FeaturedProduct1.jpg";
import Image2 from "./FeaturedProduct2.jpg";
import Image3 from "./FeaturedProduct3.jpg";
import Image4 from "./FeaturedProduct4.jpg";
import Image5 from "./FeaturedProduct5.jpg";
import Image6 from "./FeaturedProduct6.jpg";

const Hero4 = () => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col text-4xl font-poppins ">
        <h1>Our Awesome Products</h1>
        <h1>Choose Best One</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-2">
        <div className="bg-rose-500 lg:h-[20rem] overflow-hidden md:row-span-2 lg:row-auto sm:col-span-2 relative group">
          {" "}1
          <div className="absolute bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity bottom-0 z-10 w-full py-2">
            {" "}
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.1 }}
              className="px-8 py-2 text-lg mt-[0.1rem] font-sans font-medium rounded-3xl bg-slate-100 dark:text-gray-800"
            >
              Buy Now
            </motion.button>{" "}
          </div>{" "}
          <motion.img
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            src={Image5}
            alt=""
          />{" "}
        </div>
        <div className="bg-rose-500 overflow-hidden md:col-span-2 lg:col-auto lg:row-span-2">
          {" "}2
          <motion.img
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            src={Image4}
            alt=""
          />{" "}
        </div>
        <div className="bg-pink-500 lg:h-[20rem] overflow-hidden md:row-span-2 md:col-span-2 lg:col-auto lg:row-auto">
          {" "}3
          <motion.img
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            src={Image1}
            alt=""
          />{" "}
        </div>
        <div className="bg-purple-500 h-[20rem] overflow-hidden lg:col-auto md:col-span-2">
          {" "}4
          <motion.img
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            src={Image2}
            alt=""
          />{" "}
        </div>
        <div className="bg-fuchsia-500 md:h-[20rem] overflow-hidden sm:row-span-2 md:col-span-2 lg:col-auto">
          {" "}5
          <motion.img
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            src={Image3}
            alt=""
          />{" "}
        </div>
        <div className="bg-rose-500 h-[20rem] overflow-hidden lg:row-span-2 lg:col-auto md:col-span-2">
          {" "}6
          <motion.img
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            src={Image6}
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero4;
