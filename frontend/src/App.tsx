// import "./App.css";
// import Header from "./features/Header/Header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Login } from "./features/auth/Login";
// import PrivateRoute from "./features/auth/PrivateRoute";

// import Home from "./views/user/Home/Home";
// import Profile from "./views/user/Profile/Profile";
// import ScanQR from "./features/QRCode/ScanQR";
// import Redeem from "./views/user/Redeem/Redeem";
// import Record from "./views/user/Record/Record";

// import { DisplayQR } from "./views/user/DisplayQR/DisplayQR";

// function App() {
//   return (

//     <div className="App">
//         <Header />

//           <Routes>
//             <Route path="/" element={<PrivateRoute/>}>

//               <Route element={<Home />} index />
//               <Route path="profile" element={<Profile />} />
//               <Route path="record" element={<Record />} />
//               <Route path="redeem" element={<Redeem />} />
//               <Route path="scan" element={<ScanQR />} />
//               <Route path="displayQR" element={<DisplayQR />} />
//             </Route>
//           <Route path="login" element={<Login />} />
//           <Route path="*" element={<>404 : Page Not Found</>} />
//           </Routes>

//       </div>

//   );
// }

// export default App;

// 1. Routes
// 2. 404
// 3. Public and Private routes
// 4. Guard Component

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// User Routes: //
import UserHome from "./pages/home/UserHome";
import UserLogin from "./pages/login/UserLogin";
import UserReg from "./pages/register/UserReg";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome/>} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/register" element={<UserReg/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}
