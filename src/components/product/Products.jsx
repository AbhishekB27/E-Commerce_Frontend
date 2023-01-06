import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ProductImg from "./ProductImg.jpg";

const Products = () => {
  const [layout, setLayout] = useState(true);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(false);
  const [brand, setBrand] = useState(false);
  const [size, setSize] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <div className="w-full flex flex-col justify-start h-auto items-start px-5">
      <div className="w-full max-w-[1384px] p-1 border border-gray-300 grid lg:grid-rows-[6rem_auto] md:grid-rows-[5rem_auto] grid-rows-[4rem_auto] gap-2 h-auto min-h-[560px]">
        <div className="bg-blue-600/3 flex justify-between items-center px-3 border-b border-gray-300">
          <div className="lg:text-3xl md:text-2xl text-lg font-semibold">
            New Arrivals
          </div>
          <div className="flex font-sans justify-center items-center gap-8">
            <div className=" font-medium relative">
              {" "}
              Sort{" "}
              <i
                onClick={() => {
                  setVisible(!visible);
                }}
                class="fa-solid font-normal cursor-pointer fa-chevron-down"
              ></i>
              <AnimatePresence>
                {visible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-40 bg-white right-0 z-10 origin-top-right  rounded-md shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <span className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30">
                      Most Popular
                    </span>
                    <span className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30">
                      Best Rating
                    </span>
                    <span className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30">
                      Newest
                    </span>
                    <span className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30">
                      Price: Low to High
                    </span>
                    <span className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30">
                      Price: High to Low
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="w-[2rem]"
              onClick={() => {
                setLayout(!layout);
              }}
            >
              {layout ? (
                <i class="fa-solid lg:text-2xl md:text-xl text-lg fa-grid"></i>
              ) : (
                <i class="fa-solid lg:text-2xl md:text-xl text-lg font-medium cursor-pointer fa-list"></i>
              )}
            </button>
            <i
              onClick={() => {
                setFilter(!filter);
              }}
              class="fa-solid cursor-pointer fa-filter lg:hidden lg:text-2xl md:text-xl text-lg font-medium"
            ></i>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[20rem_auto] relative gap-1">
          <div
            className={`lg:px-2 p-2 lg:static text-sm md:text-base absolute bg-black/3 ${
              filter ? "w-[0rem] opacity-0" : "w-[18rem] opacity-100"
            } lg:w-[20rem] lg:opacity-100 transition-all right-0 h-full overflow-auto invisibleScrollBar`}
          >
            <div className="min-h-full text-left bg-purple-5">
              <h3 className="font-semibold border-b border-gray-300 py-1">
                Categories
              </h3>
              <ul className="px-2 py-3 font-sans font-medium text-left">
                <li className="block px-2 py-3 cursor-pointer">
                  Hot Collection
                </li>
                <li className="block px-2 py-3 cursor-pointer">Jacket</li>
                <li className="block px-2 py-3 cursor-pointer">Shoes</li>
                <li className="block px-2 py-3 cursor-pointer">Sunglases</li>
                <li className="block px-2 py-3 cursor-pointer">MakeUp</li>
              </ul>
              <div className="border-t">
                <h3 className="flex justify-between items-center px-2 py-3 font-sans font-medium">
                  {" "}
                  <span>Color</span>{" "}
                  <button
                    onClick={() => {
                      setColor(!color);
                    }}
                  >
                    {" "}
                    {color ? (
                      <i class="fa-solid fa-minus"></i>
                    ) : (
                      <i class="fa-solid fa-plus"></i>
                    )}{" "}
                  </button>{" "}
                </h3>
                <AnimatePresence>
                  {color && (
                    <motion.div
                      initial={{ opacity: 0, width: "0" }}
                      animate={{ opacity: 1, width: "100%" }}
                      exit={{ opacity: 0, width: "0" }}
                      transition={{ duration: 0.2 }}
                      class="space-y-6 text-left"
                    >
                      <div class="flex items-center md:text-base text-xs">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          White
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Beige
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Blue
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Brown
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Green
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-5"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Purple
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t">
                <h3 className="flex justify-between items-center px-2 py-3 font-sans font-medium">
                  {" "}
                  <span>Brand</span>{" "}
                  <button
                    onClick={() => {
                      setBrand(!brand);
                    }}
                  >
                    {" "}
                    {brand ? (
                      <i class="fa-solid fa-minus"></i>
                    ) : (
                      <i class="fa-solid fa-plus"></i>
                    )}{" "}
                  </button>{" "}
                </h3>
                <AnimatePresence>
                  {brand && (
                    <motion.div
                      initial={{ opacity: 0, width: "0" }}
                      animate={{ opacity: 1, width: "100%" }}
                      exit={{ opacity: 0, width: "0" }}
                      transition={{ duration: 0.2 }}
                      class="space-y-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Mocchi
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Nike
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Bata
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Addidas
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Puma
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-5"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          Campus
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t">
                <h3 className="flex justify-between items-center px-2 py-3 font-sans font-medium">
                  {" "}
                  <span>Size</span>{" "}
                  <button
                    onClick={() => {
                      setSize(!size);
                    }}
                  >
                    {" "}
                    {size ? (
                      <i class="fa-solid fa-minus"></i>
                    ) : (
                      <i class="fa-solid fa-plus"></i>
                    )}{" "}
                  </button>{" "}
                </h3>
                <AnimatePresence>
                  {size && (
                    <motion.div
                      initial={{ opacity: 0, width: "0" }}
                      animate={{ opacity: 1, width: "100%" }}
                      exit={{ opacity: 0, width: "0" }}
                      transition={{ duration: 0.2 }}
                      class="space-y-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          XS
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          S
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          M
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          L
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          XL
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-5"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          XXL
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="h-auto w-full text-gray-800 dark:text-gray-300 p-1 grid grid-cols-[repeat(auto-fit,_minmax(12rem,1fr))] gap-1 border-l border-gray-300">
            {Array(100)
              .fill(0)
              .map((item) => {
                return (
                  <div class="border flex flex-col justify-between border-gray-300 group relative h-auto w-full cursor-pointer rounded">
                    <img
                      className="w-full h-[60%] object-center object-cover transition-all"
                      src={ProductImg}
                      alt=""
                    />
                    <div className="p-1 font-sans font-medium relative">
                      {/* <div className="absolute text-[11px] font-sans font-medium bg-white px-2 py-[2px] rounded-xl top-[-1.8rem] text-green-500">Free Shipping</div> */}
                      <span>Pink Feather Jacket</span>
                      <p className="truncate text-sm font-poppins">"Stay warm and stylish with our women's jackets, available in a variety of colors and designs."</p>
                      <div className="flex flex-col"> <span className="line-through text-xs">Rs.1999</span><span>Rs.1299</span> </div>
                    <motion.button whileTap={{scale:0.8}} className="bg-blue-500 dark:bg-gray-300 dark:text-gray-800 text-white w-full py-1 rounded">Buy Now</motion.button>
                    </div>
                    <div class="absolute text-white top-0 flex h-0 w-full items-center justify-between overflow-hidden rounded-t-xl bg-black/3 px-2 transition-all duration-200 group-hover:h-[20%]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
