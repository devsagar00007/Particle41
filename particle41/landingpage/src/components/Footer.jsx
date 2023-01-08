import React from 'react'
import {facebookiconblack,twittericonblack,linkedinblackicon} from "../assets"

 const Footer = () => {
  return (
    <div className='bg-cyan-400 pt-[3rem] px-[2rem] md:px-[4rem] '>
        <div className='font-semibold'>
            <ul className=' space-x-8 text-center md:space-x-16'>
                <li className='inline-block'>Services</li>
                <li className='inline-block'>Process</li>
                <li className='inline-block'>Jobs</li>
                <li className='inline-block'>About</li>
                <li className='inline-block'>Insights</li>
                <li className='inline-block'>Contact</li>
               
            </ul>
           
        </div>
        <div className='flex justify-center space-x-4 pt-[2rem]'>
            <img src={facebookiconblack} alt="" className='h-[18px]'/>
            <img src={linkedinblackicon} alt="" className='h-[18px]'/>
            <img src={twittericonblack} alt="" className='h-[18px]'/>

           
        </div>
        <hr className='border-black mt-[2rem]' />
        <div className='text-xs pt-[2rem] pb-[2rem]'>
            <ul className=' space-x-2 text-center  list-disc'>
                <li className='inline-block'>&copy; Copyright 2023 Particle41</li>
                <li className="inline-block before:content-['•']"> All Rights Reserved</li>
                <li className="inline-block before:content-['•']"> Privacy Policy</li>
                <li className="inline-block before:content-['•']"> Sight By <b>Evangalist</b></li>              
            </ul>
           
        </div>
    </div>
  )
}
export default Footer;
