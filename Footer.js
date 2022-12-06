import React from 'react'
import './Footer.css';
import logo from './Logo1.png';
import Social from './Social Links.png';
function Footer() {
  return (
    <div className='footer-div' >
    <div className='footer-div-1' >
    <img   className='footer-logo' src={logo} alt=''/>
    <img className='social-logo' src={Social} alt=' ' />
    <h4    className='copyright' style={{color:"#D9DBE1"}} >Copyright © 2022 Wakanda. All rights reserved</h4>
    </div>
    <div  className='footer-div-2' >
        <ul className='list-1' >
        <h1>Company</h1>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>How it works</li>
            <li>For freelancer</li>
        </ul>
        <ul className='list-2' >
        <h2>Support</h2>
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
        </ul>    
         <div  className='input'>
        <h3>Subscribe to our newsletter</h3> 
        <input className='input1' type="text"placeholder='your email address' />
        </div>
    </div>
    </div>
  )
}

export default Footer;