import React from 'react'
import cert from '../../assets/home/cert.png'
import {motion} from 'framer-motion'
function Certificates() {
  return (
    <>

      <motion.section className='cert-section'
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.2}}
      >
        <article className='flex justify-center items-center text-2xl font-semibold '>
          <header className='border-b-4 border-prime-pink'>Certificates</header>
        </article>
        <div className='cert-container'>
          <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>React Development Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>
          
           <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>HTML Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

          <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>JavaScript Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

          <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>Bootstrap Framework Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

          <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>Building A Website Certification</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

          <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>CSS Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

          <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>HTML Advance Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

          <div className='cert-card'>
            <figure className='flex justify-center'>
              <img src={cert} alt="certificates" />
            </figure>
            <article>
              <header className='font-semibold capitalize lg:text-base text-sm'>JavaScript Advance Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

        </div>
      </motion.section>
    </>
  )
}

export default Certificates
