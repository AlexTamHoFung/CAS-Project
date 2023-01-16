import Header from "./components/Header/Header";
import "./App.css";
import LabelBottomNavigation from "./components/BottomNav";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/system";
import { Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            
          </Switch>
        </Container>
      </div>








      <LabelBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
