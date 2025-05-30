import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Offer from './Offer'
import Services from './Services'

import Experience from './Experience'
function PublicApp() {

  return (
    <>
    <section className='lg:mx-20 lg:my-5 mx-2 my-2'>
      <div>
      <LandingPage/>
      <AboutMe/>
      <Skills/>
      <Services/>
      <Experience/>
      
      </div>
    </section>
    </>
  )
}

export default PublicApp
