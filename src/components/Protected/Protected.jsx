import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Protected = () => {
    const {userToken} = useSelector(state => state.user)
    if(!userToken){
        return <div>Unauthorized</div>
    }
  return <Outlet/>
}

export default Protected