import './Navbar.css'
import logo from './lienco3.png';
import { Link } from 'react-router-dom';
import Emergency from '../Emergency/Emergency';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
        </div>

        <ul className='nav-menu'>
            <li><Link to="/Home" activeClassname="active">Home</Link></li>
            <li><Link to="/about" ctiveClassname="active">About Us</Link></li>
            <li><Link to="/assessment">Assessment</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li className='emergency'><Emergency/></li>
        </ul>
      
    </div>
  )
}

export default Navbar
