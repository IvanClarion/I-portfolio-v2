import React from 'react'
import Profile1 from '../assets/home/profile-1.svg'
import HTML from '../assets/home/html.svg'
import Ai from '../assets/home/ai.svg'
import arrow from '../assets/home/arrow.svg'
import Fb from '../assets/home/fb.svg'
import Github from '../assets/home/github.svg'
import LinkedIn from '../assets/home/linkedin.svg'
import {motion} from 'framer-motion'
import { Link } from 'react-router'
function LandingPage() {
  return (
  <>
     <section className='landing-page-section'>
          <div className='landing-page-container'>
          <motion.article
          initial={{opacity:0, x:-20}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.2}}
          
          >
            <label >Ivan Dale Clarion</label>
            <p>Hello! I am Ivan and welcome to my portfolio.</p>
            <button>Explore Projects</button>
            <span className='flex gap-2 items-center justify-center my-2'>
              <Link target='_blank' to='https://web.facebook.com/ivan.clarion.2024'>
              <img src={Fb} alt="" />
              </Link>
              <Link target='_blank' to='https://github.com/IvanClarion'>
              <img src={Github} alt="" /> 
              </Link>
              <Link target='_blank' to='https://www.linkedin.com/in/ivandaleclarion'>
              <img src={LinkedIn} alt="" />
              </Link>
            </span>
          </motion.article>
          <motion.img src={Profile1} alt="" className='lg:size-fit size-1/2'
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1, delay:0.7}}
          
          />
          <motion.div className='landing-quick-view'
          initial={{opacity:0, x:20}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:1.3}}
          
          >
            <div className='landing-quick-view-container'>
             <img src={HTML} alt="" /> 
            <div className='landing-quick-view-container-span'>
            Web Developing
            <img src={arrow} alt="" />
            </div>
            </div>
            <div className='landing-quick-view-container'>
              <img src={Ai} alt="" />
            <div className='landing-quick-view-container-span'>
            Data Annotation
            <img src={arrow} alt="" />
            </div>
            </div>
          </motion.div>
          </div>
        </section>
        </>
  )
}

export default LandingPage
