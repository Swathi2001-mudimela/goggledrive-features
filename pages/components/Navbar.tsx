import Link from 'next/link';
import Image from 'next/image';

import React from 'react'

const Navbar = () => {
  return (
    <nav className="  flex  items-center justify-between px-2 lg:px-5 fixed top-5 left-0 right-0 " style={{height:"5vh"}}>
        <Link href='/'>
            <div className='flex items-center cursor-pointer'>
                <Image src="/Google-Drive-Logo.png" height={50} width={70} alt="not"/>
                <span className='font-medium text-3xl text-drive-blue'>G </span>
                <span className='font-medium text-3xl text-drive-red '>o </span>
                <span className='font-medium text-3xl text-drive-yellow'>o </span>
                <span className='font-medium text-3xl text-drive-blue'>g </span>
                <span className='font-medium text-3xl text-drive-green'>l </span>
                <span className='font-medium text-3xl text-drive-red'>e </span>
                <span className=' ml-2 text-3xl text-drive-gray'>Drive </span>
            </div>

        </Link>
        <ul className="flex items-center">
           <li className='mr-6 font-medium text-drive-gray'>
             <a href="/features" className='  text-2xl text-drive-gray'>Features</a>
           </li>
           <li className='mr-6 font-medium text-drive-gray'>
             <a href="/whygoogledrive" className='  text-2xl text-drive-gray'>Why Google Drive</a>
           </li>
        </ul>
        <ul className='flex items-center'>
            
           <li className='mr-6 font-medium text-white'>
               <a href="/Signuppage" className='text-2xl bg-drive-blue  rounded-lg px-3  py-2 border-drive-blue-2'>Sign Up</a>
           </li>
        </ul>

    </nav>
  )
}

export default Navbar