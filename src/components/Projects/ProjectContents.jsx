import React from 'react'
import { Link } from 'react-router-dom'
import CIT from '../../assets/Images/Projects/CIT.png'
import Xaviers from '../../assets/Images/Projects/xaviers.png'
import YourQr from '../../assets/Images/Projects/YourQR.png'
import Git from '../../assets/home/github.svg'
import PortfolioV1 from '../../assets/Images/Projects/portfolio-v1.png'
import CobraTour from '../../assets/Images/Projects/cobratour.png'
function ProjectContents() {
  return (
    <>
        <section className='project-contents'>
            <div>
               <img src={CIT} alt="" />
               <article>
                  <header>Inspire Landing Page</header>
                  <summary>Inspire is an inpspiration Landing Page UI for Blog or research website.</summary>
                </article>
                  <article className='project-other-info'>
                    <span className='flex items-center gap-1'>
                      <label>Project Type:</label>
                      <p>Web App</p>
                    </span>
                    <span className='flex items-center gap-1'>
                      <label>Tech Stack:</label>
                      <p>React JS and Tailwind</p>
                    </span>
                  </article>
                  <span className='span-button'>
                    
                    <button>
                      <Link target='_blank' to="https://inspirecit-u.netlify.app/">Visit </Link>
                    </button>
                    
                    <a target='_blank' href='https://github.com/IvanClarion/Inspire-CITU'><img src={Git} alt="" /></a>
                  </span>
            </div>

            <div>
               <img src={Xaviers} alt="" />
               <article>
                  <header>Xavier's Delightful Treats</header>
                  <summary>My first ever website that I've created. Xavier's is a small business that customize cake.</summary>
                </article>
                  <article className='project-other-info'>
                    <span className='flex items-center gap-1'>
                      <label>Project Type:</label>
                      <p>Web App</p>
                    </span>
                    <span className='flex items-center gap-1'>
                      <label>Tech Stack:</label>
                      <p>HTML5, CSS, JS</p>
                    </span>
                  </article>
                  <span className='span-button'>
                    
                    <button>
                      <Link target='_blank' to="https://ivanclarion.github.io/Xaviers-final-web/">Visit </Link>
                    </button>
                    
                    <a target='_blank' href='https://github.com/IvanClarion/Xaviers-final-web'><img src={Git} alt="" /></a>
                  </span>
            </div>

            <div>
               <img src={YourQr} alt="" />
               <article>
                  <header>Your QR</header>
                  <summary>This Web App will turn your links or URL into QR code</summary>
                </article>
                  <article className='project-other-info'>
                    <span className='flex items-center gap-1'>
                      <label>Project Type:</label>
                      <p>Web App</p>
                    </span>
                    <span className='flex items-center gap-1'>
                      <label>Tech Stack:</label>
                      <p>React JS and Tailwind</p>
                    </span>
                  </article>
                  <span className='span-button'>
                    
                    <button>
                      <Link target='_blank' to="https://yourqrweb.netlify.app/">Visit </Link>
                    </button>
                    
                    <a target='_blank' href='https://github.com/IvanClarion/Qr-code-Portfolio'><img src={Git} alt="" /></a>
                  </span>
            </div>

            <div>
               <img src={PortfolioV1} alt="" />
               <article>
                  <header>Professional Portfolio Version 1</header>
                  <summary>This Web App will turn your links or URL into QR code</summary>
                </article>
                  <article className='project-other-info'>
                    <span className='flex items-center gap-1'>
                      <label>Project Type:</label>
                      <p>Web App</p>
                    </span>
                    <span className='flex items-center gap-1'>
                      <label>Tech Stack:</label>
                      <p>HTML5, Tailwind, JS</p>
                    </span>
                  </article>
                  <span className='span-button'>
                    
                    <button>
                      <Link target='_blank' to="https://app.netlify.com/projects/ivandaleclarion/overview">Visit </Link>
                    </button>
                    
                    <a target='_blank' href='https://github.com/IvanClarion/My-portfolio'><img src={Git} alt="" /></a>
                  </span>
            </div>

            <div>
               <img src={CobraTour} alt="" />
               <article>
                  <header>CobraTour</header>
                  <summary>COBRATOUR is a campus navigation website for Southwestern University PHINMA main campus , helping freshmen or guests easily locate key areas on campus.</summary>
                </article>
                  <article className='project-other-info'>
                    <span className='flex items-center gap-1'>
                      <label>Project Type:</label>
                      <p>Web App</p>
                    </span>
                    <span className='flex items-center gap-1'>
                      <label>Tech Stack:</label>
                      <p>React JS, Tailwind, Firebase, Zapier</p>
                    </span>
                  </article>
                  <span className='span-button'>
                    
                    <button>
                      <Link target='_blank' to="https://cobratour.netlify.app/">Visit </Link>
                    </button>
                    
                    <a target='_blank' href='https://github.com/IvanClarion/Cobratour-v2.01'><img src={Git} alt="" /></a>
                  </span>
            </div>
        </section>
    </>
  )
}

export default ProjectContents
