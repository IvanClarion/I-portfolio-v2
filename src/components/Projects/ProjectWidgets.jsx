import React from 'react'
import { Folder, BriefcaseBusiness } from 'lucide-react';
function ProjectWidgets() {
  return (
    <>
        <section className='widgets-section'>
            <div className='widgets-container'>
                <article>
                    <Folder className='text-white lg:size-8 size-6'/>
                    <header>Total Projects</header>
                </article>
                <span className='widgets-circular-bar'>
                    <label>6</label>
                </span>
            </div>
            <div className='widgets-container'>
                <article>
                    <BriefcaseBusiness className='text-white lg:size-8 size-6'/>
                    <header> Work Availability</header>
                </article>
                <span className='widgets-circular-bar-v2'>
                    <label>Contract</label>
                </span>
            </div>
        </section> 
    </>
  )
}

export default ProjectWidgets
