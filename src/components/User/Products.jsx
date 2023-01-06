import { motion } from 'framer-motion'
import React from 'react'

const Products = () => {
  return (
<div class="lg:translate-y-[-8rem] translate-y-0 pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl bg-slate-100 dark:bg-gray-900 lg:translate-x-[-0.5rem] md:rounded w-full overflow-auto">
    <table class="text-sm text-left table-auto text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
        <tbody>
          {
            Array(10).fill(0)
            .map((item,index) => {
              return(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                  <td class="px-6 py-4">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    Apple
                </td>
                <td class="px-6 py-4">
                    Male
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    10
                </td>
                <td class="px-6 py-4 flex justify-around items-center">
                <motion.button whileTap={{scale:0.8}} className='outline-none text-blue-600'> <i class="fa-solid fa-pen-to-square"></i> </motion.button>
                <motion.button whileTap={{scale:0.8}} className='outline-none text-red-600'> <i class="fa-solid fa-trash-can"></i> </motion.button>
                </td>
            </tr>
              )
            })
          }
        </tbody>
    </table>
</div>

  )
}

export default Products