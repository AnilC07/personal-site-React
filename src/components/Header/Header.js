
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (<div id='header' className='background-wrap'>
    <Navbar />
    <div className="header-container">
        <h1>Anil CELIK</h1>
        <h2>Developpeur Front-end JavaScript</h2>
      </div>
    </div>
  )
}

export default Header