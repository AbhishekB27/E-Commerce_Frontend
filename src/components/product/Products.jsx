import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterBrand,
  filterCategory,
  filterSize,
  sortProducts,
} from "../../features/product/productSlice";
import ProductsWrapper from "./ProductsWrapper";

const Products = () => {
  const [layout, setLayout] = useState(true);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(false);
  const [brand, setBrand] = useState(false);
  const [size, setSize] = useState(false);
  const [filterT, setFilter] = useState(false);
  const [checked, setChecked] = useState("");
  const [checkedS, setCheckedS] = useState("");
  const dispatch = useDispatch();

  const { products,filter } = useSelector((state) => state.products);
  // console.log(Array.from(new Set(products.map((item) => item.size).flat())));
  // console.log(Array.from(new Set(products.map((item) => item.brand))));
  useEffect(() => {
  window.scrollTo(0,0) // go to top of page
  },[])
  
  return (
    <div className="w-full h-auto grid place-items-center px-5">
      <div className="w-full max-w-[1384px] p-1 border-none md:border border-gray-300 grid lg:grid-rows-[6rem_auto] md:grid-rows-[5rem_auto] grid-rows-[4rem_auto] gap-2 h-auto min-h-[560px]">
        <div className="bg-blue-600/3 flex max-[350px]:flex-col  justify-between items-center px-3 border-b border-gray-300">
          <div className="lg:text-xl md:text-lg text-sm font-semibold">
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
                    <span className="text-gray-500 bg-slate-300 dark:bg-slate-400 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/3">
                      High Rating
                    </span>
                    <span className="text-gray-500 bg-slate-300 dark:bg-slate-400 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/3">
                      Low Rating
                    </span>
                    <span className="text-gray-500 bg-slate-300 dark:bg-slate-400 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/3">
                      Newest
                    </span>
                    <span
                      onClick={() => {
                        dispatch(sortProducts({ sort: "lowP" }));
                      }}
                      className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30"
                    >
                      Price: Low to High
                    </span>
                    <span
                      onClick={() => {
                        dispatch(sortProducts({ sort: "highP" }));
                      }}
                      className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30"
                    >
                      Price: High to Low
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="w-[2rem] relative group"
              onClick={() => {
                setLayout(!layout);
              }}
            >
              <span className="absolute group-hover:opacity-100 transition-opacity text-xs font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800/50 text-gray-300 px-3 py-1 rounded bottom-[2rem] right-[-1.3rem] opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800/50 dark:before:border-t-gray-300/30">
                Comming Soon
              </span>
              {layout ? (
                <i class="fa-solid lg:text-2xl md:text-xl text-lg fa-grid"></i>
              ) : (
                <i class="fa-solid lg:text-2xl md:text-xl text-lg font-medium cursor-pointer fa-list"></i>
              )}
            </button>
            <i
              onClick={() => {
                setFilter(!filterT);
              }}
              class="fa-solid cursor-pointer fa-filter lg:hidden lg:text-2xl md:text-xl text-lg font-medium"
            ></i>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[18rem_auto] relative gap-1">
          <div
            className={`lg:px-2 p-2 lg:static text-sm md:text-base absolute bg-black/3 ${
              !filterT ? "w-[0rem] opacity-0" : "w-[70%] sm:w-[18rem] opacity-100"
            } lg:w-[18rem] lg:opacity-100 z-10 bg-white dark:bg-gray-800 transition-all right-0 h-auto overflow-auto invisibleScrollBar`}
          >
            <div className="min-h-full text-left bg-purple-5">
              <h3 className="font-semibold border-b border-gray-300 py-1">
                Categories
              </h3>
              <ul className="px-2 py-3 space-y-1 font-sans font-medium text-left">
               <Link to='/allProducts/all'>
               <li
                  // onClick={() => {
                  //   dispatch(filterCategory({ category: "All" }));
                  // }}
                  className="block px-2 py-3 cursor-pointer"
                >
                  All
                </li>
               </Link>
                <Link to='/allProducts/hot'>
                <li
                  // onClick={() => {
                  //   dispatch(filterCategory({ category: "Hot" }));
                  // }}
                  className="block px-2 py-3 cursor-pointer"
                >
                  Hot Collection
                </li>
                </Link>
                <Link to='/allProducts/shoes'>
                <li
                  // onClick={() => {
                  //   dispatch(filterCategory({ category: "Shoes" }));
                  // }}
                  className="block px-2 py-3 cursor-pointer"
                >
                  Shoes
                </li>
                </Link>
                <li
                  onClick={() => {
                    console.log("Coming Soon");
                  }}
                  className="block hover:cursor-not-allowed bg-slate-400/30 px-2 py-3 cursor-pointer"
                >
                  Sunglases
                </li>
                <li
                  onClick={() => {
                    console.log("Coming Soon");
                  }}
                  className="block hover:cursor-not-allowed bg-slate-400/30 px-2 py-3 cursor-pointer"
                >
                  MakeUp
                </li>
              </ul>
              <div className="border-t">
                <h3 className="flex justify-between items-center px-2 py-3 font-sans font-medium">
                  {" "}
                  <span>Color</span>{" "}
                  <button
                  disabled
                  className="cursor-not-allowed"
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
                      {/* Color content here */}
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
                      initial={{ opacity: 0, maxHeight: "0rem" }}
                      animate={{ opacity: 1, maxHeight: "20rem" }}
                      exit={{ opacity: 0, maxHeight: "0rem" }}
                      transition={{ duration: 0.2 }}
                      class="space-y-6 text-left overflow-auto"
                    >
                      {Array.from(
                        new Set(products.map((item) => item.brand))
                      ).map((item) => {
                        return (
                          <div class="flex items-center">
                            <input
                              id={`${item}`}
                              name={`${item}`}
                              onChange={(event) => {
                                setChecked(event.target.name);
                                if (event.target.checked) {
                                  console.log(event.target.name);
                                  dispatch(
                                    filterBrand({ brand: event.target.name })
                                  );
                                }
                              }}
                              type="checkbox"
                              checked={checked === item ? true : false}
                              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                           <Link to='/allProducts/all'>
                           <label
                              for={`${item}`}
                              class="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {item}
                            </label>
                           </Link>
                          </div>
                        );
                      })}

          
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
                    initial={{ opacity: 0, maxHeight: "0rem" }}
                    animate={{ opacity: 1, maxHeight: "20rem" }}
                    exit={{ opacity: 0, maxHeight: "0rem" }}
                    transition={{ duration: 0.2 }}
                    class="space-y-6 text-left"
                    >
                      {Array.from(new Set(products.map((item) => item.size).flat())).map((item) => {
                        return (
                          <div class="flex items-center">
                            <input
                              id={`${item}`}
                              name={`${item}`}
                              onChange={(event) => {
                                setCheckedS(event.target.name);
                                if (event.target.checked) {
                                  console.log(event.target.name);
                                  dispatch(
                                    filterSize({ size: event.target.name })
                                  );
                                }
                              }}
                              type="checkbox"
                              checked={checkedS === item ? true : false}
                              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <Link to='/allProducts/all'>
                            <label
                              for={`${item}`}
                              class="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {item}
                            </label>
                            </Link>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <ProductsWrapper />
        </div>
      </div>
    </div>
  );
};

export default Products;
