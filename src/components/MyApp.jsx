import React, { useState } from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import HeroSection from './HomeSection/HeroSection'
import Header from './layout/Header'

const MyApp = () => {
  const [theme, setTheme] = useState(false);
  const isDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
  console.log(isDarkMode)
    useEffect(() => {
    if (isDarkMode) {
        console.log('Dark Mode')
        setTheme(false)
    }
    else{
        setTheme(true)
    }
    }, [])
    useEffect(() => {
        if (!theme) {
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
        }, [theme])
    
  return (
    <div className='min-h-screen h-auto p-1 dark:bg-[#121212] text-[#5465ff] dark:text-gray-300 font-ubuntu '>
        <Header setTheme={setTheme} theme={theme}/>
        <HeroSection/>
    </div>
  )
}

export default MyApp