import React from 'react'
import { CodeXml } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
function Services() {
  return (
    <>
        <motion.section className=' text-white my-5'
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, delay:0.2}}
        >
            <article className='flex justify-center items-center'>
                <header className='header'>What I Can Offer</header>
            </article>
            <div className='services-layout'>
                <div className='services-card'>
                    <span className='card-container'></span>
                    <CodeXml className='lg:size-10 size-8'/>
                    <article>
                        <label className='font-semibold lg:text-xl text-sm'>Web Development</label>
                        <p className='lg:text-base text-xs '>I can develop  website for your business or portfolio</p>
                    </article>
                </div>

                <div className='services-card'>
                    <span className='card-container'></span>
                    <BrainCircuit className='lg:size-10 size-8'/>
                    <article>
                        <label className='font-semibold lg:text-xl text-sm'>Prompt Evaluator</label>
                        <p className='lg:text-base text-xs '>I can train your Generative AI model and evaluate the prompt's quality </p>
                    </article>
                </div>

                <div className='services-card'>
                    <span className='card-container'></span>
                    <BadgeCheck className='lg:size-10 size-8'/>
                    <article>
                        <label className='font-semibold lg:text-xl text-sm'>Quality Assurance</label>
                        <p className='lg:text-base text-xs'>I can help improve your UI/UX on you current software. I can also improve your AI model</p>
                    </article>
                </div>

                <div className='services-card'>
                    <span className='card-container'></span>
                    <HeartHandshake className='lg:size-10 size-8'/>
                    <article>
                        <label className='font-semibold lg:text-xl text-sm'>Volunteer</label>
                        <p className='lg:text-base text-xs'>Have Innovative Ideas and want to collaborate? What are you waiting for?</p>
                    </article>
                </div>
            </div>
        </motion.section> 
    </>
  )
}

export default Services
