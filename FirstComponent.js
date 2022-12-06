import React from 'react'
import './FirstComponent.css';
import Image from './Image.png';
function FirstComponent() {
  return (
    <div className='first_div' >
          <div className='second_div' >
               <h1  className='front-h1'>Recruit top talented freelancer for your<br></br> business</h1>
               <p>Connect you to thoudsands of talented freelancer from <br></br>any industry. You can have the best people in just few <br></br>simple steps.</p>
               <button>Get started</button>
            </div> 
           
            <img className='first-img'  style={{height:"700px"}} src={Image} alt=''/>
            
            
        </div>
   
  )
}

export default FirstComponent;