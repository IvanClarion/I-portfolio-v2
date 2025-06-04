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
            <Link to='/publiccontact'>
            <button>Send Me a Feedback</button> 
            </Link> 
        </span>
        <span className='flex flex-col items-center text-center'>
            <label className='text-xl font-semibold'>Navigate Here</label> 
            <ul className='flex gap-5'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/publicprojectPage'>
                <li>Projects</li>
                </Link>
                <Link to='/publiccertificates'>
                <li>Certificates</li>
                </Link>
            </ul>  
        </span>
        <span className='flex flex-col justify-center items-center'>
            <label className='text-xl font-semibold'>Socials</label> 
            <span className='flex gap-2 my-2'>
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
        </span>
    </div>    
    </section> 
    </>
  )
}

export default Footer
