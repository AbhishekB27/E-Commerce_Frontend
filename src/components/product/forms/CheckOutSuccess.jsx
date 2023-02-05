import React from 'react'

const CheckOutSuccess = () => {
  return (
    <div className='min-h-[560px] bg-black/30 w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-3 bg-white max-w-[40rem] py-5'>
            <div className='bg-blue-600 text-white min-w-[2.5rem] md:min-w-[3rem] min-h-[2.5rem] md:min-h-[3rem] grid place-items-center rounded-full lg: md:text-xl lg:text-2xl'> <i class="fa-solid fa-check"></i> </div>
            <div className='text-gray-800 font-sans font-medium text-2xl'> Thanks For Your Order! </div>
            <div className='text-gray-800'> Congratulations! Your purchase was successful. Thank you for choosing to shop with us. We hope you enjoy your purchase and look forward to serving you again in the future. </div>
            <button className='bg-blue-600 text-white rounded-md px-12 font-sans font-medium py-1'>Home</button>
        </div>
    </div>
  )
}

export default CheckOutSuccess