import React from "react";
import Regheader from "../../../features/Header/Regheader";
import "./Regqrcode.css";

export default function Regqrcode() {
  return (
    <div>
      <Regheader />

      <div className="welcomemsgs">
        <h1>歡迎你!</h1>        
        <div>
          出示dolphin ID二維碼及賺取積分
        </div>
      </div>

      <br />

      <div className="qrcode">
        QR CODE 
      </div>

      <div>
        <input type="submit" value="下一步" className="next" />
      </div>
    </div>
  );
}
