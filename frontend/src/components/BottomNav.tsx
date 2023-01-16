import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import RedeemIcon from "@mui/icons-material/Redeem";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: 500,
        botton: 0,
        positon: "fixed",
        // backgroundColor: "#2d313a",
        zIndex: 100,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Report"
        value="report"
        icon={<BarChartIcon />}
      />
      <BottomNavigationAction
        label="Scan"
        value="scan"
        icon={<QrCodeScannerIcon />}
      />
      <BottomNavigationAction
        label="Redeem"
        value="redeem"
        icon={<RedeemIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountBoxIcon />}
      />
    </BottomNavigation>
  );
}
