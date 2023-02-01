import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Checkout = () => {
  const {shippingAddress,orderDetails} = useSelector(state => state.checkout)
  return (
    <div className="min-h-[560px] grid place-items-center">
      <div className="w-full grid place-items-center h-full">
        <div className="container grid grid-rows-[6rem_auto] gap-2 w-full md:w-[85%] h-full">
          <div className="bg-pink-30 grid place-items-center">
            <div className="grid grid-cols-3 gap-x-1 w-full">
              <div className="w-full h-1 bg-blue-600 dark:bg-gray-300 relative text-sm md:text-base font-sans font-medium">
                {" "}
                <div className="absolute left-0 md:left-[-1.6rem] md:right-[-1.6rem] md:bottom-[-2.8rem] bottom-[-2.6rem] grid w-fit">
                  {" "}
                  <div className="w-[3rem] h-[3rem] rounded-full bg-blue-600 text-white dark:bg-gray-300 dark:text-gray-800 z-10 grid place-items-center">
                    1
                  </div>{" "}
                  <span>Cart</span>{" "}
                </div>{" "}
                <div className=" absolute right-[-3.4rem] md:right-[-3.8rem] md:bottom-[-2.8rem] bottom-[-2.6rem] grid place-items-center">
                  {" "}
                  <div className={`w-[3rem] h-[3rem] rounded-full ${Object.keys(shippingAddress).length > 0 ? 'dark:bg-gray-300 bg-blue-600 text-white dark:text-gray-800' : 'bg-gray-300 dark:bg-gray-700'} z-10 relative grid place-items-center`}>
                    {" "}
                    <div className={`w-full h-full rounded-full ${Object.keys(shippingAddress).length > 0 ? '' : 'bg-inherit animate-ping'} absolute`}></div>
                    2{" "}
                  </div>{" "}
                  <span>Shipping Details</span>{" "}
                </div>{" "}
              </div>
              <div className={`w-full h-1 ${Object.keys(shippingAddress).length > 0 ? 'dark:bg-gray-300 bg-blue-600' : 'dark:bg-gray-700 bg-gray-300'} relative text-sm md:text-base font-sans font-medium`}>
                {" "}
                <div className=" absolute right-[-1.9rem] md:right-[-2.1rem] md:bottom-[-2.8rem] bottom-[-2.6rem] grid place-items-center">
                  {" "}
                  <div className={`w-[3rem] h-[3rem] rounded-full ${orderDetails.length > 0 ? 'dark:bg-gray-300 bg-blue-600 text-white dark:text-gray-800' : 'bg-gray-300 dark:bg-gray-700'} z-10 relative grid place-items-center`}>
                    {" "}
                    <div className={`w-full h-full rounded-full ${orderDetails.length > 0 ? '' : 'bg-inherit animate-ping'} absolute`}></div>
                    2{" "}
                  </div>{" "}
                  <span>Payment</span>{" "}
                </div>{" "}
              </div>
              <div className={`w-full h-1 ${orderDetails.length > 0 ? 'dark:bg-gray-300 bg-blue-600 text-white dark:text-gray-800' : 'dark:bg-gray-700 bg-gray-300'} relative text-sm md:text-base font-sans font-medium`}>
                {" "}
                <div className=" absolute right-[0rem] md:right-[-1.6rem] md:bottom-[-2.8rem] bottom-[-2.6rem] grid place-items-center">
                  {" "}
                  <div className={`w-[3rem] h-[3rem] rounded-full ${orderDetails.length > 0 ? 'dark:bg-gray-300 dark:text-gray-800 bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700'} z-10 relative grid place-items-center`}>
                    {" "}
                    <div className={`w-full h-full rounded-full ${orderDetails.length > 0 ? '' : 'bg-inherit animate-ping'} absolute`}></div>
                    4{" "}
                  </div>{" "}
                  <span>Success</span>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
          <div className="h-full w-full">
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default Checkout;
