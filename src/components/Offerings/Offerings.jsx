import React from "react";
import "./Offerings.css";
import offerImage1 from "../images/image-27.png";
import offerImage2 from "../images/image-28.png";
import offerImage3 from "../images/image-29.png";
import arrowImage from "../images/Group-3321.svg";
function Offerings() {
  return (
    <div className="mt-8">
      <div className="mainDiv text-center">
        <div className="heading text-center text-divider">Our Offerings</div>
        <div className="subHeading">
          This whole purchase journey can be divided into three stages. For more
          details,{" "}
          <span style={{ color: "#002550", fontWeight: "bold" }}>
            <a href="#"> Click Here </a>
          </span>{" "}
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="box1">
          <div style={{backgroundColor:"#F2F4F6"}} className="offerProcess flex justify-center items-center">
            <div className="offerNumber">1</div>
            <div className="offerName">Pre-Booking</div>
          </div>
          <div className="offerDescription mt-6">
            <img src={offerImage1} alt="" />
            <div className="offerDescriptionTitle">Background verification</div>
            <div className="offerDescriptionText">
              Assuring your capital is in safe hands, we provide detailed
              verification reports of the project and developer. These are
              customized and detailed...
            </div>
            <div className="offerDetails flex justify-between">
              <button className="offerButton flex"><div className="offerBtnTitle">Contact Us</div> <img src={arrowImage} style={{padding:"4px"}} alt="" /> </button>
              <div className="offerPrice">INR 3000/Project</div>
            </div>
          </div>
        </div>
        <div className="box1">
          <div style={{backgroundColor:"#CCD3DC",borderBottom:"5px solid #000000"}} className="offerProcess flex justify-center items-center">
            <div className="offerNumber">2</div>
            <div className="offerName">Post-Booking & Pre-Registration</div>
          </div>
          <div className="offerDescription mt-6">
            <img src={offerImage2} alt="" />
            <div className="offerDescriptionTitle">Virtual site visit</div>
            <div className="offerDescriptionText">
            It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...
            </div>
            <div className="offerDetails flex justify-between">
              <button className="offerButton flex"><div className="offerBtnTitle">Contact Us</div> <img src={arrowImage} style={{padding:"4px"}} alt="" /> </button>
            </div>
          </div>
        </div>
        <div className="box1">
          <div style={{backgroundColor:"#F2F4F6"}} className="offerProcess flex justify-center items-center">
            <div className="offerNumber">3</div>
            <div className="offerName">Post-Registration</div>
          </div>
          <div className="offerDescription mt-6">
            <img src={offerImage3} alt="" />
            <div className="offerDescriptionTitle">Title diligence</div>
            <div className="offerDescriptionText">
            Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...
            </div>
            <div className="offerDetails flex justify-between">
              <button className="offerButton flex"><div className="offerBtnTitle">Contact Us</div> <img src={arrowImage} style={{padding:"4px"}} alt="" /> </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
