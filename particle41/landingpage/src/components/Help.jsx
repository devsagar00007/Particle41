import React from 'react'

 const Help = () => {
  return (
    <div className='py-[3rem] px-[2rem] rgrad flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-white font-semibold text-3xl text-center px-[1rem]'>Good People Are Hard To Find</h1>
        </div>
        <div>
            <p className='text-white text-center font-semibold pt-[20px]'>Even once you do ﬁnd them, they’re hard to keep. Often one project needs the technical expertise of more than one person.</p>
        </div>
        <div>
            <p className='text-white text-center font-semibold pt-[18px]'>At Particle41, we believe it shouldn’t be so hard to ﬁnd the right technical talent to make your project a reality.</p>
        </div>
        <div className='py-[2rem]'>
        <button className='bg-white font-bold text-sm  rounded-md  py-[0.8rem] px-[4rem]'>Call Us</button>
        </div>
        
    </div>
  )
}
export default Help;
