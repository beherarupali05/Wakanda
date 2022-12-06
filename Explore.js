import React from 'react'
import Group from './Group 3.png';
import './Explore.css';
function Explore() {
  return (
    <div  className='explorediv' >
     
        <div className='explorediv_1' >
        <h1 className='exp-h1' >Explore and hire talent <br></br>from our platform</h1>
        <p>We've got experts for every industry - all under one roof! You can<br></br> find everything from WordPress developers to Graphic designers to <br></br>copywriters and many more at Wakanda.</p>
        <button>Explore now</button>
        </div>

        <img  className='portrait' src={Group} alt=''/> 
    </div>
  )
}

export default Explore;