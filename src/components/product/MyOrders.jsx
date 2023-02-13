import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../features/Orders/ordersAction";
import { imageCompress } from "../ImageOptimize/imageCompress";
import Orders from "./Orders.png";

const MyOrders = () => {
  const { orderL, orders } = useSelector((state) => state.orders);
  const { userInfo,userToken} = useSelector( (state) => state.user );
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    if(userInfo){
      dispatch(getOrders({cId:userInfo._id}));
    }
  }, [userInfo]);
  useEffect(() => {
    if(!userToken){
      navigate('/login')
    }
  })
  
  return (
    <div className="min-h-[560px] flex justify-center items-start">
      <div className="container">
        <div className="text-left w-full borde">
          <div className="text-lg md:text-xl lg:text-3xl mb-4 border-b-2 border-blue-600 dark:border-gray-300 py-1 font-sans font-medium">
            {" "}
            Order Summary{" "}
          </div>
          {orders.length != 0 ? (
            orders.map((order) => {
              const date = new Date(order.createdAt).toLocaleDateString();
              return (
                <div className="grid max-[1024px]:grid-cols-1 text-sm md:text-base grid-cols-2 gap-2">
                  <div className="grid gap-2">
                    {order.products.map((item) => {
                      return (
                        <div className="flex h-fit bg-gray-300/30 dark:bg-gray-900/70 justify-start items-start gap-3">
                          <img
                            src={`${imageCompress(item.imageURL, {
                              w: 100,
                              h: 100,
                            })}`}
                            alt=""
                          />
                          <div>
                            <div className="font-sans">
                              <span className="font-medium">ProductName:</span>{" "}
                              <span>{item.productName}</span>
                            </div>
                            <div className="font-sans flex gap-1 flex-wrap">
                              <span className="font-medium flex gap-2">
                                Status:{" "}
                                <div className=" grid place-items-center bg-yellow-200 w-[5rem] rounded text-yellow-500 dark:text-yellow-400">
                                  {order.dileveryStatus.toUpperCase()}
                                </div>
                              </span>
                              <span className="font-medium flex gap-2">
                                Payment:
                                <div className=" w-[5rem] grid place-items-center rounded bg-green-500/30 text-green-500">
                                  {order.paymentStatus.toUpperCase()}
                                </div>
                              </span>
                            </div>
                            {/* <div className="font-sans">
                              {" "}
                              <span className="font-medium">Size:</span>{" "}
                              <span>{item.size}</span>{" "}
                            </div> */}
                            <div className="font-sans">
                              {" "}
                              <span className="font-medium">
                                Quantity:
                              </span>{" "}
                              <span>{item.quantity}</span>{" "}
                            </div>
                            <div className="font-sans">
                              {" "}
                              <span className="font-medium">Price:</span>{" "}
                              <i class="fa-regular fa-indian-rupee-sign"></i>{" "}
                              {item.price}{" "}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col justify-between gap-4 p-1 pt-0 min-h-[30rem]">
                    <div className="font-sans">
                      <div className="font-medium border-b leading-[1] border-blue-600 dark:border-gray-300 pb-1">
                        Shipping Address
                      </div>
                      <div className="grid">
                        <span>
                          {" "}
                          <span className="font-medium">
                            Customer #Id:
                          </span>{" "}
                          {order.customerId}{" "}
                        </span>
                        <span>
                          {" "}
                          <span className="font-medium">
                            Customer Name:
                          </span>{" "}
                          {order.shippingInfo.name}{" "}
                        </span>
                        <span>{order.shippingInfo.address.line1},</span>
                        <span>
                          {order.shippingInfo.address.city},{" "}
                          {order.shippingInfo.address.postal_code}
                        </span>
                        <span>
                          {order.shippingInfo.address.state},{" "}
                          {order.shippingInfo.address.country.includes("IN")
                            ? "India"
                            : order.shippingInfo.address.country}
                        </span>
                        <span>
                          <span className="font-medium">P.No:</span>{" "}
                          {order.shippingInfo.phone},
                        </span>
                        <span>
                          <span className="font-medium">Created:</span> {date}
                        </span>
                        <span>
                        {" "}
                        <span className="font-medium">Payment #Id:</span>{" "}
                        {order.paymentIntentId}
                      </span>
                      </div>
                    </div>
                    <div className="self-end w-full font-sans">
                      
                      <div className="flex justify-between">
                        {" "}
                        <span className="font-medium">Sub Total</span>{" "}
                        <span>
                          <i class="fa-regular fa-indian-rupee-sign"></i>
                          {order.subTotal / 100}
                        </span>{" "}
                      </div>
                      <div className="flex justify-between">
                        {" "}
                        <span className="font-medium">Shipping Amount</span>{" "}
                        <span>
                          <i class="fa-regular fa-indian-rupee-sign"></i>
                          {order.shippingAmount / 100}
                        </span>{" "}
                      </div>
                      <div className="flex justify-between py-4 border-t border-blue-600 dark:border-gray-300">
                        {" "}
                        <span className="font-medium">Total</span>{" "}
                        <span>
                          <i class="fa-regular fa-indian-rupee-sign"></i>
                          {order.total / 100}
                        </span>{" "}
                      </div>
                      <motion.button whileTap={{scale:0.8}} transition={{duration:0.1}} className="px-4 py-3 relative group w-full rounded bg-blue-600 dark:bg-gray-300 text-white dark:text-gray-800">
                        Track Your Order
                        <span className="absolute group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded top-[-2rem] right-[16rem] opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">Comming Soon</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <div>No Orders</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
