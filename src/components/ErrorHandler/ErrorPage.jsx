import React from 'react'
import ErrorP from './ErrorPage.png'
// import ErrorV from './404.mp4'

const ErrorPage = () => {
    const refreshPage = () => {
        window.location.reload()
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center relative text-black'>
        <img src={ErrorP} alt="" />
        {/* <video className='w-[20rem] h-[20rem] hidden lg:block absolute top-0 left-0 rotate-[-25deg]' autoPlay='autoplay' muted loop='loop' src={ErrorV}></video> */}
       <div className='flex flex-col gap-2 justify-center items-center'>
       <span className='text-lg font-sans font-semibold lg:text-2xl'>Aaaah! Something went wrong</span>
         <span className='text-lg font-sans'>Brace yourself till we get the error fixed. You may also refresh the page or try again later</span>
        <button onClick={refreshPage} className='cursor-pointer px-3 py-1 bg-[#1F3E75] text-white rounded'>Try Again</button>
       </div>
    </div>
  )
}

export default ErrorPage