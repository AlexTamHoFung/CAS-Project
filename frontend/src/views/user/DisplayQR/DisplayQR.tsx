
import { QRCodeCanvas } from "qrcode.react";
import jwt_decode from "jwt-decode";
import "./DisplayQR.css"
import BottomNav from "../../../features/BottomNav/BottomNav";
import UserHeader from "../../../components/userHeader/UserHeader";
import logo from "./logo.png"
import "./DisplayQR.css"
import { Box } from "@mui/material";
import { width } from "@mui/system";



interface JWTPayload {
  email: string;
  uuid: string;
}

export const DisplayQR = () => {
  const token = localStorage.getItem("token")!;
  let payload: JWTPayload = jwt_decode(token);

  return (
    <div className="qrcode-canvas">
      <UserHeader/>
      <br />
      <br />
      <br />
      <br />
      <div className="welcomemsgs" >
        <br />
        <br />
        <br />
        <h1>歡迎你!</h1>        
        <div>
          出示 DOLPHIN ID二維碼及賺取積分
        </div>
        <br/>
      </div >
      <Box >
      <QRCodeCanvas
        value={payload.uuid}
        size={225}
        bgColor={"pink"}
        fgColor={"darkred"}
        level={"H"}
        includeMargin={true}
        imageSettings={{

          src: `${logo}`,
          x: undefined,
          y: undefined,
          height: 50,
          width: 70,
          excavate: true,
        }}
      />
      </Box>

      <h1>你的專屬會員號碼</h1>
      <p>{payload.uuid}</p>
      <br />
      <br />
      <br />
      <br />
      <BottomNav />
    </div>
    
  );
};

