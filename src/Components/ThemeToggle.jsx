'use client'
import { useTheme } from "next-themes";
import {HiMoon} from 'react-icons/hi'
import React from 'react'

const ThemeToggle = () => {

const {theme, setTheme} = useTheme()


  return (
    <div className='p-2'>
    {theme === 'dark' ? (
      <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
           <HiMoon className='text-primary text-xl mr-2'/> <p>Dark Theme</p>
      </div>
    ) : (
    <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> 
    <HiMoon className='text-primary text-xl mr-2'/> <p>Light Theme</p>
     </div>
     )}
  </div>
  )
}

export default ThemeToggle