import React from "react";
import "./Home.css";
import homeImage from "../images/homeimage-2.png";
import arrowImage from "../images/Group-3321.svg";

function Home() {
  return (
    <div className="mainDivision">

      <div
        style={{ backgroundColor: "#E6EAEE" }}
        className="flex flex-wrap justify-center"
      >
        <div className="box" style={{ height: "380px", width: "480px" }}>
          <img src={homeImage} alt="" />
        </div>
        <div className="box">
          <div className="boxHeading">Who We Are</div>
          <div className="boxText">
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </div>
          <div className="offerDetails flex justify-between">
            <button className="offerButton flex">
              <div className="offerBtnTitle">Contact Us</div>{" "}
              <img src={arrowImage} style={{ padding: "4px" }} alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
