import React from "react";
import "./UserForm.css";
import formimg from "../images/Happy-announcement-pana.png";
function UserForm() {
  return (
    <div className="mt-8 pt-4">
      <div className="flex flex-wrap justify-center align-center">
        <div className="mainForm flex justify-between">
          <div className="inputForm">
            <div className="formTitle">Get in Touch With Us To Connect</div>
            <div className="formSubTitle">Contact Us</div>
            <div className="formContent  mt-4">
              <div>
              <label htmlFor="">Full Name : </label>
              <input type="text" placeholder="e.g John Doe" />
              </div>
              <br />
              <div>
              <label htmlFor="">Email : </label>
              <input type="text" placeholder="e.g JohnDoe@gmail.com" />
              </div>
              <br />
              <div>
              <label style={{ marginTop: "18px" }} htmlFor="">
                Phone Number
              </label>
              <div class="input-container">
                <select id="country-code">
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (IN)</option>
                </select>
                <input
                  type="tel"
                  id="phone-number"
                  placeholder="Enter your phone number"
                />
              </div>
              </div>
              <br />
              <div>
              <label htmlFor="">Country : </label>
              <input type="text" placeholder="e.g banglore" />
              </div>
              <br />
              <div>
              <label htmlFor="">Stages : </label>
              <select style={{border:"1px black solid", borderRadius:"4px"}} id="country-code">
                  <option value="+1">I have booked but registration is not done</option>
                </select>
                <br />
                <br />
                <div className='submitBtn mt-2'>
                <button style={{width:"100px"}} type="submit">Submit</button>
                </div>
                </div>
            </div>
          </div>
          <img
            style={{ height: "400px", width: "400px" }}
            src={formimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default UserForm;
