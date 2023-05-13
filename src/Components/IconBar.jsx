import React from 'react'
import { games } from '../../Data/GAMES'

const IconBar = () => {
  return (
    <div>
        
        <h2 className='text-xl font-bold p-2 md:p-8 '>
        <span className='text-primary'>Recently Realeased Games</span> 
      </h2>
        {/* Cointainer */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 py-10'>
           {games.map ((item, idx) => (
            <div key={idx}>
              <img src={item.poster} alt="poster" className='w-[300px] h-[300px] object-cover'/>
              <div>
                <p className='font-bold'>{item.game}</p>
                <p className='text-sm text-gray-500 py-[2px]'>{item.viewers}K Viewers</p>
                <div>
                    <div className='flex'>
                       <p className='text-sm bg-secondary rounded-full inline-block p-[4px]'>{item.tag1}</p> 
                       <p className={item.tag2?.length === 0 ? 'hidden' : 'text-sm bg-secondary rounded-full inline-block p-[5px] ml-1'}>{item.tag2}</p> 
                    </div>
                </div>
              </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default IconBar