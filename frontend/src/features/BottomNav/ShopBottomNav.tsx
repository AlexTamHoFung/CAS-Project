import * as React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import RedeemIcon from "@mui/icons-material/Redeem";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Paper } from "@mui/material";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  let navigate = useNavigate();
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

    <BottomNavigation
      sx={{
        width: "auto",
        botton: 0,
        positon: "fixed",
        backgroundColor: "white",
        zIndex: 100,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        onClick={() => navigate("/shop")}
        label="ShopHome"
        value="shophome"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        onClick={() => navigate("/shop/scan")}
        label="ShopScan"
        value="shopscan"
        icon={<QrCodeScannerIcon />}
      />
      <BottomNavigationAction
        onClick={() => navigate("/shop/shopredeem")}
        label="Redeem"
        value="shopredeem"
        icon={<RedeemIcon />}
      />
    </BottomNavigation>
    </Paper>
  );
}
