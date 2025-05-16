import React from 'react'
import HTML from '../assets/home/html-logo.svg'
import Calendar from '../assets/home/calendar.svg'
import CSS from '../assets/home/css.svg'
import JS from '../assets/home/js.svg'
import Tailwind from '../assets/home/tailwind.svg'
import ReactLogo from '../assets/home/react.svg'
import BS from '../assets/home/bs.svg'
import Vite from '../assets/home/vite.svg'
import { motion } from 'framer-motion'
function Skills() {
  return (
<>
        <motion.section className='skill-container-layout text-white'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        >
          <div className='skill-container'>
            <span></span>
            <img src={HTML} alt="" />
            
              <label>Transcription</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2022 - 2023</p>
            </article>
          </div>
          <div className='skill-container'>
            <span></span>
            <img src={JS} alt="" />
            
              <label>Image Annotation</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2023 - 2024</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={CSS} alt="" />
            
              <label>Video Annotation</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2023 - 2024</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={Tailwind} alt="" />
            
              <label>Prompt Evaluator</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2024 - Present</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={ReactLogo} alt=""  />
            
              <label>LLM</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2024 - Present</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={BS} alt=""  />
            
              <label>Generative AI</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2024</p>
            </article>
          </div>
    </motion.section>
</>
  )
}

export default Skills
