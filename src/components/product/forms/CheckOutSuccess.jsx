import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../../features/cart/cartSlice'

const CheckOutSuccess = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(clearCart())
  }, [])
  
  return (
    <div className='min-h-[560px] bg-black/30 p-1 w-full h-full flex justify-center items-end md:items-center'>
        <div className='flex flex-col justify-center items-center gap-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 w-full md:max-w-[40rem] py-5'>
            <div className='bg-blue-600 text-white min-w-[2.5rem] md:min-w-[3rem] min-h-[2.5rem] md:min-h-[3rem] grid place-items-center rounded-full lg: md:text-xl lg:text-2xl'> <i class="fa-solid fa-check"></i> </div>
            <div className='font-sans font-medium text-2xl'> Thanks For Your Order! </div>
            <div className=''> Congratulations! Your purchase was successful. Thank you for choosing to shop with us. We hope you enjoy your purchase and look forward to serving you again in the future. </div>
            <motion.button onClick={()=>{navigate('/')}} whileTap={{scale:0.8}} transition={{duration:0.1}} className='bg-blue-600 text-white rounded-md px-12 font-sans font-medium py-2'>Home</motion.button>
        </div>
    </div>
  )
}

export default CheckOutSuccess