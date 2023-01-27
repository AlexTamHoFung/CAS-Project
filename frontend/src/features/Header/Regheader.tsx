import React from "react";
import logo from "./headlogo.png";

export default function Regheader() {
  return (
    <div>
      <div className="regheader">
        <div>Back</div>
        <div>Q</div>
      </div>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
