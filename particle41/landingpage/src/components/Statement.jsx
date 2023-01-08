import React from 'react'
import { statementimg } from '../assets';

 const Statement = () => {
  return (
    <div className='py-[3rem]'>
        <div className='px-[2rem] flex flex-col-reverse md:flex-row'>
         <div className='pt-[3rem] md:w-[50%] md:p-auto '>
            
            <h1 className='font-semibold text-2xl'>Technology Recruitment is Expensive & Time-Consuming</h1>
            <div className='py-[1rem] md:py-[2rem]'>
                
                <p>Your vision shouldn’t have to wait—we’ll lend you the expertise you need to get your next project to market.</p>
            </div>
            <button className='bg-cyan-400 font-bold text-sm py-3 px-12 rounded-md text-white mt-[1rem] md:mt-[2rem]'>Call Us</button>
        </div>
        <div className='md:w-[50%]'>
            <img src={statementimg} alt="statement " className='w-full h-auto'/>
        </div>
       
        </div>
    </div>
  )
}
export default Statement;
