import React from 'react'
import {compimage,particlelogo, menuicon} from "../assets";
 const Hero = () => {
  return (
    <div className=' w-screen grad '>
        {/* for smaller screens */}
 
        <div className='  items-end hidden lg:flex py-[2rem]' >
           
                <img src={particlelogo} alt="logo" className='h-[35px] w-[250px] ml-[60px] '  />
            
            <div className='  w-[80%]  flex justify-end items-center mr-[80px]'>     
                <ul className='flex space-x-8 text-white font-bold text-sm mr-[32px]'>
                   <li className='cursor-pointer hover:opacity-70 '>Services</li>
                   <li className='cursor-pointer hover:opacity-70 '>Process</li>
                   <li className='cursor-pointer hover:opacity-70 '>About</li>
                   <li className='cursor-pointer hover:opacity-70 '>Jobs</li>
                   <li className='cursor-pointer hover:opacity-70 '>Insights</li> 
                </ul>
                <button className='text-white btnbg px-[20px] py-[10px] rounded-md font-bold '>Contact</button>
            </div> 
        </div>
         <div className='  h-[70px] flex items-center lg:hidden'>
          <div className='h-full max-w-[250px] min-w-[100px] w-[50%] ml-[30px]  flex items-center justify-between '>
          <img src={particlelogo} alt="logo" className='h-auto  w-full '  />
          </div>
        
         <div className='  w-[80%]  h-full flex justify-end items-center mr-[40px]'>  
         <img src={menuicon} alt="menu" className='h-[35px] w-[50px]  '  />
         </div>
         </div>
         {/* the hero of the webpage */}

         <div className=' flex flex-col-reverse pb-[4rem]  items-center md:flex-row pl-[2rem]'>
         <div className='text-white pt-[2rem] md:w-[40%] md:pt-[6rem] lg:pl-[2rem]'>
            <h1 className='text-[2.125rem]  font-bold mb-4'>Let Our Team <br /> Strengthen Yours</h1>
            <div>
              <p className='text-sm mb-10'>Bring Your next Project to life.</p>
              <button className='bg-cyan-500 font-bold text-sm py-3 px-12 rounded-md'>Call Us</button>
            </div>
          </div>
          <div className='md:w-[60%]'>
            <img src={compimage} alt="computer" className='w-full h-auto' />
          </div>
         
         </div>
    </div>
  ) 
}
export default Hero;
