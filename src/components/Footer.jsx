import React from 'react'
import { Link } from 'react-router'
import Fb from '../assets/home/fb.svg'
import Github from '../assets/home/github.svg'
import LinkedIn from '../assets/home/linkedin.svg'
function Footer() {
  return (
    <>
    <section className='footer-section'>
    <div className='footer-container'>
        <span className='flex flex-col gap-2'>
            <label className='lg:text-4xl text-2xl font-semibold'>Innovating today for a better tomorrow!</label> 
            <button>Send Me a Feedback</button>  
        </span>
        <span className='flex flex-col items-center text-center'>
            <label className='text-xl font-semibold'>Navigate Here</label> 
            <ul className='flex gap-5'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link tp='projectPage'>
                <li>Projects</li>
                </Link>
                <Link to='/certificatesPage'>
                <li>Certificates</li>
                </Link>
            </ul>  
        </span>
        <span className='flex flex-col justify-center items-center'>
            <label className='text-xl font-semibold'>Socials</label> 
            <span className='flex gap-2 my-2'>
                <img src={Fb} alt="" />
                <img src={Github} alt="" /> 
                <img src={LinkedIn} alt="" />
            </span> 
        </span>
    </div>    
    </section> 
    </>
  )
}

export default Footer
