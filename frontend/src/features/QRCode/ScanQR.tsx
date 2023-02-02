import React, { SetStateAction, useState } from "react";
import {OnResultFunction, QrReader} from "react-qr-reader";
import "./ScanQR.css"


const MyQrReader: React.FC<{
  // onScan: (data: string) => void;
  onError: (err: any) => void;
  onLoad?: (() => void);
  onImageLoad?: ((event: React.SyntheticEvent<HTMLImageElement>) => void);
  delay: number | false | undefined;
  facingMode?: 'user' | 'environment' ;
  legacyMode?: boolean ;
  resolution?: number ;
  showViewFinder?: boolean;
  style?: any;
  videoStyle?: any;
  className?: string;
  onResult?: OnResultFunction;
}> = QrReader as any

const ScanQR = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="scanner">
      <MyQrReader
        delay={300}
        onError={(error: { message: SetStateAction<null>; }) => {
          setError(error.message);
        }}
        onResult={(data) => {
          if (data) {
            setResult(data.getText());
            // setError(null);
            console.log(data.getText())
          }
        }}
        videoStyle={{ width: "60%", screenLeft: "20%" }}
        className={"scan-video"}
      />
      <p>ACC ID: {result}</p>
    </div>
  );
};

export default ScanQR;