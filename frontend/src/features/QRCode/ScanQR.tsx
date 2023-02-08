import "./ScanQR.css";
import ShopBottomNav from "../BottomNav/ShopBottomNav";
import { useEffect, useState } from "react";
import QRModal from "./QRModal";


import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ShopHeader from "../../components/shopHeader/ShopHeader";


const { REACT_APP_API_BASE } = process.env;

const ScanQR = () => {
  const [redeem, setRedeem] = useState("false");
  const [modalDisplay, setModalDisplay] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    setModalDisplay(redeem === "true");
  }, [redeem]);

  console.log(redeem);
  console.log(result);

  return (
    <Container fixed>
      <ShopHeader />
      <Box
        component="form"
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <FormControl style={{ marginTop: 15, marginBottom: 15 }} fullWidth>
          <TextField required id="outlined-required" label="結算金額" />
          <FormHelperText id="my-helper-text">請輸入結算金額</FormHelperText>
        </FormControl>
        <FormControl style={{ marginTop: 15, marginBottom: 15 }} fullWidth>
          <InputLabel>支付方式</InputLabel>
          <Select
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value="cash">現金</MenuItem>
            <MenuItem value="credit-card">信用卡</MenuItem>
            <MenuItem value="octopus">八達通</MenuItem>
          </Select>
          <FormHelperText id="my-helper-text">請輸入支付方式</FormHelperText>
        </FormControl>
        <div style={{ marginTop: 40 }}>
          <InputLabel>需要儲分</InputLabel>
        </div>
        <FormControl style={{ marginBottom: 15 }} fullWidth>
          <ToggleButtonGroup
            color="primary"
            value={redeem}
            exclusive
            onChange={(_e, value) => setRedeem(value)}
            aria-label="Platform"
            sx={{ padding: "15px 0" }}
          >
            <ToggleButton value="true">需要儲分</ToggleButton>
            <ToggleButton value="false">不需要儲分</ToggleButton>
          </ToggleButtonGroup>
        </FormControl>

        <p>display: {result}</p>
      </Box>
      
      <ShopBottomNav />
      {modalDisplay && (
        <QRModal
          closeHandler={() => setModalDisplay(false)}
          setResult={(data) => {
            setResult(data);
            setModalDisplay(false);
          }}
        />
      )}
    </Container>
  );
};

export default ScanQR;
