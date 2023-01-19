import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { imageCompress } from "../ImageOptimize/imageCompress";

const Cart = () => {
    const { cart } = useSelector(state => state.cart)
  return (
    <div className="min-h-[560px] grid place-items-center">
      <div className="container h-full grid gap-1 grid-rows-[5rem_auto_auto]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-start">
            {" "}
            <span className="lg:text-xl md:text-lg text-base font-poppins">
              Your Shopping Bag
            </span>{" "}
            <span className="text-xs md:text-sm font-sans font-medium">
              {cart.length} Items
            </span>{" "}
          </div>
          <button className="md:px-4 md:py-2 px-3 py-1 bg-blue-600 dark:bg-gray-300 dark:text-gray-700 rounded font-sans font-normal md:font-medium text-white">
            Continue Shopping
          </button>
        </div>
        <div class="bg-slate-100 dark:bg-gray-900 md:rounded w-full overflow-auto">
          <table class="text-sm text-left table-auto text-gray-500 dark:text-gray-400 w-full">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tbody>
                {
                    cart.map(item => {
                        return(
                            <tr className="">
                                <td className=""><img className="translate-x-0 lg:translate-x-8" src={imageCompress(item.imageURL,{w:80,h:80})} alt="" /></td>
                                <td className="text-center font-sans font-medium">{item.productName}</td>
                                <td className="text-center font-sans font-medium">{item.brand}</td>
                                <td className="text-center font-sans font-medium grid translate-y-4">
                                    <div className="flex justify-center items-center">Color: <div style={{backgroundColor:item.color}} className="ml-1 translate-y-[1px] w-[0.8rem] h-[0.8rem] rounded-full"></div></div>
                                    <div>Size: {item.size}</div>
                                </td>
                                <td className="text-center font-sans font-medium">{item.quantity}</td>
                                <td className="text-center font-sans font-medium">Rs.{item.price}</td>
                                <td className="text-center"> <button><i class="fa-solid fa-trash-can"></i></button> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
          </table>
        </div>
        <div className="bg-fuchsia-300">3</div>
      </div>
    </div>
  );
};

export default Cart;
