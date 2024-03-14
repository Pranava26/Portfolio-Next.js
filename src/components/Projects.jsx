import React from 'react'
import ProjectItem from './ProjectItem'
import netflixImg from '../../public/assets/projects/netflix.png'
import nikeImg from '../../public/assets/projects/nike.png'
import iNotebookImg from '../../public/assets/projects/iNotebook.png'
import homyzImg from '../../public/assets/projects/homyz.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='iNotebook' technology='MERN' backgroundImg={iNotebookImg} projectUrl='/iNotebook'/>
            <ProjectItem title='Homyz - Real Estate' technology='ReactJS' backgroundImg={homyzImg} projectUrl='/homyz'/>
            <ProjectItem title='Nike Footwear' technology='ReactJS, Tailwind CSS' backgroundImg={nikeImg} projectUrl='/nike'/>
            <ProjectItem title='Netflix Clone' technology='HTML, CSS, JavaScript' backgroundImg={netflixImg} projectUrl='/netflix'/>
        </div>
      </div>
    </div>
  )
}

export default Projects
