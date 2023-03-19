import React, {  useState } from "react";
import { RxCross1,RxHamburgerMenu } from "react-icons/rx";
import {IoMdContact} from "react-icons/io"
import { HiComputerDesktop } from "react-icons/hi2";
import {MdOutlineWorkOutline,MdMail} from "react-icons/md"

import SideNav from "../SideNav/SideNav";

import "./Navbar.css";
import Backdrop from "../Backdrop";

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
    console.log(drawerIsOpen);
    document.body.style.overflow = "hidden"; 
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {drawerIsOpen && (
        <>
          <Backdrop onClick={closeDrawerHandler} />
          <SideNav show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="nav__drawer">
              <div className="nav__drawer-cross-icon">
                <RxCross1 fill="#faf9f9" className="icons" />
              </div>
              <ul className="nav__drawer-items">
                <li className="nav__drawer-item">
                  <IoMdContact className="icon" /> <a href="#about">A PROPOS </a>
                </li>

                <li className="nav__drawer-item">
                  <HiComputerDesktop className="icon"/> <a href="#realisations">RÉALISATIONS</a>
                </li>

                <li className="nav__drawer-item">
                <MdOutlineWorkOutline className="icon"/> <a href="#experiences">EXPERIENCES</a>
                </li>

                <li className="nav__drawer-item">
                  <MdMail className="icon"/> <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </nav>
          </SideNav>
        </>
      )}

      <nav className="nav">
        <div className="nav__burger-icon" onClick={openDrawerHandler}>
          <RxHamburgerMenu  />
        </div>
        <ul className="nav__items">
          <a href="#about">
            <li className="nav__item">A PROPOS</li>
          </a>
          <a href="#realisations">
            <li className="nav__item">RÉALISATIONS</li>
          </a>
          <a href="#experiences">
            <li className="nav__item">EXPERIENCES</li>
          </a>
          <a href="#contact">
            <li className="nav__item">CONTACT</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
