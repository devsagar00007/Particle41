import React from 'react'
import Card from './Card';
import { features } from '../constants';

 const Happen = () => {
  return (
    <div className='px-[0.5rem] py-[6rem]'>
        <h1 className=' font-semibold text-[33px] text-center'>The Right People Make it Happen</h1>
        <div className='pt-[1.5rem]'>
            <p className='text-center'>Get help with projects at any stage of development.</p>
        </div>
        <div className='w-[100%] flex flex-wrap justify-between px-[2rem] m-auto py-[2rem]'>
        <Card pr={features[0]}/>
        <Card pr={features[1]}/>
        <Card pr={features[2]}/>
        </div>
       
    </div>
  )
}
export default Happen;
