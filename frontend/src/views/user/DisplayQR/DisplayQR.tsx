
import QRCode, { QRCodeCanvas } from "qrcode.react";
import jwt_decode from "jwt-decode";

interface JWTPayload {
  email: string;
  uuid: string;
}

export const DisplayQR = () => {
  const token = localStorage.getItem("token")!;
  let payload: JWTPayload = jwt_decode(token);

  return (
    <QRCodeCanvas
      value={payload.uuid}
      size={128}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
      imageSettings={{
        src: "hi",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};

