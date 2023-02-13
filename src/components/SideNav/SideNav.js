import React from "react";
import ReactDOM from 'react-dom'

import { CSSTransition } from 'react-transition-group'

const SideNav = ({children, onClick}) => {
  // const [isOpen, setIsOpen] = useState(false);

  const content = (<CSSTransition in={"show"} 
    timeout={5000} 
    classNames="slide-in-left" 
    mountOnEnter unmountOnExit>
    <aside 
    className='sidenav' 
    onClick={onClick}>{children}</aside></CSSTransition>)
    
    return (ReactDOM.createPortal(content, document.getElementById('drawer')))
  }

export default SideNav;
