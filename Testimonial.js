import React from 'react'
import './Testimonial.css';
import Card from './Card.png';
function Testimonial() {
  return (
    <div  className='test-div' >
      <p className='test-p' > TESTIMONIAL</p>
      <h8>See what they’re saying <br></br>about us</h8>
      <div  className='test-div-1' >
        <img  className='image-1' src={Card} alt=''/>
        <img  className='image-1' src={Card} alt=''/>
        <img  className='image-1' src={Card} alt=''/>
        <img  className='image-1' src={Card} alt=''/>
        <img  className='image-1' src={Card} alt=''/>
        <img  className='image-1' src={Card} alt=''/>
      </div>
    </div>
  )
}

export default Testimonial