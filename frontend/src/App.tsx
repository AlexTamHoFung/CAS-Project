import "./App.css";
import Header from "./features/Header/Header";
import LabelBottomNavigation from "./features/BottomNav/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import { Login } from "./features/auth/Login";
import PrivateRoute from "./features/auth/PrivateRoute";
import Home from "./views/user/Home/Home";
import Profile from "./views/user/Profile/Profile";
import ScanQR from "./features/QRCode/ScanQR";
import Redeem from "./views/user/Redeem/Redeem";
import Record from "./views/user/Record/Record";


function App() {
  return (
   
    <div className="App">
        <Header />
        
          <Routes>
            <Route path="/" element={<PrivateRoute/>}>
              
              <Route element={<Home />} index />
              <Route path="profile" element={<Profile />} />
              <Route path="recoed" element={<Record />} />
              <Route path="redeem" element={<Redeem />} />
              <Route path="scan" element={<ScanQR />} />
              {/* <LabelBottomNavigation /> */}
            </Route>
          <Route path="login" element={<Login />} />
          </Routes>
      
      </div>
   
  );
}

export default App;

// 1. Routes
// 2. 404
// 3. Public and Private routes
// 4. Guard Component