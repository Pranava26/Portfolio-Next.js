import React from 'react'
import ProjectItem from './ProjectItem'
import burgerHutImg from '../../public/assets/projects/burger-hut.png'
import iNotebookImg from '../../public/assets/projects/iNotebook.png'
import ezScribeImg from '../../public/assets/projects/ez-scribe.png'
import connectSpotImg from '../../public/assets/projects/connect-spot.png'
import talkSpaceImg from '../../public/assets/projects/talk-space.png'
import Link from 'next/link'

const Projects = ({ limit = null }) => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>

        {limit === 4 ? (
          <>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem title='Talk Space' technology='MERN' backgroundImg={talkSpaceImg} projectUrl='/talk-space' />
              <ProjectItem title='Connect Spot' technology='Next.js' backgroundImg={connectSpotImg} projectUrl='/connect-spot' />
              <ProjectItem title='Burger Hut' technology='Next.js' backgroundImg={burgerHutImg} projectUrl='/burger-hut' />
              <ProjectItem title='Ez Scribe' technology='React.js' backgroundImg={ezScribeImg} projectUrl='/ez-scribe' />
            </div>
            <div className='mt-8'>
              <Link href="/projects" className='text-gray-600 underline cursor-pointer' >See all projects</Link>
            </div>
          </>
        ) : (
          <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Talk Space' technology='MERN' backgroundImg={talkSpaceImg} projectUrl='/talk-space' />
            <ProjectItem title='Connect Spot' technology='Next.js' backgroundImg={connectSpotImg} projectUrl='/connect-spot' />
            <ProjectItem title='Burger Hut' technology='Next.js' backgroundImg={burgerHutImg} projectUrl='/burger-hut' />
            <ProjectItem title='Ez Scribe' technology='React.js' backgroundImg={ezScribeImg} projectUrl='/ez-scribe' />
            <ProjectItem title='iNotebook' technology='MERN' backgroundImg={iNotebookImg} projectUrl='/iNotebook' />
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects
