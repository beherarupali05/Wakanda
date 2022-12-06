import React from 'react'
import './Navbar.css';
import logo from './Logo.png'

function Navbar() {
  return (
   
   <nav>
    <input type="checkbox" id='check' name="" value="" ></input>
    <label for="check"  id='checkbtn' ><i class="fa fa-bars" ></i></label>
    <div className='navBar'>
      <div className='logo'>
       <img src={logo} alt=''/>
    </div>
   
       <ul className='nav' >
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact</li>
       <a href='/'>Get Started</a>
       </ul>
       </div>
       </nav>
      
  )
}

export default Navbar;