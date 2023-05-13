'use client'
import React, { useState } from 'react'
import LiveItem from './LiveItem'
import { allChannels } from '../../Data/CHANNELS'
import LiveItem2 from './LiveItem2'
import LiveItem3 from './LiveItem3'
import LiveItem4 from './LiveItem4'

const LiveChannels = () => {
    const [chan, setChan] = useState(allChannels)
  return (
    <div id='live' className=''>
      <h2 className='text-xl font-bold p-2 md:p-8 '>
        <span className='text-[#5c16c5]'>Live Channels</span> we think you'll like
      </h2>
      {/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 py-2'>
       <LiveItem item={chan}/>
      <LiveItem2/>
       <LiveItem3/>
       <LiveItem4/>
      </div>
    </div>
  )
}

export default LiveChannels
