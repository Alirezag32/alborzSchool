import "./profile.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import CustomNavbar from "./navbar";
import Footer from "./footer";
function Profile() {
const [name, setName] = useState(localStorage.getItem("username"));
  const [birthday, setBirthday] = useState("1386/7/12");
  const [nationalId, setNationalId] = useState("0250892316");
  const [phoneNumber, setPhoneNumber] = useState("09170809635");
  
  

  
          return (
            <>
              <CustomNavbar />
              <div className="profile-container">
                <h1 className="profile-heading">پروفایل</h1>
                <img
                  className="profile-image"
                  src="https://placekitten.com/200/200"
                  alt="Profile"
                />
                <div className="profile-info">
                  <strong className="info-label">اسم:</strong> {name}
                </div>
                <div className="profile-info">
                  <strong className="info-label">تاریخ تولد:</strong> {birthday}
                </div>
                <div className="profile-info">
                  <strong className="info-label"> کد ملی:</strong>{" "}
                  {nationalId}
                </div>
                <div className="profile-info">
                  <strong className="info-label">تلفن همراه :</strong>{" "}
                  {phoneNumber}
                </div>
              </div>
              <Footer />
            </>
          );
};



export default Profile