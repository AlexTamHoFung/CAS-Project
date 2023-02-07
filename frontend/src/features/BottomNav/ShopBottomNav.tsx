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
import { useEffect, useState } from "react";


const pathConfig = [
  {
    key: "shophome",
    path: "/shop",
  },
  {
    key: "scan",
    path: "/shop/scan",
  },
  {
    key: "redeem",
    path: "/shop/shopredeem",
  },
];


export default function ShopBottomNav() {
  let navigate = useNavigate();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    const pathname = window.location.pathname;
    const targetKey = pathConfig.find(
      (config) => config.path === pathname
    )!.key;
    setValue(targetKey);
  }, []);


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(pathConfig.find((config) => config.key === newValue)!.path);
  };

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
        label="ShopHome"
        value="shophome"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        label="ShopScan"
        value="scan"
        icon={<QrCodeScannerIcon />}
      />
      <BottomNavigationAction
        label="Redeem"
        value="redeem"
        icon={<RedeemIcon />}
      />
    </BottomNavigation>
    </Paper>
  );
}
