import React from 'react'
import './Tutorial.css';

function Tutorial() {
    return (
        <div className='tutorial_div' >
           <img   className='wireframe' src={require("./../Components/Wireframes.png")} alt=''/>

                <div className='tutorial-div-2' >
                <h6  style={{fontfamily: "SF Pro Display",fontWeight:"bold",fontSize:"40px"}} >Wakanda is an easy <br></br>platform to find talent</h6>
                <ol className='order-list' >
                    <li>Sign in to our website</li><br></br>
                    <li>Fill out neccesary information</li><br></br>
                    <li>Discover thoudsands of freelancers</li><br></br>
                    <li>View freelancers profile and hire</li><br></br>
                    <li>Complete payment & it’s time to work!</li>
                </ol>
                </div>
           
        </div>
    )
}

export default Tutorial;