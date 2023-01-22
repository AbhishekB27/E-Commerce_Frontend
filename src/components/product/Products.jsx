import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, sortProducts } from "../../features/product/productSlice";
import ProductsWrapper from "./ProductsWrapper";

const Products = () => {
  const [layout, setLayout] = useState(true);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(false);
  const [brand, setBrand] = useState(false);
  const [size, setSize] = useState(false);
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch()

  const {products} = useSelector(state => state.products)
  console.log(Array.from(new Set(products.map(item=>item.brand))))
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
                    <span className="text-gray-500 bg-slate-300 dark:bg-slate-400 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/3">
                      High Rating
                    </span>
                    <span className="text-gray-500 bg-slate-300 dark:bg-slate-400 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/3">
                      Low Rating
                    </span>
                    <span className="text-gray-500 bg-slate-300 dark:bg-slate-400 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/3">
                      Newest
                    </span>
                    <span onClick={()=>{dispatch(sortProducts({sort:'lowP'}))}} className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30">
                      Price: Low to High
                    </span>
                    <span onClick={()=>{dispatch(sortProducts({sort:'highP'}))}} className="text-gray-500 block px-4 py-2 text-sm text-left cursor-pointer hover:bg-slate-300/30">
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
            } lg:w-[20rem] lg:opacity-100 z-10 bg-white dark:bg-gray-800 transition-all right-0 h-auto overflow-auto invisibleScrollBar`}
          >
            <div className="min-h-full text-left bg-purple-5">
              <h3 className="font-semibold border-b border-gray-300 py-1">
                Categories
              </h3>
              <ul className="px-2 py-3 space-y-1 font-sans font-medium text-left">
              <li onClick={()=>{dispatch(filterCategory({category:'All'}))}} className="block px-2 py-3 cursor-pointer">All</li>
                <li onClick={()=>{dispatch(filterCategory({category:'Hot'}))}} className="block px-2 py-3 cursor-pointer">
                  Hot Collection
                </li>
                <li onClick={()=>{dispatch(filterCategory({category:'Jacket'}))}} className="block px-2 py-3 cursor-pointer">Jacket</li>
                <li onClick={()=>{dispatch(filterCategory({category:'Shoes'}))}} className="block px-2 py-3 cursor-pointer">Shoes</li>
                <li onClick={()=>{console.log("Coming Soon")}} className="block hover:cursor-not-allowed bg-slate-400/30 px-2 py-3 cursor-pointer">Sunglases</li>
                <li onClick={()=>{console.log("Coming Soon")}} className="block hover:cursor-not-allowed bg-slate-400/30 px-2 py-3 cursor-pointer">MakeUp</li>
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
                      {
                        Array.from(new Set(products.map(item=>item.brand))).map(item => {
                          return(
                            <div class="flex items-center">
                        <input
                          id={`${item}`}
                          name={`${item}`}
                          onChange={(event)=>{
                            if(event.target.checked){
                              console.log(event.target.name)
                            }
                          }}
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for={`${item}`}
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          {item}
                        </label>
                      </div>
                          )
                        })
                      }

                      {/* <div class="flex items-center">
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
                      </div> */}
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
          <ProductsWrapper/>
        </div>
      </div>
    </div>
  );
};

export default Products;
