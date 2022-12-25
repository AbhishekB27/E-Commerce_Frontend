import React from 'react'
import ErrorP from './ErrorPage.png'
// import ErrorV from './404.mp4'

const ErrorPage = () => {
    const refreshPage = () => {
        window.location.reload()
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center relative'>
        <img src={ErrorP} alt="" />
        {/* <video className='w-[20rem] h-[20rem] hidden lg:block absolute top-0 left-0 rotate-[-25deg]' autoPlay='autoplay' muted loop='loop' src={ErrorV}></video> */}
        <span className='text-lg font-sans font-semibold lg:text-2xl bg-clip-text text-transparent bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF]'>Error Occured</span>
        <div className='text-base'> <span className='text-lg font-sans font-semibold bg-clip-text text-transparent bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF]'>Please</span> <button onClick={refreshPage} className='cursor-pointer underline bg-clip-text text-transparent bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] hover:text-blue-600'>TryAgain</button></div>
    </div>
  )
}

export default ErrorPage