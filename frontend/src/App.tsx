import "./App.css";
import Header from "./features/Header/Header";
import LabelBottomNavigation from "./features/BottomNav/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import { Login } from "./features/auth/Login";
import PrivateRoute from "./features/auth/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<PrivateRoute/>}>
              
            </Route>
          </Routes>
          <Login />
        </Container>
      </div>
      <LabelBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

// 1. Routes
// 2. 404
// 3. Public and Private routes
// 4. Guard Component