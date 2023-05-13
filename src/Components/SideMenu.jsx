import React from 'react'
import {RiMovieLine} from 'react-icons/ri'
import { rec_channels, top_channels } from '../../Data/MOCK_DATA'
import { Didact_Gothic } from 'next/font/google'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'

const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-secondary'>
      <div className='mt-16'>
      <p className='hidden xl:flex uppercase font-bold text-sm pb-4'>Recommended Channels</p>
        <p><RiMovieLine size={20} className='xl:hidden justify-center w-full'/> </p>
      </div>
      {rec_channels.map((item, idx) => (
     <div key={idx} className='inline-flex items-center w-full py-[2px] pb-2'>
        <div className='pr-1'>
            <Image src ={item.avatar} width={50} height={50} alt={item.useraname}/>
        </div>
        <div className='hidden xl:flex justify-between w-full'>
            <div>
                <p>{item.useraname}</p>
                <p className='text-gray-500'>{item.game_name}</p>
            </div>
            <p className='flex items-center'><BsDot size={40} color='red'/>{item.rank}K</p>
        </div>
     </div>
      ))}
       <div className='mt-4'>
      <p className='hidden xl:flex uppercase font-bold text-sm pb-4'>Top Channels</p>
        <p><RiMovieLine size={20} className='xl:hidden justify-center w-full'/> </p>
      </div>
      {top_channels.map((item, idx) => (
        <div key={idx} className='inline-flex items-center w-full py-[2px] pb-2'>
<div className='pr-1'>
            <Image src ={item.avatar} width={50} height={50} alt={item.useraname}/>
        </div>
        <div className='hidden xl:flex justify-between w-full'>
            <div>
                <p>{item.useraname}</p>
                <p className='text-gray-500'>{item.game_name}</p>
            </div>
            <p className='flex items-center'><BsDot size={40} color='red'/>{item.rank}K</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default SideMenu
