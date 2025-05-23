import { motion } from 'motion/react'
import React from 'react'

function Offer() {
  return (
    <>
    <section className='offer-section'>
        <motion.div className='offer-container'
        initial={{y:20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1, delay:0.2}}
        >
            <div className='flex lg:flex-row flex-col w-full justify-between items-center lg:gap-0 gap-2'>
             <article className='flex flex-col'>
                <label className='lg:text-3xl text-xl  font-semibold'>Connect with me</label>
                <p className='lg:text-base-xl font-semibold'>Do you want to be my client? Work with me!</p>
            </article>
            <form>
                <input type="text" placeholder='Email' required className='offer-input'/>
                <button className='rounded-md'>Submit</button>
            </form>
            </div>
        </motion.div>
    </section>
    </>
  )
}

export default Offer
