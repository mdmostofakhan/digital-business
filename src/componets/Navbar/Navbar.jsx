import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
   const text = ['Home', 'Features', 'About Us', 'services', 'Blog', 'Contact']
   
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   
   function  onToggleMenu () {
       setIsMenuOpen(!isMenuOpen);
   }

    return (
        <div className='mt-8 mx-auto'>
            <div className='flex justify-around items-center'>      
              <div className='flex justify-center items-center gap-4'>
             <div className='relative'>
             <div className='flex justify-center items-center rotate-45 bg-[rgb(33,161,234)] w-20 h-20 p-3 rounded-lg '>
            
            </div>
            <h1 className='text-5xl text-white absolute top-[16%] left-[30%]  font-bold'>p</h1>
             </div>
               <h1 className='text-5xl text-black font-bold'>Primrose</h1>  
              </div>

               <div className={`md:static  absolute bg-white  top-${isMenuOpen ? '-100' : '[-100%]'} md:w-auto w-full flex items-center px-5`}>
               <Icon onClick={onToggleMenu} className='text-3xl cursor-pointer absolute right-2 bottom-0   md:hidden' icon={isMenuOpen ? 'mingcute:close-fill' : 'ic:round-menu'} />
               <div className='flex md:flex-row flex-col md:items-center md:gap-10 gap-6 text-2xl font-medium text-black'>
                   {
                    text?.map((text,index) => (
                        <div key={index}> 
                            <Link className='hover:text-[rgb(33,161,234)] transition-all duration-300' to= {`/${text}`}>{text}</Link>
                           
                        </div>
                    ))
                   }
                   
               </div>
               </div>
               <div className='flex items-center gap-6 '>
                    <button className='border py-1 px-5 rounded-lg text-white bg-[rgb(33,161,234)]'>Sign in</button>
                    <Icon onClick={onToggleMenu} className='text-3xl cursor-pointer md:hidden' icon={isMenuOpen ? 'mingcute:close-fill' : 'ic:round-menu'} />
                   </div>
            </div>
       
        </div>
    );
};

export default Navbar;