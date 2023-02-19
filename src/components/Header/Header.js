
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (<div id='header' className='background-wrap'>
    <Navbar />
    <div className="header-container">
        <h1>Anil CELIK</h1>
        <h2>Programmeur junior JavaScript.</h2>
      </div>
      <div class="bubble x1"><img src='/images/js2.png' /></div>
    <div class="bubble x2"><img src='/images/next.png' /></div>
    <div class="bubble x3"><img src='/images/node2.png' /></div>
    <div class="bubble x4"><img src='/images/react-js.png' /></div>
    <div class="bubble x5"><img src='/images/typescript.png' /></div>
    </div>
  )
}

export default Header