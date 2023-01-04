import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const MyOrders = () => {
  const {loading} = useSelector(state => state.user)
  return (
    <div className="lg:translate-y-[-8rem] translate-y-0 pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl dark:bg-gray-900 bg-gray-200 lg:translate-x-[-0.5rem] md:rounded w-full px-2">
      <div className="md:text-2xl text-lg font-semibold text-left">
        Order Details{" "}
        <i class="fa-solid fa-circle-question text-sm cursor-pointer md:text-base"></i>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(7,1fr)] gap-2 font-semibold text-xs md:text-sm p-2 border-b-2 border-b-gray-300">
          <span className="truncate">Order Id</span>
          <span className="truncate hidden sm:block">Customer</span>
          <span className="truncate">Order</span>
          <span className="truncate">Date</span>
          <span className="truncate hidden sm:block">Price</span>
          <span className="truncate">Deleivery Status</span>
          <span className="truncate hidden sm:block">Payment</span>
        </div>
        <div className="grid hover:bg-gray-300/30 cursor-pointer grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(7,1fr)] gap-2 place-content- font-semibold text-xs md:text-sm p-2">
          <span className="truncate">{!loading ? '#QSADERTF1JK' : <Skeleton baseColor="#c0c2c9" highlightColor="#E2E8F0"/>}</span>
          <span className="truncate hidden sm:block">{!loading ? 'Abhishek' : <Skeleton baseColor="#c0c2c9" highlightColor="#E2E8F0"/>}</span>
          <span className="truncate">{!loading ? 'Nike Jacket' : <Skeleton baseColor="#c0c2c9" highlightColor="#E2E8F0"/>}</span>
          <span className="truncate">{!loading ? '23-12-22' : <Skeleton baseColor="#c0c2c9" highlightColor="#E2E8F0"/>}</span>
          <span className="truncate hidden sm:block">{!loading ? 'Rs.999' : <Skeleton baseColor="#c0c2c9" highlightColor="#E2E8F0"/>}</span>
          <span className="truncate">{!loading ? 'Pending' : <Skeleton baseColor="#c0c2c9" highlightColor="#E2E8F0"/>}</span>
          <span className="truncate hidden sm:block">{!loading ? 'Debit Card' : <Skeleton baseColor="#c0c2c9" highlightColor="#E2E8F0"/>}</span>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
