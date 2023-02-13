import React, { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import {IoMdContact} from "react-icons/io"
import { HiComputerDesktop } from "react-icons/hi2";
import {MdOutlineWorkOutline,MdMail} from "react-icons/md"

import { CSSTransition } from "react-transition-group";

import SideNav from "../SideNav/SideNav";
import NavLinks from "./NavLinks";

import "./Navbar.css";
import Backdrop from "../Backdrop";

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
    console.log(drawerIsOpen);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && (
        <>
          <Backdrop onClick={closeDrawerHandler} />
          <SideNav show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav id="nav__drawer">
              <div className="nav__drawer_cross-icon">
                <GiCrossMark fill="#faf9f9" className="icons" />
              </div>
              <ul className="nav__drawer_items">
                <li className="nav__drawer_item">
                  <IoMdContact className="icon" /> <a href="#about">A PROPOS </a>
                </li>

                <li className="nav__drawer_item">
                  <HiComputerDesktop className="icon"/> <a href="#realisations">RÉALISATIONS</a>
                </li>

                <li className="nav__drawer_item">
                <MdOutlineWorkOutline className="icon"/> <a href="#experiences">EXPERIENCES</a>
                </li>

                <li className="nav__drawer_item">
                  <MdMail className="icon"/> <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </nav>
          </SideNav>
        </>
      )}

      <nav id="nav">
        <div className="nav-burger-icon" onClick={openDrawerHandler}>
          <FaHamburger fill="#faf9f9" />
        </div>
        <ul className="nav-items">
          <a href="#about">
            <li className="nav-item">A PROPOS</li>
          </a>
          <a href="#realisations">
            <li className="nav-item">RÉALISATIONS</li>
          </a>
          <a href="#experiences">
            <li className="nav-item">EXPERIENCES</li>
          </a>
          <a href="#contact">
            <li className="nav-item">CONTACT</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
