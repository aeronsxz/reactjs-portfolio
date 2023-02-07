import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#030225]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-400'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          Aeron Christian Malicsi
        </h1>
        <h2 className='text-3xl sm:text-5xl text-yellow-400'>
          Front-End Developer.
        </h2>
        <p className='text-[#ffffff] py-4 max-w-[700px]'>
        Aspiring front-end web developer, I enjoy designing and building websites.
        I'm concentrating on learning about and comprehending new technologies. 
        I'm now looking for a job opportunity where I can improve both my technical and soft skills.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-[#030225]'>
            <a href="mailto: aeronmalicsi@gmail.com">Email Me</a>
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
