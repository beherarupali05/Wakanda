import React from 'react'
import './SocialLogo.css';
import Airbnb from './Airbnb Logo.png';
import Google from './Google Logo.png';
import Slack from './Slack Logo.png';
import Netflix from './NetflixLogo.png';
import Amazon from './Amazon Logo.png';

function SocialLogo() {
  return (
    <div  className='social-div' >
        <img   className='logo-img' src={Airbnb} alt=' ' />
        <img className='logo-img' src={Google} alt=' ' />
        <img className='logo-img' src={Slack} alt=' ' />
        <img className='logo-img'  src={Netflix} alt=' ' />
        <img  className='logo-img' src={Amazon} alt=' ' />
       
    
    </div>
  )
}

export default SocialLogo;
