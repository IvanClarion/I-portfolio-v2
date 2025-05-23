import React, { useState } from 'react'
import HTML from '../assets/home/html-logo.svg'
import Calendar from '../assets/home/calendar.svg'
import CSS from '../assets/home/css.svg'
import JS from '../assets/home/js.svg'
import Tailwind from '../assets/home/tailwind.svg'
import ReactLogo from '../assets/home/react.svg'
import BS from '../assets/home/bs.svg'
import Vite from '../assets/home/vite.svg'
import DataAnnotation from './DataAnnotationSkills'
import { motion } from 'framer-motion'
function Skills() {
    const [web, setWeb] = useState(true);
    const [data, setData] = useState(false);
    const webButton =(e)=>{
        setWeb(true);
        setData(false);
    }
    const dataButton =(e)=>{
        setWeb(false);
        setData(true);
    }
  return (
<>

    <motion.section className='skill-section'
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    >
        <div className='skill-section-heading'>
        <label>Skills</label>
        <div className='button-container'>
            <button onClick={webButton} className={web? 'bg-prime-orange':''}>Web Developing</button>
            <button onClick={dataButton} className={data? 'bg-prime-orange': ''} >Data Annotation</button>
        </div>
        </div>
    {web && (
        <motion.section className='skill-container-layout'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        
        >
          <div className='skill-container'>
            <span></span>
            <img src={HTML} alt="" />
            
              <label>HTML</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2023 - Present</p>
            </article>
          </div>
          <div className='skill-container'>
            <span></span>
            <img src={JS} alt="" />
            
              <label>JavaScript</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2023 - Present</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={CSS} alt="" />
            
              <label>CSS</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2023 - Present</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={Tailwind} alt="" />
            
              <label>Tailwind CSS</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2024 - Present</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={ReactLogo} alt=""  />
            
              <label>REACT</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2024 - Present</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={BS} alt=""  />
            
              <label>Bootstrap</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2024</p>
            </article>
          </div>

          <div className='skill-container'>
            <span></span>
            <img src={Vite} alt=""  className='size-20' />
            
              <label>Vite</label>
              <article className='flex flex-col items-center gap-1'>
              <img src={Calendar} alt="" className='size-6' />
              <p>2024-Present</p>
            </article>
          </div>
        </motion.section>
        
        )}
        
        {data &&(
        <DataAnnotation/>
        )}
    </motion.section>
    
</>
  )
}

export default Skills
