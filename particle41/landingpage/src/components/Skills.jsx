import React from 'react'
import { skillimg } from '../assets';

 const Skills = () => {
  return (
    <div className='py-[3rem] lg:px-[4rem]'>
        <div className='px-[2rem] flex flex-col-reverse md:flex-row-reverse'>
         <div className='pt-[3rem] md:w-[50%] md:p-auto md:pl-[3rem] lg:pl-[6rem]'>
            <p className='font-bold text-[14px] text-cyan-500'>WE RESCUE PROJECTS PUT IN PERIL BY SKILL SHORTAGES.</p>
            <h1 className='font-bold text-2xl'>Success Requires The Best</h1>
            <div className='py-[1rem] md:py-[2rem]'>
                
                <p>We know how hard it is to hire the right people with the right skills. Lost IP, delays, ballooning costs—all this and more because you hired the wrong person for the job. It’s why we rigorously train our people to fit seamlessly into your team. Everyone is carefully vetted to get you the job done right the first time.</p>
            </div>
            <ul >
                <li>● Avoid expensive and lengthy recruitment processes.</li>
                <li>● Gain an expert focused solely on your project.</li>
                <li>● Maintain full visibility from Day One to project completion.</li>
            </ul>
        </div>
        <div className='md:w-[50%]'>
            <img src={skillimg} alt="statement " className='w-full h-auto'/>
        </div>
       
        </div>
    </div>
  )
}
export default Skills;
