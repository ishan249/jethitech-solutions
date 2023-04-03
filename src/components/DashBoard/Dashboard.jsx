import React from 'react'
import "./Dashboard.css";
import mainHomeImg from "../images/homeimage.jpg";
function Dashboard() {
  return (
    <div style={{borderRadius:"12px"}}  className='m-2'>
        <div style={{borderRadius:"12px"}} className='flex justify-center'>
            <div className='boxpage flex justify-center' style={{backgroundColor:"#002550", color:"#fff",paddingTop:"40px", borderTopLeftRadius:"12px", borderBottomLeftRadius:"12px"}}> <div className='textbox'> Making your <span style={{color:"#FAFF00"}}> Real estate </span>purchase journey faster and transparent</div></div>
            <div className='boxpage'>
            <img style={{borderTopRightRadius:"12px", borderBottomRightRadius:"12px"}} src={mainHomeImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Dashboard