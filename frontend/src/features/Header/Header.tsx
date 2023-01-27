import "./Header.css";
import logo from './headlogo.png';


function Header (){
  return (
    <div>
      <div className="homeheader">
        <div>EN|中</div>
        <div>Q</div>
      </div>

      <div className="logo">
        <img src= {logo} alt='logo' />
      </div>
    </div>

  )
};



export default Header;