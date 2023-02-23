import "./ScanQR.css";
import ShopBottomNav from "../BottomNav/ShopBottomNav";

import {
  Box,
  Button,
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
import { useEffect, useState } from "react";
import QRModal from "./QRModal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ShopHeader from "../../components/shopHeader/ShopHeader";

interface TransPT {
  amount: string;
  payment_method: string;
  collect_point: string;
  is_refund: false;
  uuid: string | null;
}

const { REACT_APP_API_BASE } = process.env;
const MySwal = withReactContent(Swal);

const ScanQR = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [result, setResult] = useState("");
  const [transInput, setTransInput] = useState<TransPT>({
    amount: "",
    payment_method: "",
    collect_point: "false",
    is_refund: false,
    uuid: "",
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const tranInput: TransPT =
    const shopToken = localStorage.getItem("shopToken")!;
    const isCollectPoint = transInput.collect_point === "true";
    const content = {
      ...transInput,
      collect_point: isCollectPoint,
      uuid: isCollectPoint ? result : undefined,
    };
    console.log(shopToken);
    const resp = await fetch(`${REACT_APP_API_BASE}/transactions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${shopToken}`,
      },
      body: JSON.stringify(content),
    });
    if (resp.status === 200) {
      MySwal.fire({
        title: <p>交易完成</p>,
      }).then(() => {
        window.location.reload();
      });
    } else {
      MySwal.fire({
        title: <p>交易失敗，請重新進行輸入</p>,
      }).then(() => {
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    setModalDisplay(transInput.collect_point === "true");
  }, [transInput.collect_point]);

  console.log(transInput.collect_point);

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
        onSubmit={submitHandler}
      >
        <FormControl style={{ marginTop: 15, marginBottom: 15 }} fullWidth>
          <TextField
            required
            id="outlined-required"
            label="結算金額"
            value={transInput.amount}
            onChange={(e) =>
              setTransInput((state) => ({
                ...state,
                amount: e.target.value,
              }))
            }
          />
          <FormHelperText id="my-helper-text">請輸入結算金額</FormHelperText>
        </FormControl>
        <FormControl style={{ marginTop: 15, marginBottom: 15 }} fullWidth>
          <InputLabel>支付方式</InputLabel>
          <Select
            label="Age"
            value={transInput.payment_method}
            onChange={(e) =>
              setTransInput((state) => ({
                ...state,
                payment_method: e.target.value,
              }))
            }
          >
            <MenuItem value="cash">現金</MenuItem>
            <MenuItem value="credit-card">信用卡</MenuItem>
            <MenuItem value="octopus">八達通</MenuItem>
          </Select>
          <FormHelperText id="my-helper-text">請揀選支付方式</FormHelperText>
        </FormControl>
        <div style={{ marginTop: 40 }}>
          <InputLabel>需要儲分</InputLabel>
        </div>
        <FormControl style={{ marginBottom: 15 }} fullWidth>
          <ToggleButtonGroup
            color="primary"
            value={transInput.collect_point}
            exclusive
            onChange={(e) =>
              setTransInput((state) => ({
                ...state,
                collect_point:
                  state.collect_point === "false" ? "true" : "false",
              }))
            }
            aria-label="Platform"
            sx={{ padding: "15px 0" }}
          >
            <ToggleButton value="true">需要儲分</ToggleButton>
            <ToggleButton value="false">不需要儲分</ToggleButton>
          </ToggleButtonGroup>
          <p>顧客專屬號碼 : </p>
          <p>{result}</p>
        </FormControl>

        <Button type="submit" variant="outlined">
          確認交易
        </Button>
        {modalDisplay && (
          <QRModal
            closeHandler={() => setModalDisplay(false)}
            setResult={(data) => {
              setResult(data);
              setModalDisplay(false);
            }}
          />
        )}
      </Box>

      <ShopBottomNav />
    </Container>
  );
};

export default ScanQR;
