
import { QRCodeCanvas } from "qrcode.react";
import jwt_decode from "jwt-decode";
import "./DisplayQR.css"
import BottomNav from "../../../features/BottomNav/BottomNav";


interface JWTPayload {
  email: string;
  uuid: string;
}

export const DisplayQR = () => {
  const token = localStorage.getItem("token")!;
  let payload: JWTPayload = jwt_decode(token);

  return (
    <div className="qrcode-canvas">
      <div className="welcomemsgs">
        <h1>歡迎你!</h1>        
        <div>
          出示dolphin ID二維碼及賺取積分
        </div>
        <br/>
      </div>
      <QRCodeCanvas
        value={payload.uuid}
        size={400}
        bgColor={"#ffffff"}
        fgColor={"pink"}
        level={"H"}
        includeMargin={true}
        imageSettings={{
          src: "",
          x: undefined,
          y: undefined,
          height: 24,
          width: 24,
          excavate: true,
        }}
      />

      <h1>Your User ID</h1>
      <p>{payload.uuid}</p>
      <BottomNav />
    </div>
    
  );
};

