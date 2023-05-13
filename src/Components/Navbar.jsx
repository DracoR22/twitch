'use client'
import React, {Fragment, useState} from 'react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'
import twitchlogo from 'public/twitchlogo.png'
import { Menu, Transition } from '@headlessui/react'
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const Navbar = () => {

const [nav, setNav] = useState(true)
const handleNav = () => {setNav(!nav)}

  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-secondary z-10 border-b border-primary'>

        {/* Left Side */}
        <div className='flex grow items-center justify-start'>
     <Link href='/' className='flex'>
           
              <Image src={twitchlogo} alt="/" width={32} height={32} className='z-10'/> 
           
     </Link>
    <Link href='/'>
     <p className='p-4 font-bold hover:text-[#bf94ff] cursor-pointer'>
     Browse
     </p>
     </Link>
     <div className='p-4'>
     <Menu as='div' className='relative text-left'>
            <div className='flex'>
            <Menu.Button>
          <BsThreeDotsVertical/>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-secondary ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-primary'
                            : 'text-primary',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-primary'
                            : 'text-primary',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-primary'
                            : 'text-primary',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
     </div>
        </div>
        {/* Middle */}
        <div className='hidden md:flex grow-[2] items-center justify-center'>
          <div className='flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-md bg-primary'>
            <div>
              <input type="text" placeholder='Search' className='bg-primary border-none focus:outline-none'/>
            </div>
            <div>
              <BsSearch/>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className='flex grow items-center justify-end'>
          <div className='flex items-center'>
            <Link href='LogIn'>
          <button className='px-4 py-[6px] rounded-md font-bold bg-primary text-primary mr-2  '>
              Log In
            </button>
            </Link>
            <Link href='/SignUp'>
            <button className='px-4 py-[6px] rounded-md font-bold bg-[#5c16c5] text-white mr-2 hover:bg-[#6a11f1] '>
              Sign Up
            </button>
            </Link>
    <BsPerson size={30} onClick={handleNav} className='cursor-pointer'/>
          </div>
          <div className={!nav ? 'absolute top-16 right-4 bg-secondary w-[170px] h-[120px] rounded-md shadow-xl' : 'hidden'}>
        <Link href='/LogIn'><p className='py-3 flex mt-3'> <FiLogIn size={20} className='mr-3 ml-1 mt-1'/> Log In</p> </Link>  
            <p> <ThemeToggle/> </p>
          </div>
        </div>
        {/* Sign Up */}
      
    </div>
  )
}

export default Navbar