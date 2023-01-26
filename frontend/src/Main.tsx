import React from "react";
import "./Main.css";
import logo from './api/image/logo.png';


export default function Home() {
  return (
    <div>
      <div className="homeheader">
        <div>EN|中</div>
        <div>Q</div>
      </div>

      <div className="logo">
        <img src= {logo} alt='logo' />
      </div>
      
      <div className="homebutton">
        <button className="register-button">Register</button>
        <br />
        <button className="signup-button">Signup</button>
      </div>

      <div>
        <a href="" className="shop-entry">切換至商戶專用頁面</a>
      </div>
    </div>
  );
}
