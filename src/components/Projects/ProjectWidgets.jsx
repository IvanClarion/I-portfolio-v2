import React from 'react'
import { Folder, BriefcaseBusiness } from 'lucide-react';
import { motion } from 'motion/react';
function ProjectWidgets() {
  return (
    <>
        <motion.section className='widgets-section'
        initial={{ opacity: 0, y:20}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        >
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
        </motion.section> 
    </>
  )
}

export default ProjectWidgets
