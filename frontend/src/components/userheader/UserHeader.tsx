import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import "./UserHeader.css"
import Logout from "../../features/auth/Logout";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// interface Point {
//   customer_id: number;
//   amount: number;
// }

interface AuthData {
  uuid: string,
  email: string
}

const { REACT_APP_API_BASE } = process.env;

function ResponsiveAppBar() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let jwttoken = localStorage.getItem("token");
    let authData: AuthData = jwtDecode(jwttoken!);
    const fetchData = async () => {
      const resp = await fetch(`${REACT_APP_API_BASE}/points/totalpoints`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid: authData.uuid }),
      });
      const data = await resp.json();
      console.log(data)
      if (isMounted) {
        setPoints(+data.data.amount);
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);



  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Container className="Userheader__toolbar">

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >

          </Typography>

          <Avatar alt="" src={logo} sx={{ width: 80, height: 56 }} variant="square"/>

          <Box>你的DOL分 : {points}</Box>
          </Container>

        <Logout />
        </Toolbar>

      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
