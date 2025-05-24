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
            <div className='flex lg:flex-row flex-col justify-between items-center '>
             <article className='flex flex-col'>
                <label className='lg:text-3xl text-xl  font-semibold'>Connect with me</label>
                <p className='lg:text-base-xl font-semibold mb-2'>Do you want to be my client? Work with me!</p>
                <button>Contact Me</button>
            </article>
           </div>
           
            <form>
                <label className='text-lg font-semibold'>Or let me contact you</label>
                <div className='flex items-stretch justify-end gap-3'>
                <input type="text" placeholder='Email' required className='offer-input'/>
                <button className='rounded-md'>Submit</button>
                </div>
            </form>
            
        </motion.div>
    </section>
    </>
  )
}

export default Offer
