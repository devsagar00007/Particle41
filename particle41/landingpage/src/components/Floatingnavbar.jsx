import {useEffect,useState} from 'react'
import { particle41bluelogo,burgericonblack } from '../assets';

 const Floatingnavbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
  
    <div className={` bg-white py-[0.5rem] px-[2rem] w-full lg:px-[4rem] ${scrollPosition <= 0 ? 'hidden':'slide'} fixed`} id ="myid">
        <div className='flex'>
        <div className='w-[50%] max-w-[180px] my-auto'>
        <img src={particle41bluelogo} alt="logo" className='w-full h-auto'/>
        </div>
        <div className='ml-auto my-auto lg:hidden'>
            <img src={burgericonblack} alt="menuicon" className='h-[40px] '/>
        </div>
        <div className='hidden lg:flex ml-auto space-x-9'>
            <ul className='space-x-9 flex items-center justify-end font-semibold text-[14px]'>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Process</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Jobs</li>
                <li className='cursor-pointer'>Insights</li>
            </ul>
              <button className='text-white font-semibold bg-cyan-600 px-[0.8rem] py-[0.4rem] rounded-md text-[14px]'>Contact</button>
        </div>
        </div>
     
    </div>
  )
}
export default Floatingnavbar;
