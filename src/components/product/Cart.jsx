import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrementQuantity, incrementQuantity, removeItem } from "../../features/cart/cartSlice";
import { addItemToCheckout } from "../../features/checkout/checkOutSlice";
import { imageCompress } from "../ImageOptimize/imageCompress";
import PayButton from "./forms/PayButton";
import MissingCart from './MissingCartItem.png';

const Cart = () => {
  const { cart,totalPrice } = useSelector((state) => state.cart);
  console.log(cart)
  const dispatch = useDispatch();
  return (
    <div className="min-h-[560px] grid place-items-center">
      <div className="container h-full grid gap-1 lg:grid-cols-[auto_20rem] grid-rows-[5rem_29.8rem_auto]">
        {cart.length != 0 ? (
          <>
            <div className="flex justify-between items-center px-4 py-2 lg:col-span-2">
              <div className="flex flex-col justify-center items-start">
                {" "}
                <span className="lg:text-xl md:text-lg text-base font-poppins">
                  Your Shopping Bag
                </span>{" "}
                <span className="text-xs md:text-sm font-sans font-medium">
                  {cart.length} Items
                </span>{" "}
              </div>
              <Link to="/allProducts/all">
                <button className="md:px-4 md:py-2 px-3 py-1 bg-blue-600 dark:bg-gray-300 dark:text-gray-700 rounded font-sans font-normal md:font-medium text-white">
                  Continue Shopping
                </button>
              </Link>
            </div>
            <div class="bg-slate-100 dark:bg-gray-900 md:rounded w-full overflow-auto">
              <table class="border-collapse table-auto w-full text-sm text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-300">
                  <tr className="">
                    <th scope="col" class="px-6 py-3 text-center">
                      Item
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Brand
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Attributes
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <motion.tbody layout>
                  <AnimatePresence>
                    {cart.map((item) => {
                      return (
                        <motion.tr
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          key={item.pId}
                          className="hover:bg-slate-300/30 transition-all duration-200 dark:hover:bg-slate-300/30"
                        >
                          <th className="px-4 py-2 font-normal">
                            <img
                              className="translate-x-0 lg:translate-x-8"
                              src={imageCompress(item.imageURL, {
                                w: 80,
                                h: 80,
                              })}
                              alt=""
                            />
                          </th>
                          <td className="text-center font-sans font-medium">
                            {item.productName}
                          </td>
                          <td className="text-center font-sans font-medium">
                            {item.brand}
                          </td>
                          <td className="font-sans font-medium">
                           <div className="flex justify-between items-center flex-col">
                           <div className="flex justify-start gap-1 items-center">
                              Color:{" "}
                              <div
                                style={{ backgroundColor: item.color }}
                                className="ml-1 translate-y-[1px] w-[0.8rem] h-[0.8rem] rounded-full"
                              ></div>
                            </div>
                            <div className="flex justify-start gap-1 items-center">
                              Size: <div>{item.size}</div>
                            </div>
                           </div>
                          </td>
                          <td className="text-center font-sans font-medium space-x-2">
                            <motion.button onClick={()=>{dispatch(decrementQuantity({itemId:item.pId}))}} whileTap={{scale:0.8}} transition={{duration:0.1}} className="dark:bg-gray-300 dark:text-gray-800 bg-white px-2 rounded-full py-1"><i class="fa-regular fa-minus"></i></motion.button><span>{item.quantity}</span><motion.button onClick={()=>{dispatch(incrementQuantity({itemId:item.pId}))}} whileTap={{scale:0.8}} transition={{duration:0.1}} className="dark:bg-gray-300 dark:text-gray-800 bg-white px-2 rounded-full py-1"><i class="fa-regular fa-plus"></i></motion.button>
                          </td>
                          <td className="text-center font-sans font-medium">
                          <i class="fa-light fa-indian-rupee-sign"></i>.{item.price}
                          </td>
                          <td className="text-center">
                            {" "}
                            <button
                            className="hover:text-red-500"
                              onClick={() => {
                                dispatch(removeItem({ pId: item.pId }));
                              }}
                            >
          <i class="fa-solid fa-trash-can cursor-pointer relative group"> <span className="absolute group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded top-[-2rem] right-[-1.5rem] opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">Delete</span> </i>

                              {/* <i class="fa-solid fa-trash-can"></i> */}
                            </button>{" "}
                          </td>
                        </motion.tr>
                      );
                    })}
                  </AnimatePresence>
                </motion.tbody>
              </table>
            </div>
            <div className="bg-slate-100 dark:bg-gray-900 flex flex-col justify-between max-h-[30rem] p-1">
              <div className="flex flex-col justify-between px-2 py-1 rounded-sm dark:text-gray-300 text-blue-600 w-full md:w-auto gap-3 md:gap-0">
                <div className="text-center space-y-2">
                  <span className="font-sans font-medium text-sm">Accepted Payment Options</span>
                  <div className="w-full text-2xl flex gap-2 justify-between items-center">
                  <i class="fa-brands fa-google-pay"></i>
                  <i class="fa-brands fa-amazon-pay"></i>
                  <i class="fa-brands fa-paypal"></i>
                  <i class="fa-solid fa-credit-card"></i>
                  <i class="fa-brands fa-cc-visa"></i>
                  <i class="fa-brands fa-cc-mastercard"></i>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-xs px-2 py-1 md:text-sm w-full md:w-auto justify-center items-start">
                <div className="border-b-2 border-gray-300 w-full text-left font-sans font-medium">Order Summary -:</div>
                <div className="flex w-full justify-between items-center py-1"><span className="font-semibold">Sub Total</span> <span className="font-sans font-medium"><i class="fa-light fa-indian-rupee-sign"></i>{totalPrice}</span> </div>
                <div className="flex w-full justify-between items-center py-1"><span className="font-semibold">Shipping Charges</span> <span className="font-sans">{totalPrice > 4999 ? <span className="bg-green-200 text-green-500 rounded-md text-sm px-[6px] py-[2px]">Free Shipping <i class="fa-solid fa-truck-fast"></i></span> : <><i class="fa-light fa-indian-rupee-sign"></i>99</>}</span> </div>
                <div className="flex w-full justify-between items-center py-"><span className="font-semibold">Coupon Code</span> <input placeholder="COUPON-CODE" className="rounded-md text-base outline-none px-3 py-1 w-[40%] dark:bg-gray-700" type="text" name="" id="" /> </div>
                <div className="flex w-full justify-between items-center py-1"><span className="font-semibold">Total</span> <span className="font-sans font-medium"><i class="fa-light fa-indian-rupee-sign"></i>{totalPrice + (totalPrice > 4999 ? 0 : 99)}</span> </div>
                <PayButton cartItems={cart}/>
              </div>
            </div>
          </>
        ) : (
          <motion.div
          initial={{opacity:0,scale:0}}
        animate={{opacity: 1,scale:1}}
        transition={{duration:0.3}}
          className="grid gap-1 place-items-center col-span-2">
            <img className="w-[30rem] object-contain h-[20rem]" src={MissingCart} alt="" />
            <span className="font-semibold">"Don't Let Your Cart Stay Empty"</span>
            <span className="font-sans">Shop Now and Find Your Next Favorite Item!</span>
            <Link to='/allProducts/all'>
            <motion.button
            whileTap={{scale:0.8}}
            className="bg-blue-600 dark:bg-gray-300 dark:text-gray-700 rounded-md px-4 py-2 text-white font-sans font-medium">
              Shop Now
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cart;
