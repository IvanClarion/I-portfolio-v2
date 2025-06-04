import React from 'react'
import { Link } from 'react-router-dom'
import RWSLogo from '../assets/home/rws.svg'
import RemotaskLogo from '../assets/home/remotask.svg'
import { CalendarCheck2 } from 'lucide-react';
import { School } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
function Experience() {
  return (
    <>
      <section className='experience-section my-10'>
            <motion.div className='experience-container'
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.3, delay:0.2}}
            >
                <header className='lg:text-3xl text-center font-semibold'>My Work Experience</header>
                <div className='experience-card'> 
                    <article>
                        <img src={RWSLogo} alt="" className='lg:size-20 size-14'/>
                        <label className='font-semibold lg:text-lg text-base '>RWS Group</label>
                    </article>
                    <article className='gap-2'>
                        <CalendarCheck2/>
                        <p>Present</p>
                    </article>
                </div>

                <div className='experience-card'> 
                    <article>
                        <span className='size-20 bg-prime-grayV2 rounded-full'/>
                        <label className='font-semibold lg:text-lg text-base '>SWU Phinma</label>
                    </article>
                    <article className='gap-2'>
                        <CalendarCheck2/>
                        <p>Present</p>
                    </article>
                </div> 

                 <div className='experience-card'> 
                    <article>
                        <img src={RemotaskLogo} alt="" className='lg:size-20 size-14'/>
                        <label className='font-semibold lg:text-lg text-base '>Remotask</label>
                    </article>
                    <article className='gap-2'>
                        <CalendarCheck2/>
                        <p>6 Months</p>
                    </article>
                </div> 
            </motion.div>
            <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.5}}
            >
                <article className='lg:text-4xl text-xl font-bold gap-3 flex flex-col capitalize'>
                    <header>You can also check my personal projects</header>
                    <span className='button-experience'>Explore Projects
                        <Link to='/publicprojectPage'><button className='btn-exp'><SendHorizontal/></button></Link>
                    </span>
                </article>
            </motion.div>
      </section>
    </>
  )
}

export default Experience
