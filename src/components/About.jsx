import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>I graduated with a degree in engineering, fueled by an innate passion for technology and a natural affinity for working with computers. My journey into programming began modestly in 2023, as I delved into HTML and CSS to develop small projects. What initially seemed like a casual pursuit quickly transformed into a deep-seated love for programming.</p>
            <p className='py-2 text-gray-600'>Captivated by the intricacies of coding, I eagerly expanded my skill set. Venturing into JavaScript, I was enthralled by its capacity to infuse websites with interactivity. This drive for knowledge led me to explore additional web development technologies and frameworks. Today, my focus centers around honing my expertise in React.js and Next.js, where I invest significant time crafting innovative projects.</p>
            <p className='py-2 text-gray-600'>While frontend development remains my primary domain, I've also delved into backend technologies such as Node.js, Express.js, and MongoDB. This holistic approach equips me to tackle multifaceted challenges in web development, ensuring that I remain at the forefront of technological innovation.</p>
            <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects.</p>
            </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src="/assets/about.jpg" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
