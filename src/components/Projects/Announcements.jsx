import React from 'react'
import { Megaphone } from 'lucide-react';
import { motion } from 'motion/react';
function Announcements() {
  return (
    <>
        <motion.section className='announcements-section'
        initial={{ opacity: 0, y:20}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay:0.2}}
        >
            <div className='flex  items-center gap-4'>
                <Megaphone className='size-8'/>
                <p>This Portfolio is still in development</p>
            </div>
        </motion.section> 
    </>
  )
}

export default Announcements
