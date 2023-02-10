
import React from 'react'



import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="nav">
        <ul className='nav-items'>
            <a href="#"> <li className='nav-item'>A PROPOS</li></a>
            <a href="#"> <li className='nav-item'>RÉALISATION</li></a>
            <a href="#"> <li className='nav-item'>EXPERIENCES</li></a>
            <a href="#"> <li className='nav-item'>CONTACT</li></a>
        </ul>
    </nav>
  )
}

export default Navbar