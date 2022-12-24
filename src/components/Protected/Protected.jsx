import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import AccessDenied from './AccessDenied.png'

const Protected = () => {
    const {userToken} = useSelector(state => state.user)
    if(!userToken){
        return <div className='grid place-items-center'>
          <img className='w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem]' src={AccessDenied} alt="" srcset="" />
          <span className='font-semibold text-base text-red-400 md:text-xl'>Unauthorized</span>
        </div>
    }
  return <Outlet/>
}

export default Protected