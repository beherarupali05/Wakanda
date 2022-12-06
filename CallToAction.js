import React from 'react'
import './CallToAction.css';
import img from './img-3.png';
function CallToAction() {
  return (
    <div className='call-div' >
       <div  className='call-div-1' >
        <img   className='img-3' src = {img} alt=' ' />
        <div className='call-div-2' > 
        <p  style={{letterspacing:"3px"}} >WHAT ARE YOU WAITING FOR?</p>
        <h2>Find the talent to get<br></br> your business growing</h2>
        <button  className='call-button' >Get started</button>
        </div>
        </div>

    </div>
  )
}

export default CallToAction;