import React from 'react'
import logo from './headlogo.png';
import { useNavigate } from "react-router-dom";

export default function ShopHeader() {
  let navigate = useNavigate();
  return (
    <div className="ShopHeader__container">
      <div className="ShopHeader__left">
        <div>EN | 中</div>
        <div>常見問題</div>
      </div>

      <div className="ShopHeader__right">
        <img src={logo} alt='logo' />
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  )
}
