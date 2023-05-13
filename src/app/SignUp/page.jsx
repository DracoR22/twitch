import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center justify-center h-screen'>
        <div className='block border border-secondary w-[600px] h-[500px] bg-secondary rounded-md'>
     <div className='flex justify-center mt-12'>
        <img src="twitchlogo.png" alt="logo" className='h-[70px]'/>
        <p className='font-bold text-3xl pl-3 pt-4'>Join Twitch today</p>
     </div>
     <div className='mt-10 mx-8'>
        <form className='mb-4'>
            <label className='block font-bold pb-2'>Username</label>
            <input className='h-[40px] rounded-md w-full bg-secondary border border-accent' type="email"/>
        </form>

        <form >
            <label className='block font-bold pb-2'>Password</label>
            <input className='h-[40px] rounded-md w-full bg-secondary border border-accent' type="password"/>
        </form>
     </div>
         <div className='flex justify-center mt-12 mx-8'>
           <button className='bg-[#5c16c5] text-white font-bold h-12 w-full rounded-md'>Sign Up</button>
         </div>
            <div className='mt-12 mx-8 flex justify-center'>
                
               <p className='text-[#bf94ff] font-bold'>Already a Twitch user?</p>
               <Link href='/LogIn'>  <p className='text-[#bf94ff] font-bold pl-1'>Log In</p> </Link>
               
            </div>
     </div>
    </div>
  )
}

export default page
