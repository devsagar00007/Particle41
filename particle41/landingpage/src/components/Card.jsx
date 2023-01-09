import React from 'react'
import { arrowblue,phoneicon } from '../assets';

 const Card = (props) => {
  return (
    <div className='pb-[2rem] text-center  mt-[50px] border-b-cyan-400 border-solid border-b-[0.6rem] shadow_  pt-[1.5rm] block w-[100%] md:w-[48%] lg:w-[31%] mb-[1rem]'>
        <div className='w-[100%] flex justify-center items-center'>
            <div className={`${props.pr.color} flex justify-center items-center rounded-full h-[100px] w-[100px] mt-[-40px] right-[500px]`} >
                <img src={props.pr.icon} alt="phoneicon"className='w-auto h-[50%]'/>
            </div>
            </div>
            <h1 className='text-2xl pt-[1em]'>{props.pr.heading}</h1>
               <div className='pt-[2rem]'>
                <p>{props.pr.l1} <br />{props.pr.l2}<br /> {props.pr.l3}</p>
               </div>
               <div className='py-[2rem] h-[32px] w-[100px] inline-block'>
                <img src={arrowblue} alt="arrowBlue" className='w-full'/>
               </div>

    </div>
  )
}
export default Card;
