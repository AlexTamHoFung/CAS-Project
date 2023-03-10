import "./Main.css";
import logo from "./api/image/logo.png";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="homeheader">
        <div>EN|中</div>
        <div>Q</div>
      </div>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="homebutton">
        <button className="register-button">Register</button>
        <br />
        <button className="signup-button" onClick={() => navigate("/login")}>
          Sign in
        </button>
      </div>

      <div>
        <Link to={"/"} className="shop-entry">
          切換至商戶專用頁面
        </Link>
      </div>
    </div>
  );
}
