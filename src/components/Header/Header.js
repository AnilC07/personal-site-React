
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (<div className='header'>
    <Navbar />
    <div className="header__container">
        <h1>Anil CELIK</h1>
        <h3>Developpeur Front-end JavaScript</h3>
      </div>
    </div>
  )
}

export default Header