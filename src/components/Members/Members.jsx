import React from "react";
import "./Members.css";
import memberImage1 from "../images/member-1.png"
import memberImage2 from "../images/member-2.png"
import memberImage3 from "../images/member-3.png"

function Members() {
    const memberInfo = [{memberImage:memberImage1, memberName:"Brajesh Pathak", memberDescription:"A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been..."},{memberImage:memberImage2, memberName:"Deepak Shukla", memberDescription:"Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications."},{memberImage:memberImage3, memberName:"Alok Kumar Singh", memberDescription:"Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management."}]
  return (
    <div className="mt-8">
      <div className="mainDiv text-center">
        <div className="memberHeading text-center text-divider">Our Team Members</div>
        <div className="flex flex-wrap justify-center">
            {memberInfo.map((member,i)=>(
                <div className="infoBox">
                    <img src={member.memberImage} alt="" />
                    <div className="memberName">{member.memberName}</div>
                    <div className="memberDescription">{member.memberDescription.substring(0, 200) + "....."}</div>
                    <div style={{textAlign:"right", fontSize:"12px"}} className="simpleTag"><a href="#">View More</a></div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
