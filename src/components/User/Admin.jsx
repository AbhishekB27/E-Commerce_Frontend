import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../features/Orders/ordersAction";
import { getProducts } from "../../features/product/productAction";
import TotalSales from "./TotalSales";

const Admin = () => {
  const { userInfo,userToken } = useSelector((state) => state.user);
  const disptach = useDispatch()
  const { products, successP,loadingP } = useSelector((state) => state.products);
  const [totalCost, setCost] = useState(0)
  const [totalProducts, setProducts] = useState(0)
  const [totalCustomers, setCustomers] = useState(11)
  useEffect(() => {
    disptach(getProducts())
  }, [])
  const {ordersL,orders} = useSelector(state => state.orders)
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
  useEffect(() => {
    if(successP){
      const totalCost = products.reduce((acc,next) => acc + next.price,0)
      const totalproducts = products.length
      setCost(totalCost)
      setProducts(totalproducts)
    }
  }, [products])
  
  if (userInfo.role === 0)
    return (
      <div className="lg:translate-y-[-8rem] translate-y-0 p-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl dark:bg-gray-900 bg-gray-200 lg:translate-x-[-0.5rem] md:rounded w-full grid gap-2 space-y-1 md:space-y-0">
      <div className="text-center text-lg font-semibold md:text-left border-b-2 border-blue-500 dark:border-b-gray-300">
        Dashboard
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-start">
        <div className="bg-white/90 dark:bg-gray-300/30 flex-grow basis-[200px] h-[12rem] rounded">
          <div className="text-2xl md:text-4xl bg-blue-600/30 dark:bg-gray-700/90 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] grid place-items-center rounded-lg md:rounded-2xl m-2"> <i class="hover:scale-110 transition-all fa-solid fa-person"></i> </div>
          <div className="text-left px-1 font-sans grid font-medium text-sm text-gray-300 dark:text-gray-400"><span>Total Customers</span>
          <span className="text-xl md:text-3xl font-semibold text-blue-600 dark:text-gray-300">{totalCustomers}</span>
          </div>
        </div>
        <div className="bg-white/90 dark:bg-gray-300/30 flex-grow basis-[200px] h-[12rem] rounded">
          <div className="text-2xl md:text-4xl bg-blue-600/30 dark:bg-gray-700/90 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] grid place-items-center rounded-lg md:rounded-2xl m-2"> <i class="hover:scale-110 transition-all fa-solid fa-shirt"></i> </div>
          <div className="text-left px-1 font-sans grid font-medium text-sm text-gray-300 dark:text-gray-400"><span>Total Products</span>
          <span className="text-xl md:text-3xl font-semibold text-blue-600 dark:text-gray-300">{loadingP ? 0 : totalProducts}</span>
          </div>
        </div>
        <div className="bg-white/90 dark:bg-gray-300/30 flex-grow basis-[200px] h-[12rem] rounded">
          <div className="text-2xl md:text-4xl bg-blue-600/30 dark:bg-gray-700/90 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] grid place-items-center rounded-lg md:rounded-2xl m-2"> <i class="hover:scale-110 transition-all fa-solid fa-store"></i> </div>
          <div className="text-left px-1 font-sans grid font-medium text-sm text-gray-300 dark:text-gray-400"><span>Total Orders</span>
          <span className="text-xl md:text-3xl font-semibold text-blue-600 dark:text-gray-300">28</span>
          </div>
        </div>
        <div className="bg-white/90 dark:bg-gray-300/30 flex-grow basis-[200px] h-[12rem] rounded">
          <div className="text-2xl md:text-4xl bg-blue-600/30 dark:bg-gray-700/90 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] grid place-items-center rounded-lg md:rounded-2xl m-2"> <i class="hover:scale-110 transition-all fa-solid fa-sack-dollar"></i> </div>
          <div className="text-left px-1 font-sans grid font-medium text-sm text-gray-300 dark:text-gray-400"><span>Total Cost</span>
          <span className="text-xl md:text-3xl font-semibold text-blue-600 dark:text-gray-300"><i class="fa-regular fa-indian-rupee-sign text-lg mr-1"></i>{loadingP ? 0 : totalCost}</span>
          </div>
        </div>
      </div>
      <h2 className='text-left text-xl font-semibold px-1'>Total Sales:</h2>

        <TotalSales/>
        <div className="text-center text-lg font-semibold md:text-left border-b-2 border-blue-500 dark:border-b-gray-300">
        Orders
      </div>
    <div className="md:rounded w-full overflow-auto">
   
      <table className="text-sm text-left w-full table-auto text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th className="p-2 md:p-3 text-center">#</th>
            <th className="p-2 md:p-3 text-center">Date</th>
            <th className="p-2 md:p-3 text-center">Product</th>
            <th className="p-2 md:p-3 text-center">Customer</th>
            <th className="p-2 md:p-3 text-center">Pyament</th>
            <th className="p-2 md:p-3 text-center">Amount</th>
            <th className="p-2 md:p-3 text-center">Status</th>
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
          orders.filter((item,index) => index < 5).map((item,index) => {
            return(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <td className="truncate p-2 border-b border-gray-400 dark:border-gray-500">{index}</td>
                <td className="truncate p-2 border-b border-gray-400 dark:border-gray-500">{formatedDate(item.createdAt)}</td>
                <td className="truncate p-2 border-b border-gray-400 dark:border-gray-500">{item.products[0].productName}</td>
                <td className="truncate p-2 border-b border-gray-400 dark:border-gray-500">{item.shippingInfo.name}</td>
                <td className="truncate p-2 border-b border-gray-400 dark:border-gray-500 font-sans font-medium text-green-500">{item.paymentStatus.charAt(0).toUpperCase() + item.paymentStatus.slice(1)}</td>
                <td className="truncate p-2 border-b border-gray-400 dark:border-gray-500">{`Rs.${item.total/100}`}</td>
                <td className="truncate p-2 border-b border-gray-400 dark:border-gray-500"><div className={`py-1 rounded px-1 ${item.dileveryStatus === 'Dilevered' ? 'bg-green-400 text-green-600' : (item.dileveryStatus === 'Canceled' ? 'bg-red-400 text-red-600' : 'bg-yellow-400 text-yellow-600')}`}>{`${item.dileveryStatus.charAt(0).toUpperCase()}${item.dileveryStatus.slice(1)}`}</div></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
   </div>
      </div>
    );
};

export default Admin;
