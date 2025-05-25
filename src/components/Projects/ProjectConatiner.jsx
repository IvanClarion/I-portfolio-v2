import React from 'react'
import ProjectContents from './ProjectContents'
function ProjectConatiner() {
  return (
    <>
    <section className='project-section'>
    <div className='flex flex-col lg:gap-5 gap-2 items-center justify-center'>
        <header className='project-header-container lg:text-3xl text-xl font-semibold'>Projects</header>
        <ProjectContents/>  
    </div>
    </section> 
    </>
  )
}

export default ProjectConatiner
