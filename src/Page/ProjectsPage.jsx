import React from 'react'
import ProjectConatiner from '../components/Projects/ProjectConatiner'
import ProjectsWidgets from '../components/Projects/ProjectWidgets'
import Announcements from '../components/Projects/Announcements'
function ProjectsPage() {
  return (
    <>
    <section className='lg:mx-20 lg:my-5 mx-2 my-2'>
    <div>
    <ProjectsWidgets/>
    <Announcements/>
    <ProjectConatiner/>
    </div>
    </section>
    </>
  )
}

export default ProjectsPage
