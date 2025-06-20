import React from 'react'
import Profile from '../assets/home/profile-2.svg'
import { motion } from 'motion/react'
import { Link } from 'react-router'
function AboutMe() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=16kKbPmS6WiMBsGoMmrnlbiNSXJUR29Iz';
    link.download = 'Resume_Clarion_Ivan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
    <section className='aboutme-section'>
      <div className='aboutme-profile'>
        <motion.span
        initial={{height:0, opacity:0}}
        whileInView={{height:'70%', opacity:1}}
        transition={{duration:0.8, delay:0.1}}
        
        ></motion.span>
        <motion.img src={Profile} alt="" className='' 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8, delay:0.8}}
        
        />
      </div>
      <div className='flex flex-col'>
      <motion.div className='about-info-container'
      initial={{x:10, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:0.8, delay:0.1}}
      
      >
            <article>
            <label>About Me</label>
            <p>Hi, I’m Ivan, an enthusiastic IT student with a passion for front-end development. I’m dedicated to honing my skills and creating engaging user experiences.</p>
            
            </article>
            <button onClick={handleDownload}>Download CV</button>
      </motion.div>
      <motion.div className='about-info-layout'
      initial={{y:10, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8, delay:0.8}}
      
      >
          <div  className='about-info-container'>
          <article>
            <label>Education</label>
            <p>Southwestern University Phinma</p>
            <p>Bachelor of Science in Information Technology</p>
            </article>
          </div>
          <div  className='about-info-container'>
          <article>
            <label>Courses</label>
            <p>Progamming Hub</p>
            <p>Web Developing</p>
            
            </article>
            <Link to='/publiccertificates'>
            <button>Certificates</button>
            </Link>
          </div>
      </motion.div>
      </div>
    </section>
    </>
  )
}

export default AboutMe
