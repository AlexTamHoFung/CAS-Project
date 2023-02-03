import "./Header.css";
import logo from './headlogo.png';
import { useNavigate } from "react-router-dom";


function Header (){
  let navigate = useNavigate();
  return (
    <div className="Header__container">
      <div className="Header__left">
        <div>EN | 中</div>
        <div>常見問題</div>
      </div>

      <div className="Header__right">
        <img src={logo} alt='logo' />
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>

  )
};



export default Header;