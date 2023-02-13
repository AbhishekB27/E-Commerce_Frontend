import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/product/productAction";
import TotalSales from "./TotalSales";

const Admin = () => {
  const { userInfo } = useSelector((state) => state.user);
  const disptach = useDispatch()
  const { products, successP,loadingP } = useSelector((state) => state.products);
  const [totalCost, setCost] = useState(0)
  const [totalProducts, setProducts] = useState(0)
  const [totalCustomers, setCustomers] = useState(11)
  useEffect(() => {
    disptach(getProducts())
  }, [])
  
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
        <TotalSales/>
      </div>
    );
};

export default Admin;
