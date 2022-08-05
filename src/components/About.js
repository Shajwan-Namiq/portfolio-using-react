import React from 'react'

export default function About() {
 return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#457b9d]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Clint, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a design specialist and have a profound knowledge of doing anything related to this platform. Also, I have a particular urgency to learn and gain new skills and knowledge. </p>  
            </div>
          </div>
      </div>
    </div>
  );
}

