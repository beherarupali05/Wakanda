import React from 'react'
import './Feature.css';


function Feature() {
    return (
        
        <div className='main' >
            <div className='heading' >
                <p style={{ color: "white" , letterSpacing: "3px"}} >FEATURE</p>
                <h1 style={{ color: "white" ,letterSpacing: "-0.5px",textAlign:"center",fontSize:"48px"}}  >The benefit of using<br></br> our platform</h1>
            </div>

            <div className='content_div' >
            <div className='content_1' >
            <img className='img_1'  src={require("./../Components/Icon.png")} alt = ' ' /><br></br><br></br><br></br>
                <h1 style={{ color: "white" ,fontSize:"24px"}} >Professional & Fast</h1>
                <p style={{ color: "white"}} >Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you.</p>

            </div>
            <div className='content_2' >
            <img   className='img_2' src={require("./../Components/Icon (1).png")}alt=' ' /><br></br><br></br><br></br>
                <h1 style={{ color: "white",fontSize:"24px" }} >24/7 support</h1>
                <p   style={{ color: "white"}} >You have any concerns or questions? Don’t worry, we have our support team to help you at anytime and anywhere.</p>

            </div>
            <div className='content_3' >
            <img   className='img_3' src={require("./../Components/Icon (2).png")} alt=''/><br></br><br></br><br></br>
                <h1 style={{ color: "white",fontSize:"24px" }} >Safe & Secure</h1>
                <p  style={{ color: "white"}} >We know that safety is the most important thing for our customer, so all of our payments are processed instantly and securely.</p>

            </div>
            </div>
        </div>
    )
}

export default Feature;