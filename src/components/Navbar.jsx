import React from 'react'
import Home from '../assets/home/home.svg'
import Porojects from '../assets/home/projects.svg'
import Certificates from '../assets/home/cert.svg'
import Contacts from '../assets/home/contact.svg'
import { NavLink } from 'react-router'
import { useLocation } from 'react-router'
import {motion} from 'motion/react'
function Navbar() {
    const location = useLocation();
  return (
    <>
      <motion.nav
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      >
        <label className='uppercase text-xl p-2 mx-2 lg:block hidden'>Clarion</label>
           <ul>
            <NavLink to='/'>
            <li className={location.pathname==='/'? 'active-hover':''}>
                <img src={Home} alt="" />
                <label>Home</label>
            </li>
            </NavLink>
            <NavLink to='/publicprojectPage'>
            <li className={location.pathname==='/publicprojectPage'? 'active-hover':''}>
                <img src={Porojects} alt="" />
                <label>Projects</label>
            </li>
            </NavLink>
            <NavLink to='/publiccertificates'>
            <li className={location.pathname==='/publiccertificates'? 'active-hover':''}>
                <img src={Certificates} alt="" />
                <label>Certificates</label>
            </li>
            </NavLink>
            <NavLink to='/publiccontact'>
            <li className={location.pathname==='/publiccontact'? 'active-hover':''}>
                <img src={Contacts} alt="" />
                <label>Contacts</label>
            </li>
            </NavLink>
           </ul>
      </motion.nav>
    </>
  )
}

export default Navbar
