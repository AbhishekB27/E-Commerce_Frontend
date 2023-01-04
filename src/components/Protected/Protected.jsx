import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import AccessDenied from './AccessDenied.png'

const Protected = () => {
    const {userToken} = useSelector(state => state.user)
    if(!userToken){
        return <div className='grid place-items-center min-h-[560px]'>
          <img className='w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem]' src={AccessDenied} alt="" srcset="" />
          <div className='font-semibold text-base grid text-red-400 md:text-xl'>Unauthorized 
          <Link to='/'><span className='hover:text-blue-600 underline text-sm'>Go Back</span></Link>
           </div>
        </div>
    }
  return <Outlet/>
}

export default Protected