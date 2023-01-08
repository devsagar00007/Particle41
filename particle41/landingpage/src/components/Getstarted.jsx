import React from 'react'
import { getstartimage } from '../assets';

 const Getstarted = () => {
  return (
    <div className=' flex flex-col grad text-white pt-[2rem] pb-[3rem] md:flex-row'>
        <div className=' mt-[-5rem] md:pr-[3rem] md:w-[50%] md:mt-0 xl:mt-[-5rem]'>
            <img src={getstartimage} alt="getsstarted" className='w-full h-auto'/>
        </div>
        <div className='px-[2rem] md:w-[50%] md:py-[4rem]'>
            <h1 className='font-semibold  text-4xl '>Let Our Team Strengthen Yours</h1>
            <div className='pt-[1rem]'>
                <p className='text-[15px]'>Reach out to Particle41 today to tell us about your project. <br />
                We’ll provide the team capable of delivering your ideal solution.
                </p>
            </div>
            <button className='bg-cyan-500 px-[2.5rem] py-[1rem] rounded-md font-semibold mt-[3rem]'>Get Started</button>
        </div>
    </div>
  )
}
export default Getstarted;
