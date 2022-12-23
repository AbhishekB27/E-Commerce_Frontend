import React from 'react'

const MyOrders = () => {
  return (
    <div className='w-full px-2'>
      <div className='md:text-2xl text-lg font-semibold text-left'>Order Details <i class="fa-solid fa-circle-question text-sm cursor-pointer md:text-base"></i></div>
      <div className='w-full'>
        <div className='grid grid-cols-[repeat(7,1fr)] gap-2 font-semibold text-xs md:text-sm p-2 border-b-2 border-b-gray-300'>
          <span className='truncate'>Order Id</span><span className='truncate'>Customer</span><span className='truncate'>Order</span><span className='truncate'>Date</span><span className='truncate'>Price</span><span className='truncate'>Deleivery Status</span><span className='truncate'>Payment</span>
        </div>
        <div className='grid hover:bg-gray-300/30 cursor-pointer grid-cols-[repeat(7,1fr)] gap-2 place-content- font-semibold text-xs md:text-sm p-2'>
          <span className='truncate'>#QSADERTF1JK</span><span className='truncate'>Abhishek</span><span className='truncate'>Nike Jacket</span><span className='truncate'>23-12-2022</span><span className='truncate'>Rs.999</span><span className='truncate'>Pending</span><span className='truncate'>Debit Card</span>       
        </div>
      </div>
    </div>
  )
}

export default MyOrders