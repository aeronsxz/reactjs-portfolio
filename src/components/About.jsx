import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#030225] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold text-gray-300'>
              <p>Hi. I'm Aeron Malicsi, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent websites that improves
              my technical skills. Although I am a fresh graduate and lack of professioinal experience,
              I can offer my enthusiasm, passion, and desire to learn new things. I am ready to take
              training in order to develop and become more suitable for the job. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
