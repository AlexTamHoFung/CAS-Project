import "./ScanQR.css";
import ShopBottomNav from "../BottomNav/ShopBottomNav";

import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ShopHeader from "../Header/ShopHeader";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ScanQR = () => {
  const [redeem, setRedeem] = useState("false");
  const [modalDisplay, setModalDisplay] = useState(false);

  useEffect(() => {
    setModalDisplay(redeem === "true");
  }, [redeem]);

  console.log(redeem);

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
      </Box>
      <ShopBottomNav />
      {modalDisplay && (
        <Modal
          open={modalDisplay}
          onClose={() => setModalDisplay(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

export default ScanQR;
