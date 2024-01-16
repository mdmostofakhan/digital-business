import React from 'react';

const Banner = () => {
    return (
      <div className=''>
          <div className='h-screen mt-8 flex justify-center items-center bg-cover
        bg-[url(https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
         bg-no-repeat'
      >     
       <div className='w-[60%] text-center'>
         <p className='text-white text-6xl  text-center font-bold'>The quick and best easiest way to bring your new business ideas</p>
         <p className='mt-8 text-2xl  text-white'>Amet minim mollit non desrunt ullgmcoest sit qliqua dolar do amet sing. Veelit officia consequat duis enim velit mollit. Exercitation veniam consequot sunt nostrud amet.</p>
         <button className='bg-[rgb(255,208,78)] border text-white text-xl  w-32 p-2 rounded-lg text-center mt-6 '>Join Now</button>
        
       </div>
       </div>
      </div>
    );
};  

export default Banner;