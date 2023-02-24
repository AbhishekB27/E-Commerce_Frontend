import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const TotalSales = () => { 
const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
  { name: 'Jul', sales: 3490 },
  { name: 'Aug', sales: 4000 },
  { name: 'Sep', sales: 3000 },
  { name: 'Oct', sales: 2000 },
];    
  return (
    <div className='max-h-[25rem] bg-white dark:bg-gray-300/30 rounded'>
      <ResponsiveContainer width="99%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar className='fill-blue-600 dark:fill-gray-300' dataKey="sales" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default TotalSales 