import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../../public/myphoto.jpg"
import cv from "../../public/RahulPanditCV.pdf"


function Home() {
  return (
    <>
    <div name="Home"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-lg'>Welcome My Portfolio</span>
        <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>Hello, I'm a  </h1>
        {/*<span className='text-red-700 font-bold'>Developer</span> 8*/}
        <ReactTyped
          className='text-red-700 font-bold '
          strings={["Rahul Pandit","Developer", "Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

        </div>
        <br></br>
        <p className=' md:text-md text-justify text-lg'>"Welcome! I'm Rahul Pandit, a creative Web Developer dedicated to
          transforming ideas into digital experience. Here you'll find a showcase of projects the reflect my Journey, skill, and 
          the unique perspective I bring to every challenge."
           </p>
        <p className="text-gray-800 mb-6 text-lg">Download my CV below:</p>
        <a href={cv} download={cv}>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md
           treansition duration-300">
            Download
          </button>
        </a>
        <br />

        {/*Social media icon */}
      
        <div className="flex  items-center flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="space-y-2">
            <h1 className="font-bold ">Avallable on</h1>
            <ul className="flex space-x-5">
            <li>
             <a href="https://www.facebook.com/"
             target="_blank">
              <FaFacebook  className="text-2xl cursor-pointer"/>
              </a>
            </li>
            
            <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <TbBrandLinkedinFilled className="text-2xl cursor-pointer" />
              </a>
            </li>
            <li>
            <a href="https://www.Instagram.com/"
             target="_blank">
              <FaInstagramSquare  className="text-2xl cursor-pointer"/>
              </a>
            </li>
            
            <li>
            <a href="https://www.telegram.com/"
             target="_blank">
              <FaTelegram className="text-2xl cursor-pointer" />
              </a>
            </li>
            </ul>
        </div>
        <div className="space-y-2">
        <h1 className="font-bold">Current Working on</h1>
            <div className="flex space-x-5">
              <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"  />
              <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"  />
              <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"  />
              <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"  />
              </div>
            
        </div>
        </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic} className="rounded-full md:w-[450px] md:h-[450px] "  alt="" />
        </div>
        
        </div>
    </div>
    <hr />

    
    </>
  )
}

export default Home;
