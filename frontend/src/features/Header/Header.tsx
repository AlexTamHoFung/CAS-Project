import "./Header.css";
import logo from './headlogo.png';


function Header (){
  return (
    <div className="Header__container">
      <div className="Header__left">
        <div>EN | 中</div>
        <div>常見問題</div>
      </div>

      <div className="Header__right">
        <img src={logo} alt='logo' />
      </div>
    </div>

  )
};



export default Header;