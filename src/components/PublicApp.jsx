import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Skills from './Skills'
function PublicApp() {

  return (
    <>
    <section className='lg:m-5 m-2'>
      <LandingPage/>
      <AboutMe/>
      <Skills/>
    </section>
    </>
  )
}

export default PublicApp
