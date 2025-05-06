import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
function PublicApp() {

  return (
    <>
    <section className='lg:m-5 m-2'>
      <LandingPage/>
      <AboutMe/>
    </section>
    </>
  )
}

export default PublicApp
