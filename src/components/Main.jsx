import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
          <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Pranava</span></h1>
          <h2 className='py-2 text-gray-700'>A Passionate Web Developer</h2>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a full-stack web developer specializing in building exceptional digital experiences. Currently, I am focused on deepening my understanding of the concepts I have learned so far.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href='https://www.linkedin.com/in/pranava5569/' target='_blank'
              rel='noreferrer' >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedin />
              </div>
            </Link>
            <Link href='https://github.com/Pranava26' target='_blank'
              rel='noreferrer' >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href='mailto:pranavasai26@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
