import React from 'react'
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function Footer() {
  return (
    <>
    <hr />
    
    <footer className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
        <div className=' flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
               <a href='https://www.facebook.com/share/15ercn67Bm/' alt="" > <MdFacebook  size={24}/></a>
                <FaXTwitter  size={24}/>
                <FaInstagramSquare size={24} />
                <a href='https://www.linkedin.com/in/rahul-pandit-840119346' alt="" ><FaLinkedin  size={24}/></a>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flext flex-col items-center'>
    <p className='text-sm'>
        &copy;2025 Your company. All rights reserved
    </p>
    <p className='text-sm text-center'>Supports Us</p>
            </div>
        </div>

    </div>
    </footer>
    
    </>
  )
}

export default Footer
