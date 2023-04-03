import React from "react";
import "../Members/Members.css";
import "../Offerings/Offerings.css";
import "./Blogs.css";
import blogImage1 from "../images/Blog-1.png";
import blogImage2 from "../images/Blog-2.png";
import blogImage3 from "../images/Blog-3.png";
import arrowImage from "../images/Group-3321.svg"
function Blogs() {
  const blogInfo = [
    {
      blogimage: blogImage1,
      tag: "Real Estate, Analysis",
      date: "09 jun 2022",
      author: "By Admin",
      title: "Guide for personal property Buying",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
    },
    {
      blogimage: blogImage2,
      tag: "Real Estate, Analysis",
      date: "09 jun 2022",
      author: "By Admin",
      title: "Guide for personal property Buying",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
    },
    {
      blogimage: blogImage3,
      tag: "Real Estate, Analysis",
      date: "09 jun 2022",
      author: "By Admin",
      title: "Guide for personal property Buying",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
    },
  ];
  return (
    <div  style={{backgroundColor:"#F2F4F6", paddingTop:"14px"}} className="mt-8">
      <div className="mainPart text-center">
        <div className="heading text-center text-divider">Blogs</div>
        <div className="flex flex-wrap justify-center">
          {blogInfo.map((blog, i) => (
            <div className="infoBox">
              <img src={blog.blogimage} alt="" />
              <div
                style={{
                  textAlign: "left",
                  fontSize: "12px",
                  paddingTop:"14px"
                }}
                className="simpleTag"
              >
                {blog.tag}
              </div>
              <div className="offerDetails flex justify-between">
                <div className="blogDate">{blog.date}</div>
                <div className="blogDate">{blog.author}</div>
              </div>
              <div className="blogTitle">{blog.title}</div>
              <div className="blogDescription">{blog.description}</div>
              <button className="ViewButton flex"><div className="offerBtnTitle">View More</div> <img src={arrowImage} style={{padding:"4px"}} alt="" /> </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
