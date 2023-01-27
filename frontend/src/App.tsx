import Header from "./features/Header/Header";
import "./App.css";
import LabelBottomNavigation from "./features/BottomNav/BottomNav";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/system";
import { Login } from "./features/auth/Login";
// import { Switch } from "react-router-dom";

function App() {
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

export default App;
