import { motion } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../../features/product/productAction'
import { imageCompress } from '../ImageOptimize/imageCompress'

const Products = () => {
    const {products,pLoading,successP} = useSelector(state => state.products)
    const {userInfo,userToken} = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
      if(!userToken){
        navigate('/login')
      }
    }, [userToken])
    useEffect(() => {
        dispatch(getProducts());
      }, []);
    
  return (
<div class="lg:translate-y-[-8rem] translate-y-0 pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl bg-slate-100 dark:bg-gray-900 lg:translate-x-[-0.5rem] md:rounded w-ful overflow-auto">
    <table class="text-sm text-left table-auto text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center'>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Brand
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        {
            pLoading ? Array(1).fill(0).map(item => {
                return(
                    <tr>
                         <th className='grid place-items-center'> <span className="leading-[1] h-[6rem] block w-[90%]"><Skeleton width="100%" height="100%" /></span> </th>
                         <td> <span className="leading-[1] h-[2rem] block w-[10rem]"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                         <td> <span className="leading-[1] h-[2rem] block w-full"><Skeleton width="100%" height="100%" /></span> </td>
                    </tr>
                )
            }) 
            : <tbody>
            {
              products
              .map((item,index) => {
                return(
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                  <th scope="row" class="font-medium grid place-items-center text-gray-900 whitespace-nowrap dark:text-white">
                              <img
                                className=""
                                src={imageCompress(item.imageURL, {
                                  w: 80,
                                  h: 80,
                                })}
                                alt=""
                              />
                  </th>
                    <td class="">
                      {item.productName}
                  </td>
                  <td class="">
                      {item.category}
                  </td>
                  <td class="">
                      {item.brand}
                  </td>
                  <td class="">
                      {item.gender}
                  </td>
                  <td class="">
                      {item.price}
                  </td>
                  <td class="">
                      {item.stock}
                  </td>
                  <td class="space-x-3">
                  <motion.button whileTap={{scale:0.8}} transition={{duration:0.1}} className='outline-none text-blue-600'> <i class="fa-solid fa-pen-to-square"></i> </motion.button>
                  <motion.button whileTap={{scale:0.8}} transition={{duration:0.1}} className='outline-none text-red-600'> <i class="fa-solid fa-trash-can"></i> </motion.button>
                  </td>
              </tr>
                )
              })
            }
          </tbody>
        }
    </table>
</div>

  )
}

export default Products