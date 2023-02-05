import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
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
      if (isMounted) {
        setPoints(data.data.amount);
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
          <Box>你的積分 : {points}</Box>
          <Avatar alt="" src={logo} sx={{ width: 80, height: 56 }} variant="square"/>
          </Container>

        </Toolbar>
        <button onClick={()=>( localStorage.removeItem('token'))}>Logout</button>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
