import React from 'react'
import "./Navbar.css"
import navLogo from "../images/Group-36901.svg"
function Navbar() {
  return (
    <div>
        <div className='navbarMainDiv'>
            <div className='flex justify-around'>
                <div className='p-2'>
                    <img height={50} width={50} src={navLogo} alt="" />
                </div>
                <div>
                    <div className='flex'>
                        <div style={{color:" #002550", borderBottom:"5px #002550 solid"}} className='navText'>Home</div>
                        <div  className='navText'>Our Offerings</div>
                        <div  className='navText'>Our Team</div>
                        <div className='navText'>Contact Us</div>
                        <div  className='navText'>Blogs</div>
                    </div>
                </div>
                <div>
                    <button className='registerBtn'>Register Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar