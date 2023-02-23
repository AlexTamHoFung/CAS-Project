import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Login } from "./features/auth/Login";
import PrivateRoute from "./features/auth/PrivateRoute";

import Home from "./views/user/Home/Home";
import ScanQR from "./features/QRCode/ScanQR";
import Redeem from "./views/user/Redeem/Redeem";
import Record from "./views/user/Record/Record";

import Logout from "./features/auth/Logout";
import { DisplayQR } from "./views/user/DisplayQR/DisplayQR";
import PrivateShopRoute from "./views/shop/ShopAuth/PrivateShopRoute";
import ShopHome from "./views/shop/ShopHome/ShopHome";
import ShopRedeem from "./views/shop/ShopRedeem/ShopRedeem";
import ShopLogin from "./features/auth/ShopLogin";
import Register from "./features/Register/Register";
import ShopLogout from "./features/auth/ShopLogout";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<Home />} index />
          <Route path="record" element={<Record />} />
          <Route path="redeem" element={<Redeem />} />
          <Route path="displayQR" element={<DisplayQR />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route path="/shop" element={<PrivateShopRoute />}>
          <Route element={<ShopHome />} index />
          <Route path="scan" element={<ScanQR />} />
          <Route path="shopredeem" element={<ShopRedeem />} />
          <Route path="logout" element={<ShopLogout />} />
        </Route>

        <Route path="/admin" element={<PrivateRoute />}>
          <Route element={<Home />} index />
          <Route path="scan" element={<ScanQR />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="shop-login" element={<ShopLogin />} />
        <Route path="adminlogin" element={<></>} />
        <Route path="*" element={<>404 : Page Not Found</>} />
      </Routes>
    </div>
  );
}
