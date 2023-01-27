
import "./Home.css";

import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/system";
import LabelBottomNavigation from "../../../features/BottomNav/BottomNav";
import Header from "../../../features/Header/Header";
// import { Login } from "./features/auth/Login";
// import { Switch } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Container>
          hi
          {/* <Login /> */}
        </Container>
      </div>



      <LabelBottomNavigation />
    </BrowserRouter>

  );
}
