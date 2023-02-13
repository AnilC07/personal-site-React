import React from 'react'

import './NavLink.css'

const NavLinks = () => {
  return (
    <ul className="nav-items">
          <a href="#about">
            <li className="nav-item">A PROPOS</li>
          </a>
          <a href="#realisation">
            <li className="nav-item">RÉALISATION</li>
          </a>
          <a href="#experiences">
            <li className="nav-item">EXPERIENCES</li>
          </a>
          <a href="#contact">
            <li className="nav-item">CONTACT</li>
          </a>
        </ul>
  )
}

export default NavLinks