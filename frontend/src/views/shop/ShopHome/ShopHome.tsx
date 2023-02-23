import "./ShopHome.css";
import ShopHeader from "../../../components/shopHeader/ShopHeader";
import ShopBottomNav from "../../../features/BottomNav/ShopBottomNav";

export default function ShopHome() {
  return (
    <div className="ShopHome__mid">
      <div className="ShopHome__container">
        <ShopHeader />
        <div className="ShopHome__content">
          <div className="ShopHome-out">
            <img
              src={require("./001.jpg")}
              alt="welcome-page-logo"
              style={{ backgroundColor: "white", width: "80%" }}
            />
          </div>
          <h1 style={{ color: "orange" }}>Welcome to Start!</h1>
        </div>
        <ShopBottomNav />
      </div>
    </div>
  );
}
