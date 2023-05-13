import Image from 'next/image'
import React from 'react'
import { channels3 } from '../../Data/CHANNELS'

const LiveItem3 = () => {
  return (
    <div className='p-2'>
   {channels3.map((item, idx) => (
<div key={idx}>
  <img src={item.img} alt="img" className='w-[350px] h-[200px] object-cover '/>
  <div className=' pt-2 '>
    <div className='flex pb-6'>
    <div className='pr-2'>
      <img src={item.profile_img} alt="img" className='w-[60px] h-[60px] rounded-full'/>
    </div>
    <div>
      <p className='text-sm font-bold'>{item.title}</p>
      <p className='text-sm text-gray-400'>{item.user}</p>
      <p className='text-sm text-gray-400'>{item.categorie}</p>
      </div>
      </div>
      </div>
      </div>
   ))}
    </div>
  )
}

export default LiveItem3