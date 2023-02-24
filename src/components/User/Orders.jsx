import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders, updateOrder } from "../../features/Orders/ordersAction";

const Orders = () => {
  const {ordersL,orders} = useSelector(state => state.orders)
    const {userInfo,userToken} = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
      if(!userToken){
        navigate('/login')
      }
    }, [userToken])
    useEffect(() => {
        dispatch(getOrders());
      }, []);
      const formatedDate = (param)=>{
        const date = new Date(param)
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0');
        return `${day}-${month}-${year}`
      }
  return (
    <div className="lg:translate-y-[-8rem]  translate-y-0 pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl bg-slate-100 dark:bg-gray-900 lg:translate-x-[-0.5rem] md:rounded w-full overflow-auto">
      <div className="text-center text-lg font-semibold md:text-left border-b-2 border-blue-500 dark:border-b-gray-300">
        Orders
      </div>
      <table className="text-sm text-left w-full table-auto text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th className="p-2 md:p-3 text-center">#</th>
            <th className="p-2 md:p-3 text-center">Date</th>
            <th className="p-2 md:p-3 text-center">Product</th>
            <th className="p-2 md:p-3 text-center">Customer</th>
            <th className="p-2 md:p-3 text-center">Amount</th>
            <th className="p-2 md:p-3 text-center">Status</th>
            <th className="p-2 md:p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
        {  ordersL ? Array(10).fill(0).map(item => {
                return(
                    <tr className="">
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                    </tr>
                )
            }) :
          orders.map((item,index) => {
            return(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <td className="p-2 border-b border-gray-400 dark:border-gray-500">{index}</td>
                <td className="p-2 border-b border-gray-400 dark:border-gray-500">{formatedDate(item.createdAt)}</td>
                <td className="p-2 border-b border-gray-400 dark:border-gray-500">{item.products[0].productName}</td>
                <td className="p-2 border-b border-gray-400 dark:border-gray-500">{item.shippingInfo.name}</td>
                <td className="p-2 border-b border-gray-400 dark:border-gray-500">{`Rs.${item.total/100}`}</td>
                <td className="p-2 border-b border-gray-400 dark:border-gray-500"><div className={`py-1 rounded px-1 ${item.dileveryStatus === 'Dilevered' ? 'bg-green-400 text-green-600' : (item.dileveryStatus === 'Canceled' ? 'bg-red-400 text-red-600' : 'bg-yellow-400 text-yellow-600')}`}>{`${item.dileveryStatus.charAt(0).toUpperCase()}${item.dileveryStatus.slice(1)}`}</div></td>
                <td className="p-2 truncate border-b border-gray-400 dark:border-gray-500 text-sm font-sans font-medium"><motion.button disabled={item.dileveryStatus === 'Dilevered' ? true : false} whileTap={{scale:0.8}} transition={{duration:0.1}} onClick={()=>{dispatch(updateOrder({orderData:{dileveryStatus:'Dilevered'},orderId:item._id}))}} className={`${item.dileveryStatus === 'Dilevered' ? 'cursor-not-allowed' : ''} py-1 bg-blue-500 text-white px-2 rounded hover:opacity-90`}>Confirm</motion.button> <motion.button disabled={item.dileveryStatus === 'Dilevered' ? true : false} whileTap={{scale:0.8}} transition={{duration:0.1}} className={`${item.dileveryStatus === 'Dilevered' ? 'cursor-not-allowed' : ''} py-1 bg-red-500 text-white px-2 rounded hover:opacity-90`}>Cancel</motion.button> <motion.button whileTap={{scale:0.8}} transition={{duration:0.1}} className="py-1 bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800 px-2 rounded hover:opacity-90 cursor-not-allowed"> View</motion.button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
