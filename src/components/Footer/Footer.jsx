import React from "react";
import "./Footer.css";
import logo from "../images/logolight.svg";
import emailLogo from "../images/email.svg";
import phoneLogo from "../images/phone.svg";
import instagramImage from "../images/instagram.svg";
import facebookImage from "../images/facebook.svg";
import linkedinImage from "../images/linkedin.svg";
import twitterImage from "../images/twitter.svg";

function Footer() {
  return (
    <div className="footerMainDiv">
      <div className="flex flex-wrap justify-around">
        <div className="boxes">
          <img src={logo} height={80} width={80} alt="" />
        </div>
        <div className="boxes">
          <div className="headText">Company</div>
          <div className="subText pt-2">Home</div>
          <div className="subText">Our Offerings</div>
          <div className="subText">Our Team</div>
          <div className="subText">Contact Us</div>
        </div>
        <div className="boxes">
          <div className="headText">Useful Links</div>
          <div className="subText pt-2">Blogs</div>
          <div className="subText">FAQ's</div>
        </div>
        <div className="boxes">
          <div className="flex align-center">
            <div>
              <img
                className="mx-2 mt-4"
                height={30}
                width={30}
                src={emailLogo}
                alt=""
              />
            </div>
            <div>
              <div className="headText pt-2">Email:</div>
              <div className="subText">support@inreglobal.com</div>
            </div>
          </div>
          <div className="flex align-center">
            <div>
              <img
                className="mx-2 mt-4"
                height={30}
                width={30}
                src={phoneLogo}
                alt=""
              />
            </div>
            <div>
              <div className="headText pt-2">Phone:</div>
              <div className="subText">+91 | 7019305889</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <div className="copyRightText">
          Copyright 2023. Designed by INRE Global
        </div>
        <div className="flex justify-around">
          <div className="flex mx-4">
            <img height={12} width={12} src={linkedinImage} alt="" />
            <div className="footerTextsmall">Linkedin</div>
          </div>
          <div className="flex mx-4">
            <img height={12} width={12} src={facebookImage} alt="" />
            <div className="footerTextsmall">Facebook</div>
          </div>
          <div className="flex mx-4">
            <img height={12} width={12} src={twitterImage} alt="" />
            <div className="footerTextsmall">Twitter</div>
          </div>
          <div className="flex mx-4">
            <img height={12} width={12} src={instagramImage} alt="" />
            <div className="footerTextsmall">Instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
