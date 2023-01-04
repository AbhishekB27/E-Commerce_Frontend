import React from "react";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";
import Fashion from "./images/Fashion.jpeg";
import Hero from "./images/Hero.png";
import Hero2 from "./images/Hero1.png";

const Hero1 = () => {
  return (
    <div className="w-full h-auto lg:h-[560px] grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-2 relative justify-center items-center lg:items-start md:px-6 py-3">
        {/* <img
          className="absolute md:w-[12rem] w-[6rem] md:h-[12rem] h-[6rem] hidden md:block md:top-[-3rem] z-10 lg:top-4 md:left-[-1rem] lg:left-[3.5rem] bag"
          src={Hero2}
        {/* <img
          className="absolute md:w-[10rem] w-[5rem] md:h-[10rem] hidden md:block h-[5rem] z-10 md:top-[-26rem] lg:top-0 md:right-[2rem] lg:right-[-2rem] bag"
          src={Hero}
          alt=""
        /> */}
        <span className="md:text-6xl sm:text-4xl text-3xl font-semibold font-dancingScript z-10">
          Shop The
        </span>
        <span className="md:text-6xl sm:text-4xl text-3xl font-semibold font-dancingScript z-10">
          Best Deal Online
        </span>

        <p className="lg:text-left md:text-center text-base md:text-lg font-[500] font-poppins grid">
          <span className="shines font-semibold text-xs sm:text-sm md:text-lg">
            Women Fashion Sale
          </span>
          Shop your favorite brands, discover new trends, and get the best deals
          with our easy-to-use ecommerce app. Plus, enjoy free shipping on
          orders over $50 and convenient delivery options. Plus, with secure
          payment options and fast shipping, you can shop with confidence and
          ease.
        </p>
        <button className="px-3 py-2 rounded-md bg-gradient-to-l dark:from-gray-300 dark:to-gray-300 from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white dark:text-gray-800 font-sans font-medium">
          Shop Now{" "}
          <i class="fa-regular fa-chevron-right translate-y-[0.05rem]"></i>
        </button>
        <div className="grid grid-cols-3 md:gap-8 gap-4 w-full">
          <div className="py-3 rounded cursor-pointer border-2 transition-all border-blue-200 hover:border-2 hover:border-blue-600 hover:ring-4 ring-blue-300">
            <i class="lg:text-5xl md:text-3xl text-2xl fa-brands fa-cc-visa"></i>
          </div>
          <div className="py-3 rounded cursor-pointer border-2 transition-all border-blue-200 hover:border-2 hover:border-blue-600 hover:ring-4 ring-blue-300">
            <i class="lg:text-5xl md:text-3xl text-2xl fa-brands fa-cc-mastercard"></i>
          </div>
          <div className="py-3 rounded cursor-pointer border-2 transition-all border-blue-200 hover:border-2 hover:border-blue-600 hover:ring-4 ring-blue-300">
            <i class="lg:text-5xl md:text-3xl text-2xl fa-brands fa-cc-paypal"></i>
          </div>
        </div>
      </div>
      <div className="relative grid place-items-center order-first lg:order-last">
        <ImageSlider />
      </div>
      
    </div>
  );
};

export default Hero1;
